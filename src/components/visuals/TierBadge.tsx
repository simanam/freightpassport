/**
 * Credential-style tier medallion. Renders Bronze / Silver / Gold as a
 * circular badge with a ring of microtype, a laurel sweep, and a
 * tier-colored rim. Pure SVG; scales to any size via the `size` prop.
 *
 * Usage: <TierBadge tier="gold" size={120} />
 */
type Tier = 'bronze' | 'silver' | 'gold';

const PALETTE: Record<
  Tier,
  { rim: string; rimDeep: string; face: string; ink: string; shine: string }
> = {
  bronze: {
    rim: '#C08A5B',
    rimDeep: '#8A5A2F',
    face: '#F5E4D0',
    ink: '#5A3A1C',
    shine: '#FFD9B5',
  },
  silver: {
    rim: '#A9B3C1',
    rimDeep: '#6B7684',
    face: '#EEF2F7',
    ink: '#2A3442',
    shine: '#FFFFFF',
  },
  gold: {
    rim: '#D4A24C',
    rimDeep: '#8A5E14',
    face: '#FAEBBC',
    ink: '#4A3009',
    shine: '#FFF1BE',
  },
};

export default function TierBadge({
  tier,
  size = 96,
  label,
}: {
  tier: Tier;
  size?: number;
  label?: string;
}) {
  const p = PALETTE[tier];
  const id = `tier-${tier}`;
  const microtype =
    label ??
    `FREIGHT PASSPORT · ${tier.toUpperCase()} · VERIFIED · FREIGHT PASSPORT · ${tier.toUpperCase()} · VERIFIED · `;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label={`${tier} tier credential`}
    >
      <defs>
        <radialGradient id={`${id}-face`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={p.shine} />
          <stop offset="55%" stopColor={p.face} />
          <stop offset="100%" stopColor={p.rim} />
        </radialGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.rim} />
          <stop offset="1" stopColor={p.rimDeep} />
        </linearGradient>
        {/* circular text path */}
        <path
          id={`${id}-circle`}
          d="M 60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0"
          fill="none"
        />
      </defs>

      {/* outer rim */}
      <circle cx="60" cy="60" r="58" fill={`url(#${id}-rim)`} />
      <circle cx="60" cy="60" r="54" fill={p.face} />

      {/* microtype ring */}
      <text
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="6"
        fontWeight="700"
        letterSpacing="1.2"
        fill={p.ink}
        opacity="0.75"
      >
        <textPath href={`#${id}-circle`} startOffset="0">
          {microtype}
        </textPath>
      </text>

      {/* inner field */}
      <circle
        cx="60"
        cy="60"
        r="40"
        fill={`url(#${id}-face)`}
        stroke={p.rim}
        strokeWidth="1"
      />

      {/* laurel left */}
      <g stroke={p.rimDeep} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M 32 52 Q 28 60 34 72" />
        <path d="M 33 54 q -4 0 -5 3" />
        <path d="M 32 60 q -4 0 -5 3" />
        <path d="M 33 66 q -4 1 -4 4" />
      </g>
      {/* laurel right */}
      <g stroke={p.rimDeep} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8">
        <path d="M 88 52 Q 92 60 86 72" />
        <path d="M 87 54 q 4 0 5 3" />
        <path d="M 88 60 q 4 0 5 3" />
        <path d="M 87 66 q 4 1 4 4" />
      </g>

      {/* shield inner */}
      <path
        d="M 60 40 L 74 46 L 74 60 Q 74 70 60 78 Q 46 70 46 60 L 46 46 Z"
        fill={p.rimDeep}
      />
      {/* checkmark */}
      <path
        d="M 52 58 L 58 64 L 68 52"
        stroke={p.face}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* tier label underneath shield */}
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="7.5"
        fontWeight="800"
        letterSpacing="1.8"
        fill={p.ink}
      >
        {tier.toUpperCase()}
      </text>
    </svg>
  );
}
