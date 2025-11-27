export default function Solution() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2"></rect>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <line x1="9" y1="4" x2="9" y2="20"></line>
        </svg>
      ),
      title: "Load Passport Identity",
      description: "Every load gets a unique, immutable passport ID. One canonical record that all parties reference — broker, carrier, driver, shipper. No more conflicting spreadsheets, lost emails, or \"he said, she said.\"",
      featured: true,
      tag: "Core Feature"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: "Driver Verification",
      description: "Assigned driver must verify via phone + location before pickup. Know exactly who has your load — verified, not assumed."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Fraud Detection",
      description: "Real-time fraud scoring using 9+ rule categories. Get alerts before problems happen, not after."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      title: "Duplicate Detection",
      description: "Search if a load has been booked elsewhere. Catch double brokering before your freight moves."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      title: "Document Hub",
      description: "All BOLs, PODs, and receipts in one place. Driver uploads from phone, everyone sees instantly. No more hunting."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "Complete Audit Trail",
      description: "Every status change, assignment, and document upload logged with timestamp and location. Disputes become easy."
    }
  ];

  return (
    <section id="solution" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
            The Solution
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            One passport for every load.<br />Verified. Tracked. Immutable.
          </h2>

          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            Freight Passport creates a single source of truth that follows your load from tender to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex gap-6 transition-all duration-300 hover:border-[var(--color-primary)] hover:-translate-y-1 ${
                feature.featured ? 'md:col-span-2 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-elevated)]' : ''
              }`}
            >
              <div className="w-14 h-14 bg-[var(--color-primary-glow)] rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                {feature.icon}
              </div>

              <div>
                {feature.tag && (
                  <span className="inline-block px-2.5 py-1 bg-[var(--color-primary)] text-[var(--color-primary-text)] text-xs font-bold uppercase tracking-wider rounded mb-3">
                    {feature.tag}
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
