import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="chip">Early access</span>
        <h2
          id="cta-heading"
          className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.04]"
        >
          Connect your inbox.
          <br />
          <span className="text-accent">Watch your loads organize themselves.</span>
        </h2>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed">
          A short call to see if you’re a fit as a design partner — or a quick
          waitlist if the timing isn’t right yet.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="mailto:hello@freightpassport.io?subject=Early%20access%20%E2%80%94%20design%20partner"
            className="btn btn-primary"
          >
            Talk to the founder
          </Link>
          <Link
            href="mailto:hello@freightpassport.io?subject=Waitlist"
            className="btn btn-secondary"
          >
            Join the waitlist
          </Link>
        </div>

        <p className="mt-8 text-xs font-mono text-ink-subtle uppercase tracking-widest">
          Read-only · One-click disconnect · Never shared
        </p>
      </div>
    </section>
  );
}
