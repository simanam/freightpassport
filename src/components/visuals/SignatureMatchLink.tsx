/**
 * A small visual callout showing two signature waveforms being matched
 * with a cosine similarity bubble and a "match" line connecting them.
 */
export default function SignatureMatchLink() {
  return (
    <div
      className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-white border border-critical/40 pl-3 pr-4 py-2"
      style={{
        boxShadow: '0 12px 28px -16px rgba(220,38,38,0.45)',
      }}
      role="note"
      aria-label="Signature fingerprint match"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-critical"
        aria-hidden="true"
      >
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 60 18" className="w-14 h-4" aria-hidden="true">
          <path
            d="M2 12 C 8 2, 12 18, 18 6 S 30 16, 36 8 S 50 14, 58 10"
            stroke="#DC2626"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-mono text-[11px] font-bold text-critical">SIG MATCH</span>
        <svg viewBox="0 0 60 18" className="w-14 h-4" aria-hidden="true">
          <path
            d="M2 12 C 8 2, 12 18, 18 6 S 30 16, 36 8 S 50 14, 58 10"
            stroke="#DC2626"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="font-mono text-[11px] text-critical/80 pl-1 border-l border-critical/30">
        cosine 1.00
      </span>
    </div>
  );
}
