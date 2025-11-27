'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-32 md:py-20 z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Text */}
          <div>
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm font-medium text-[var(--color-muted)] mb-6">
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse-glow"></span>
              Now accepting early access signups
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              One passport.<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-primary)' }}>One truth.</span><br />
              Every load verified.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 text-lg text-[var(--color-muted)] max-w-xl mb-10">
              Stop double brokering, prevent fraud, and eliminate document chaos with the freight industry&apos;s first unified identity system.
            </p>

            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Get Early Access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-[var(--color-light)] border border-[var(--color-border-light)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border)] transition-all"
              >
                See How It Works
              </Link>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-12 mt-16 pt-8 border-t border-[var(--color-border)]">
              <div className="flex flex-col">
                <div className="font-mono text-3xl font-bold text-[var(--color-light)] tracking-tight">$800B+</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">U.S. Trucking Industry</div>
              </div>
              <div className="flex flex-col">
                <div className="font-mono text-3xl font-bold text-[var(--color-light)] tracking-tight">$500M</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Lost to Double Brokering/Year</div>
              </div>
              <div className="flex flex-col">
                <div className="font-mono text-3xl font-bold text-[var(--color-light)] tracking-tight">0</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">Identity Standards Exist</div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Passport Card */}
          <div className="relative animate-fade-in-up animation-delay-500">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>

              {/* Passport Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
                <div className="font-mono text-sm text-[var(--color-primary)] bg-[var(--color-primary-glow)] px-3 py-1.5 rounded-md">
                  FP-2025-00004521
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-verified)]">
                  <span className="w-2 h-2 bg-[var(--color-verified)] rounded-full"></span>
                  Verified
                </div>
              </div>

              {/* Route */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">Origin</div>
                  <div className="text-lg font-semibold">Fresno</div>
                  <div className="text-sm text-[var(--color-muted)]">California</div>
                </div>
                <div className="flex-shrink-0 w-16 h-0.5 bg-[var(--color-border)] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-[var(--color-border)] border-y-4 border-y-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">Destination</div>
                  <div className="text-lg font-semibold">Phoenix</div>
                  <div className="text-sm text-[var(--color-muted)]">Arizona</div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[var(--color-darker)] p-3 rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">Carrier</div>
                  <div className="text-sm font-semibold">ABC Transport</div>
                </div>
                <div className="bg-[var(--color-darker)] p-3 rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">Driver</div>
                  <div className="text-sm font-semibold">Mike J.</div>
                </div>
                <div className="bg-[var(--color-darker)] p-3 rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">Truck #</div>
                  <div className="text-sm font-semibold">1234</div>
                </div>
              </div>

              {/* Verification Status */}
              <div className="bg-[var(--color-verified-bg)] border border-[var(--color-verified-border)] rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-verified)] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-0.5">Driver Verified</h4>
                  <p className="text-sm text-[var(--color-muted)]">Phone confirmed • Location matched • 2 min ago</p>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="hidden lg:block absolute -top-5 -right-8 bg-[var(--color-surface-elevated)] border border-[var(--color-border-light)] rounded-xl p-4 shadow-xl animate-float">
              <div className="w-8 h-8 bg-[var(--color-primary-glow)] rounded-lg flex items-center justify-center mb-2 text-[var(--color-primary)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="text-xs text-[var(--color-muted)] mb-0.5">Fraud Score</div>
              <div className="text-sm font-semibold text-[var(--color-success)]">Low Risk</div>
            </div>

            {/* Floating Card 2 */}
            <div className="hidden lg:block absolute bottom-16 -left-10 bg-[var(--color-surface-elevated)] border border-[var(--color-border-light)] rounded-xl p-4 shadow-xl animate-float-delayed">
              <div className="w-8 h-8 bg-[var(--color-danger-glow)] rounded-lg flex items-center justify-center mb-2 text-[var(--color-danger)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="text-xs text-[var(--color-muted)] mb-0.5">Duplicate Check</div>
              <div className="text-sm font-semibold">No Matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
