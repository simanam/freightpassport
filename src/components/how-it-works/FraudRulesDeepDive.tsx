'use client';

import { useState } from 'react';

type Severity = 'All' | 'critical' | 'warning';
type Where = 'All' | 'Pickup' | 'Delivery' | 'Transit' | 'Load Create' | 'Cron';

interface FraudRule {
  num: number;
  name: string;
  catches: string;
  severity: 'critical' | 'warning';
  where: string;
  version: string;
}

const rules: FraudRule[] = [
  // Rules 1-9: POD & Signature rules
  { num: 1, name: 'Signature reuse', catches: 'SKR-style signature copy across loads', severity: 'critical', where: 'POD sign', version: 'v1' },
  { num: 2, name: 'Signature velocity', catches: 'Same signer signs multiple loads within impossible timeframe', severity: 'critical', where: 'POD sign', version: 'v1' },
  { num: 3, name: 'GPS spoof at delivery', catches: 'Signed GPS coordinates outside delivery geofence', severity: 'critical', where: 'Delivery', version: 'v1' },
  { num: 4, name: 'Timestamp manipulation', catches: 'Device clock skew exceeds tolerance vs server time', severity: 'critical', where: 'POD sign', version: 'v1' },
  { num: 5, name: 'Photo hash collision', catches: 'Same facility photo reused across different loads', severity: 'critical', where: 'Pickup', version: 'v1' },
  { num: 6, name: 'Selfie mismatch', catches: 'Driver selfie does not match registered face embedding', severity: 'critical', where: 'Pickup', version: 'v1' },
  { num: 7, name: 'BOL field tampering', catches: 'BOL fields changed after shipper confirmation', severity: 'critical', where: 'Delivery', version: 'v1' },
  { num: 8, name: 'Duplicate POD upload', catches: 'Identical document hash uploaded for different loads', severity: 'warning', where: 'Delivery', version: 'v1' },
  { num: 9, name: 'Late POD submission', catches: 'POD submitted well after delivery window closed', severity: 'warning', where: 'Delivery', version: 'v1' },

  // Rules 10-15: Pattern & Device rules
  { num: 10, name: 'Device fingerprint change', catches: 'FingerprintJS visitorId differs from registration', severity: 'warning', where: 'Pickup', version: 'v1' },
  { num: 11, name: 'Rapid carrier switching', catches: 'Load reassigned to 3+ carriers within 24 hours', severity: 'warning', where: 'Load Create', version: 'v1' },
  { num: 12, name: 'Off-route deviation', catches: 'GPS trail deviates significantly from expected route', severity: 'warning', where: 'Transit', version: 'v1' },
  { num: 13, name: 'Impossible transit speed', catches: 'Distance between check-ins implies speed > 85 mph sustained', severity: 'critical', where: 'Transit', version: 'v1' },
  { num: 14, name: 'Night delivery anomaly', catches: 'Delivery signed between 1-5 AM at non-24hr facility', severity: 'warning', where: 'Delivery', version: 'v1' },
  { num: 15, name: 'Broker-carrier collusion pattern', catches: 'Same broker-carrier pair with repeated anomaly flags', severity: 'critical', where: 'Cron', version: 'v1' },

  // Rules 16-21: Identity & Tier rules
  { num: 16, name: 'Unverified entity load creation', catches: 'Bronze-tier broker creating high-value loads', severity: 'warning', where: 'Load Create', version: 'v1' },
  { num: 17, name: 'FMCSA authority mismatch', catches: 'Carrier MC# not authorized for freight type', severity: 'critical', where: 'Load Create', version: 'v1' },
  { num: 18, name: 'Insurance lapse', catches: 'Carrier insurance expired per FMCSA SAFER data', severity: 'critical', where: 'Cron', version: 'v1' },
  { num: 19, name: 'Driver license state mismatch', catches: 'Driver CDL state differs from carrier domicile state', severity: 'warning', where: 'Pickup', version: 'v1' },
  { num: 20, name: 'New entity high volume', catches: 'Entity created < 30 days ago with > 10 loads', severity: 'warning', where: 'Cron', version: 'v1' },
  { num: 21, name: 'Email domain anomaly', catches: 'Carrier using disposable/temporary email service', severity: 'warning', where: 'Load Create', version: 'v1' },

  // Rules 22-25: Transit rules (v1.1+/v2.0+)
  { num: 22, name: 'ELD data gap', catches: 'No ELD data received for 6+ hours during transit', severity: 'warning', where: 'Transit', version: 'v1.1+' },
  { num: 23, name: 'Geofence dwell exceeded', catches: 'Truck stationary at non-stop location for 4+ hours', severity: 'warning', where: 'Transit', version: 'v1.1+' },
  { num: 24, name: 'ELD feed loss', catches: 'ELD integration stops transmitting mid-load', severity: 'warning', where: 'Transit', version: 'v1.1+' },
  { num: 25, name: 'Temperature excursion', catches: 'Reefer temp outside acceptable range for 30+ minutes', severity: 'critical', where: 'Transit', version: 'v2.0+' },

  // Rules 26-28: Mid-load change rules (v1.1+)
  { num: 26, name: 'Driver swap mid-load', catches: 'Different driver checks in than who picked up', severity: 'warning', where: 'Transit', version: 'v1.1+' },
  { num: 27, name: 'Trailer swap without auth', catches: 'Trailer number changes without broker approval', severity: 'critical', where: 'Transit', version: 'v1.1+' },
  { num: 28, name: 'Destination change post-pickup', catches: 'Delivery address modified after pickup confirmation', severity: 'critical', where: 'Transit', version: 'v1.1+' },

  // Rules 29-34: New rules
  { num: 29, name: 'Custody chain break', catches: 'Gap in custody events exceeds 12 hours without explanation', severity: 'critical', where: 'Transit', version: 'v1' },
  { num: 30, name: 'Equipment mismatch', catches: 'Truck/trailer type doesn\'t match load requirements', severity: 'warning', where: 'Pickup', version: 'v1' },
  { num: 31, name: 'Plate mismatch', catches: 'License plate at pickup doesn\'t match assigned truck', severity: 'warning', where: 'Pickup', version: 'v1' },
  { num: 32, name: 'Multi-stop sequence violation', catches: 'Driver delivers to stops out of prescribed order', severity: 'warning', where: 'Delivery', version: 'v1' },
  { num: 33, name: 'Phantom stop', catches: 'Check-in received at location not on the route', severity: 'critical', where: 'Transit', version: 'v1' },
  { num: 34, name: 'Account takeover signal', catches: 'New device + new IP + sensitive action within 1 hour', severity: 'critical', where: 'Cron', version: 'v1' },
];

