/**
 * Identity & Trust Tiers — the visual anchor for §5 of the spec.
 *
 * Renders three credential medallions (Bronze / Silver / Gold) with the
 * checks required for each tier, plus a row showing how Organization +
 * Member tiers layer together on every load.
 */
import TierBadge from '@/components/visuals/TierBadge';

type TierRow = {
  tier: 'bronze' | 'silver' | 'gold';
  title: string;
  time: string;
  checks: string[];
  cap: string;
};

const tiers: TierRow[] = [
  {
    tier: 'bronze',
    title: 'Bronze',
    time: '~60 seconds',
    checks: [
      'FMCSA authority active',
      'OTP to the phone on the FMCSA record',
      'OpenCorporates entity match',
    ],
    cap: 'Up to $10k declared value · 10 loads / month',
  },
  {
    tier: 'silver',
    title: 'Silver',
    time: '~24 hours',
    checks: [
      'Insurance certificate OCR + match',
      'Plaid bank account verified',
      '30+ days · 5+ clean loads',
    ],
    cap: 'Up to $75k · unlimited active loads',
  },
  {
    tier: 'gold',
    title: 'Gold',
    time: '5-minute video call',
    checks: [
      'Human-to-human founder call',
      '90+ days · 50+ clean loads',
      'Seal embedded in every POD',
    ],
    cap: 'No limit · priority fraud handling',
  },
];

export default function IdentitySection() {
  return (
    <section
      id="identity"
      className="relative py-28 md:py-36 border-t border-border"
      aria-labelledby="identity-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Identity first</span>
          <h2
            id="identity-heading"
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
          >
            Identity <span className="text-accent">precedes</span> cryptography.
          </h2>
          <p className="mt-5 text-base md:text-lg text-ink-muted">
            A fraudster with valid signatures is still a fraudster. Before any load can be
            sealed, every party earns a verifiable credential.
          </p>
        </div>

        {/* Tier medallions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={t.tier}
              className={[
                'card-shadow p-7 relative flex flex-col items-center text-center',
                t.tier === 'gold' ? 'md:-translate-y-3' : '',
              ].join(' ')}
            >
              {/* step number */}
              <div className="absolute left-5 top-5 font-mono text-[11px] text-ink-subtle">
                0{i + 1}
              </div>

              <TierBadge tier={t.tier} size={112} />

              <h3 className="mt-5 text-xl font-extrabold tracking-tight">{t.title}</h3>
              <div className="mt-1 font-mono text-[11px] text-ink-subtle uppercase tracking-widest">
                {t.time}
              </div>

              <ul className="mt-6 w-full space-y-2.5 text-left">
                {t.checks.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[13px] text-ink-muted">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border w-full">
                <div className="text-[10px] uppercase tracking-widest text-ink-subtle">
                  Load authority
                </div>
                <div className="mt-1 text-[12px] font-semibold text-ink">{t.cap}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-layer model: Org + Member */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto">
            <span className="eyebrow">Two layers · one credential</span>
            <h3 className="mt-5 text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
              Every load displays both the Organization and the person who booked it.
            </h3>
          </div>

          <div className="mt-10 card-shadow p-6 md:p-8 max-w-3xl mx-auto">
            {/* Organization row */}
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <TierBadge tier="gold" size={72} />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <div className="text-[10px] uppercase tracking-widest text-ink-subtle">
                  Organization
                </div>
                <div className="mt-0.5 text-lg font-extrabold text-ink">
                  MODE Transportation
                </div>
                <div className="mt-1 font-mono text-[11px] text-ink-muted">
                  MC-12345 · 847 loads on platform · insurance current · 0 critical flags
                </div>
              </div>
              <span
                className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold border"
                style={{ background: '#FAEBBC', color: '#4A3009', borderColor: '#D4A24C' }}
              >
                GOLD ORG
              </span>
            </div>

            <div className="hairline my-6" />

            {/* Member row */}
            <div className="flex items-start gap-5">
              <div className="shrink-0 h-[72px] w-[72px] rounded-full bg-accent-wash border border-accent/30 flex items-center justify-center font-mono text-sm font-bold text-accent-strong">
                EF
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <div className="text-[10px] uppercase tracking-widest text-ink-subtle">
                  Booked by member
                </div>
                <div className="mt-0.5 text-lg font-extrabold text-ink">Eric Farrell</div>
                <div className="mt-1 font-mono text-[11px] text-ink-muted">
                  Broker rep at MODE since Mar 2025 · 127 loads · phone verified
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold border border-accent/40 bg-accent-wash text-accent-strong">
                VERIFIED
              </span>
            </div>

            {/* footnote */}
            <div className="mt-6 pt-5 border-t border-border flex items-start gap-2 text-[12px] text-ink-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                A load&rsquo;s trust is bounded by its <em>weakest</em> participant. Any Bronze
                party on the load = Bronze load. The whole chain sees it.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
