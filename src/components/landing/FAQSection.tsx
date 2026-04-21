'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Will this work with my TMS?',
    a: 'Yes. We live alongside McLeod, Aljex, MercuryGate, and the rest. We ingest the emails that flow in and out of your TMS — we do not replace it.',
  },
  {
    q: 'Is my data shared with other brokers, carriers, or shippers?',
    a: 'No. Each account is siloed. There is no cross-party visibility in the product today. Your rate cons, PODs, and invoices are yours alone.',
  },
  {
    q: 'What if I want to stop?',
    a: 'One click disconnects your inbox and deletes every extracted load, document, and raw artifact. No 30-day grace period, no archival tier — gone.',
  },
  {
    q: 'How much does it cost?',
    a: 'Design partner pricing is a conversation, not a page. Early partners get the product free through V1 and lock in that pricing after GA.',
  },
  {
    q: 'Which email providers do you support?',
    a: 'Microsoft Outlook (via Microsoft Graph) and Gmail (via the Gmail API). Both use official read-only scopes with real-time sync.',
  },
  {
    q: 'Is my data secure?',
    a: 'Encrypted at rest and in transit. OAuth tokens stored in a dedicated secret store. SOC 2 Type II is in progress.',
  },
  {
    q: 'Do my drivers, carriers, or shippers need to sign up too?',
    a: 'No. You connect your inbox, and everyone you already email with stays in email. Nobody else installs anything.',
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
