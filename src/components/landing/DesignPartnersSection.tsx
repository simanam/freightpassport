export default function DesignPartnersSection() {
  return (
    <section
      id="partners"
      className="relative py-24 md:py-32"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <span className="eyebrow">Design partners</span>
        <h2
          id="partners-heading"
          className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
        >
          Shaped with a top-10 US brokerage and a mid-size carrier — before we
          wrote a line of code.
        </h2>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
          We are onboarding a small number of additional design partners now.
          Design partners get the product free, shape the roadmap, and keep
          that pricing after GA.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <PartnerCard
            role="Broker partner"
            detail="Top-10 US freight brokerage · Outlook shop"
          />
          <PartnerCard
            role="Carrier partner"
            detail="Mid-size fleet, 10–20 drivers · Gmail shop"
          />
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ role, detail }: { role: string; detail: string }) {
  return (
    <div className="card p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent-wash border border-border text-accent-strong text-xs font-bold">
          ✓
        </span>
        <div>
          <div className="text-sm font-bold text-ink">{role}</div>
          <div className="text-[13px] text-ink-muted">{detail}</div>
        </div>
      </div>
      <p className="mt-4 text-[13px] text-ink-subtle font-mono">
        Named partners disclosed with consent.
      </p>
    </div>
  );
}
