'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Will this work with my TMS?',
    a: 'Yes. We live alongside McLeod, Aljex, MercuryGate, and the rest. We ingest the emails that flow in and out of your TMS — we do not replace it.',
  },
  {
    q: 'Does it send email on my behalf?',
    a: 'No. V1 is strictly read-only. When an alert fires, Claude drafts a chase message and you copy-paste it into your own Outlook or Gmail. Nothing outbound is ever sent from our servers.',
  },
  {
    q: 'Is my data shared with other brokers, carriers, or shippers?',
    a: 'No. Each account is siloed. There is no cross-party visibility in V1 — broker data and dispatcher data live in separate buckets and never leak across accounts.',
  },
  {
    q: 'Do you train AI models on my email?',
    a: 'No. Your data is never used to train our models, and it is never used to train any third-party model. Extraction happens per-request against your own inbox only.',
  },
  {
    q: 'What if I want to stop?',
    a: 'One click disconnects your inbox and deletes every extracted load, document, raw artifact, and OAuth token. 24 hours from primary, 30 days from backups. No archival tier.',
  },
  {
    q: 'Can I exclude specific labels, folders, or threads?',
    a: 'Yes. If a label, folder, or thread should never be processed (personal email, margin discussions, legal), you mark it and we skip it for good.',
  },
  {
    q: 'Can I edit extracted fields or add a load manually?',
    a: 'Yes. Every extracted field is editable, and you can drag any PDF/image onto a load to run it through the same pipeline. You can also create a load from scratch at any time. Edits are timestamped in the audit trail.',
  },
  {
    q: 'What happens when Claude gets something wrong?',
    a: 'Low-confidence classifications land in a review queue rather than silently attaching to the wrong load. Every extracted value shows its confidence and can be corrected. The audit trail records the correction.',
  },
  {
    q: 'How do notifications work if there’s no SMS or push?',
    a: 'All alerts are in-app only in V1. Five built-in rules watch for missing PODs, overdue payments, unknown pickup status, missing BOLs, and escalated POD chases. External notifications (SMS/push/email) are deliberately out of V1.',
  },
  {
    q: 'My drivers send PODs on WhatsApp / iMessage — can you capture those?',
    a: 'Yes, without touching either platform. Click "Request document" on a load, we generate a one-tap upload link (like freightpassport.app/u/k7x9m2q4), and you send that link through whatever channel you already use — WhatsApp, iMessage, SMS, email, even a phone screenshot. The driver taps, uploads a photo, and the document lands structured in the right load.',
  },
  {
    q: 'Does the driver or carrier need to sign up to upload via a magic link?',
    a: 'No. It\'s a zero-auth upload page. They enter their phone number (for the record), snap or upload the file, and hit send. The forensic metadata — phone, IP, geolocation, device fingerprint, file hash, virus scan — is captured on every upload so you have a legally meaningful record when disputes come up months later.',
  },
  {
    q: 'What stops someone from abusing a magic upload link?',
    a: 'Each link expires in 7 days, allows at most 3 uploads, accepts only PDFs and common image formats up to 25 MB, and runs virus scanning before anything touches your load. You can revoke any link with one click — even mid-upload. And the link is scoped to one load and one document type; whoever has it cannot see the rest of your data.',
  },
  {
    q: 'How much does it cost?',
    a: 'Design partner pricing is a conversation, not a page. Early partners get the product free through V1 and lock in that pricing after GA.',
  },
  {
    q: 'Which email providers do you support?',
    a: 'Microsoft Outlook / Microsoft 365 (via Microsoft Graph) and Gmail / Google Workspace (via the Gmail API). Both use official read-only scopes with real-time sync.',
  },
  {
    q: 'Is my data encrypted?',
    a: 'AES-256 at rest, TLS 1.2+ in transit. OAuth tokens sit in a dedicated secret store, never in the application database. SOC 2 Type II audit is in progress.',
  },
  {
    q: 'Do my drivers, carriers, or shippers need to sign up too?',
    a: 'No. You connect your inbox; everyone you already email with stays in email. Nobody else installs anything.',
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow">FAQ</span>
        <h2
          id="faq-heading"
          className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
        >
          The questions people actually ask.
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span className="text-base md:text-[17px] font-semibold text-ink">
          {q}
        </span>
        <span
          className={[
            'inline-flex h-7 w-7 items-center justify-center rounded-full border border-border transition-transform duration-200 text-ink-muted',
            open ? 'rotate-45' : '',
          ].join(' ')}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 -mt-1">
          <p className="text-[15px] text-ink-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
