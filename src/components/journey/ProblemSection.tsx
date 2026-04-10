/**
 * Visual retelling of the anonymized SKR case.
 * Three paper BOLs side-by-side. Two show a red "DUPLICATE" stamp + a visual
 * signature-match link. One shows a green "AUTHENTIC" stamp.
 */
import BolSheet from '@/components/visuals/BolSheet';
import SignatureMatchLink from '@/components/visuals/SignatureMatchLink';

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative py-28 md:py-36"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Case file · anonymized</span>
          <h2
            id="problem-heading"
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]"
          >
            Three loads. One real signature.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted">
            A real November 2025 fraud at a top-20 US brokerage. 2,340 miles, same lane, same
            carrier. Detected months later.
          </p>
        </div>

        {/* 3 BOLs */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative">
              <BolSheet
                number="256724"
                date="11/25/25"
                items={['20 pallets', '6 bar fixtures', '2 bakers racks']}
                state="forged"
              />
            </div>
            <div className="relative">
              <BolSheet
                number="210895"
                date="11/25/25"
                items={['20 A&A pallets', '1 gang box']}
                state="forged"
              />
            </div>
            <div className="relative">
              <BolSheet
                number="660888"
                date="11/28/25"
                items={['20 pallets', '5 bar fixtures', '2 bakers racks']}
                state="authentic"
              />
            </div>
          </div>

          {/* Signature match callout — desktop overlay */}
          <div className="hidden md:flex absolute left-0 right-0 top-[58%] -translate-y-1/2 justify-start pointer-events-none">
            <div className="w-2/3 pl-[8%] pr-[12%]">
              <SignatureMatchLink />
            </div>
          </div>
        </div>

        {/* Mobile-only match call */}
        <div className="md:hidden mt-6">
          <SignatureMatchLink />
        </div>

        {/* The math strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat big="2,340 mi" small="Livonia, MI → Richmond, CA" />
          <Stat big="0 hours" small="Elapsed on the two forged PODs" tone="critical" />
          <Stat big="< 1 sec" small="Detection time with FreightPassport" tone="accent" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  big,
  small,
  tone = 'ink',
}: {
  big: string;
  small: string;
  tone?: 'ink' | 'accent' | 'critical';
}) {
  const color =
    tone === 'accent'
      ? 'text-accent'
      : tone === 'critical'
      ? 'text-critical'
      : 'text-ink';
  return (
    <div className="card-shadow p-6">
      <div className={`font-mono text-3xl font-extrabold tracking-tight ${color}`}>{big}</div>
      <div className="mt-2 text-sm text-ink-muted">{small}</div>
    </div>
  );
}
