export default function WhatYouGetSection() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">What you get</span>
          <h2
            id="features-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Two views of the same engine — one for brokers, one for dispatchers.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <PersonaCard
            label="For brokers"
            title="Every active load at its real stage."
            rows={[
              { stage: 'Quoted', n: 4 },
              { stage: 'Booked', n: 7 },
              { stage: 'Dispatched', n: 12 },
              { stage: 'In transit', n: 21 },
              { stage: 'Delivered', n: 8 },
              { stage: 'POD received', n: 14 },
              { stage: 'Invoiced', n: 19 },
              { stage: 'Paid', n: 46 },
            ]}
            footnote="Kanban, not a spreadsheet. Alerts for missing PODs, aged invoices, rate/invoice discrepancies."
          />
          <PersonaCard
            label="For dispatchers"
            title="Your board organized by driver — with the paperwork already attached."
            rows={[
              { stage: 'Mark L.', n: 3, sub: '2 ready to factor' },
              { stage: 'Joanne R.', n: 2, sub: '1 POD pending' },
              { stage: 'Tony V.', n: 4, sub: 'All docs received' },
              { stage: 'Shawn D.', n: 1, sub: 'Detention pending' },
            ]}
            footnote="Rate con archive by broker. POD queue for factoring. Aging view — who owes money, how old."
          />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <FeatureTile
            title="Every document, searchable"
            body="Rate con, BOL, POD, invoice, lumper receipt. Auto-classified, fields extracted, original always preserved."
          />
          <FeatureTile
            title="Ask bar"
            body="Plain English questions over your own loads. Every answer cites the exact email or document it came from — no black box."
            ask
          />
        </div>
      </div>
    </section>
  );
}

function PersonaCard({
  label,
  title,
  rows,
  footnote,
}: {
  label: string;
  title: string;
  rows: { stage: string; n: number; sub?: string }[];
  footnote: string;
}) {
  return (
    <div className="card-shadow p-7">
      <span className="chip-ink">{label}</span>
      <h3 className="mt-5 text-2xl md:text-[26px] font-extrabold tracking-tight text-ink leading-tight">
        {title}
      </h3>

      <div className="mt-6 rounded-xl border border-border bg-bg-tint p-4">
        <div className="flex flex-col gap-1.5">
          {rows.map((r) => (
            <div
              key={r.stage}
              className="flex items-center justify-between bg-white rounded-md px-3 py-2 border border-border"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-ink">{r.stage}</span>
                {r.sub && (
                  <span className="text-[11px] text-ink-subtle">{r.sub}</span>
                )}
              </div>
              <span className="font-mono text-[12px] text-ink-muted">{r.n}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-ink-muted leading-relaxed">{footnote}</p>
    </div>
  );
}

function FeatureTile({
  title,
  body,
  ask = false,
}: {
  title: string;
  body: string;
  ask?: boolean;
}) {
  return (
    <div className="card p-7">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{body}</p>
      {ask && (
        <div className="mt-5 rounded-lg border border-border bg-bg-tint px-4 py-3 font-mono text-[13px] text-ink">
          <span className="text-ink-subtle">&gt;</span> show me loads missing PODs
        </div>
      )}
    </div>
  );
}
