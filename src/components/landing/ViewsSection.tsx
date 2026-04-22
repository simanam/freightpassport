export default function ViewsSection() {
  return (
    <section
      id="views"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="views-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">Two views, one engine</span>
          <h2
            id="views-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            One for brokers. One for dispatchers. Same data, different job.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Brokers work stage-by-stage. Dispatchers work driver-by-driver. The
            same canonical load record shows up in both, shaped for the job in
            front of you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <BrokerView />
          <DispatcherView />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Broker kanban ---------------- */

function BrokerView() {
  return (
    <div className="tile tile-raised overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
        <span className="stat-pill">For brokers</span>
        <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          Kanban
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-ink">
          Every active load at its real stage.
        </h3>
        <p className="mt-2 text-[13px] text-ink-muted leading-relaxed">
          Auto-moves as emails and documents arrive. Drag-to-override any time.
          Red flags surface themselves.
        </p>

        <div className="mt-5 grid grid-cols-4 gap-2">
          <Column stage="Booked" count={7} tone="ink">
            <LoadCardMini id="44921" lane="CHI → DEN" meta="Haulmark" />
            <LoadCardMini id="44925" lane="IND → OKC" meta="Omni" />
          </Column>
          <Column stage="In transit" count={12} tone="ink">
            <LoadCardMini id="48291" lane="DAL → PHX" meta="Haulmark" flag="POD due" />
            <LoadCardMini id="48310" lane="HOU → ATL" meta="Quickline" />
          </Column>
          <Column stage="POD received" count={14} tone="accent">
            <LoadCardMini id="77152" lane="ATL → MIA" meta="Southern" />
          </Column>
          <Column stage="Paid" count={46} tone="success">
            <LoadCardMini id="77012" lane="JAX → NSV" meta="Ridge" paid />
          </Column>
        </div>

        <div className="mt-5 flex items-center gap-2 flex-wrap">
          <MetaPill label="Margin per load" />
          <MetaPill label="Aging invoices" />
          <MetaPill label="Rate vs invoice" />
          <MetaPill label="Carrier scorecard" />
        </div>
      </div>
    </div>
  );
}

function Column({
  stage,
  count,
  tone,
  children,
}: {
  stage: string;
  count: number;
  tone: 'ink' | 'accent' | 'success';
  children?: React.ReactNode;
}) {
  const dot =
    tone === 'ink'
      ? 'bg-ink-subtle'
      : tone === 'accent'
      ? 'bg-accent'
      : 'bg-success';
  return (
    <div className="rounded-lg border border-border bg-white p-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className={['inline-block h-1.5 w-1.5 rounded-full', dot].join(' ')} />
          <span className="text-[10px] font-semibold text-ink">{stage}</span>
        </div>
        <span className="text-[10px] font-mono text-ink-muted">{count}</span>
      </div>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function LoadCardMini({
  id,
  lane,
  meta,
  flag,
  paid = false,
}: {
  id: string;
  lane: string;
  meta: string;
  flag?: string;
  paid?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md border px-2 py-1.5',
        paid
          ? 'border-success-border bg-success-wash'
          : 'border-border bg-bg-tint',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold text-ink">#{id}</span>
        {flag && (
          <span className="text-[8px] uppercase tracking-widest font-bold text-warning">
            {flag}
          </span>
        )}
      </div>
      <div className="text-[10px] text-ink mt-0.5">{lane}</div>
      <div className="text-[9px] text-ink-subtle font-mono">{meta}</div>
    </div>
  );
}

function MetaPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-border text-[10px] font-mono text-ink-muted">
      {label}
    </span>
  );
}

/* ---------------- Dispatcher board ---------------- */

function DispatcherView() {
  return (
    <div className="tile tile-raised overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
        <span className="stat-pill">For dispatchers</span>
        <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          Driver board
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-ink">
          Your fleet, by driver, with the paperwork already attached.
        </h3>
        <p className="mt-2 text-[13px] text-ink-muted leading-relaxed">
          PODs flagged for factoring. Rate-con archive by broker. Aging view so
          nobody slow-pays you twice.
        </p>

        <div className="mt-5 flex flex-col gap-2">
          <DriverRow
            name="Mark L."
            truck="Unit 407"
            loads={[
              { id: '48291', lane: 'DAL → PHX', status: 'POD ready', tone: 'success' },
              { id: '48310', lane: 'HOU → ATL', status: 'In transit', tone: 'ink' },
            ]}
            note="2 ready to factor"
          />
          <DriverRow
            name="Joanne R."
            truck="Unit 412"
            loads={[
              { id: '44921', lane: 'CHI → DEN', status: 'POD pending', tone: 'warning' },
            ]}
            note="1 POD pending"
          />
          <DriverRow
            name="Tony V."
            truck="Unit 418"
            loads={[
              { id: '77152', lane: 'ATL → MIA', status: 'All docs', tone: 'success' },
              { id: '77180', lane: 'ORL → DAL', status: 'Booked', tone: 'ink' },
            ]}
            note="All docs received"
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <BrokerAging name="ABC Brokerage" days={27} amount="$8,420" />
          <BrokerAging name="Mode" days={9} amount="$3,120" />
        </div>
      </div>
    </div>
  );
}

function DriverRow({
  name,
  truck,
  loads,
  note,
}: {
  name: string;
  truck: string;
  loads: { id: string; lane: string; status: string; tone: 'ink' | 'success' | 'warning' }[];
  note: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
            {initials(name)}
          </span>
          <div className="leading-tight">
            <div className="text-[11px] font-bold text-ink">{name}</div>
            <div className="text-[9px] text-ink-subtle font-mono">{truck}</div>
          </div>
        </div>
        <span className="text-[9px] font-mono text-ink-muted uppercase tracking-widest">
          {note}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {loads.map((l) => (
          <LoadCardMini
            key={l.id}
            id={l.id}
            lane={l.lane}
            meta={l.status}
            flag={l.tone === 'warning' ? 'POD' : undefined}
            paid={l.tone === 'success'}
          />
        ))}
      </div>
    </div>
  );
}

function BrokerAging({
  name,
  days,
  amount,
}: {
  name: string;
  days: number;
  amount: string;
}) {
  const alert = days > 20;
  return (
    <div
      className={[
        'rounded-md border px-3 py-2',
        alert
          ? 'border-warning bg-warning-wash'
          : 'border-border bg-bg-tint',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-ink">{name}</span>
        <span
          className={[
            'font-mono text-[10px]',
            alert ? 'text-warning font-bold' : 'text-ink-muted',
          ].join(' ')}
        >
          {days}d
        </span>
      </div>
      <div className="text-[11px] font-mono text-ink mt-0.5">{amount}</div>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
