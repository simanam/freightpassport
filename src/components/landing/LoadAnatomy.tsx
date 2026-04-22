export default function LoadAnatomy() {
  return (
    <section
      id="anatomy"
      className="relative py-24 md:py-32"
      aria-labelledby="anatomy-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">Every load, fully preserved</span>
          <h2
            id="anatomy-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]"
          >
            Open a load. See every email, document, note, and state change —
            in order.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Click any extracted field and watch it highlight in the original
            document. Add a note for something that happened on a phone call.
            The audit trail is append-only — history never rewrites itself.
          </p>
        </div>

        <div className="mt-14 tile tile-raised overflow-hidden">
          {/* Frame chrome */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-bg-tint">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-ink">
                Load #48291
              </span>
              <span className="text-ink-subtle">·</span>
              <span className="text-[11px] text-ink-muted">DAL → PHX</span>
              <span className="ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-accent-wash border border-border text-[10px] font-mono text-accent-strong">
                In transit
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="stat-pill">Append-only</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Left: document + extracted fields */}
            <div className="p-5 md:p-6">
              <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-3">
                Source document · rate_con.pdf
              </div>

              <RateConPage />

              <div className="mt-5">
                <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
                  Extracted fields
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Field k="Load #" v="48291" />
                  <Field k="Lane" v="DAL → PHX" />
                  <Field k="Pickup" v="Apr 22 · 08:00" />
                  <Field k="Carrier" v="Haulmark · MC 784221" />
                  <Field k="Equipment" v="53' dry van" />
                  <Field k="Rate" v="$2,480.00" highlight />
                </div>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-ink-subtle">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Click any field to jump to where it came from in the document
                </div>
              </div>
            </div>

            {/* Right: timeline + note + audit */}
            <div className="p-5 md:p-6 bg-bg-tint">
              <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest mb-3">
                Timeline · 12 events
              </div>

              <Timeline />

              <div className="mt-5 rounded-lg border border-accent-ring bg-accent-wash p-3">
                <div className="flex items-center gap-2">
                  <NoteIcon />
                  <span className="text-[11px] font-bold text-ink">
                    Add a note
                  </span>
                </div>
                <div className="mt-2 text-[12px] text-ink-muted leading-relaxed">
                  “Broker agreed on a <strong>$75 detention</strong> on the
                  phone at 3:10pm. Driver confirmed. Applies to this load
                  only.”
                </div>
                <div className="mt-2 text-[10px] font-mono text-ink-subtle">
                  You · Apr 22, 15:12
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
                <span>Audit · append-only · 12 signed entries</span>
                <span className="inline-flex items-center gap-1 text-success">
                  <CheckIcon /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Rate con mock document with highlighted field ---------- */

function RateConPage() {
  return (
    <div className="relative mx-auto max-w-md rounded-lg border border-border bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold text-ink">
          Rate Confirmation
        </span>
        <span className="font-mono text-[10px] text-ink-subtle">
          #RC-48291
        </span>
      </div>
      <div className="p-4 space-y-2.5">
        <DocLine label="Broker" value="ABC Brokerage" />
        <DocLine label="Carrier" value="Haulmark Freight · MC 784221" />
        <DocLine label="Pickup" value="Apr 22, 2026 · 08:00 · Dallas TX" />
        <DocLine label="Delivery" value="Apr 23, 2026 · by 18:00 · Phoenix AZ" />
        <DocLine label="Equipment" value="53 ft dry van" />

        <div className="relative">
          {/* Highlight overlay with animated glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-2 -inset-y-1 rounded-md bg-accent/15 border border-accent/40 animate-glow"
          />
          <DocLine label="Agreed rate" value="$2,480.00" mono />
        </div>

        <DocLine label="Payment terms" value="Net 30" />
      </div>
      {/* Signature area */}
      <div className="px-4 py-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-ink-subtle">
        <span>Signed · carrier dispatch</span>
        <span className="inline-flex items-center gap-1 text-success">
          <CheckIcon /> Present
        </span>
      </div>
    </div>
  );
}

function DocLine({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[11px] text-ink-subtle uppercase tracking-widest font-mono">
        {label}
      </span>
      <span
        className={[
          'text-[12px] text-ink',
          mono ? 'font-mono font-bold' : 'font-semibold',
        ].join(' ')}
      >
        {value}
      </span>
    </div>
  );
}

/* ---------- Timeline ---------- */

type Tone = 'ink' | 'accent' | 'success' | 'warning' | 'note';

function Timeline() {
  const events: {
    at: string;
    title: string;
    detail: string;
    tone: Tone;
    src: string;
  }[] = [
    {
      at: 'Apr 20 · 11:14',
      title: 'Load booked',
      detail: 'Rate con received and signed',
      tone: 'accent',
      src: 'Email · ABC Brokerage',
    },
    {
      at: 'Apr 22 · 07:58',
      title: 'Pickup confirmed',
      detail: 'Driver Mark L., truck 407',
      tone: 'ink',
      src: 'Email · dispatch@hauler',
    },
    {
      at: 'Apr 22 · 15:12',
      title: 'Note added',
      detail: 'Detention agreed by phone — $75',
      tone: 'note',
      src: 'You',
    },
    {
      at: 'Apr 23 · 17:40',
      title: 'POD received',
      detail: 'Signature detected · scan quality ok',
      tone: 'success',
      src: 'Email · dispatch@hauler · POD.pdf',
    },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-3.5 top-1 bottom-1 w-px bg-border-strong"
      />
      <div className="flex flex-col gap-3.5">
        {events.map((e) => (
          <TimelineItem key={e.at} {...e} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  at,
  title,
  detail,
  tone,
  src,
}: {
  at: string;
  title: string;
  detail: string;
  tone: Tone;
  src: string;
}) {
  const dot =
    tone === 'accent'
      ? 'bg-accent border-accent'
      : tone === 'success'
      ? 'bg-success border-success'
      : tone === 'warning'
      ? 'bg-warning border-warning'
      : tone === 'note'
      ? 'bg-accent-wash border-accent'
      : 'bg-navy border-navy';

  return (
    <div className="relative pl-8">
      <span
        className={[
          'absolute left-2 top-1.5 h-3 w-3 rounded-full border-2',
          dot,
        ].join(' ')}
        aria-hidden="true"
      />
      <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
        {at}
      </div>
      <div className="text-[13px] font-bold text-ink">{title}</div>
      <div className="text-[12px] text-ink-muted leading-relaxed">{detail}</div>
      <div className="mt-1 text-[10px] font-mono text-ink-subtle">{src}</div>
    </div>
  );
}

/* ---------- Icons ---------- */

function NoteIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M11 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6" />
      <polygon points="18.5 2.5 21.5 5.5 12 15 8 16 9 12 18.5 2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Field({
  k,
  v,
  highlight = false,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md border px-2.5 py-1.5',
        highlight
          ? 'border-accent bg-accent-wash'
          : 'border-border bg-white',
      ].join(' ')}
    >
      <div className="text-[9px] uppercase tracking-widest font-mono text-ink-subtle">
        {k}
      </div>
      <div
        className={[
          'font-mono text-[11px] mt-0.5',
          highlight ? 'font-bold text-accent-strong' : 'text-ink',
        ].join(' ')}
      >
        {v}
      </div>
    </div>
  );
}
