const promises = [
  {
    title: 'Read-only inbox access',
    body: 'We can read email headers, subjects, bodies, and attachments. We cannot send, reply, modify, or delete anything.',
  },
  {
    title: 'Never sent, shared, or sold',
    body: 'Your data is yours. We never share one customer’s data with another customer, and we do not sell data to third parties.',
  },
  {
    title: 'Non-load email stays invisible',
    body: 'Newsletters, personal email, and internal chatter get filtered out before they ever reach a storage layer.',
  },
  {
    title: 'One-click disconnect and delete',
    body: 'Revoke access anytime. Your extracted loads, documents, and raw data are purged — immediately, not in 30 days.',
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
        <div className="max-w-3xl">
          <span className="eyebrow">Privacy built in</span>
          <h2
            id="privacy-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Connecting your inbox should not feel like a leap of faith.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            The fastest way to lose a freight customer is to make them nervous
            about data. So the privacy model is the first thing we built, not
            the last.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {promises.map((p) => (
            <div key={p.title} className="card p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-ink text-sm font-bold">
                  ✓
                </span>
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
              </div>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-subtle">
          Encrypted at rest and in transit. SOC 2 Type II in progress.
        </p>
      </div>
    </section>
  );
}