const severityFilters: Severity[] = ['All', 'critical', 'warning'];
const whereFilters: Where[] = ['All', 'Pickup', 'Delivery', 'Transit', 'Load Create', 'Cron'];

function mapWhere(ruleWhere: string): Where | null {
  if (ruleWhere === 'Pickup') return 'Pickup';
  if (ruleWhere === 'Delivery' || ruleWhere === 'POD sign') return 'Delivery';
  if (ruleWhere === 'Transit') return 'Transit';
  if (ruleWhere === 'Load Create') return 'Load Create';
  if (ruleWhere === 'Cron') return 'Cron';
  return null;
}

export default function FraudRulesDeepDive() {
  const [severity, setSeverity] = useState<Severity>('All');
  const [where, setWhere] = useState<Where>('All');

  const filtered = rules.filter((r) => {
    if (severity !== 'All' && r.severity !== severity) return false;
    if (where !== 'All' && mapWhere(r.where) !== where) return false;
    return true;
  });

  const criticalCount = rules.filter((r) => r.severity === 'critical').length;
  const warningCount = rules.filter((r) => r.severity === 'warning').length;

  return (
    <section
      id="fraud-rules"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="fraud-rules-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="eyebrow">Fraud detection engine</span>

        <h2
          id="fraud-rules-heading"
          className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          34 rules. Every state transition. Zero&nbsp;tolerance.
        </h2>

        <p className="mt-5 text-base md:text-lg text-ink-muted max-w-3xl">
          Every event that changes a load&rsquo;s state runs through the rule
          engine. Critical hits block the transition; warnings flag for
          human&nbsp;review.
        </p>

        {/* ── Filter bar ── */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          {/* Severity */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
              Severity
            </span>
            <div className="flex gap-1.5">
              {severityFilters.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeverity(s)}
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                    severity === s
                      ? 'bg-accent text-white'
                      : 'card hover:bg-bg-tint'
                  }`}
                >
                  {s === 'All' ? 'All' : s === 'critical' ? 'Critical' : 'Warning'}
                </button>
              ))}
            </div>
          </div>

          {/* Where */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
              Where
            </span>
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
              {whereFilters.map((w) => (
                <button
                  key={w}
                  onClick={() => setWhere(w)}
                  className={`flex-shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                    where === w
                      ? 'bg-accent text-white'
                      : 'card hover:bg-bg-tint'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Rules grid ── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((rule) => (
            <div key={rule.num} className="card p-4 relative">
              <div className="flex items-start gap-3">
                {/* Rule number circle */}
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                    rule.severity === 'critical'
                      ? 'bg-accent text-white'
                      : 'bg-warning-wash text-warning'
                  }`}
                >
                  {rule.num}
                </span>

                <div className="min-w-0 flex-1">
                  {/* Name */}
                  <h3 className="text-sm font-bold text-ink leading-tight">
                    {rule.name}
                  </h3>

                  {/* Catches */}
                  <p className="mt-1 text-sm text-ink-muted leading-snug">
                    {rule.catches}
                  </p>

                  {/* Chips row */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {/* Severity chip */}
                    {rule.severity === 'critical' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-critical-wash px-2 py-0.5 text-[11px] font-semibold text-critical">
                        <span aria-hidden="true">&#x1F534;</span> Critical
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-warning-wash px-2 py-0.5 text-[11px] font-semibold text-warning">
                        <span aria-hidden="true">&#x1F7E1;</span> Warning
                      </span>
                    )}

                    {/* Where chip */}
                    <span className="font-mono text-[11px] rounded-full bg-bg-tint px-2 py-0.5 text-ink-muted">
                      {rule.where}
                    </span>

                    {/* Version chip */}
                    {rule.version !== 'v1' && (
                      <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-mono text-ink-muted">
                        {rule.version}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Summary strip ── */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-ink-muted">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-critical" />
            {criticalCount} critical
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-warning" />
            {warningCount} warning
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            {rules.length} total
          </span>
        </div>
      </div>
    </section>
  );
}
