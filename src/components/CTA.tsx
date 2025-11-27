'use client';

import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Store in localStorage for demo
      const signups = JSON.parse(localStorage.getItem('freightPassportSignups') || '[]');
      signups.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('freightPassportSignups', JSON.stringify(signups));

      setSubmitted(true);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="cta" className="relative z-10 py-24 lg:py-32 bg-[var(--color-darker)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-3xl p-12 lg:p-20 overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[var(--color-primary-glow)] to-transparent rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to secure your freight?
            </h2>

            <p className="text-lg text-[var(--color-muted)] max-w-lg mx-auto mb-10">
              Join the waitlist for early access. Be among the first to bring identity and trust to your freight operations.
            </p>

            {submitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 p-6 bg-[var(--color-success-glow)] border border-[var(--color-success)]/30 rounded-xl">
                  <div className="w-10 h-10 bg-[var(--color-success)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[var(--color-success)]">You&apos;re on the list!</div>
                    <div className="text-sm text-[var(--color-muted)]">We&apos;ll reach out when early access opens.</div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-5 py-4 bg-[var(--color-dark)] border border-[var(--color-border)] rounded-xl text-[var(--color-light)] text-base outline-none transition-colors focus:border-[var(--color-primary)] placeholder:text-[var(--color-muted)]"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[var(--color-primary)] text-[var(--color-primary-text)] rounded-xl font-semibold text-base whitespace-nowrap hover:opacity-90 hover:-translate-y-0.5 transition-all"
                >
                  Get Early Access
                </button>
              </form>
            )}

            <p className="text-sm text-[var(--color-muted)]/60 mt-4">
              Free during beta. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
