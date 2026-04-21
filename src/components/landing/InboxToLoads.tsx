export default function InboxToLoads() {
  return (
    <div className="relative">
      <div className="card-shadow p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-navy text-[10px] font-bold text-white">
              FP
            </span>
            <span className="text-xs font-semibold text-ink">Backfill in progress</span>
          </div>
          <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
            Last 90 days
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Left: inbox emails */}
          <div>
            <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
              Inbox
            </div>
            <div className="flex flex-col gap-2">
              <EmailRow from="ABC Brokerage" subject="Rate con — Dallas → Phoenix" />
              <EmailRow from="dispatch@hauler" subject="Re: POD attached load 48291" />
              <EmailRow from="claims@shipper.com" subject="Detention backup requested" />
              <EmailRow from="Mode — Maria" subject="Load 77152 booked" dim />
              <EmailRow from="ABC Brokerage" subject="Invoice 44921 — please pay" dim />
            </div>
          </div>

          {/* Right: extracted loads */}
          <div>
            <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-2 flex items-center gap-2">
              Loads
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            </div>
            <div className="flex flex-col gap-2">
              <LoadRow id="48291" lane="DAL → PHX" stage="POD received" />
              <LoadRow id="77152" lane="ATL → MIA" stage="In transit" />
              <LoadRow id="44921" lane="CHI → DEN" stage="Invoiced" />
            </div>
          </div>
        </div>

        <div className="hairline mt-5" />
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-ink-subtle">
          <span>142 loads found</span>
          <span>68 documents extracted</span>
          <span>0 emails sent</span>
        </div>
      </div>
    </div>
  );
}

function EmailRow({
  from,
  subject,
  dim = false,
}: {
  from: string;
  subject: string;
  dim?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md border border-border bg-white px-3 py-2',
        dim ? 'opacity-60' : '',
      ].join(' ')}
    >
      <div className="text-[11px] font-semibold text-ink truncate">{from}</div>
      <div className="text-[11px] text-ink-muted truncate">{subject}</div>
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
    <div className="rounded-md border border-accent-ring bg-accent-wash px-3 py-2">
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
