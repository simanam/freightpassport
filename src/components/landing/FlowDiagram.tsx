export default function FlowDiagram() {
  return (
    <section
      id="flow"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="flow-heading"
    >
      <div className="absolute inset-0 paper pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">Under the hood</span>
          <h2
            id="flow-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Here’s what happens the moment an email hits your inbox.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Four stages. All in the background. The user sees a clean load
            card — not a classifier, not a vector store, not a queue.
          </p>
        </div>

        {/* Desktop: horizontal flow. Mobile: vertical stack. */}
        <div className="mt-16 relative">
          <div className="hidden lg:grid grid-cols-[1fr_60px_1fr_60px_1fr_60px_1fr] items-stretch gap-0">
            <Stage step="01" title="Email arrives" accent="ink">
              <InboxCard />
            </Stage>
            <Connector label="classify" />
            <Stage step="02" title="Classify" accent="accent">
              <ClassifyCard />
            </Stage>
            <Connector label="extract" />
            <Stage step="03" title="Extract" accent="accent">
              <ExtractCard />
            </Stage>
            <Connector label="attach" />
            <Stage step="04" title="Attach to load" accent="success">
              <AttachCard />
            </Stage>
          </div>

          {/* Mobile stack */}
          <div className="lg:hidden flex flex-col gap-5">
            <Stage step="01" title="Email arrives" accent="ink">
              <InboxCard />
            </Stage>
            <VConnector label="classify" />
            <Stage step="02" title="Classify" accent="accent">
              <ClassifyCard />
            </Stage>
            <VConnector label="extract" />
            <Stage step="03" title="Extract" accent="accent">
              <ExtractCard />
            </Stage>
            <VConnector label="attach" />
            <Stage step="04" title="Attach to load" accent="success">
              <AttachCard />
            </Stage>
          </div>
        </div>

        {/* Bottom strip: end-result */}
        <div className="mt-16 tile tile-raised p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-success-wash border border-success-border">
                <CheckIcon />
              </span>
              <div>
                <div className="text-sm font-bold text-ink">
                  Load #48291 · DAL → PHX
                </div>
                <div className="text-[12px] text-ink-muted">
                  Rate con attached · POD received · Invoice sent
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Chip label="5 emails" />
              <Chip label="3 documents" />
              <Chip label="Timeline: 12 events" />
              <Chip label="Audit trail signed" emphasis />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({
  step,
  title,
  accent,
  children,
}: {
  step: string;
  title: string;
  accent: 'ink' | 'accent' | 'success';
  children: React.ReactNode;
}) {
  const badgeBg =
    accent === 'ink'
      ? 'bg-navy text-white'
      : accent === 'success'
      ? 'bg-success text-white'
      : 'bg-accent text-white';

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span
          className={['inline-flex items-center justify-center h-6 px-2 rounded-md font-mono text-[11px] font-bold', badgeBg].join(' ')}
        >
          {step}
        </span>
        <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest">
          {title}
        </span>
      </div>
      <div className="tile tile-raised p-4 flex-1">{children}</div>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center" aria-hidden="true">
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-accent">
        <line
          x1="4"
          y1="20"
          x2="52"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-flow-dash"
        />
        <path
          d="M46 14 L54 20 L46 26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="30" cy="20" r="2.5" fill="currentColor" className="animate-pulse-dot" />
      </svg>
      <span className="mt-1 text-[9px] font-mono text-ink-subtle uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function VConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-border-strong" />
      <span className="text-[9px] font-mono text-ink-subtle uppercase tracking-widest">
        ↓ {label}
      </span>
      <span className="h-px flex-1 bg-border-strong" />
    </div>
  );
}

/* --- Stage cards ------------------------------------------------- */

function InboxCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-md border border-border bg-white px-3 py-2">
        <div className="text-[11px] font-semibold text-ink">ABC Brokerage</div>
        <div className="text-[11px] text-ink-muted truncate">
          Rate con — DAL → PHX, load 48291
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-ink-subtle font-mono">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
        Inbox subscription · real-time
      </div>
    </div>
  );
}

function ClassifyCard() {
  return (
    <div className="flex flex-col gap-2.5">
      <Row label="Load-related" value="yes" tone="ok" />
      <Row label="Doc type" value="Rate con" tone="info" />
      <Row label="Confidence" value="0.97" tone="info" />
      <div className="mt-1 h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div className="h-full w-[97%] bg-accent animate-progress" />
      </div>
    </div>
  );
}

function ExtractCard() {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldRow k="Load #" v="48291" />
      <FieldRow k="Lane" v="DAL → PHX" />
      <FieldRow k="Pickup" v="Apr 22, 08:00" />
      <FieldRow k="Carrier" v="Haulmark · MC 784221" />
      <FieldRow k="Rate" v="$2,480.00" highlight />
    </div>
  );
}

function AttachCard() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="rounded-md border border-accent-ring bg-accent-wash px-3 py-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold text-accent-strong">
            #48291
          </span>
          <span className="text-[10px] font-mono text-accent-strong">Booked</span>
        </div>
        <div className="text-[11px] text-ink mt-0.5">DAL → PHX</div>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-mono text-ink-subtle">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
        Added to timeline
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        <DocPill label="Rate con" active />
        <DocPill label="BOL" />
        <DocPill label="POD" />
        <DocPill label="Invoice" />
      </div>
    </div>
  );
}

/* --- small bits -------------------------------------------------- */

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'ok' | 'info';
}) {
  const badge =
    tone === 'ok'
      ? 'bg-success-wash text-success border-success-border'
      : 'bg-accent-wash text-accent-strong border-border';
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-ink-muted">{label}</span>
      <span
        className={['inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md border font-mono text-[11px]', badge].join(' ')}
      >
        {value}
      </span>
    </div>
  );
}

function FieldRow({
  k,
  v,
  highlight = false,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-[11px] px-2 py-1 rounded-md border border-border bg-white">
      <span className="text-ink-subtle uppercase tracking-widest text-[9px] font-mono">
        {k}
      </span>
      <span
        className={[
          'font-mono text-[11px] text-ink',
          highlight ? 'bg-accent-wash px-1.5 rounded' : '',
        ].join(' ')}
      >
        {v}
      </span>
    </div>
  );
}

function DocPill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-mono border',
        active
          ? 'bg-accent text-accent-ink border-accent'
          : 'bg-white text-ink-muted border-border',
      ].join(' ')}
    >
      {label}
    </span>
  );
}

function Chip({ label, emphasis = false }: { label: string; emphasis?: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono',
        emphasis
          ? 'bg-success-wash text-success border-success-border'
          : 'bg-white text-ink-muted border-border',
      ].join(' ')}
    >
      {label}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-success"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
