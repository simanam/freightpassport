const steps = [
  {
    n: '1',
    title: 'Connect your inbox',
    body:
      'Sign in with Outlook or Gmail. Read-only access. We never send or modify email. Disconnect anytime in one click.',
  },
  {
    n: '2',
    title: 'Your loads organize themselves',
    body:
      'We quietly scan the last 90 days. Rate cons, BOLs, PODs, and invoices get pulled out and attached to the right load. Nothing leaves your account.',
  },
  {
    n: '3',
    title: 'Ask anything, get answers in seconds',
    body:
      '“Show me loads missing PODs.” “What happened with load 48291?” Every answer cites the email or document it came from.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">How it works</span>
          <h2
            id="how-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Three steps. No new software for anyone else on your loads.
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <li key={step.n} className="card p-6 md:p-7 relative">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white font-bold text-sm">
                {step.n}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
