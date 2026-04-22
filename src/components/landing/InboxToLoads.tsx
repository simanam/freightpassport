export default function InboxToLoads() {
  return (
    <div className="relative">
      {/* Soft ambient glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 bg-accent-wash/60 blur-3xl rounded-[40px] -z-10"
      />

      <div className="tile tile-raised p-0">
        {/* Browser-chrome top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          </div>
          <div className="flex-1 mx-4">
            <div className="mx-auto max-w-[260px] text-center text-[11px] font-mono text-ink-subtle bg-white border border-border rounded-md py-1 px-3 truncate">
              app.freightpassport.io / dashboard
            </div>
          </div>
          <span className="stat-pill">Live</span>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-navy text-[10px] font-bold text-white">
                FP
              </span>
              <span className="text-xs font-semibold text-ink">Backfill in progress</span>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
                aria-hidden="true"
              />
            </div>
            <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
              Last 90 days
            </span>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
            {/* Left: inbox (with scanning line) */}
            <div className="relative">
              <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
                Inbox
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <div className="flex flex-col gap-1.5">
                  <EmailRow from="ABC Brokerage" subject="Rate con — DAL → PHX" tag="rate con" />
                  <EmailRow from="dispatch@hauler" subject="POD attached — load 48291" tag="pod" />
                  <EmailRow from="claims@shipper" subject="Detention backup requested" />
                  <EmailRow from="Mode — Maria" subject="Load 77152 booked" tag="rate con" dim />
                  <EmailRow from="ABC Brokerage" subject="Invoice 44921 — please pay" tag="invoice" dim />
                </div>
                {/* Scan line sweeps top → bottom */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 h-8 -top-8 pointer-events-none"
                  style={{ animation: 'scan-line 3.2s linear infinite' }}
                >
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
                </div>
              </div>
            </div>

            {/* Connector arrow */}
            <div className="pt-8 flex flex-col items-center w-8">
              <svg
                width="28"
                height="80"
                viewBox="0 0 28 80"
                fill="none"
                aria-hidden="true"
                className="text-accent"
              >
                <path
                  d="M2 40 L22 40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="animate-flow-dash"
                />
                <path
                  d="M18 34 L24 40 L18 46"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="mt-2 text-[9px] font-mono text-ink-subtle uppercase tracking-widest">
                Claude
              </span>
            </div>

            {/* Right: extracted loads */}
            <div>
              <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-2 flex items-center gap-2">
                Loads
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              </div>
              <div className="flex flex-col gap-1.5">
                <LoadRow id="48291" lane="DAL → PHX" stage="POD received" />
                <LoadRow id="77152" lane="ATL → MIA" stage="In transit" />
                <LoadRow id="44921" lane="CHI → DEN" stage="Invoiced" />
              </div>
            </div>
          </div>

          <div className="hairline mt-5" />

          <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] font-mono">
            <Stat label="Loads found" value="142" />
            <Stat label="Docs extracted" value="68" />
            <Stat label="Emails sent" value="0" emphasis />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailRow({
  from,
  subject,
  tag,
  dim = false,
}: {
  from: string;
  subject: string;
  tag?: string;
  dim?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md border border-border bg-white px-3 py-2 flex items-center gap-3',
        dim ? 'opacity-60' : '',
      ].join(' ')}
    >
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold text-ink truncate">{from}</div>
        <div className="text-[11px] text-ink-muted truncate">{subject}</div>
      </div>
      {tag && (
        <span className="shrink-0 text-[9px] font-mono text-accent-strong bg-accent-wash border border-border rounded-md px-1.5 py-0.5 uppercase tracking-wider">
          {tag}
        </span>
      )}
    </div>
  );
}

function LoadRow({
  id,
  lane,
  stage,
}: {
  id: string;
  lane: string;
  stage: string;
}) {
  return (
    <div className="rounded-md border border-accent-ring bg-accent-wash px-3 py-2 animate-soft-float">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold text-accent-strong">
          #{id}
        </span>
        <span className="text-[10px] font-mono text-accent-strong">{stage}</span>
      </div>
      <div className="text-[11px] text-ink mt-0.5">{lane}</div>
    </div>
  );
}

function Stat({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md px-2.5 py-2 border',
        emphasis
          ? 'border-success-border bg-success-wash text-success'
          : 'border-border bg-white text-ink-muted',
      ].join(' ')}
    >
      <div className="text-[9px] uppercase tracking-widest opacity-80">{label}</div>
      <div className="mt-0.5 font-mono text-sm font-bold text-ink">{value}</div>
    </div>
  );
}
