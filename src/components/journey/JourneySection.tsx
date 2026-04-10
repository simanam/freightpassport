/**
 * End-to-end visual flow: five nodes connected with animated dashed lines.
 * Each node is a SVG illustration + one-line label. No long prose.
 */

type Node = {
  key: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
};

const Lock = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="10" y="22" width="28" height="18" rx="3" fill="#0A1628" />
    <path d="M16 22v-6a8 8 0 0116 0v6" stroke="#0A1628" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="24" cy="31" r="2.6" fill="#0B5FFF" />
    <rect x="23" y="31" width="2" height="5" fill="#0B5FFF" />
  </svg>
);

const Dock = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="6" y="18" width="22" height="16" rx="2" fill="#0A1628" />
    <rect x="28" y="22" width="14" height="12" rx="1.5" fill="#0A1628" />
    <circle cx="14" cy="38" r="3.5" fill="#fff" stroke="#0A1628" strokeWidth="2" />
    <circle cx="34" cy="38" r="3.5" fill="#fff" stroke="#0A1628" strokeWidth="2" />
    {/* three signal dots */}
    <circle cx="18" cy="10" r="2.2" fill="#0B5FFF" />
    <circle cx="24" cy="10" r="2.2" fill="#0B5FFF" />
    <circle cx="30" cy="10" r="2.2" fill="#0B5FFF" />
  </svg>
);

const Truck = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="5" y="18" width="22" height="14" rx="2" fill="#0A1628" />
    <path d="M27 22h9l5 6v4H27z" fill="#0A1628" />
    <circle cx="13" cy="36" r="3.5" fill="#fff" stroke="#0A1628" strokeWidth="2" />
    <circle cx="34" cy="36" r="3.5" fill="#fff" stroke="#0A1628" strokeWidth="2" />
    {/* gps ping */}
    <circle cx="24" cy="8" r="3" fill="#0B5FFF" />
    <circle cx="24" cy="8" r="6" stroke="#0B5FFF" strokeWidth="1.4" fill="none" opacity="0.35" />
  </svg>
);

const Signature = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="6" y="8" width="36" height="32" rx="3" fill="#fff" stroke="#0A1628" strokeWidth="2" />
    <path d="M10 26 Q14 16 18 26 T26 26 T34 26" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M10 32h28" stroke="#0B5FFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Shield = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M24 6l15 5v11c0 9-7 16-15 20-8-4-15-11-15-20V11l15-5z"
      fill="#0A1628"
    />
    <path d="M17 23l5 5 9-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const nodes: Node[] = [
  { key: 'seal',    label: 'Seal',    sub: 'Pickup # encrypted · Ed25519 keypair minted',   icon: Lock },
  { key: 'unlock',  label: 'Unlock',  sub: 'Geofence + live photo + SMS OTP at the dock',    icon: Dock },
  { key: 'carry',   label: 'Carry',   sub: 'Signed transit check-ins · ELD or SMS every 4 hrs', icon: Truck },
  { key: 'sign',    label: 'Sign',    sub: 'Receiver signs on their own device',             icon: Signature },
  { key: 'prove',   label: 'Prove',   sub: 'Physics check + 34 fraud rules · POD verifiable anywhere', icon: Shield },
];

export default function JourneySection() {
  return (
    <section
      id="flow"
      className="relative py-28 md:py-36 border-t border-border bg-bg-tint"
      aria-labelledby="flow-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">End-to-end flow</span>
          <h2
            id="flow-heading"
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
          >
            One load. Five sealed moments.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted">
            Once parties are verified, every state change — from load creation through every
            transit check-in through delivery — is cryptographically bound to the one before
            it. Break the chain anywhere, the whole POD fails verification.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block mt-20">
          <FlowDesktop nodes={nodes} />
        </div>

        {/* Mobile: vertical flow */}
        <ol className="md:hidden mt-14 relative pl-12">
          <div className="absolute left-[26px] top-3 bottom-3 w-0.5 bg-border" aria-hidden="true" />
          {nodes.map((n, i) => (
            <li key={n.key} className="relative mb-8 last:mb-0">
              <div className="absolute -left-12 top-0 h-12 w-12 rounded-full bg-white border border-border-strong flex items-center justify-center">
                <div className="h-7 w-7">{n.icon}</div>
              </div>
              <div className="pt-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-ink">{n.label}</h3>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{n.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FlowDesktop({ nodes }: { nodes: Node[] }) {
  return (
    <div className="relative">
      {/* animated connector line */}
      <svg
        className="absolute left-0 right-0 top-12 h-1 w-full"
        viewBox="0 0 1000 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="60"
          y1="4"
          x2="940"
          y2="4"
          stroke="#CFC6A9"
          strokeWidth="1.5"
        />
        <line
          x1="60"
          y1="4"
          x2="940"
          y2="4"
          stroke="#0B5FFF"
          strokeWidth="2"
          className="animate-flow-dash"
        />
      </svg>

      <ol className="relative grid grid-cols-5 gap-4">
        {nodes.map((n, i) => (
          <li key={n.key} className="flex flex-col items-center text-center">
            {/* node circle */}
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-white border border-border-strong flex items-center justify-center shadow-[0_10px_24px_-14px_rgba(10,22,40,0.25)]">
                <div className="h-12 w-12">{n.icon}</div>
              </div>
              {/* step number */}
              <div className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full bg-accent text-white flex items-center justify-center font-mono text-[12px] font-bold">
                {i + 1}
              </div>
            </div>

            <h3 className="mt-6 text-lg font-bold text-ink">{n.label}</h3>
            <p className="mt-1.5 text-[13px] text-ink-muted leading-snug max-w-[160px]">
              {n.sub}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
