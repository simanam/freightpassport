'use client';

import { useRef, useEffect, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Panel data                                                          */
/* ------------------------------------------------------------------ */
type Panel = {
  step: string;
  label: string;
  headline: React.ReactNode;
  sub: string;
  visual: React.ReactNode;
  accent?: string;
};

const panels: Panel[] = [
  {
    step: '01',
    label: 'SEAL',
    headline: (
      <>
        Load passport <span className="text-accent">minted.</span>
      </>
    ),
    sub: 'Pickup number sealed with AES-256. A fresh Ed25519 keypair binds every future event to this load.',
    visual: <SealVisual />,
  },
  {
    step: '02',
    label: 'UNLOCK',
    headline: (
      <>
        Three signals. <span className="text-accent">One unlock.</span>
      </>
    ),
    sub: 'Driver at the dock. Geofence, live photo, and SMS OTP must all pass before the sealed pickup number decrypts.',
    visual: <UnlockVisual />,
  },
  {
    step: '03',
    label: 'CARRY',
    headline: (
      <>
        Signed check-ins. <span className="text-accent">Every 4 hours.</span>
      </>
    ),
    sub: 'SMS or ELD — every transit check-in is Ed25519-signed into the same hash chain. The driver just drives.',
    visual: <CarryVisual />,
  },
  {
    step: '04',
    label: 'SIGN',
    headline: (
      <>
        Receiver signs on <span className="text-accent">their device.</span>
      </>
    ),
    sub: 'Stroke vectors — coordinates, pressure, velocity — hashed with the load ID. A copy on another load fails verification.',
    visual: <SignVisual />,
  },
  {
    step: '05',
    label: 'SCREEN',
    headline: (
      <>
        34 rules. <span className="text-critical">Under 1 ms.</span>
      </>
    ),
    sub: 'Every state change screened before the database commits. Critical hits block the transition.',
    visual: <ScreenVisual />,
  },
  {
    step: '06',
    label: 'VERIFIED',
    headline: (
      <>
        Cryptographically <span className="text-accent">proven.</span>
      </>
    ),
    sub: 'Anyone — judge, adjuster, compliance — can verify this POD against our published public key. No account.',
    visual: <VerifiedVisual />,
  },
];

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function LifecycleStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = -rect.top / scrollable;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  const panelCount = panels.length;
  const translateX = isMobile ? 0 : -(progress * (panelCount - 1) * 100);

  return (
    <section
      ref={sectionRef}
      id="lifecycle"
      className="relative border-t border-border"
      style={{
        height: isMobile ? 'auto' : `${panelCount * 100}vh`,
      }}
      aria-label="Load lifecycle walkthrough"
    >
      {/* Header — always visible */}
      {!isMobile && (
        <div className="sticky top-0 z-20 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-6">
            <span className="eyebrow pointer-events-auto">The full picture</span>
            <div className="flex items-center gap-3">
              {panels.map((p, i) => {
                const active = progress >= i / panelCount && progress < (i + 1) / panelCount;
                return (
                  <div key={p.step} className="flex items-center gap-2">
                    <div
                      className="transition-all duration-300"
                      style={{
                        width: active ? 28 : 8,
                        height: 4,
                        borderRadius: 4,
                        background: active ? '#0B5FFF' : '#CFC6A9',
                      }}
                    />
                    {active && (
                      <span className="font-mono text-[10px] text-accent font-bold">
                        {p.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Sticky viewport */}
      <div
        className={isMobile ? '' : 'sticky top-0 h-screen overflow-hidden'}
      >
        {/* Mobile: vertical stack */}
        {isMobile ? (
          <div className="py-16 px-5 space-y-16">
            <div className="text-center">
              <span className="eyebrow">The full picture</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight leading-tight">
                One load. Start to finish.
              </h2>
            </div>
            {panels.map((panel) => (
              <MobilePanel key={panel.step} panel={panel} />
            ))}
          </div>
        ) : (
          /* Desktop: horizontal sliding track */
          <div
            ref={trackRef}
            className="h-full flex transition-transform duration-100 ease-out will-change-transform"
            style={{
              width: `${panelCount * 100}vw`,
              transform: `translateX(${translateX}vw)`,
            }}
          >
            {panels.map((panel) => (
              <DesktopPanel key={panel.step} panel={panel} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop panel                                                       */
/* ------------------------------------------------------------------ */
function DesktopPanel({ panel }: { panel: Panel }) {
  return (
    <div
      className="h-full flex items-center justify-center px-16 lg:px-24"
      style={{ width: '100vw', minWidth: '100vw' }}
    >
      <div className="grid grid-cols-2 gap-16 lg:gap-24 max-w-6xl w-full items-center">
        {/* Text */}
        <div className="max-w-lg">
          <div className="chip mb-6">
            <span className="font-mono text-[11px] opacity-70">{panel.step}</span>
            {panel.label}
          </div>
          <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {panel.headline}
          </h3>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-md">
            {panel.sub}
          </p>
        </div>

        {/* Visual */}
        <div className="flex justify-center">{panel.visual}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile panel                                                        */
/* ------------------------------------------------------------------ */
function MobilePanel({ panel }: { panel: Panel }) {
  return (
    <div>
      <div className="chip mb-4">
        <span className="font-mono text-[11px] opacity-70">{panel.step}</span>
        {panel.label}
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight leading-tight">
        {panel.headline}
      </h3>
      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{panel.sub}</p>
      <div className="mt-6 flex justify-center">{panel.visual}</div>
    </div>
  );
}

/* ================================================================== */
/* SVG visuals for each panel                                          */
/* ================================================================== */

function SealVisual() {
  return (
    <div className="card-shadow p-7 w-full max-w-[380px]">
      {/* Navy header */}
      <div className="bg-navy rounded-xl px-5 py-3.5 flex items-center justify-between mb-5">
        <span className="font-mono text-[10px] text-white/70 tracking-[0.14em]">
          FREIGHT PASSPORT
        </span>
        <span className="font-mono text-[10px] text-white/40">v1</span>
      </div>

      <div className="font-mono text-[10px] text-ink-subtle tracking-widest">LOAD ID</div>
      <div className="font-mono text-lg font-bold text-ink mt-0.5">FP-260409-00712</div>

      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-accent-wash border border-accent/20">
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
            <rect x="10" y="22" width="28" height="18" rx="3" fill="#0A1628" />
            <path d="M16 22v-6a8 8 0 0116 0v6" stroke="#0A1628" strokeWidth="3" fill="none" />
            <circle cx="24" cy="31" r="2.5" fill="#0B5FFF" />
          </svg>
          <span className="font-mono text-[11px] font-bold text-accent">AES-256</span>
        </div>

        <div className="w-px h-8 bg-border" />

        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-accent-wash border border-accent/20">
          <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
            <circle cx="18" cy="24" r="8" stroke="#0B5FFF" strokeWidth="2.5" fill="none" />
            <line x1="26" y1="24" x2="42" y2="24" stroke="#0B5FFF" strokeWidth="2.5" />
            <line x1="36" y1="24" x2="36" y2="18" stroke="#0B5FFF" strokeWidth="2.5" />
          </svg>
          <span className="font-mono text-[11px] font-bold text-accent">Ed25519</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold border" style={{ background: '#FAEBBC', color: '#4A3009', borderColor: '#D4A24C' }}>
          BROKER · GOLD
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold border" style={{ background: '#EEF2F7', color: '#2A3442', borderColor: '#A9B3C1' }}>
          CARRIER · SILVER
        </span>
      </div>
    </div>
  );
}

function UnlockVisual() {
  const signals = [
    { label: 'Geofence', status: 'PASS', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' },
    { label: 'Live photo', status: 'PASS', icon: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z' },
    { label: 'SMS OTP', status: 'PASS', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72' },
  ];

  return (
    <div className="w-full max-w-[340px] space-y-3">
      {signals.map((s) => (
        <div key={s.label} className="card-shadow px-5 py-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent-wash flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B5FFF" strokeWidth="2">
              <path d={s.icon} />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-ink">{s.label}</div>
          </div>
          <span className="font-mono text-[11px] font-bold text-success">
            {s.status}
          </span>
        </div>
      ))}

      <div className="rounded-xl bg-success-wash border border-success/30 px-5 py-3.5 text-center">
        <span className="font-mono text-[13px] font-bold text-success tracking-wider">
          PICKUP # UNLOCKED
        </span>
      </div>
    </div>
  );
}

function CarryVisual() {
  return (
    <div className="card-shadow p-6 w-full max-w-[420px]">
      <svg viewBox="0 0 380 120" className="w-full" role="img" aria-label="Transit route with check-ins">
        {/* Route */}
        <line x1="30" y1="60" x2="350" y2="60" stroke="#E6E0CF" strokeWidth="2" />
        <line x1="30" y1="60" x2="250" y2="60" stroke="#0B5FFF" strokeWidth="2.5" className="animate-flow-dash" />

        {/* Origin */}
        <circle cx="30" cy="60" r="7" fill="#E8EEFF" stroke="#0B5FFF" strokeWidth="2" />
        <circle cx="30" cy="60" r="3" fill="#0B5FFF" />
        <text x="30" y="88" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,monospace" fill="#94A3B8">ORIGIN</text>

        {/* Dest */}
        <circle cx="350" cy="60" r="7" fill="#E8EEFF" stroke="#0B5FFF" strokeWidth="2" />
        <circle cx="350" cy="60" r="3" fill="#0B5FFF" />
        <text x="350" y="88" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,monospace" fill="#94A3B8">DEST</text>

        {/* Check-in pings */}
        {[
          { x: 120, label: 'CHECK-IN 1' },
          { x: 190, label: 'CHECK-IN 2' },
          { x: 260, label: 'CHECK-IN 3' },
        ].map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy="60" r="4.5" fill="#0B5FFF" />
            <circle cx={p.x} cy="60" r="10" fill="none" stroke="#0B5FFF" strokeWidth="1.2" opacity="0.3" />
            <text x={p.x} y="40" textAnchor="middle" fontSize="8" fontFamily="ui-monospace,monospace" fill="#0B5FFF" fontWeight="700">{p.label}</text>
            <text x={p.x} y="28" textAnchor="middle" fontSize="7" fontFamily="ui-monospace,monospace" fill="#94A3B8">Ed25519</text>
          </g>
        ))}

        {/* Truck */}
        <g transform="translate(240, 47)">
          <rect x="-10" y="-4" width="16" height="10" rx="1.5" fill="#0A1628" />
          <rect x="4" y="-2" width="8" height="8" rx="1" fill="#0A1628" />
          <circle cx="-4" cy="8" r="2.2" fill="#475569" />
          <circle cx="9" cy="8" r="2.2" fill="#475569" />
        </g>
      </svg>
    </div>
  );
}

function SignVisual() {
  return (
    <div className="card-shadow p-7 w-full max-w-[360px]">
      <div className="font-mono text-[10px] text-ink-subtle tracking-widest">
        PROOF OF DELIVERY
      </div>
      <div className="font-mono text-base font-bold text-ink mt-1">FP-260409-00712</div>

      <div className="mt-5 border-2 border-dashed border-border-strong rounded-xl p-5 bg-bg-tint relative">
        <svg viewBox="0 0 260 60" className="w-full h-14">
          <path
            d="M 8 38 Q 24 8 40 34 T 72 30 Q 88 14 104 38 T 136 28 Q 152 42 168 22 T 200 34 L 252 26"
            stroke="#0A1628"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute bottom-2 right-3 font-mono text-[9px] text-ink-subtle">
          stroke vectors captured
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B5FFF" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="font-mono text-[11px] font-bold text-accent">
          BOUND TO LOAD · CANNOT BE REUSED
        </span>
      </div>
    </div>
  );
}

function ScreenVisual() {
  const rules = [
    'Rule 01 · Signature reuse',
    'Rule 02 · Physical impossibility',
    'Rule 05 · Face mismatch',
    'Rule 13 · Ghost delivery',
    'Rule 16 · Self-dealing',
    'Rule 23 · Route divergence',
  ];

  return (
    <div
      className="w-full max-w-[360px] rounded-2xl border border-white/10 p-5"
      style={{
        background: '#0A1628',
        boxShadow: '0 24px 50px -20px rgba(10,22,40,0.5)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
          <div className="w-2 h-2 rounded-full bg-[#D4A24C]" />
          <div className="w-2 h-2 rounded-full bg-[#047857]" />
        </div>
        <span className="font-mono text-[9px] text-white/40 tracking-widest">FRAUD ENGINE</span>
      </div>

      {rules.map((rule, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 py-2"
          style={{ borderBottom: i < rules.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono text-[11px] text-white/70">{rule}</span>
          <span className="ml-auto font-mono text-[9px] text-white/30">PASS</span>
        </div>
      ))}

      <div className="mt-3 text-center font-mono text-[10px] text-[#6B8FFF]">
        34/34 passed · 0.7ms
      </div>
    </div>
  );
}

function VerifiedVisual() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="rounded-xl border-[3.5px] border-success px-10 py-5 font-mono text-2xl font-extrabold tracking-[0.2em] text-success animate-stamp"
        style={{
          background: 'rgba(255,255,255,0.85)',
          boxShadow: 'inset 0 0 0 2.5px rgba(4,120,87,0.12), 0 20px 40px -16px rgba(4,120,87,0.3)',
        }}
      >
        AUTHENTIC
      </div>
      <div className="font-mono text-[11px] text-ink-subtle text-center">
        load_sig ✓ · platform_sig ✓ · publicly verifiable
      </div>
    </div>
  );
}
