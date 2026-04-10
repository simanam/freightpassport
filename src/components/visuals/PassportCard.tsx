/**
 * Visual: a "FreightPassport" load card styled like a travel passport /
 * notarized document. Pure SVG + CSS — no libraries, no external assets.
 */
export default function PassportCard() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      {/* stack back card for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-bg-tint border border-border"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-white border border-border"
      />

      {/* main card */}
      <article
        className="relative rounded-2xl bg-white border border-border-strong overflow-hidden"
        style={{
          boxShadow:
            '0 1px 0 rgba(10,22,40,.03), 0 30px 60px -30px rgba(10,22,40,.28)',
        }}
        aria-label="Sample FreightPassport load card"
      >
        {/* top navy bar */}
        <div className="relative bg-navy text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-accent text-white font-bold text-[10px]">
              FP
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-white/80">
              FREIGHT&nbsp;PASSPORT · CHAIN&nbsp;OF&nbsp;CUSTODY
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/50">v1</span>
        </div>

        {/* load id strip */}
        <div className="px-6 pt-5 pb-2 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink-subtle">Load ID</div>
            <div className="font-mono text-[15px] font-semibold text-ink mt-0.5">
              FP-260409-00712
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-ink-subtle">Status</div>
            <div className="inline-flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
              <span className="font-mono text-[12px] font-semibold text-success">SEALED</span>
            </div>
          </div>
        </div>

        {/* parties + tier chips */}
        <div className="px-6 pt-3 pb-1 flex items-center gap-2 flex-wrap">
          <span
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold"
            style={{
              background: '#FAEBBC',
              color: '#4A3009',
              border: '1px solid #D4A24C',
            }}
            title="Gold Organization"
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            BROKER · GOLD
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold"
            style={{
              background: '#EEF2F7',
              color: '#2A3442',
              border: '1px solid #A9B3C1',
            }}
            title="Silver Carrier"
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            CARRIER · SILVER
          </span>
        </div>

        {/* route svg */}
        <div className="px-6 pt-4 pb-5">
          <svg viewBox="0 0 400 96" className="w-full h-24" role="img" aria-label="Load route">
            {/* route arc */}
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#0B5FFF" />
                <stop offset="1" stopColor="#6B8FFF" />
              </linearGradient>
            </defs>
            <path
              d="M 40 70 Q 200 -10 360 70"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />
            {/* origin pin */}
            <g transform="translate(40,70)">
              <circle r="10" fill="#E8EEFF" stroke="#0B5FFF" strokeWidth="2" />
              <circle r="3.5" fill="#0B5FFF" />
            </g>
            {/* destination pin */}
            <g transform="translate(360,70)">
              <circle r="10" fill="#E8EEFF" stroke="#0B5FFF" strokeWidth="2" />
              <circle r="3.5" fill="#0B5FFF" />
            </g>
            {/* truck icon moving along route */}
            <g transform="translate(200,22)">
              <rect x="-14" y="-7" width="22" height="14" rx="2" fill="#0A1628" />
              <rect x="6" y="-5" width="10" height="12" rx="1.5" fill="#0A1628" />
              <circle cx="-7" cy="9" r="2.6" fill="#0A1628" />
              <circle cx="13" cy="9" r="2.6" fill="#0A1628" />
            </g>

            <text x="40" y="92" fontSize="10" fill="#475569" fontFamily="ui-monospace,monospace" textAnchor="start">
              LIVONIA, MI
            </text>
            <text x="360" y="92" fontSize="10" fill="#475569" fontFamily="ui-monospace,monospace" textAnchor="end">
              RICHMOND, CA
            </text>
          </svg>
        </div>

        <div className="mx-6 h-px bg-border" />

        {/* meta grid */}
        <dl className="grid grid-cols-3 gap-4 px-6 pt-4 pb-5">
          {[
            { k: 'DISTANCE', v: '2,340 mi' },
            { k: 'PICKUP', v: 'SEALED' },
            { k: 'SIG', v: 'Ed25519' },
          ].map((m) => (
            <div key={m.k}>
              <dt className="text-[9px] uppercase tracking-widest text-ink-subtle">{m.k}</dt>
              <dd className="font-mono text-[13px] font-semibold mt-0.5">{m.v}</dd>
            </div>
          ))}
        </dl>

        {/* bottom strip: signature + QR */}
        <div className="px-6 pb-6 flex items-end justify-between gap-4">
          <div className="flex-1">
            <div className="text-[9px] uppercase tracking-widest text-ink-subtle mb-1">
              Platform Signature
            </div>
            {/* signature waveform */}
            <svg viewBox="0 0 180 36" className="w-full h-8" aria-hidden="true">
              <path
                d="M 2 22 Q 12 6 22 22 T 42 22 T 62 22 T 82 22 T 102 22 T 122 22 T 142 22 T 162 22 T 178 22"
                stroke="#0A1628"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 10 30 L 30 12 L 50 28 L 70 10 L 90 26 L 110 14 L 130 24 L 150 12 L 170 22"
                stroke="#0B5FFF"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            <div className="font-mono text-[10px] text-ink-subtle mt-1">
              7A3F · C2B1 · 9E4D · 8F02
            </div>
          </div>

          {/* QR */}
          <div
            className="w-[74px] h-[74px] rounded-md p-1.5 bg-white border border-border-strong"
            aria-hidden="true"
          >
            <svg viewBox="0 0 32 32" className="w-full h-full" shapeRendering="crispEdges">
              {/* Finder patterns */}
              <rect x="0" y="0" width="10" height="10" fill="#0A1628" />
              <rect x="2" y="2" width="6" height="6" fill="#fff" />
              <rect x="4" y="4" width="2" height="2" fill="#0A1628" />
              <rect x="22" y="0" width="10" height="10" fill="#0A1628" />
              <rect x="24" y="2" width="6" height="6" fill="#fff" />
              <rect x="26" y="4" width="2" height="2" fill="#0A1628" />
              <rect x="0" y="22" width="10" height="10" fill="#0A1628" />
              <rect x="2" y="24" width="6" height="6" fill="#fff" />
              <rect x="4" y="26" width="2" height="2" fill="#0A1628" />
              {/* random data cells */}
              {[
                [12,2],[14,2],[16,2],[18,2],[12,4],[16,4],[20,4],[12,6],[14,6],[18,6],
                [2,12],[4,12],[8,12],[12,12],[14,12],[18,12],[22,12],[26,12],[30,12],
                [0,14],[6,14],[10,14],[14,14],[16,14],[20,14],[24,14],[28,14],
                [2,16],[4,16],[8,16],[12,16],[18,16],[22,16],[26,16],[30,16],
                [0,18],[6,18],[10,18],[14,18],[16,18],[20,18],[24,18],[28,18],
                [12,20],[14,20],[18,20],[22,20],[26,20],[30,20],
                [12,22],[14,22],[18,22],
                [12,24],[16,24],[20,24],[22,24],[24,24],[28,24],
                [14,26],[16,26],[20,26],[26,26],[30,26],
                [12,28],[18,28],[22,28],[28,28],
                [14,30],[16,30],[20,30],[24,30],[30,30],
              ].map(([x, y], i) => (
                <rect key={i} x={x} y={y} width="2" height="2" fill="#0A1628" />
              ))}
            </svg>
          </div>
        </div>

        {/* stamp overlay */}
        <div className="absolute right-5 top-24 pointer-events-none animate-stamp">
          <div
            className="rounded-full border-[3px] border-success px-4 py-2 font-mono text-[11px] font-bold tracking-widest text-success"
            style={{
              background: 'rgba(255,255,255,0.75)',
              boxShadow: 'inset 0 0 0 2px rgba(4,120,87,0.15)',
            }}
          >
            AUTHENTIC
          </div>
        </div>
      </article>
    </div>
  );
}
