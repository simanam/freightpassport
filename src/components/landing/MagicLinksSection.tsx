/* Brand colors — used inline so they don't bleed into the theme tokens. */
const WA_GREEN = '#25D366';
const IM_BLUE = '#007AFF';
const SMS_GREEN = '#34C759';
const EMAIL_BLUE = '#0B5FFF';
const SLACK_PURPLE = '#4A154B';

function BrandWord({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span className="font-bold" style={{ color }}>
      {children}
    </span>
  );
}

export default function MagicLinksSection() {
  return (
    <section
      id="uploads"
      className="relative py-24 md:py-32 bg-bg-tint border-y border-border"
      aria-labelledby="uploads-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="eyebrow">The go-to feature</span>
          <h2
            id="uploads-heading"
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.06]"
          >
            The{' '}
            <span style={{ color: WA_GREEN }}>WhatsApp</span>
            {' '}and{' '}
            <span style={{ color: IM_BLUE }}>iMessage</span>
            {' '}problem —
            <br />
            <span className="text-accent">solved without touching either.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Your driver sends PODs on{' '}
            <BrandWord color={WA_GREEN}>WhatsApp</BrandWord>. Your carrier sends
            rate cons on <BrandWord color={IM_BLUE}>iMessage</BrandWord>. Your
            shipper emails a lumper receipt from a personal address. None of
            those are going to change — so we don&rsquo;t try to change them.
          </p>
          <p className="mt-4 text-lg md:text-[20px] font-bold text-ink leading-snug">
            One link. Any channel your team already uses. The{' '}
            <em>document</em> lands structured on the right load — every
            time.
          </p>
        </div>

        {/* Channel spray — the same link arriving in the channels the broker already uses */}
        <ChannelSpray />

        <div className="mt-10 grid lg:grid-cols-[1.05fr_28px_1fr_28px_1.1fr] items-stretch gap-3 lg:gap-0">
          <PanelGenerate />
          <PanelConnector />
          <PanelPhone />
          <PanelConnector />
          <PanelLanded />
        </div>

        <div className="mt-14 tile tile-raised p-5 md:p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <div className="flex items-center gap-2">
                <ShieldIcon />
                <span className="text-[11px] font-mono text-success uppercase tracking-widest font-bold">
                  Forensic by default
                </span>
              </div>
              <h3 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight text-ink">
                Every upload is stamped with evidence — on purpose.
              </h3>
              <p className="mt-3 text-[14px] text-ink-muted leading-relaxed">
                When a dispute lands six months later, you don&rsquo;t want
                &ldquo;the driver texted me something on WhatsApp.&rdquo; You
                want a timestamped, geo-tagged, phone-captured, hash-verified
                record pointing straight at one load.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              <EvidencePill k="Phone #" v="+1 214 ••• 2341" />
              <EvidencePill k="IP" v="73.102.••.••" />
              <EvidencePill k="Geo" v="Dallas, TX · 0.4 km" />
              <EvidencePill k="Device" v="iPhone · iOS 26" />
              <EvidencePill k="SHA-256" v="f7a3…2b91" mono />
              <EvidencePill k="Virus scan" v="Clean" tone="ok" />
            </div>
          </div>

          <div className="hairline mt-6" />

          <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
                Abuse guardrails
              </div>
              <ul className="flex flex-col gap-1.5">
                <Bullet>Link expires in 7 days (configurable)</Bullet>
                <Bullet>Max 3 uploads per link (configurable)</Bullet>
                <Bullet>PDFs and common image formats only · 25 MB cap</Bullet>
                <Bullet>Virus scan before anything hits your load</Bullet>
                <Bullet>
                  Revoke with one click — you can kill a link mid-upload
                </Bullet>
              </ul>
            </div>

            <ChannelsStrip />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Channel Spray — the same link arriving everywhere ---------------- */

function ChannelSpray() {
  return (
    <div className="mt-10 relative">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
          fp.app/u/k7x9m2q4 · delivered to
        </span>
        <span className="stat-pill">4 channels</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <WhatsAppCard />
        <IMessageCard />
        <EmailCard />
        <SmsCard />
      </div>

      <div className="mt-4 text-center text-[12px] text-ink-muted">
        One click to generate. Paste it wherever you already talk to your
        driver, carrier, or shipper. Same link. Same forensic audit trail.
      </div>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <ChannelCard
      name="WhatsApp"
      color={WA_GREEN}
      icon={<WhatsAppIcon />}
      meta="Sent · 9:41 AM  ✓✓"
    >
      <div
        className="self-start max-w-[92%] rounded-xl rounded-bl-sm px-3 py-2 text-[11px] leading-snug"
        style={{ background: '#E7FFDB', color: '#0B2518' }}
      >
        hey Mark — please upload POD for{' '}
        <strong>load 48291</strong> at this link:
        <div
          className="mt-1.5 font-mono text-[10px] break-all"
          style={{ color: WA_GREEN }}
        >
          fp.app/u/k7x9m2q4
        </div>
      </div>
    </ChannelCard>
  );
}

function IMessageCard() {
  return (
    <ChannelCard
      name="iMessage"
      color={IM_BLUE}
      icon={<IMessageIcon />}
      meta="Delivered"
    >
      <div
        className="self-end max-w-[92%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px] text-white leading-snug"
        style={{
          background: `linear-gradient(180deg, ${IM_BLUE}, #0B6FE8)`,
        }}
      >
        POD for <strong>#48291</strong> here, thanks:
        <div className="mt-1.5 font-mono text-[10px] break-all opacity-95">
          fp.app/u/k7x9m2q4
        </div>
      </div>
    </ChannelCard>
  );
}

function EmailCard() {
  return (
    <ChannelCard
      name="Email"
      color={EMAIL_BLUE}
      icon={<EmailIcon />}
      meta="Outlook · Gmail · any SMTP"
    >
      <div className="rounded-md border border-border bg-white overflow-hidden w-full">
        <div className="px-2.5 py-1.5 border-b border-border bg-bg-tint">
          <div className="text-[9px] font-mono text-ink-subtle">
            From: maria@modetransportation.com
          </div>
          <div className="text-[10px] font-semibold text-ink truncate">
            POD request — load 48291
          </div>
        </div>
        <div className="px-2.5 py-1.5 text-[10px] text-ink-muted leading-snug">
          Can you upload the POD here at your earliest:
          <div
            className="mt-1 font-mono text-[10px] break-all"
            style={{ color: EMAIL_BLUE }}
          >
            fp.app/u/k7x9m2q4
          </div>
        </div>
      </div>
    </ChannelCard>
  );
}

function SmsCard() {
  return (
    <ChannelCard
      name="SMS"
      color={SMS_GREEN}
      icon={<SmsIcon />}
      meta="Android · iOS fallback"
    >
      <div
        className="self-start max-w-[92%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px] text-white leading-snug"
        style={{ background: SMS_GREEN }}
      >
        POD please — 48291
        <div className="mt-1 font-mono text-[10px] break-all opacity-95">
          fp.app/u/k7x9m2q4
        </div>
      </div>
    </ChannelCard>
  );
}

function ChannelCard({
  name,
  color,
  icon,
  meta,
  children,
}: {
  name: string;
  color: string;
  icon: React.ReactNode;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tile p-4 flex flex-col gap-3 min-h-[160px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white"
            style={{ background: color }}
            aria-hidden="true"
          >
            {icon}
          </span>
          <span className="text-[13px] font-bold" style={{ color }}>
            {name}
          </span>
        </div>
        <span className="text-[9px] font-mono text-ink-subtle uppercase tracking-widest">
          {meta}
        </span>
      </div>
      <div className="flex flex-col flex-1 justify-end">{children}</div>
    </div>
  );
}

/* ---------------- Panel 1: Generate link on a load ---------------- */

function PanelGenerate() {
  return (
    <Panel step="01" title="Generate">
      <div className="rounded-lg border border-border bg-white p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold text-ink">
            #48291
          </span>
          <span className="font-mono text-[9px] text-ink-subtle uppercase tracking-widest">
            DAL → PHX
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1.5 flex-wrap">
          <DocChip label="Rate con" />
          <DocChip label="BOL" />
          <DocChip label="POD" missing />
          <DocChip label="Invoice" />
        </div>

        <button
          type="button"
          className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-navy text-white text-[11px] font-bold py-2 border border-navy animate-glow"
        >
          <PlusIcon />
          Request POD
        </button>
      </div>

      <div className="mt-3 rounded-md border border-accent-ring bg-accent-wash px-3 py-2">
        <div className="text-[9px] font-mono text-accent-strong uppercase tracking-widest">
          Link generated
        </div>
        <div className="mt-1 font-mono text-[11px] text-ink break-all">
          freightpassport.app/u/k7x9m2q4
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-ink-subtle">
          <ClockIcon /> Expires in 7 days · 0 of 3 uploads used
        </div>
      </div>
    </Panel>
  );
}

/* ---------------- Panel 2: Counterparty receives & uploads ---------------- */

function PanelPhone() {
  return (
    <Panel step="02" title="Any channel">
      <div className="relative mx-auto w-full max-w-[200px] rounded-[26px] border-[5px] border-navy bg-navy overflow-hidden shadow-lg">
        {/* Status bar — now WhatsApp-branded header */}
        <div
          className="flex items-center justify-between px-3 py-1.5 text-[9px] font-bold text-white"
          style={{ background: WA_GREEN }}
        >
          <span className="opacity-90">9:41</span>
          <span className="inline-flex items-center gap-1">
            <WhatsAppIcon />
            Mark L.
          </span>
          <span className="opacity-90">100%</span>
        </div>

        {/* Message thread */}
        <div
          className="px-3 py-3 flex flex-col gap-2"
          style={{ background: '#ECE5DD' }}
        >
          <div
            className="self-start max-w-[85%] rounded-xl rounded-bl-sm px-2.5 py-1.5 shadow-sm"
            style={{ background: '#FFFFFF' }}
          >
            <div className="text-[10px] text-ink leading-tight">
              hey Mark — upload POD for 48291 please
            </div>
            <div
              className="mt-1 rounded-md border px-2 py-1 text-[9px] font-mono truncate"
              style={{
                background: '#F7FFF0',
                borderColor: WA_GREEN + '66',
                color: WA_GREEN,
              }}
            >
              fp.app/u/k7x9m2q4
            </div>
            <div className="mt-0.5 text-[8px] font-mono text-ink-subtle text-right">
              9:41 AM  ✓✓
            </div>
          </div>

          <div
            className="self-end max-w-[85%] rounded-xl rounded-br-sm px-2.5 py-1.5 shadow-sm"
            style={{ background: '#E7FFDB' }}
          >
            <div className="text-[10px] text-ink">tapping now 👍</div>
            <div className="mt-0.5 text-[8px] font-mono text-ink-subtle text-right">
              9:42 AM  ✓✓
            </div>
          </div>
        </div>

        {/* Upload mini-page (appears to "slide up" via animation) */}
        <div className="bg-bg-tint border-t border-border px-3 py-3 animate-soft-float">
          <div className="rounded-md bg-white border border-border p-2.5">
            <div className="text-[9px] font-mono text-accent-strong uppercase tracking-widest font-bold">
              Upload POD
            </div>
            <div className="mt-0.5 text-[9px] text-ink-muted">
              Load #48291 · requested by Aman
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[8px] font-mono text-ink-subtle uppercase tracking-widest">
                Phone
              </span>
              <div className="flex-1 rounded-sm bg-bg-tint border border-border px-1.5 py-0.5 text-[9px] font-mono text-ink">
                +1 214 ••• 2341
              </div>
            </div>

            <button
              type="button"
              className="mt-2 w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-accent text-white text-[10px] font-bold py-1.5 border border-accent"
            >
              <CameraIcon />
              Take photo
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 text-[10px] font-mono text-ink-subtle text-center">
        <span className="font-bold" style={{ color: WA_GREEN }}>
          WhatsApp
        </span>
        {' · '}
        <span className="font-bold" style={{ color: IM_BLUE }}>
          iMessage
        </span>
        {' · '}SMS · email
        <br />
        <span className="text-ink-muted">— any of them, none integrated</span>
      </div>
    </Panel>
  );
}

/* ---------------- Panel 3: Document lands with forensic trail ---------------- */

function PanelLanded() {
  return (
    <Panel step="03" title="Lands structured">
      <div className="rounded-lg border border-success-border bg-success-wash p-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-success font-bold uppercase tracking-widest">
            <CheckIcon /> POD received
          </span>
          <span className="font-mono text-[9px] text-ink-subtle">
            Load #48291
          </span>
        </div>
        <div className="mt-1 text-[11px] text-ink">
          Receiver signature · <strong>clear</strong> · 20 of 20 pieces
        </div>
      </div>

      <div className="mt-3 rounded-md border border-border bg-white p-3">
        <div className="text-[9px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
          Upload event
        </div>
        <div className="flex flex-col gap-1">
          <LandingRow k="At" v="Apr 23 · 17:38 CT" />
          <LandingRow k="From" v="+1 214 ••• 2341" />
          <LandingRow k="Geo" v="Phoenix, AZ · 0.4 km" />
          <LandingRow k="Scan" v="Clean" tone="ok" />
          <LandingRow k="Hash" v="f7a3…2b91" mono />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-ink-subtle">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
        Attached to timeline · audit trail signed
      </div>
    </Panel>
  );
}

/* ---------------- Shared panel ---------------- */

function Panel({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tile tile-raised p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center h-6 px-2 rounded-md bg-navy text-white font-mono text-[11px] font-bold">
          {step}
        </span>
        <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest">
          {title}
        </span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function PanelConnector() {
  return (
    <div
      className="hidden lg:flex items-center justify-center"
      aria-hidden="true"
    >
      <svg width="28" height="80" viewBox="0 0 28 80" fill="none" className="text-accent">
        <line
          x1="2"
          y1="40"
          x2="22"
          y2="40"
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
    </div>
  );
}

/* ---------------- Channels strip ---------------- */

function ChannelsStrip() {
  const channels: {
    name: string;
    color?: string;
    icon?: React.ReactNode;
  }[] = [
    { name: 'WhatsApp', color: WA_GREEN, icon: <WhatsAppIcon /> },
    { name: 'iMessage', color: IM_BLUE, icon: <IMessageIcon /> },
    { name: 'SMS', color: SMS_GREEN, icon: <SmsIcon /> },
    { name: 'Email', color: EMAIL_BLUE, icon: <EmailIcon /> },
    { name: 'Slack / Teams', color: SLACK_PURPLE, icon: <SlackIcon /> },
    { name: 'Phone screenshot' },
  ];

  return (
    <div>
      <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-widest mb-2">
        Channels that work (zero integration)
      </div>
      <div className="grid grid-cols-2 gap-2">
        {channels.map((c) => (
          <div
            key={c.name}
            className="rounded-md border border-border bg-white px-2.5 py-1.5 flex items-center gap-2 text-[11px]"
          >
            {c.color ? (
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-sm text-white"
                style={{ background: c.color }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
            ) : (
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-ink-subtle text-white">
                <CheckIcon />
              </span>
            )}
            <span
              className="font-semibold"
              style={c.color ? { color: c.color } : { color: 'var(--color-ink)' }}
            >
              {c.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] font-mono text-ink-subtle">
        No WhatsApp Business API · No Twilio · No Meta approvals
      </div>
    </div>
  );
}

/* ---------------- Small bits ---------------- */

function EvidencePill({
  k,
  v,
  tone,
  mono = false,
}: {
  k: string;
  v: string;
  tone?: 'ok';
  mono?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-md border px-2.5 py-1.5',
        tone === 'ok'
          ? 'bg-success-wash border-success-border'
          : 'bg-white border-border',
      ].join(' ')}
    >
      <div className="text-[9px] uppercase tracking-widest font-mono text-ink-subtle">
        {k}
      </div>
      <div
        className={[
          'mt-0.5 text-[12px]',
          mono ? 'font-mono' : 'font-semibold',
          tone === 'ok' ? 'text-success' : 'text-ink',
        ].join(' ')}
      >
        {v}
      </div>
    </div>
  );
}

function LandingRow({
  k,
  v,
  tone,
  mono = false,
}: {
  k: string;
  v: string;
  tone?: 'ok';
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-[11px]">
      <span className="text-ink-subtle font-mono uppercase tracking-widest text-[9px]">
        {k}
      </span>
      <span
        className={[
          mono ? 'font-mono' : 'font-semibold',
          tone === 'ok' ? 'text-success' : 'text-ink',
        ].join(' ')}
      >
        {v}
      </span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[13px] text-ink-muted">
      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function DocChip({ label, missing = false }: { label: string; missing?: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-mono border uppercase tracking-wider',
        missing
          ? 'bg-warning-wash text-warning border-warning'
          : 'bg-white text-ink-muted border-border',
      ].join(' ')}
    >
      {label}
      {missing && <span className="font-bold">missing</span>}
    </span>
  );
}

/* ---------------- Icons ---------------- */

function PlusIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function ShieldIcon() {
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
      className="text-success"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

/* Channel glyphs — simplified marks, not official logos. Stroke-only for uniform rendering. */

function WhatsAppIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11 11 0 0 0 2.6 17.1L1 23l6.1-1.6A11 11 0 1 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.6.9 1-3.5-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.7-6.1c-.3-.1-1.5-.8-1.8-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.4-1.8-1.6-2-.2-.3 0-.5.1-.6l.4-.4c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z" />
    </svg>
  );
}

function IMessageIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3c-5.5 0-10 3.8-10 8.5 0 2.7 1.5 5.1 3.9 6.7v3.3l3.4-2a12 12 0 0 0 2.7.3c5.5 0 10-3.8 10-8.3S17.5 3 12 3z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 1.2 4.5L3 21l4.8-1.2A9 9 0 1 0 12 3zm-3 10h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 14a2 2 0 1 1 0-4h2v4H6zm3 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zm2-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2zm8 3a2 2 0 1 1 0 4h-2v-4h2zm-3 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5zm-2 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-1a2 2 0 0 1-2-2v-2h4v2a2 2 0 0 1-2 2z" />
    </svg>
  );
}
