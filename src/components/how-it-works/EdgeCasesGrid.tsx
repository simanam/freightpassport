'use client';

import { useState } from 'react';

type Category =
  | 'All'
  | 'Pickup'
  | 'Transit'
  | 'Delivery'
  | 'Multi-stop'
  | 'Incidents'
  | 'Identity';

interface EdgeCase {
  category: Exclude<Category, 'All'>;
  title: string;
  scenario: string;
  handling: string;
}

const categories: Category[] = [
  'All',
  'Pickup',
  'Transit',
  'Delivery',
  'Multi-stop',
  'Incidents',
  'Identity',
];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Pickup: 'bg-accent/10 text-accent',
  Transit: 'bg-warning-wash text-warning',
  Delivery: 'bg-success-wash text-success',
  'Multi-stop': 'bg-[#e0e7ff] text-[#4338ca]',
  Incidents: 'bg-critical-wash text-critical',
  Identity: 'bg-[#f3e8ff] text-[#7c3aed]',
};

const edgeCases: EdgeCase[] = [
  // ── Pickup ──
  {
    category: 'Pickup',
    title: 'No cell signal at rural dock',
    scenario:
      'Driver arrives at a facility with zero connectivity. Normal QR/OTP flow cannot complete.',
    handling:
      'Broker generates 6-digit offline release code. Shipper reads code to driver. Driver enters when connectivity returns. Geofence still enforced.',
  },
  {
    category: 'Pickup',
    title: 'Shipper refuses to scan QR',
    scenario:
      'Dock worker declines to participate in the verification handshake.',
    handling:
      'Driver completes full 3-signal verification on their own phone (Path C). Destination still revealed.',
  },
  {
    category: 'Pickup',
    title: 'Driver has no smartphone',
    scenario:
      'Driver shows up with a flip phone or no phone at all.',
    handling:
      'Shipper clerk scans on their device. Visual face match against driver photo in the system.',
  },
  {
    category: 'Pickup',
    title: 'Wrong truck shows up (plate mismatch)',
    scenario:
      'The truck at the dock has a different plate than what was assigned to the load.',
    handling:
      'Claude Vision OCR extracts plate from truck photo. Mismatch triggers Rule 31 warning to broker. Pattern of mismatches escalates to critical.',
  },
  {
    category: 'Pickup',
    title: 'OTP sent to wrong/old number',
    scenario:
      'Driver changed phones or carrier updated the number without telling the broker.',
    handling:
      'Re-request OTP to different number once per load (logged). Twilio Lookup flags VoIP/burner phones.',
  },

  // ── Transit ──
  {
    category: 'Transit',
    title: 'Driver in cellular dead zone',
    scenario:
      'Check-in SMS sent but never acknowledged because the driver has no signal.',
    handling:
      'Check-in marked "sent" but not "responded". System waits for next 4-hour tick. If driver catches up, missed tick becomes "presumed_rest".',
  },
  {
    category: 'Transit',
    title: 'Solo driver falls asleep without texting SLEEP',
    scenario:
      'Driver parks at a rest stop and sleeps without sending a rest notification.',
    handling:
      'Automatic rest inference: missed check-in with 30+ hours of ETA remaining is assumed rest. 10 hours total silence = escalate.',
  },
  {
    category: 'Transit',
    title: "Carrier's ELD integration fails mid-load",
    scenario:
      'ELD data feed stops arriving after working fine for the first leg.',
    handling:
      'System detects ELD feed stopped. Automatically falls back to SMS check-ins. Rule 24 fires as warning.',
  },
  {
    category: 'Transit',
    title: 'Driver uses different phone than registered',
    scenario:
      'Check-in arrives from a device that doesn\'t match the registered fingerprint.',
    handling:
      'FingerprintJS visitorId differs. Check-in accepted but logged with "new device" warning. One-tap confirm available.',
  },

  // ── Delivery ──
  {
    category: 'Delivery',
    title: 'Receiver has no internet',
    scenario:
      'Consignee at the delivery dock cannot load the signing page.',
    handling:
      'Signs on driver\'s phone via shared session (degraded mode). Logged with warning flag.',
  },
  {
    category: 'Delivery',
    title: 'Partial delivery: 17 of 20 pallets arrive',
    scenario:
      'Not all freight makes it. Receiver counts fewer units than the BOL states.',
    handling:
      'Receiver enters actual count. System computes delta. Stop set to PARTIALLY_DELIVERED. Shortage event with photos appended to audit chain.',
  },
  {
    category: 'Delivery',
    title: 'Receiver refuses delivery (damaged freight)',
    scenario:
      'Freight arrives damaged and the receiver won\'t accept it.',
    handling:
      'Receiver taps "Refuse", enters reason + photos. Signed refusal event. Broker decides: return, divert, or hold.',
  },

  // ── Multi-stop ──
  {
    category: 'Multi-stop',
    title: 'Multi-drop: receiver at stop 2 refuses',
    scenario:
      'One stop in a multi-drop route rejects the freight.',
    handling:
      'Stop 2 set to REFUSED. Load stays IN_TRANSIT to remaining stops. Broker notified. Refused freight stays on truck for return or divert.',
  },
  {
    category: 'Multi-stop',
    title: 'Multi-pickup: shipper at stop 1 not ready',
    scenario:
      'Driver arrives at the first pickup but freight isn\'t staged.',
    handling:
      'Stop 1 set to SKIPPED. Driver proceeds to stop 2. Broker notified. Stop 1 reattempted later or cancelled.',
  },
  {
    category: 'Multi-stop',
    title: 'Load involves return freight after refusal',
    scenario:
      'Refused freight needs to go back to the shipper.',
    handling:
      'Broker appends return stop. Shipper signs for returned freight. Audit chain covers full round trip.',
  },

  // ── Incidents ──
  {
    category: 'Incidents',
    title: 'Truck accident on highway',
    scenario:
      'Driver is involved in a collision while carrying the load.',
    handling:
      'Driver reports via SMS or dashboard. Load set to INCIDENT. System prompts for scene photos + police report. Custody transfer to tow company via magic-link.',
  },
  {
    category: 'Incidents',
    title: 'Cross-dock transload mid-route',
    scenario:
      'Freight is transferred between trucks at a cross-dock facility.',
    handling:
      'Custody transfer events at cross-dock: driver confirms drop-off, warehouse confirms receipt, new driver confirms pickup. Each handoff signed.',
  },
  {
    category: 'Incidents',
    title: 'Carrier MC# becomes inactive mid-load',
    scenario:
      'FMCSA revokes or suspends the carrier\'s authority while a load is in transit.',
    handling:
      'Hourly FMCSA recheck for IN_TRANSIT loads. Inactive triggers warning flag. Doesn\'t block delivery but broker is notified.',
  },

  // ── Identity ──
  {
    category: 'Identity',
    title: 'Gmail broker with no corporate domain',
    scenario:
      'A legitimate broker signs up with a personal email address.',
    handling:
      'First-class Bronze tier. Same verification path. FMCSA phone OTP + entity match carry the identity signal, not email domain.',
  },
  {
    category: 'Identity',
    title: "Verified carrier's email gets hacked",
    scenario:
      'An attacker gains access to a carrier\'s email and tries to take over the account.',
    handling:
      'Attacker can read dashboard but sensitive actions (driver reassignment, accepting loads) require step-up SMS OTP to FMCSA phone. Rule 34 triggers on new device + new IP.',
  },
  {
    category: 'Identity',
    title: 'Bad rep at a good Organization',
    scenario:
      'One member of a verified carrier organization acts in bad faith.',
    handling:
      'Member-level flag, not Org downgrade. One bad actor doesn\'t collapse the Organization. Admin can suspend the member.',
  },
];

