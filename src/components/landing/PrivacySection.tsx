const promises = [
  {
    title: 'Read-only inbox access',
    body: 'We can read headers, subjects, bodies, and attachments. We cannot send, reply, modify, or delete anything — the OAuth scopes don’t allow it.',
  },
  {
    title: 'Never sent, shared, or sold',
    body: 'Your data is siloed to your account. We never share one customer’s data with another. We do not sell data. We do not train models on your email.',
  },
  {
    title: 'Non-load email stays invisible',
    body: 'Newsletters, personal mail, and internal chatter are filtered out before storage. You can also exclude specific folders, labels, or threads.',
  },
  {
    title: 'Nothing goes out without you clicking send',
    body: 'Claude drafts chase messages. You copy, paste into your own Outlook or Gmail, review, and send. V1 never transmits outbound email on your behalf.',
  },
  {
    title: 'One-click disconnect and delete',
    body: 'Revoke access any time. Your extracted loads, documents, raw artifacts, and OAuth tokens are purged — 24h from primary, 30 days from backups.',
  },
  {
    title: 'Encrypted end-to-end, audited',
    body: 'Encrypted at rest (AES-256) and in transit (TLS 1.2+). OAuth tokens in a dedicated secret store. SOC 2 Type II audit in progress.',
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="privacy-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div>
            <span className="eyebrow">Privacy &amp; security</span>
            <h2
              id="privacy-heading"
              className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
            >
              Your inbox is load-bearing infrastructure.
              <br />
              <span className="text-ink-muted font-bold">We treat it that way.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              The fastest way to lose a freight customer is to make them nervous
              about data. Privacy was the first thing we built — not the last.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5 text-[11px] font-mono">
              <Pill>OAuth read-only</Pill>
              <Pill>AES-256 at rest</Pill>
              <Pill>TLS 1.2+ in transit</Pill>
              <Pill>SOC 2 in progress</Pill>
              <Pill>No model training</Pill>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3.5">
            {promises.map((p) => (
              <div key={p.title} className="tile p-5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent text-accent-ink">
                    <CheckIcon />
                  </span>
                  <h3 className="text-[14px] font-bold text-ink leading-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-border text-ink-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-success" />
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
