export default function AlertsSection() {
  return (
    <section
      id="alerts"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="alerts-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">Alerts &amp; drafts</span>
          <h2
            id="alerts-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Never lose a POD again — but your inbox stays yours.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Five built-in rules watch for the things that fall through the
            cracks. When one fires, Claude drafts the chase message. You
            review, copy, and send from your own inbox. We never send on your
            behalf.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-6">
          <AlertsPanel />
          <ChaseDraft />
        </div>
      </div>
    </section>
  );
}

/* ----------------- Alerts Panel ----------------- */

type AlertTone = 'warning' | 'critical' | 'info';

function AlertsPanel() {
  const alerts: {
    rule: string;
    title: string;
    detail: string;
    tone: AlertTone;
    count: number;
    selected?: boolean;
  }[] = [
    {
      rule: 'POD missing',
      title: 'Load #48291 · DAL → PHX',
      detail: 'Delivered 52h ago · no POD received',
      tone: 'warning',
      count: 3,
      selected: true,
    },
    {
      rule: 'Payment overdue',
      title: 'ABC Brokerage · Invoice 44921',
      detail: 'Net 30 + 5 days · no payment',
      tone: 'critical',
      count: 2,
    },
    {
      rule: 'Pickup status unknown',
      title: 'Load #48310 · HOU → ATL',
      detail: 'Dispatched 26h ago · no confirmation',
      tone: 'warning',
      count: 1,
    },
    {
      rule: 'BOL missing',
      title: 'Load #44925 · IND → OKC',
      detail: 'Rate con signed · no BOL 49h after pickup',
      tone: 'warning',
      count: 1,
    },
    {
      rule: 'POD escalated',
      title: 'Load #47102 · MEM → JAX',
      detail: 'Delivered 9 days ago · still no POD',
      tone: 'critical',
      count: 1,
    },
  ];

  return (
    <div className="tile tile-raised overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
        <div className="flex items-center gap-2">
          <BellIcon />
          <span className="text-[11px] font-bold text-ink">Alerts</span>
          <span className="stat-pill">5 rules</span>
        </div>
        <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          In-app only
        </span>
      </div>

      <div className="p-3 flex flex-col gap-2">
        {alerts.map((a) => (
          <AlertRow key={a.title} {...a} />
        ))}
      </div>

      <div className="px-5 py-3 border-t border-border bg-bg-tint text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
        No SMS · no push · no external email
      </div>
    </div>
  );
}

function AlertRow({
  rule,
  title,
  detail,
  tone,
  count,
  selected = false,
}: {
  rule: string;
  title: string;
  detail: string;
  tone: AlertTone;
  count: number;
  selected?: boolean;
}) {
  const badge =
    tone === 'critical'
      ? 'bg-critical-wash text-critical border-critical-border'
      : tone === 'warning'
      ? 'bg-warning-wash text-warning border-warning'
      : 'bg-accent-wash text-accent-strong border-border';

  return (
    <div
      className={[
        'rounded-lg border p-3',
        selected
          ? 'border-accent bg-accent-wash/40'
          : 'border-border bg-white',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={[
            'inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[9px] font-mono uppercase tracking-widest',
            badge,
          ].join(' ')}
        >
          {rule}
        </span>
        <span className="text-[10px] font-mono text-ink-subtle">
          {count} active
        </span>
      </div>
      <div className="mt-2 text-[12px] font-bold text-ink">{title}</div>
      <div className="text-[11px] text-ink-muted">{detail}</div>
      {selected && (
        <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-accent-strong">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          Draft generated →
        </div>
      )}
    </div>
  );
}

/* ----------------- Chase Draft ----------------- */

function ChaseDraft() {
  return (
    <div className="tile tile-raised overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
        <div className="flex items-center gap-2">
          <DraftIcon />
          <span className="text-[11px] font-bold text-ink">
            Suggested chase message
          </span>
        </div>
        <span className="stat-pill">Draft</span>
      </div>

      <div className="p-5">
        <div className="rounded-lg border border-border bg-white">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
              To: dispatch@haulmark.com
            </div>
            <div className="text-[10px] font-mono text-ink-subtle">
              Re: Load #48291 POD
            </div>
          </div>
          <div className="p-4">
            <p className="text-[13px] text-ink leading-relaxed">
              Hi team —
            </p>
            <p className="mt-2 text-[13px] text-ink leading-relaxed">
              Following up on <strong>load #48291 (Dallas → Phoenix)</strong>{' '}
              — delivered Apr 23 at 17:40. We haven’t received a POD yet and
              we’re approaching our factoring cutoff.
            </p>
            <p className="mt-2 text-[13px] text-ink leading-relaxed">
              Could you send the signed POD at your earliest? Happy to jump on
              a quick call if the driver needs to re-scan.
            </p>
            <p className="mt-2 text-[13px] text-ink leading-relaxed">
              Thanks,
              <br />
              Aman
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-navy text-white text-[12px] font-bold border border-navy animate-glow"
          >
            <CopyIcon />
            Copy to clipboard
          </button>
          <div className="flex items-center gap-2 text-[11px] text-ink-muted">
            <ShieldIcon />
            We never send this for you — your inbox, your click.
          </div>
        </div>

        <div className="hairline mt-6" />
        <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] font-mono">
          <Reason label="Rule" value="POD missing" />
          <Reason label="Context" value="5 emails" />
          <Reason label="Citations" value="3 sources" />
        </div>
      </div>
    </div>
  );
}

function Reason({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-white px-2.5 py-1.5">
      <div className="text-[9px] uppercase tracking-widest text-ink-subtle">
        {label}
      </div>
      <div className="mt-0.5 text-[12px] text-ink">{value}</div>
    </div>
  );
}

/* ---------- Icons ---------- */

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function DraftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
