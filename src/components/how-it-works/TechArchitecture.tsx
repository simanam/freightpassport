const topClients = [
  {
    name: 'Dashboard (Next.js)',
    label: 'ONE client of the API',
  },
  {
    name: 'TMS Integration (v1.5+)',
    label: 'McLeod, Aljex, Tai',
  },
  {
    name: 'Direct API (v1.5+)',
    label: 'Custom in-house TMS',
  },
];

const coreModules = [
  'Load CRUD',
  'Crypto signing',
  'Fraud rules',
  'Identity verification',
  'Background workers',
  'PDF generation',
];

const dataStores = [
  { name: 'PostgreSQL 16 + pgvector', label: 'Neon' },
  { name: 'Redis 7', label: 'Upstash' },
];

const externalServices = [
  'Twilio Verify',
  'Resend',
  'Persona',
  'Plaid',
  'OpenCorporates',
  'Anthropic Claude',
  'FMCSA SAFER',
  'Cloudflare R2',
  'FingerprintJS',
];

const stackRows = [
  {
    layer: 'Frontend',
    tech: 'Next.js 16 on Vercel',
    why: 'Pure client for camera/geolocation pages',
  },
  {
    layer: 'Backend',
    tech: 'FastAPI + Python 3.12',
    why: 'Async, Pydantic = OpenAPI, best crypto ecosystem',
  },
  {
    layer: 'Workers',
    tech: 'Celery + Redis + Flower',
    why: 'Face check, PDF gen, FMCSA pulls, overdue sweeps',
  },
  {
    layer: 'Database',
    tech: 'PostgreSQL 16 + pgvector',
    why: 'Signature similarity search, append-only audit',
  },
  {
    layer: 'Cache',
    tech: 'Redis 7 (Upstash)',
    why: 'Celery broker, session cache, rate limiting',
  },
  {
    layer: 'Storage',
    tech: 'Cloudflare R2',
    why: 'Zero egress fees, photos/PDFs/certs',
  },
  {
    layer: 'Auth',
    tech: 'Supabase Auth (magic links)',
    why: 'JWT validated by FastAPI',
  },
  {
    layer: 'SMS',
    tech: 'Twilio Verify',
    why: 'OTP + voice fallback',
  },
  {
    layer: 'AI',
    tech: 'Anthropic Claude Sonnet 4.6',
    why: 'Vision face-check, OCR, FMCSA parse',
  },
  {
    layer: 'PDF',
    tech: 'reportlab + pyhanko',
    why: 'Ed25519 signed document generation',
  },
];

const costPhases = [
  { phase: 'Demo', loads: '0 loads', cost: '$0' },
  { phase: 'Pilot', loads: '500 loads/mo', cost: '~$50/mo' },
  { phase: 'Early', loads: '5k loads/mo', cost: '~$500/mo' },
  { phase: 'Scale', loads: '100k loads/mo', cost: '~$5,000/mo' },
];

export default function TechArchitecture() {
  return (
    <section
      id="tech-architecture"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="arch-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Part 1: Architecture diagram ── */}
        <span className="eyebrow">System architecture</span>

        <h2
          id="arch-heading"
          className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          The backend is the&nbsp;product.
        </h2>

        <p className="mt-7 text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
          Everything a human can do through the dashboard is also available
          through the versioned API. The dashboard is one client. TMS
          integrations are another. Same backend, same fraud rules, same
          crypto&nbsp;chain.
        </p>

        {/* Architecture diagram */}
        <div className="mt-14 flex flex-col items-center gap-0">
          {/* Top row — API clients */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {topClients.map((c) => (
              <div key={c.name} className="card p-6 text-center">
                <p className="font-bold text-ink text-sm">{c.name}</p>
                <p className="mt-1 text-[11px] font-mono text-ink-muted">
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows down */}
          <div
            className="flex items-center justify-center gap-1 py-3 text-accent"
            aria-hidden="true"
          >
            <DownChevron />
            <DownChevron />
            <DownChevron />
          </div>

          {/* Center — Core backend */}
          <div className="card-shadow w-full border-2 border-accent p-6">
            <p className="text-center font-bold text-ink text-lg mb-5">
              FastAPI Backend{' '}
              <span className="text-accent">=&nbsp;The&nbsp;Product</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {coreModules.map((mod) => (
                <div
                  key={mod}
                  className="bg-bg-tint rounded-lg px-3 py-2.5 text-center"
                >
                  <span className="font-mono text-[11px] text-ink-muted">
                    {mod}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows down */}
          <div
            className="flex items-center justify-center gap-1 py-3 text-accent"
            aria-hidden="true"
          >
            <DownChevron />
            <DownChevron />
          </div>

          {/* Bottom row — Data stores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            {dataStores.map((d) => (
              <div key={d.name} className="card p-6 text-center">
                <p className="font-bold text-ink text-sm">{d.name}</p>
                <p className="mt-1 text-[11px] font-mono text-ink-muted">
                  {d.label}
                </p>
              </div>
            ))}
          </div>

          {/* External services strip */}
          <div className="mt-8 w-full">
            <p className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3 text-center">
              External services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {externalServices.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-bg-tint border border-border text-[11px] font-mono text-ink-muted"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Part 2: Tech stack table ── */}
        <hr className="hairline my-20" />

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink">
          Full stack,&nbsp;explained.
        </h2>

        <div className="mt-12 card-shadow overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[140px_1fr_1fr] gap-4 px-6 py-4 border-b border-border-strong bg-bg-tint">
            {['Layer', 'Technology', 'Why'].map((h) => (
              <span
                key={h}
                className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle"
              >
                {h}
              </span>
            ))}
          </div>

          {stackRows.map((row, i) => (
            <div
              key={row.layer}
              className={`grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-2 md:gap-4 px-6 py-4 ${
                i % 2 === 1 ? 'bg-bg-tint' : ''
              } ${i < stackRows.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div>
                <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                  Layer
                </span>
                <p className="font-bold text-ink text-sm">{row.layer}</p>
              </div>
              <div>
                <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                  Technology
                </span>
                <p className="font-mono text-[11px] text-accent">{row.tech}</p>
              </div>
              <div>
                <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                  Why
                </span>
                <p className="text-sm text-ink-muted">{row.why}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Part 3: Cost model strip ── */}
        <hr className="hairline my-20" />

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink">
          Infrastructure&nbsp;cost.
        </h2>

        <p className="mt-5 text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
          FreightPassport runs lean. Here is what the backend costs at each
          growth&nbsp;phase.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {costPhases.map((cp) => (
            <div key={cp.phase} className="card-shadow p-6 text-center">
              <p className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                {cp.phase}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-ink">{cp.cost}</p>
              <p className="mt-1 text-[11px] font-mono text-ink-muted">
                {cp.loads}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-base md:text-lg text-ink-muted">
          Break-even:{' '}
          <span className="font-bold text-accent">
            20 loads/mo at $5/load
          </span>
        </p>
      </div>
    </section>
  );
}

/* ─── Icons ─── */

function DownChevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
