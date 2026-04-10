import SecurityShield from '@/components/visuals/SecurityShield';
import VerifierPanel from '@/components/visuals/VerifierPanel';

const pillars = [
  { k: 'Ed25519', v: 'Per-load + platform signatures' },
  { k: 'AES-256', v: 'Encrypted pickup numbers' },
  { k: 'Append-only', v: 'Postgres trigger, not code' },
  { k: 'Zero biometrics', v: 'We never store them' },
];

export default function NetworkEffect() {
  return (
    <section
      id="security"
      className="relative py-28 md:py-36 border-t border-border bg-bg-tint"
      aria-labelledby="security-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Layers visual + short copy */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow">Security, built-in</span>
            <h2
              id="security-heading"
              className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
            >
              Five layers between
              <br />
              <span className="text-accent">freight and a forger.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-ink-muted max-w-md">
              No bolted-on trust. Every layer fails closed.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              {pillars.map((p) => (
                <div key={p.k} className="card p-4">
                  <dt className="font-mono text-[11px] font-bold text-accent uppercase tracking-wider">
                    {p.k}
                  </dt>
                  <dd className="mt-1 text-[13px] text-ink-muted leading-snug">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <SecurityShield />
          </div>
        </div>

        {/* Divider */}
        <div className="hairline my-24" />

        {/* Verifier block */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div className="lg:order-2">
            <span className="eyebrow">Public verifier</span>
            <h3 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.08]">
              Any PDF. Any device.
              <br />
              <span className="text-accent">No account.</span>
            </h3>
            <p className="mt-5 text-base text-ink-muted max-w-md">
              Judges, adjusters, and compliance teams verify PODs against our published public
              key in milliseconds.
            </p>
          </div>

          <div className="lg:order-1">
            <VerifierPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
