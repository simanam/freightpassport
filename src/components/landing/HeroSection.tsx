import Link from 'next/link';
import InboxToLoads from './InboxToLoads';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 grid-dots pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
          <div>
            <span className="chip animate-fade-up">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring"
                aria-hidden="true"
              />
              Early access — brokers &amp; dispatchers
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.04] text-ink animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Every broker email,
              <br />
              every load document —{' '}
              <span className="text-accent">organized automatically.</span>
            </h1>

            <p
              className="mt-7 text-lg md:text-xl text-ink-muted max-w-xl leading-snug animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Connect your inbox. Your loads organize themselves. Find any POD,
              rate con, or dispute detail in seconds.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <Link href="#cta" className="btn btn-primary">
                Get early access
                <Arrow />
              </Link>
              <Link href="#how" className="btn btn-secondary">
                See how it works
              </Link>
            </div>

            <div
              className="mt-12 flex flex-wrap items-center gap-2.5 text-[12px] font-mono animate-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <span className="text-ink-subtle uppercase tracking-widest text-[10px]">
                Works with
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                Outlook
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                Gmail
              </span>
              <span className="text-ink-subtle">·</span>
              <span className="text-ink-subtle">Read-only · One-click disconnect</span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '320ms' }}>
            <InboxToLoads />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
