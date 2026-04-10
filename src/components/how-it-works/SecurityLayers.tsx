const defenseLayers = [
  {
    number: 1,
    title: 'Identity Foundation',
    description:
      'No load without Bronze. FMCSA phone OTP to government-listed number. OpenCorporates entity match. Progressive tiers: Bronze \u2192 Silver \u2192 Gold.',
  },
  {
    number: 2,
    title: 'Physical Presence',
    description:
      'Geofence (server-side Haversine, 150 m default). GPS + IP cross-check (MaxMind). GPS accuracy enforcement. Timestamp validation.',
  },
  {
    number: 3,
    title: 'Multi-Signal Verification',
    description:
      'Three independent signals must pass: geofence + live photo + SMS OTP. Any single failure blocks the pickup. Rate-limited to 3 OTP attempts per load.',
  },
  {
    number: 4,
    title: 'Cryptographic Binding',
    description:
      'Ed25519 per-load + platform keys. AES-256 encrypted pickup numbers. Hash-chained append-only audit log. External hash anchors every 6 hours.',
  },
  {
    number: 5,
    title: 'Continuous Monitoring',
    description:
      '34 fraud rules at every state transition. Delivery geofence kill switch (30-min sweeps). Cross-load signature fingerprinting (pgvector, 128-dim). Physical impossibility checks.',
  },
  {
    number: 6,
    title: 'Account Takeover Protection',
    description:
      'Step-up re-auth for sensitive actions. FMCSA phone OTP for high-risk operations. Behavioral anomaly detection (Rule 34). Session fingerprinting with known-device list.',
  },
];

const threats: Threat[] = [
  {
    threat: 'Magic-link email compromise',
    risk: 'High',
    mitigation: 'Geofence + device FP + 15-min TTL',
    future: 'v2.0: WebAuthn passkeys',
  },
  {
    threat: 'GPS spoofing (rooted device)',
    risk: 'Medium',
    mitigation: 'IP cross-check + accuracy + selfie',
    future: 'v2.0: device attestation',
  },
  {
    threat: 'Insider fraud at verified Org',
    risk: 'Medium',
    mitigation: 'Rule 16 + 20 + member-level flags',
    future: 'Evidence attribution',
  },
  {
    threat: 'Account takeover post-verification',
    risk: 'Medium',
    mitigation: 'Step-up re-auth + Rule 34',
    future: 'Continuous re-verification',
  },
  {
    threat: 'Database compromise',
    risk: 'Low',
    mitigation: 'Append-only trigger + external anchors',
    future: 'Quarterly key rotation',
  },
];

type Risk = 'High' | 'Medium' | 'Low';

interface Threat {
  threat: string;
  risk: Risk;
  mitigation: string;
  future: string;
}

const riskStyle: Record<Risk, string> = {
  High: 'text-critical',
  Medium: 'text-warning',
  Low: 'text-success',
};

export default function SecurityLayers() {
  return (
    <section
      id="security-layers"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="security-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Part 1: Threat model overview ── */}
        <span className="eyebrow">Security model</span>

        <h2
          id="security-heading"
          className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          Built for adversaries who read our&nbsp;docs.
        </h2>

        <p className="mt-6 text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
          Our threat model assumes the attacker has the QR token, the
          driver&rsquo;s email, possibly a stolen DOT/MC, and a VPN. They cannot
          be physically at the dock or control the FMCSA-registered&nbsp;phone.
        </p>

        {/* Assumption cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-critical-wash border border-[var(--color-critical-border)] rounded-xl p-5">
            <p className="text-sm font-bold uppercase tracking-widest text-critical mb-3">
              Attacker HAS
            </p>
            <p className="text-base md:text-lg text-ink-muted">
              QR token, driver email, stolen MC, phone&nbsp;+
              laptop&nbsp;+ VPN
            </p>
          </div>
          <div className="bg-success-wash border border-[var(--color-success-border)] rounded-xl p-5">
            <p className="text-sm font-bold uppercase tracking-widest text-success mb-3">
              Attacker CANNOT
            </p>
            <p className="text-base md:text-lg text-ink-muted">
              Be at the dock, defeat Ed25519, access FMCSA phone,
              spoof&nbsp;KMS
            </p>
          </div>
        </div>

        {/* ── Part 2: Defense layers ── */}
        <hr className="hairline my-20" />

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink">
          Six layers of&nbsp;defense
        </h2>

        <div className="mt-12 flex flex-col gap-5">
          {defenseLayers.map((layer) => (
            <div
              key={layer.number}
              className="card p-6 border-l-4 border-accent flex items-start gap-5"
            >
              <div className="bg-accent text-white font-mono font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                {layer.number}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-ink">
                  {layer.title}
                </h3>
                <p className="mt-2 text-base md:text-lg text-ink-muted">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Part 3: Known limitations table ── */}
        <div className="mt-20 bg-navy rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-xl md:text-2xl font-bold">
            Known limitations &mdash; published from day&nbsp;one
          </h3>
          <p className="mt-2 text-white/60 text-base md:text-lg">
            Hiding limitations signals naivety; naming them signals&nbsp;maturity.
          </p>

          {/* Header row */}
          <div className="mt-8 hidden md:grid grid-cols-[2fr_0.7fr_2fr_1.5fr] gap-4 pb-3 border-b border-white/10 text-[11px] font-mono uppercase tracking-widest text-white/40">
            <span>Threat</span>
            <span>Risk</span>
            <span>Mitigation</span>
            <span>Future</span>
          </div>

          {/* Rows */}
          <div className="mt-4 md:mt-0 flex flex-col gap-4 md:gap-0">
            {threats.map((t) => (
              <div
                key={t.threat}
                className="md:grid md:grid-cols-[2fr_0.7fr_2fr_1.5fr] md:gap-4 md:py-4 md:border-b md:border-white/10 flex flex-col gap-1 py-4 border-b border-white/10 last:border-0"
              >
                <span className="font-semibold text-white/90 text-sm md:text-base">
                  {t.threat}
                </span>
                <span
                  className={`font-bold text-sm md:text-base ${riskStyle[t.risk]}`}
                >
                  <span className="md:hidden font-mono text-[11px] text-white/40 mr-2">
                    RISK
                  </span>
                  {t.risk}
                </span>
                <span className="text-white/70 text-sm md:text-base">
                  {t.mitigation}
                </span>
                <span className="text-white/50 text-sm md:text-base italic">
                  {t.future}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
