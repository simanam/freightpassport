import Link from 'next/link';
import InboxToLoads from './InboxToLoads';
import WaitlistDialog from './WaitlistDialog';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 grid-dots pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-14 lg:gap-16 items-center">
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
              className="mt-5 sm:mt-6 text-[34px] sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.06] sm:leading-[1.04] text-ink animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Every broker email,{' '}
              <br className="hidden md:block" />
              every load document —{' '}
              <span className="text-accent">organized automatically.</span>
            </h1>

            <p
              className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-ink-muted max-w-xl leading-snug animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Connect your inbox. Your loads organize themselves. Find any POD,
              rate con, or dispute detail in seconds.
            </p>

            <div
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <WaitlistDialog
                source="hero"
                className="btn btn-primary"
                label="Get early access"
              />
              <Link href="#how" className="btn btn-secondary">
                See how it works
              </Link>
            </div>

            <div
              className="mt-9 sm:mt-12 flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-[12px] font-mono animate-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <span className="text-ink-subtle uppercase tracking-widest text-[10px]">
                Docs come from
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                Outlook
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                Gmail
              </span>
              <Link
                href="#uploads"
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-accent-wash border border-accent-ring text-accent-strong font-semibold hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <SparkIcon />
                Upload links
              </Link>
              <span className="hidden sm:inline text-ink-subtle">·</span>
              <span className="text-ink-subtle">Read-only · One-click disconnect</span>
            </div>
          </div>

          <div className="animate-fade-up min-w-0" style={{ animationDelay: '320ms' }}>
            <InboxToLoads />
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.39 6.61L21 11l-6.61 2.39L12 20l-2.39-6.61L3 11l6.61-2.39L12 2z" />
    </svg>
  );
}
