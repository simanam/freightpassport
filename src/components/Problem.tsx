export default function Problem() {
  const problems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      title: "Double Brokering",
      description: "Carriers illegally re-broker your loads to unknown parties. You have no idea who actually has your freight until something goes wrong.",
      statValue: "$500M+",
      statLabel: "lost annually to double brokering"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="18" y1="8" x2="23" y2="13"></line>
          <line x1="23" y1="8" x2="18" y2="13"></line>
        </svg>
      ),
      title: "Identity Fraud",
      description: "Fake carriers using spoofed MC numbers, stolen identities, and burner phones. You can't verify who you're actually dealing with.",
      statValue: "67%",
      statLabel: "increase in cargo theft (2023)"
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      ),
      title: "Document Chaos",
      description: "BOLs and PODs scattered across texts, emails, and driver cab folders. When you need proof, it's a frantic hunt.",
      statValue: "4.2 hrs",
      statLabel: "wasted per week on document hunting"
    }
  ];

  return (
    <section id="problem" className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-darker)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
          <span className="w-6 h-px bg-[var(--color-primary)]"></span>
          The Problem
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
          Freight operates on blind trust.<br />That&apos;s costing you.
        </h2>

        <p className="text-lg text-[var(--color-muted)] max-w-2xl mb-16">
          The trucking industry moves $800B in goods annually with no unified identity system. The result? Rampant fraud, lost documents, and zero accountability.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-[var(--color-danger)] hover:-translate-y-1"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-danger)] to-transparent"></div>

              <div className="w-14 h-14 bg-[var(--color-danger-glow)] rounded-xl flex items-center justify-center mb-6 text-[var(--color-danger)]">
                {problem.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">{problem.description}</p>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <div className="font-mono text-2xl lg:text-3xl font-bold text-[var(--color-danger)]">{problem.statValue}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
