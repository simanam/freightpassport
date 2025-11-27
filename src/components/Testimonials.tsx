export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "\"We got burned by double brokering twice last quarter. This would have caught both. The duplicate detection alone is worth it.\"",
      name: "Marcus R.",
      role: "Operations Manager, Regional 3PL",
      initials: "MR"
    },
    {
      stars: 5,
      text: "\"The document hub changed everything. No more 'where's the POD' calls. Driver uploads, we see it instantly. Simple.\"",
      name: "Sarah K.",
      role: "Freight Broker, Independent",
      initials: "SK"
    },
    {
      stars: 5,
      text: "\"Finally, an identity layer for freight. I've been waiting for someone to build this. The industry desperately needs it.\"",
      name: "James T.",
      role: "VP Logistics, Mid-Size Shipper",
      initials: "JT"
    }
  ];

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <section id="testimonials" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
            Early Feedback
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            What brokers are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-[var(--color-warning)]">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-light)] leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[var(--color-primary-text)]" style={{ background: 'var(--gradient-primary)' }}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--color-muted)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
