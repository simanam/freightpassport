export default function AICapabilities() {
  const capabilities = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: "Identity Verification AI",
      description: "Facial recognition with liveness detection. Verifies drivers are who they claim to be — not a photo of a photo.",
      stats: [">99%", "accuracy"],
      colorKey: "primary"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      title: "Document Intelligence",
      description: "Auto-reads BOLs, PODs, and receipts. Extracts data, validates against load details, flags discrepancies.",
      stats: ["<30s", "processing"],
      colorKey: "secondary"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Fraud Detection Engine",
      description: "Real-time scoring with 9+ rule categories. Catches double brokering, identity fraud, and suspicious patterns.",
      stats: [">85%", "detection rate"],
      colorKey: "danger"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      title: "Location Intelligence",
      description: "Route prediction, geofence detection, and GPS spoof detection. Know where your freight really is.",
      stats: ["99%", "spoof detection"],
      colorKey: "tertiary"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "Predictive Analytics",
      description: "Forecasts delays, predicts carrier performance, identifies high-risk loads before problems occur.",
      stats: [">75%", "predictive accuracy"],
      colorKey: "warning"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Network Intelligence",
      description: "Learns from every load across the platform. Fraud detected for one broker protects everyone.",
      stats: ["24/7", "learning"],
      colorKey: "info"
    }
  ];

  return (
    <section id="ai-powered" className="relative z-10 py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[var(--color-primary-glow)] via-transparent to-transparent rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[var(--color-primary-glow)] to-[var(--color-secondary-glow)] border border-[var(--color-primary)]/30 rounded-full mb-6">
            <svg className="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
              <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor"></circle>
              <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor"></circle>
            </svg>
            <span className="text-sm font-semibold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Powered by AI
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Intelligence that<br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-tertiary)] bg-clip-text text-transparent">
              protects every load
            </span>
          </h2>

          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            AI doesn&apos;t replace human judgment — it gives you the information you need to make better decisions, faster, with confidence.
          </p>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, index) => {
            return (
              <div
                key={index}
                className="group bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-light)]"
              >
                <div className={`w-12 h-12 bg-[var(--color-${cap.colorKey}-glow)] rounded-xl flex items-center justify-center mb-4 text-[var(--color-${cap.colorKey})]`}>
                  {cap.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{cap.description}</p>

                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-${cap.colorKey}-glow)] border border-[var(--color-${cap.colorKey})]/30 rounded-full`}>
                  <span className={`font-mono text-sm font-bold text-[var(--color-${cap.colorKey})]`}>{cap.stats[0]}</span>
                  <span className="text-xs text-[var(--color-muted)]">{cap.stats[1]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)] border border-[var(--color-border-light)] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[var(--color-primary-glow)] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <div className="font-mono text-3xl font-bold text-[var(--color-primary)] mb-2">&lt;1s</div>
            <div className="text-sm text-[var(--color-muted)]">Fraud scoring in real-time</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)] border border-[var(--color-border-light)] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[var(--color-secondary-glow)] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="font-mono text-3xl font-bold text-[var(--color-secondary)] mb-2">Network</div>
            <div className="text-sm text-[var(--color-muted)]">Every load makes AI smarter</div>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)] border border-[var(--color-border-light)] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[var(--color-tertiary-glow)] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--color-tertiary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="font-mono text-3xl font-bold text-[var(--color-tertiary)] mb-2">24/7</div>
            <div className="text-sm text-[var(--color-muted)]">Continuous learning & protection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
