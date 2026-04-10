/**
 * Visual roadmap timeline — 5 milestones, v1 live through v4 vision.
 */
type Phase = {
  v: string;
  tag: string;
  title: string;
  bullets: string[];
  state: 'live' | 'next' | 'vision';
};

const phases: Phase[] = [
  {
    v: 'v1',
    tag: 'Live',
    title: 'Dashboard + crypto',
    bullets: [
      'Identity tiers (Bronze / Silver / Gold)',
      'Sealed pickup + receiver-signed POD',
      'Ed25519 signing, 34 fraud rules',
    ],
    state: 'live',
  },
  {
    v: 'v1.1',
    tag: 'Q2 2026',
    title: 'Transit check-ins',
    bullets: [
      'SMS check-ins every 4 hrs',
      'HOS-aware rest detection',
      'Rules 22-23 (route divergence)',
    ],
    state: 'next',
  },
  {
    v: 'v1.5',
    tag: 'Q3 2026',
    title: 'TMS integration',
    bullets: [
      'McLeod plugin first',
      'Webhook delivery + Load Registry',
    ],
    state: 'next',
  },
  {
    v: 'v2.0',
    tag: 'Q4 2026',
    title: 'ELD + stronger identity',
    bullets: [
      'Samsara / Motive / Geotab ELD',
      'Passkeys + mDL',
      'Rules 24-25 (dual-source GPS)',
    ],
    state: 'vision',
  },
  {
    v: 'v3-4',
    tag: '2027-28',
    title: 'Network effect',
    bullets: [
      'Cross-Org fraud fingerprints',
      'Insurance claim handoff',
    ],
    state: 'vision',
  },
];

const tagStyles: Record<Phase['state'], string> = {
  live:   'bg-success-wash text-success border-success/40',
  next:   'bg-accent-wash text-accent-strong border-accent/40',
  vision: 'bg-white text-ink-muted border-border-strong',
};

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative py-28 md:py-36 border-t border-border"
      aria-labelledby="roadmap-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Roadmap</span>
          <h2
            id="roadmap-heading"
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
          >
            Honest about what ships when.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted">
            The backend is the product. Each release adds a new surface on top of the same
            crypto chain, same identity tiers, same 34 fraud rules.
          </p>
        </div>

        <div className="relative mt-20">
          {/* timeline line */}
          <svg
            className="absolute left-0 right-0 top-6 h-2 hidden md:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="60" y1="4" x2="940" y2="4" stroke="#CFC6A9" strokeWidth="1.5" />
            <line
              x1="60"
              y1="4"
              x2="280"
              y2="4"
              stroke="#0B5FFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <ol className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4">
            {phases.map((p) => {
              const live = p.state === 'live';
              const next = p.state === 'next';
              return (
                <li key={p.v} className="relative">
                  {/* milestone dot */}
                  <div className="hidden md:flex justify-center mb-6">
                    <div
                      className={[
                        'h-5 w-5 rounded-full border-[3px] relative',
                        live
                          ? 'bg-accent border-white shadow-[0_0_0_4px_rgba(11,95,255,0.2)]'
                          : next
                          ? 'bg-white border-accent'
                          : 'bg-white border-border-strong',
                      ].join(' ')}
                    >
                      {live && (
                        <span
                          className="absolute inset-0 rounded-full bg-accent/30 animate-pulse-ring"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>

                  <div className="card-shadow p-5 h-full">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-ink">{p.v}</span>
                      <span
                        className={[
                          'text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border',
                          tagStyles[p.state],
                        ].join(' ')}
                      >
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-ink leading-snug">
                      {p.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-1.5 text-[12px] text-ink-muted leading-snug"
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1 shrink-0 text-accent"
                            aria-hidden="true"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
