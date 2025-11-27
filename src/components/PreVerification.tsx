export default function PreVerification() {
  const steps = [
    {
      number: "01",
      title: "Enter MC/DOT",
      description: "Broker enters carrier's MC or DOT number"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Real-time FMCSA pull + pattern detection"
    },
    {
      number: "03",
      title: "Trust Score",
      description: "Get instant score with risk breakdown"
    },
    {
      number: "04",
      title: "Decision",
      description: "Proceed, caution, or avoid with confidence"
    }
  ];

  const dataPoints = [
    { label: "Authority Status", check: "Active vs revoked" },
    { label: "Insurance", check: "Current coverage verified" },
    { label: "Safety Rating", check: "FMCSA compliance" },
    { label: "Fraud Patterns", check: "AI pattern detection" },
    { label: "Network Links", check: "Bad actor connections" },
    { label: "Platform History", check: "Past performance data" }
  ];

  return (
    <section id="pre-verification" className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-[var(--color-darker)] to-[var(--color-dark)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
              <span className="w-6 h-px bg-[var(--color-primary)]"></span>
              Pre-Verification
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Know who you&apos;re booking.<br />
              <span className="text-[var(--color-primary)]">Before you book.</span>
            </h2>

            <p className="text-lg text-[var(--color-muted)] mb-8">
              Run any carrier through AI-powered pre-verification. FMCSA data, fraud patterns, and network intelligence — in seconds.
            </p>

            {/* Process Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-primary-glow)] rounded-lg flex items-center justify-center font-mono text-[var(--color-primary)] font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{step.title}</div>
                    <div className="text-sm text-[var(--color-muted)]">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--color-muted)]">
              <span className="text-[var(--color-primary)] font-semibold">Catch problems BEFORE</span> the load is tendered, not after freight is missing.
            </p>
          </div>

          {/* Right Visual - Trust Score Card */}
          <div className="relative">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Pre-Verification Report</div>
                <div className="font-mono text-sm text-[var(--color-primary)] bg-[var(--color-primary-glow)] px-3 py-1 rounded inline-block">
                  ABC Transport LLC • MC# 123456
                </div>
              </div>

              {/* Trust Score */}
              <div className="text-center mb-8">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle cx="80" cy="80" r="70" fill="none" stroke="var(--color-border)" strokeWidth="8" />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${72 * 4.4} ${100 * 4.4}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="font-mono text-4xl font-bold">72</div>
                    <div className="text-xs text-[var(--color-muted)]">/100</div>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-warning-glow)] border border-[var(--color-warning)]/30 rounded-full">
                  <div className="w-2 h-2 bg-[var(--color-warning)] rounded-full"></div>
                  <span className="text-sm font-semibold text-[var(--color-warning)]">MODERATE RISK</span>
                </div>
              </div>

              {/* Data Points Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {dataPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-[var(--color-darker)] rounded-lg">
                    <svg className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <div className="text-xs font-semibold">{point.label}</div>
                      <div className="text-xs text-[var(--color-muted)]">{point.check}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation */}
              <div className="bg-gradient-to-br from-[var(--color-warning-glow)] to-transparent border border-[var(--color-warning)]/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-warning)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-warning)] mb-1">Proceed with Caution</div>
                    <div className="text-xs text-[var(--color-muted)]">Verify driver identity at pickup. Monitor load closely. VOIP phone detected.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[var(--color-primary)] text-[var(--color-primary-text)] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Real-time Analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
