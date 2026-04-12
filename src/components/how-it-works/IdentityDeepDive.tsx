const members = [
  { name: 'Eric Farrell', role: 'Broker Rep', verified: true, loads: 127 },
  { name: 'Sarah Chen', role: 'Manager', verified: true, loads: 243 },
  { name: 'New Hire', role: 'Broker Rep', verified: false, loads: 0 },
];

const tiers = [
  {
    name: 'Bronze',
    color: '#CD7F32',
    timing: 'Automated, ~60 seconds',
    requirements: [
      'MC confirmed via FMCSA SAFER API',
      'Phone OTP to FMCSA-listed number',
      'OpenCorporates entity match',
      'Email confirmed',
    ],
    capabilities: [
      'Loads up to $10k',
      'Max 3 active loads',
      'First 30 days spot-checked',
    ],
    badge: 'FMCSA-verified. New to FreightPassport.',
  },
  {
    name: 'Silver',
    color: '#A0AEC0',
    timing: 'Automated + docs, ~24 hours',
    requirements: [
      'All Bronze requirements',
      'Insurance cert (Claude Vision OCR)',
      'Bank account (Plaid)',
      '30 days + 5 loads clean',
    ],
    capabilities: [
      'Loads up to $75k',
      'Unlimited active loads',
      'Load Registry access',
    ],
    badge: 'Insurance verified. Banking verified. Clean history.',
  },
  {
    name: 'Gold',
    color: '#D4AF37',
    timing: 'Manual, 5–15 min founder time',
    requirements: [
      'All Silver requirements',
      '5-min video call with FP staff',
      '90 days + 50 loads',
      'Zero critical flags',
    ],
    capabilities: [
      'Any load value',
      'Priority fraud handling',
      'Gold logo on PDFs',
      'Beta features',
    ],
    badge: 'Manually verified by FreightPassport.',
  },
];

const driverTouchpoints = [
  {
    moment: 'First load ever',
    action: 'Click link \u2192 enter name, CDL#, selfie',
    time: '~3 min',
    replaces: 'Paper carrier packet',
  },
  {
    moment: 'At pickup dock',
    action: 'Tap link \u2192 selfie + truck photo \u2192 OTP',
    time: '~30 sec',
    replaces: '5\u201310 min paper signing',
  },
  {
    moment: 'During transit',
    action: 'Tap link in SMS',
    time: '~5 sec',
    replaces: '2\u20135 min dispatcher call',
  },
  {
    moment: 'Going to sleep',
    action: 'Reply \u201csleep\u201d',
    time: '~3 sec',
    replaces: 'Phone call to dispatch',
  },
  {
    moment: 'At delivery',
    action: 'Tap link \u2192 selfie',
    time: '~15 sec',
    replaces: '10\u201330 min paper POD wait',
  },
];

