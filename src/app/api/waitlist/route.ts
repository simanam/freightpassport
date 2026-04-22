import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const { email, source, notes, website } = (body ?? {}) as {
    email?: unknown;
    source?: unknown;
    notes?: unknown;
    website?: unknown;
  };

  // Honeypot — bots fill hidden field; pretend success so they don't retry.
  if (typeof website === 'string' && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const token = process.env.NOTION_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    console.error('Notion env vars missing');
    return NextResponse.json(
      { error: 'Server is not configured yet. Please try again later.' },
      { status: 500 },
    );
  }

  const notion = new Client({ auth: token });

  const cleanEmail = email.trim().toLowerCase();
  const noteText = [
    typeof source === 'string' && source.trim() ? `via: ${source.trim()}` : null,
    typeof notes === 'string' && notes.trim() ? notes.trim() : null,
  ]
    .filter(Boolean)
    .join(' · ');

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          title: [{ type: 'text', text: { content: cleanEmail } }],
        },
        'Signed Up': {
          date: { start: new Date().toISOString() },
        },
        Source: {
          select: { name: 'Website form' },
        },
        ...(noteText
          ? {
              Notes: {
                rich_text: [{ type: 'text', text: { content: noteText } }],
              },
            }
          : {}),
      },
    });
  } catch (err) {
    console.error('notion insert failed', err);
    return NextResponse.json(
      {
        error:
          "We couldn't save your spot right now. Try again in a minute, or email aman@logixtecs.com.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
