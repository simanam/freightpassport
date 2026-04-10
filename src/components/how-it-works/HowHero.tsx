import Link from 'next/link';

const stats = [
  { value: '34', label: 'Fraud rules' },
  { value: '5', label: 'Sealed moments' },
  { value: 'Ed25519', label: 'Cryptographic signing' },
  { value: '< 1 sec', label: 'Fraud detection' },
  { value: '3-signal', label: 'Pickup verification' },
  { value: '128-dim', label: 'Signature fingerprint' },
  { value: '6 hr', label: 'External hash anchor' },
];

export default function HowHero() {
  return (
    <section
      id="how-hero"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28"
      aria-labelledby="how-hero-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 grid-dots pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-[12px] font-mono text-ink-muted animate-fade-up"
        >
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <Slash />
            </li>
            <li className="text-ink font-semibold">How It Works</li>
          </ol>
        </nav>

        {/* Eyebrow + Headline */}
        <span className="eyebrow animate-fade-up">How FreightPassport works</span>

        <h1
          id="how-hero-heading"
          className="mt-6 text-5xl md:text-6xl lg:text-[66px] font-extrabold tracking-tight leading-[1.05] text-ink animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          From load creation to{' '}
          <span className="text-accent">cryptographic&nbsp;proof.</span>
        </h1>

        <p
          className="mt-7 text-lg md:text-xl text-ink-muted max-w-3xl leading-snug animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          Every step verified. Every handoff signed. Every edge case handled. This is
          the complete technical walkthrough of how FreightPassport protects freight
          &mdash; from the moment a broker creates a load to the moment an insurance
          adjuster verifies a&nbsp;POD.
        </p>

        {/* Stats strip */}
        <div
          className="mt-14 -mx-6 px-6 md:mx-0 md:px-0 animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 md:grid md:grid-cols-7 md:overflow-visible scrollbar-hide">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card p-6 flex-shrink-0 min-w-[140px] md:min-w-0 flex flex-col items-center text-center gap-1.5"
              >
                <span className="text-2xl font-extrabold text-accent">{s.value}</span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slash() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-ink-subtle"
      aria-hidden="true"
    >
      <path d="M15 4l-6 16" strokeLinecap="round" />
    </svg>
  );
}
