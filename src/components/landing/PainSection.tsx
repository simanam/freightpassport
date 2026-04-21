const pains = [
  {
    title: 'The 20-minute POD search',
    body:
      'Searching Outlook for last month’s POD. Scrolling threads, checking attachments, hoping nothing was forwarded to a personal address.',
  },
  {
    title: 'Reconstructing a disputed load',
    body:
      'A chargeback hits six weeks later. Now you’re piecing together the rate con, the emails, the driver’s text, the POD — from memory and inbox archaeology.',
  },
  {
    title: 'Loads stuck in stages you forgot about',
    body:
      'Half your book is somewhere between delivered and invoiced. You only notice when the broker stops paying or the shipper calls about a claim.',
  },
];

export default function PainSection() {
  return (
    <section
      id="problem"
      className="relative py-24 md:py-32"
      aria-labelledby="pain-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">The problem</span>
          <h2
            id="pain-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Freight runs on email.
            <br />
            <span className="text-ink-muted font-bold">Nobody built a system for that.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Rate cons, BOLs, PODs, invoices — all of it moves through Outlook and Gmail.
            Every party keeps their own copy. When something goes wrong, everyone digs
            through inboxes and argues.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <div key={p.title} className="card p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-accent-strong tracking-widest">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
