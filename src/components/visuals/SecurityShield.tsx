/**
 * Concentric "layers of defense" shield. Labels sit on each ring.
 * Pure SVG. Scales to any width; the container controls size.
 */
export default function SecurityShield() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label="Security layers">
        <defs>
          <radialGradient id="shieldCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B5FFF" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#0B5FFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0B5FFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B5FFF" />
            <stop offset="1" stopColor="#6B8FFF" />
          </linearGradient>
        </defs>

        {/* glow core */}
        <circle cx="200" cy="200" r="190" fill="url(#shieldCore)" />

        {/* Ring 0 (outermost): Identity tiers */}
        <circle cx="200" cy="200" r="188" fill="none" stroke="#D4A24C" strokeWidth="2.5" />
        <circle cx="200" cy="200" r="184" fill="none" stroke="#CFC6A9" strokeWidth="1" strokeDasharray="1 3" />
        {/* Ring 1: Rate limiting */}
        <circle cx="200" cy="200" r="156" fill="none" stroke="#CFC6A9" strokeWidth="1" strokeDasharray="2 4" />
        {/* Ring 2: TLS / CORS */}
        <circle cx="200" cy="200" r="128" fill="none" stroke="#CFC6A9" strokeWidth="1" />
        {/* Ring 3: Ed25519 signing */}
        <circle cx="200" cy="200" r="102" fill="none" stroke="url(#ring)" strokeWidth="1.5" />
        {/* Ring 4: AES encryption */}
        <circle cx="200" cy="200" r="78" fill="none" stroke="url(#ring)" strokeWidth="2" />
        {/* Ring 5: Append-only DB */}
        <circle cx="200" cy="200" r="52" fill="#fff" stroke="#0B5FFF" strokeWidth="2.5" />

        {/* Orbit dots showing "scanning" */}
        <circle cx="200" cy="8" r="4" fill="#D4A24C" className="animate-pulse-dot" />
        <circle cx="392" cy="200" r="3" fill="#0B5FFF" opacity="0.7" />
        <circle cx="200" cy="392" r="3" fill="#0B5FFF" opacity="0.5" />
        <circle cx="8" cy="200" r="3" fill="#0B5FFF" opacity="0.7" />

        {/* Core lock icon */}
        <g transform="translate(200,200)">
          <rect x="-16" y="-6" width="32" height="22" rx="3" fill="#0A1628" />
          <path d="M-10 -6 v-8 a10 10 0 0 1 20 0 v8" stroke="#0A1628" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="0" cy="4" r="3" fill="#0B5FFF" />
          <rect x="-1" y="4" width="2" height="6" fill="#0B5FFF" />
        </g>

        {/* Ring labels — use SVG text aligned to their ring */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fontWeight="700" fill="#475569">
          <text x="200" y="22" textAnchor="middle" letterSpacing="1.6" fill="#8A5E14">IDENTITY TIERS · ORG + MEMBER</text>
          <text x="200" y="52" textAnchor="middle" letterSpacing="1.2">RATE LIMITING · 429 ON ABUSE</text>
          <text x="200" y="80" textAnchor="middle" letterSpacing="1.0" fill="#0A1628">TLS 1.3 · CORS ALLOWLIST</text>
          <text x="200" y="106" textAnchor="middle" letterSpacing="1.0" fill="#083ECB">Ed25519 · PER-LOAD KEYPAIR</text>
          <text x="200" y="130" textAnchor="middle" letterSpacing="0.8" fill="#083ECB">AES-256-GCM · PICKUP #</text>
          <text x="200" y="156" textAnchor="middle" letterSpacing="0.6" fontWeight="700" fill="#0A1628">APPEND-ONLY POSTGRES</text>
        </g>
      </svg>
    </div>
  );
}
