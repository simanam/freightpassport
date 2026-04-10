/**
 * A visual mockup of the public POD verifier. A paper POD "slides" into the
 * scan pane and a result card below says "Authentic".
 */
export default function VerifierPanel() {
  return (
    <div
      className="relative card-shadow p-6 md:p-7"
      aria-label="Public POD verifier mockup"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-critical/60" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-warning/60" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-success/60" aria-hidden="true" />
        </div>
        <span className="font-mono text-[10px] text-ink-subtle">
          verify.freightpassport.io
        </span>
      </div>

      {/* Scan pane */}
      <div className="mt-5 rounded-xl border-2 border-dashed border-border-strong bg-bg-tint p-6 flex items-center justify-center relative overflow-hidden min-h-[180px]">
        {/* Paper POD entering from top */}
        <div className="relative w-[180px] h-[120px] rounded bg-white border border-border-strong shadow-[0_14px_28px_-18px_rgba(10,22,40,0.3)]">
          <div
            className="h-1 w-full"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #0A1628 0 4px, transparent 4px 8px)',
              opacity: 0.12,
            }}
          />
          <div className="p-3">
            <div className="text-[8px] uppercase tracking-widest text-ink-subtle">
              Proof of Delivery
            </div>
            <div className="font-mono text-[9px] text-ink mt-0.5">FP-260409-00712</div>
            <div className="mt-2 space-y-1">
              <div className="h-0.5 w-full bg-border rounded" />
              <div className="h-0.5 w-5/6 bg-border rounded" />
              <div className="h-0.5 w-4/6 bg-border rounded" />
            </div>
            <svg viewBox="0 0 120 20" className="mt-2 h-3 w-full" aria-hidden="true">
              <path
                d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12 T 118 12"
                stroke="#0A1628"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Scan line */}
        <div
          aria-hidden="true"
          className="absolute left-4 right-4 h-px bg-accent/80"
          style={{
            top: '50%',
            boxShadow: '0 0 12px 2px rgba(11,95,255,0.45)',
          }}
        />
      </div>

      {/* Result */}
      <div className="mt-5 rounded-xl border border-success/30 bg-success-wash p-4 flex items-start gap-3">
        <div className="mt-0.5 h-7 w-7 rounded-full bg-success flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-success">Authentic</div>
          <div className="mt-0.5 font-mono text-[11px] text-ink-muted break-all">
            load_sig ✓ · platform_sig ✓ · signed 2026-04-09T14:32Z
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px] text-ink-subtle font-mono">
        Drop any FreightPassport POD → verified in milliseconds.
      </p>
    </div>
  );
}