export default function IdentityDeepDive() {
  return (
    <section
      id="identity-tiers"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="identity-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Part 1: Two-layer model ── */}
        <span className="eyebrow">Verified parties</span>

        <h2
          id="identity-heading"
          className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          Real people behind every&nbsp;signature.
        </h2>

        <p className="mt-7 text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
          The document chain is only as trustworthy as the identities behind it.
          2025 Fraud Fighters winner Highway excels at verifying the carrier
          before tender. FreightPassport extends that foundation downstream —
          every Organization and Member must be verified before any load can
          be&nbsp;sealed.
        </p>

        {/* Two-layer diagram */}
        <div className="mt-14 flex flex-col items-center">
          {/* Organization card */}
          <div className="card-shadow p-6 w-full max-w-lg">
            <p className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-4">
              Organization layer
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-ink">
              MODE Transportation
            </h3>
            <div className="mt-4 space-y-2.5">
              <OrgField label="MC#" value="MC-12345" verified />
              <OrgField label="FMCSA phone" value="Verified" verified />
              <OrgField label="Insurance" value="Verified" verified />
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-ink-muted w-24 flex-shrink-0">Tier</span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ color: '#D4AF37', backgroundColor: 'rgba(212,175,55,0.12)' }}
                >
                  <ShieldIcon color="#D4AF37" size={12} />
                  Gold
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-ink-muted w-24 flex-shrink-0">Loads</span>
                <span className="font-mono text-[11px] text-ink">847 completed</span>
              </div>
            </div>
          </div>

          {/* Connecting lines */}
          <div className="relative w-full max-w-lg h-12" aria-hidden="true">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 w-px h-6 bg-border-strong -translate-x-px" />
            {/* Horizontal bar */}
            <div className="absolute top-6 left-[15%] right-[15%] h-px bg-border-strong" />
            {/* Three drops */}
            <div className="absolute top-6 left-[15%] w-px h-6 bg-border-strong" />
            <div className="absolute top-6 left-1/2 w-px h-6 bg-border-strong -translate-x-px" />
            <div className="absolute top-6 right-[15%] w-px h-6 bg-border-strong" />
          </div>

          {/* Trust flows down label */}
          <p className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3 text-center">
            Trust flows down &mdash; members can&rsquo;t outrank their org
          </p>

          {/* Member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
            {members.map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-bg-tint border border-border mx-auto mb-3 flex items-center justify-center">
                  <PersonIcon />
                </div>
                <p className="font-bold text-ink text-sm">{m.name}</p>
                <p className="text-[11px] font-mono text-ink-muted mt-1">
                  {m.role}
                </p>
                <p
                  className={`mt-2 text-xs font-semibold ${
                    m.verified ? 'text-success' : 'text-warning'
                  }`}
                >
                  {m.verified ? 'Verified' : 'Unverified'}
                </p>
                <p className="mt-1 text-[11px] font-mono text-ink-subtle">
                  {m.loads} loads
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Part 2: Tier progression ── */}
        <hr className="hairline my-20" />

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink">
          Three tiers. Earned, not&nbsp;bought.
        </h2>

        <p className="mt-5 text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
          Every organization starts at Bronze. Higher tiers unlock higher load
          values, more capabilities, and stronger trust&nbsp;signals.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="card-shadow overflow-hidden flex flex-col"
            >
              {/* Colored top border */}
              <div
                className="h-1"
                style={{ backgroundColor: tier.color }}
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Badge icon + name */}
                <div className="flex items-center gap-3 mb-1">
                  <ShieldIcon color={tier.color} size={24} />
                  <h3 className="text-xl md:text-2xl font-bold text-ink">
                    {tier.name}
                  </h3>
                </div>
                <p className="text-[11px] font-mono text-ink-muted mb-5">
                  {tier.timing}
                </p>

                {/* Requirements */}
                <p className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
                  Requirements
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.requirements.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <GreenCheck />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Capabilities */}
                <p className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-3">
                  Capabilities
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <Bullet color={tier.color} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {/* Badge text */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm italic text-ink-muted">{tier.badge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Part 3: Driver simplicity callout ── */}
        <hr className="hairline my-20" />

        <div className="bg-bg-tint rounded-2xl p-6 md:p-8 border border-border">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink">
            The driver just&nbsp;drives.
          </h2>

          <p className="mt-5 text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            No app. No password. No training. Every driver interaction is a
            single SMS&nbsp;link.
          </p>

          {/* Touchpoint rows */}
          <div className="mt-10 space-y-0">
            {/* Header row — hidden on mobile */}
            <div className="hidden md:grid grid-cols-4 gap-4 pb-3 border-b border-border-strong">
              {['Moment', 'What they do', 'Time', 'Replaces'].map((h) => (
                <span
                  key={h}
                  className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle"
                >
                  {h}
                </span>
              ))}
            </div>

            {driverTouchpoints.map((tp, i) => (
              <div
                key={tp.moment}
                className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 ${
                  i < driverTouchpoints.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >
                <div>
                  <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                    Moment
                  </span>
                  <p className="font-bold text-ink text-sm">{tp.moment}</p>
                </div>
                <div>
                  <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                    What they do
                  </span>
                  <p className="text-sm text-ink-muted">{tp.action}</p>
                </div>
                <div>
                  <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                    Time
                  </span>
                  <p className="font-mono text-[11px] text-accent font-bold">
                    {tp.time}
                  </p>
                </div>
                <div>
                  <span className="md:hidden text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                    Replaces
                  </span>
                  <p className="text-sm text-ink-subtle line-through">
                    {tp.replaces}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary line */}
          <div className="mt-8 pt-6 border-t border-border-strong">
            <p className="text-base md:text-lg text-ink font-bold">
              Total: ~2 minutes of active interaction per load.
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              No app download. No password. No configuration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Icons ─── */

function GreenCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Bullet({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" fill={color} />
    </svg>
  );
}

function ShieldIcon({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-ink-muted"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 21v-1a6 6 0 0112 0v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OrgField({
  label,
  value,
  verified,
}: {
  label: string;
  value: string;
  verified: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 text-sm">
      <span className="text-ink-muted w-24 flex-shrink-0">{label}</span>
      <span className="font-mono text-[11px] text-ink">{value}</span>
      {verified && <GreenCheck />}
    </div>
  );
}
