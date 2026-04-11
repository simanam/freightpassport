import Link from 'next/link';
import PassportCard from '@/components/visuals/PassportCard';

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
              Freight fraud prevention
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-5xl md:text-6xl lg:text-[66px] font-extrabold tracking-tight leading-[1.02] text-ink animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              The paper trail
              <br />
              that&rsquo;s <span className="text-accent">fraud-proof.</span>
            </h1>

            <p
              className="mt-7 text-lg md:text-xl text-ink-muted max-w-xl leading-snug animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Three documents move every load: pickup number, BOL, POD. Today they&rsquo;re
              faxed, emailed, and forged. FreightPassport seals all three into one
              cryptographic chain. Forgery caught in under a second.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <Link href="#cta" className="btn btn-primary">
                Request a pilot
                <Arrow />
              </Link>
              <Link href="#problem" className="btn btn-secondary">
                See the fraud
              </Link>
            </div>

            {/* Three-document mental model */}
            <div
              className="mt-12 flex flex-wrap items-center gap-2.5 text-[12px] font-mono animate-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <span className="text-ink-subtle uppercase tracking-widest text-[10px]">
                The chain
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                Pickup # sealed
              </span>
              <Sep />
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                BOL signed
              </span>
              <Sep />
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-border">
                POD fingerprinted
              </span>
              <Sep />
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-accent text-white border border-accent">
                Verify anywhere
              </span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '320ms' }}>
            <PassportCard />
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

function Sep() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-ink-subtle" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
