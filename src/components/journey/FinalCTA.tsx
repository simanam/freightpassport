import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-36 border-t border-border bg-bg-tint overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* soft blue wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgba(11,95,255,0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="chip-ink">Pilot program</span>

        <h2
          id="cta-heading"
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.04]"
        >
          Bring us the lane
          <br />
          <span className="text-accent">you trust the least.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:hello@freightpassport.io?subject=Pilot%20request"
            className="btn btn-primary"
          >
            Request a pilot
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="mailto:hello@freightpassport.io?subject=Demo%20request"
            className="btn btn-secondary"
          >
            See the demo
          </Link>
        </div>

        <p className="mt-6 text-xs text-ink-subtle font-mono">
          No self-serve signup · hand-onboarded by an engineer
        </p>
      </div>
    </section>
  );
}
