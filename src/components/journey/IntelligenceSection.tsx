/**
 * Visual summary of the fraud rule engine — one "console" card with the
 * critical rules glowing red, plus a tiny legend. No giant table.
 */
type Rule = { n: number; name: string; what: string };

const critical: Rule[] = [
  { n: 1,  name: 'Signature reuse',        what: 'Same fingerprint across loads' },
  { n: 2,  name: 'Physical impossibility', what: 'Delivery faster than 55 mph' },
  { n: 3,  name: 'POD outside geofence',   what: 'Signed off-site' },
  { n: 4,  name: 'Pickup outside geofence', what: 'Pickup unlocked off-site' },
  { n: 5,  name: 'Face mismatch',          what: 'Unregistered driver at delivery' },
  { n: 6,  name: 'OTP failures',           what: 'Wrong driver at dock' },
  { n: 7,  name: 'Revoked authority',      what: 'Stolen DOT / MC' },
  { n: 13, name: 'Ghost delivery',         what: 'No arrival inside ETA' },
  { n: 16, name: 'Self-dealing',           what: 'Same identity on both sides' },
  { n: 21, name: 'Zombie Org',             what: 'Member from suspended Org' },
  { n: 23, name: 'Route divergence',       what: 'Transit GPS > 50 mi off route' },
  { n: 25, name: 'Dual-source GPS split',  what: 'ELD and SMS disagree by > 20 mi' },
  { n: 28, name: 'Unverified driver swap', what: 'Bypassing identity via late swap' },
  { n: 29, name: 'Unverified custody',     what: 'Unauthorized custody handoff' },
  { n: 32, name: 'Multi-stop skip',        what: 'Stop ETA missed, prior stop on time' },
  { n: 34, name: 'Account takeover',       what: 'New device + IP on dormant account' },
];

export default function IntelligenceSection() {
  return (
    <section
      id="rules"
      className="relative py-28 md:py-36"
      aria-labelledby="rules-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Fraud engine</span>
          <h2
            id="rules-heading"
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
          >
            34 rules. <span className="text-critical">17 critical.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted">
            Every state change — pickup, transit check-in, delivery — screened in under a
            millisecond. Critical hits block the transition. Warnings flag for review.
          </p>
        </div>

        {/* Console-style card */}
        <div
          className="mt-14 rounded-2xl border border-border-strong bg-navy overflow-hidden"
          style={{
            boxShadow: '0 30px 60px -30px rgba(10,22,40,0.45)',
          }}
        >
          {/* console topbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-critical" />
              <span className="h-2 w-2 rounded-full bg-warning" />
              <span className="h-2 w-2 rounded-full bg-success" />
            </div>
            <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
              fraud-engine · live
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
              running
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {critical.map((r) => (
              <div
                key={r.n}
                className="relative p-5 border-b border-r border-white/8 last:border-b-0"
                style={{ borderRightColor: 'rgba(255,255,255,0.06)', borderBottomColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    Rule {String(r.n).padStart(2, '0')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-critical">
                    <span className="h-1.5 w-1.5 rounded-full bg-critical animate-pulse-dot" />
                    Critical
                  </span>
                </div>
                <div className="mt-3 text-[14px] font-semibold text-white">{r.name}</div>
                <div className="mt-1 text-[12px] text-white/55 font-mono">{r.what}</div>
              </div>
            ))}
          </div>

          {/* footer strip */}
          <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/50">
              + 17 warning rules screen every state change
            </span>
            <span className="font-mono text-[10px] text-accent-soft">
              latency &lt; 1ms / rule
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
