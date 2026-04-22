export default function MoreSection() {
  return (
    <section
      id="more"
      className="relative py-24 md:py-32"
      aria-labelledby="more-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">And a few more things</span>
          <h2
            id="more-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            The parts of the job that don’t fit a kanban either.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          <AskTile />
          <PartiesTile />
        </div>
      </div>
    </section>
  );
}

/* ---------- Ask ---------- */

function AskTile() {
  return (
    <div className="tile tile-raised overflow-hidden lg:col-span-1 flex flex-col">
      <Header
        eyebrow="Natural language"
        title="Ask your data anything."
        body="Claude answers from your own loads, with citations back to the original email or document."
      />
      <div className="p-5 pt-0 mt-auto">
        <div className="rounded-md border border-border bg-white px-3 py-2.5 font-mono text-[12px] text-ink">
          <span className="text-ink-subtle">&gt;</span>{' '}
          which brokers owe us money over 30 days?
          <span className="inline-block h-3 w-[1.5px] bg-accent ml-0.5 align-middle animate-pulse-dot" />
        </div>

        <div className="mt-3 rounded-md border border-accent-ring bg-accent-wash px-3 py-2.5">
          <div className="text-[10px] font-mono text-accent-strong uppercase tracking-widest mb-1.5">
            Answer · 3 matches
          </div>
          <div className="text-[12px] text-ink leading-relaxed">
            <strong>ABC Brokerage</strong> · 37 days · $8,420 (2 invoices)
            <br />
            <strong>Mode</strong> · 33 days · $3,120 (1 invoice)
            <br />
            <strong>FreightPath</strong> · 31 days · $2,880 (1 invoice)
          </div>
          <div className="mt-2 text-[10px] font-mono text-ink-subtle">
            Cites 4 invoices · 12 emails
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Parties directory ---------- */

function PartiesTile() {
  const parties = [
    { name: 'Haulmark Freight', mc: 'MC 784221', loads: 42, onTime: '96%', tag: 'Carrier' },
    { name: 'ABC Brokerage', mc: '—', loads: 118, onTime: 'Net 30 + 4d', tag: 'Broker' },
    { name: 'Nestlé Dallas DC', mc: '—', loads: 27, onTime: '—', tag: 'Shipper' },
    { name: 'Quickline', mc: 'MC 901344', loads: 9, onTime: '88%', tag: 'Carrier' },
  ];
  return (
    <div className="tile tile-raised overflow-hidden flex flex-col">
      <Header
        eyebrow="Parties directory"
        title="Every carrier, broker, shipper — already there."
        body="Auto-derived from your email. Click any party to see every load, aggregate stats, and history."
      />
      <div className="p-5 pt-0 flex flex-col gap-1.5 mt-auto">
        {parties.map((p) => (
          <div
            key={p.name}
            className="rounded-md border border-border bg-white px-3 py-2 flex items-center justify-between gap-3"
          >
            <div className="min-w-0">
              <div className="text-[12px] font-bold text-ink truncate">
                {p.name}
              </div>
              <div className="text-[10px] font-mono text-ink-subtle truncate">
                {p.mc} · {p.tag.toLowerCase()}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[10px] font-mono text-accent-strong">
                {p.loads} loads
              </div>
              <div className="text-[10px] font-mono text-ink-subtle">
                {p.onTime}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2 text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          Read-only in V1 · no CRM fields to manage
        </div>
      </div>
    </div>
  );
}

/* ---------- Shared header strip ---------- */

function Header({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="p-5 md:p-6 pb-4">
      <span className="text-[10px] font-mono text-accent-strong uppercase tracking-widest">
        {eyebrow}
      </span>
      <h3 className="mt-2 text-[17px] md:text-[19px] font-extrabold tracking-tight text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-[13px] text-ink-muted leading-relaxed">{body}</p>
    </div>
  );
}
