import WaitlistForm from './WaitlistForm';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-28 md:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-6 text-center">
        <span className="chip">Early access</span>
        <h2
          id="cta-heading"
          className="mt-5 text-[34px] sm:text-4xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.06] sm:leading-[1.04]"
        >
          Connect your inbox.
          <br className="hidden md:block" />{' '}
          <span className="text-accent">Watch your loads organize themselves.</span>
        </h2>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-ink-muted leading-relaxed">
          Drop your work email. We&rsquo;re onboarding design partners weekly —
          free through V1, with pricing locked after GA.
        </p>

        <div className="mt-8 sm:mt-10 mx-auto max-w-md text-left">
          <WaitlistForm source="final-cta" size="lg" />
        </div>

        <div className="mt-5 text-xs text-ink-muted">
          Prefer a call?{' '}
          <a
            href="mailto:aman@logixtecs.com?subject=Early%20access%20%E2%80%94%20design%20partner"
            className="font-semibold text-accent-strong hover:underline"
          >
            Talk to the founder →
          </a>
        </div>
      </div>
    </section>
  );
}
