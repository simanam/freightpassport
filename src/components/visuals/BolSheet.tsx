/**
 * Visual "paper" Bill of Lading sheet. Used in the fraud case section.
 */
type Props = {
  number: string;
  date: string;
  items: string[];
  state: 'forged' | 'authentic';
};

export default function BolSheet({ number, date, items, state }: Props) {
  const forged = state === 'forged';

  return (
    <div
      className={[
        'relative rounded-lg bg-white border overflow-hidden transition-transform',
        forged ? 'border-critical-border rotate-[-0.6deg]' : 'border-success-border rotate-[0.4deg]',
      ].join(' ')}
      style={{
        boxShadow:
          '0 1px 0 rgba(10,22,40,.03), 0 24px 50px -24px rgba(10,22,40,.22)',
      }}
    >
      {/* perforated top edge */}
      <div
        aria-hidden="true"
        className="h-1 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #0A1628 0 6px, transparent 6px 12px)',
          opacity: 0.12,
        }}
      />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-widest text-ink-subtle">
            Bill of Lading
          </span>
          <span className="font-mono text-[10px] text-ink-subtle">#{number}</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-ink-subtle">Origin</div>
            <div className="font-mono text-[11px] text-ink mt-0.5">LIVONIA, MI</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-ink-subtle">Destination</div>
            <div className="font-mono text-[11px] text-ink mt-0.5">RICHMOND, CA</div>
          </div>
        </div>

        {/* item lines (paper feel) */}
        <ul className="mt-4 space-y-1.5">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[12px] text-ink border-b border-dashed border-border pb-1"
            >
              <span className="inline-block w-3 text-right font-mono text-[10px] text-ink-subtle">
                {i + 1}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        {/* signature box */}
        <div className="mt-5">
          <div className="text-[9px] uppercase tracking-widest text-ink-subtle mb-1">
            Receiver Signature
          </div>
          <div
            className={[
              'rounded border border-dashed p-2 h-12 flex items-center',
              forged ? 'border-critical/50 bg-critical-wash/60' : 'border-border',
            ].join(' ')}
          >
            {forged ? (
              // Pasted image signature — static, identical on both forged BOLs
              <svg viewBox="0 0 180 28" className="h-6 w-full" aria-hidden="true">
                <path
                  d="M4 18 C 14 2, 26 24, 38 10 S 62 22, 74 8 S 104 22, 118 10 S 150 22, 176 12"
                  stroke="#DC2626"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Authentic stroke — different curve
              <svg viewBox="0 0 180 28" className="h-6 w-full" aria-hidden="true">
                <path
                  d="M4 20 Q 20 4, 36 18 T 70 14 Q 86 26, 104 10 Q 128 2, 150 20 L 176 12"
                  stroke="#047857"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-ink-subtle">Signed</div>
            <div className="font-mono text-[11px] text-ink mt-0.5">{date}</div>
          </div>
          <span
            className={[
              'inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border',
              forged
                ? 'text-critical bg-critical-wash border-critical/40'
                : 'text-success bg-success-wash border-success/40',
            ].join(' ')}
          >
            <span
              className={[
                'h-1.5 w-1.5 rounded-full',
                forged ? 'bg-critical' : 'bg-success',
              ].join(' ')}
              aria-hidden="true"
            />
            {forged ? 'Forged' : 'Authentic'}
          </span>
        </div>
      </div>

      {/* Stamp overlay */}
      <div className="pointer-events-none absolute right-3 top-8 rotate-[-14deg] animate-stamp">
        <div
          className={[
            'rounded-md border-[2.5px] px-2.5 py-1 font-mono text-[9px] font-extrabold tracking-[0.18em]',
            forged
              ? 'text-critical border-critical bg-white/60'
              : 'text-success border-success bg-white/60',
          ].join(' ')}
        >
          {forged ? 'DUPLICATE' : 'AUTHENTIC'}
        </div>
      </div>
    </div>
  );
}