export default function EdgeCasesGrid() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All'
      ? edgeCases
      : edgeCases.filter((ec) => ec.category === active);

  return (
    <section
      id="edge-cases"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="edge-cases-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="eyebrow">Edge cases</span>

        <h2
          id="edge-cases-heading"
          className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          The real world doesn&rsquo;t follow happy&nbsp;paths.
        </h2>

        <p className="mt-5 text-base md:text-lg text-ink-muted max-w-3xl">
          Every scenario below has a specified handling. Filter by category
          to&nbsp;explore.
        </p>

        {/* ── Category filter tabs ── */}
        <div className="mt-10 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'bg-accent text-white'
                    : 'card hover:bg-bg-tint'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({edgeCases.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Edge case cards ── */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((ec) => (
            <div key={ec.title} className="card p-6">
              {/* Category chip */}
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${categoryColors[ec.category]}`}
              >
                {ec.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-ink">
                {ec.title}
              </h3>

              {/* Scenario */}
              <p className="mt-3 text-base md:text-lg text-ink-muted">
                {ec.scenario}
              </p>

              {/* Handling */}
              <div className="mt-4 border-l-2 border-success pl-4">
                <p className="text-[11px] font-mono uppercase tracking-widest text-ink-muted mb-1">
                  Handling
                </p>
                <p className="text-base text-ink">{ec.handling}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
