export default function CredibilitySection() {
  return (
    <section
      id="who"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="who-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <span className="eyebrow">Built by freight, for freight</span>
        <h2
          id="who-heading"
          className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
        >
          I grew up in trucking. I drove trucks through college. Then I spent a
          decade building software for Fortune 100s.
        </h2>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed">
          My dad owns a carrier. I’ve watched dispatchers chase PODs, I’ve
          watched brokers reconstruct loads from memory, and I’ve watched
          drivers send BOLs through six different inboxes before payment lands.
          At USPS I led an AI platform used by 30,000+ people. This product is
          what happens when you point that stack at the work my family still
          does every day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2.5 text-[12px] font-mono">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
            Carrier family
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
            CDL-A in college
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
            USPS AI platform (30k+ users)
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
            Design partners on day zero
          </span>
        </div>
      </div>
    </section>
  );
}
