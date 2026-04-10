'use client';

import { useState } from 'react';

/* ─── State detail data ─── */

interface StateDetail {
  trigger: string;
  actor: string;
  verified: string;
  edgeCases: string[];
  fraudRules: string;
}

const stateDetails: Record<string, StateDetail> = {
  DRAFT: {
    trigger: 'Broker clicks "Create Load" and fills out origin, destination, commodity, and rate.',
    actor: 'Broker',
    verified: 'Session JWT validated; broker org membership confirmed via Supabase RLS.',
    edgeCases: [
      'Incomplete fields are saved but load cannot advance past DRAFT.',
      'Duplicate load detection compares origin/dest/date within the same org.',
      'If the broker is on a free tier, TIER_LIMITED may fire before PENDING_VERIFICATION.',
    ],
    fraudRules: 'R-01 (duplicate load), R-02 (rate anomaly vs. lane average)',
  },
  PENDING_VERIFICATION: {
    trigger: 'Broker submits the draft for internal review or auto-verification.',
    actor: 'System',
    verified: 'Rate bounds check, origin/destination geocode validation, commodity code lookup.',
    edgeCases: [
      'If rate is >2 standard deviations from lane average, load is flagged for manual review.',
      'Geocode failures on address block advancement until corrected.',
      'System may auto-approve if broker has a verified history of 50+ loads.',
    ],
    fraudRules: 'R-03 (address spoofing), R-04 (phantom load pattern)',
  },
  PUBLISHED: {
    trigger: 'Load passes verification and is visible on the load board.',
    actor: 'System (auto) or Broker (manual approve)',
    verified: 'All required fields present; rate within bounds; no duplicate flags.',
    edgeCases: [
      'Published loads expire after 72 hours if no carrier is assigned.',
      'Broker can unpublish back to DRAFT at any time before assignment.',
      'Load board visibility respects carrier lane preferences.',
    ],
    fraudRules: 'R-05 (rapid publish/unpublish cycling), R-06 (stale load re-publish)',
  },
  CARRIER_ASSIGNED: {
    trigger: 'Broker assigns a verified carrier to the load, or carrier accepts from the board.',
    actor: 'Broker or Carrier',
    verified: 'Carrier MC number validated against FMCSA SAFER; insurance certificate on file and not expired; authority status AUTHORIZED.',
    edgeCases: [
      'If carrier authority lapses between assignment and pickup, load is frozen.',
      'Double-brokering check compares carrier MC against known re-broker patterns.',
      'Carrier assignment triggers SMS notification to carrier dispatch.',
    ],
    fraudRules: 'R-07 (carrier identity mismatch), R-08 (double-broker pattern), R-09 (lapsed authority)',
  },
  DRIVER_ASSIGNED: {
    trigger: 'Carrier assigns a specific driver and truck to the load.',
    actor: 'Carrier',
    verified: 'Driver CDL validated; truck VIN on file; driver phone number confirmed via OTP.',
    edgeCases: [
      'Driver swap after assignment requires carrier to re-verify and broker notification.',
      'If driver CDL is expired, assignment is blocked.',
      'Multiple loads on same driver trigger a HOS (hours of service) warning.',
    ],
    fraudRules: 'R-10 (ghost driver), R-11 (CDL mismatch), R-12 (HOS conflict)',
  },
  PICKUP_PENDING: {
    trigger: 'Driver is en route to pickup location; geofence monitoring begins.',
    actor: 'Driver (via mobile app)',
    verified: 'Driver GPS stream started; geofence radius set around pickup coordinates; ETA computed.',
    edgeCases: [
      'If driver does not enter geofence within the pickup window, DELIVERY_OVERDUE fires.',
      'GPS spoofing detection compares cell tower triangulation with reported GPS.',
      'Carrier can update driver assignment until the driver enters the geofence.',
    ],
    fraudRules: 'R-13 (GPS spoofing), R-14 (pickup window violation), R-15 (device fingerprint mismatch)',
  },
  PICKUP_VERIFIED: {
    trigger: 'Driver completes 3-signal verification at the pickup dock: geofence entry + OTP from shipper + dual-camera photo.',
    actor: 'Driver + Shipper (OTP handoff)',
    verified: 'Geofence confirmed within 200m; OTP matched; front/rear cargo photos hashed with SHA-256 and signed with Ed25519 keypair; timestamp sealed.',
    edgeCases: [
      'If any of the 3 signals fail, load stays in PICKUP_PENDING and the failure is logged.',
      'Photos are checked for EXIF manipulation and AI-generated content.',
      'OTP expires after 10 minutes; shipper can request a new one.',
    ],
    fraudRules: 'R-16 (photo manipulation), R-17 (EXIF timestamp drift), R-18 (OTP replay)',
  },
  IN_TRANSIT: {
    trigger: 'Pickup verification is complete and the truck departs the origin.',
    actor: 'System (automatic transition after pickup seal)',
    verified: 'Pickup seal hash anchored; GPS tracking active; ETA recalculated against route.',
    edgeCases: [
      'Route deviation beyond 50 miles triggers an alert to the broker.',
      'GPS signal loss for >30 minutes triggers a connectivity warning.',
      'Driver can log rest stops and fuel stops without breaking the chain.',
    ],
    fraudRules: 'R-19 (route deviation), R-20 (speed anomaly), R-21 (cargo swap window)',
  },
  DELIVERY_VERIFIED: {
    trigger: 'Driver completes delivery verification: geofence + receiver signature + cargo photos.',
    actor: 'Driver + Receiver',
    verified: 'Geofence at destination confirmed; receiver e-signature captured and 128-dim fingerprint stored; cargo condition photos hashed and signed; full POD document assembled.',
    edgeCases: [
      'Partial delivery (missing items) routes to PARTIALLY_DELIVERED instead.',
      'Receiver can dispute condition at signing, which flags the POD.',
      'Signature comparison against receiver identity profile (if on file).',
    ],
    fraudRules: 'R-22 (signature forgery), R-23 (location mismatch at delivery), R-24 (photo reuse from pickup)',
  },
  DELIVERED: {
    trigger: 'All delivery verification checks pass and the POD is finalized.',
    actor: 'System (automatic after delivery seal)',
    verified: 'Full chain of custody hash computed: pickup_hash + transit_hashes + delivery_hash; Ed25519 final signature; 6-hour external hash anchor to public blockchain.',
    edgeCases: [
      'POD is immutable after DELIVERED; disputes go through a separate DISPUTED flow.',
      'Insurance adjusters can verify the POD via a public share link with hash verification.',
      'Broker payment release can be automated based on DELIVERED status.',
    ],
    fraudRules: 'R-25 (chain-of-custody break), R-26 (timestamp sequence violation)',
  },
  PARTIALLY_DELIVERED: {
    trigger: 'Receiver confirms delivery but reports missing or damaged items.',
    actor: 'Receiver + Driver',
    verified: 'Item-level discrepancy logged; photos of damaged/missing cargo required; partial POD generated.',
    edgeCases: [
      'Broker is notified immediately and can open a claim or dispute.',
      'Remaining items may trigger a follow-up load.',
      'Partial delivery still gets a sealed POD for the items that arrived.',
    ],
    fraudRules: 'R-27 (false shortage claim), R-28 (selective photo omission)',
  },
  INCIDENT: {
    trigger: 'Driver reports an incident: accident, theft, weather delay, or mechanical breakdown.',
    actor: 'Driver',
    verified: 'Incident location logged via GPS; timestamp sealed; driver must upload at least one photo.',
    edgeCases: [
      'Broker and carrier are notified in real-time via push and SMS.',
      'If cargo is unrecoverable, transitions to TOTAL_LOSS.',
      'Insurance documentation auto-generated from incident data.',
    ],
    fraudRules: 'R-29 (staged incident pattern), R-30 (incident location vs. route mismatch)',
  },
  REFUSED: {
    trigger: 'Receiver refuses to accept the delivery at the destination.',
    actor: 'Receiver',
    verified: 'Refusal reason captured; cargo condition photos required; refusal timestamp sealed.',
    edgeCases: [
      'Broker must provide return instructions or reassign the load.',
      'Carrier is not at fault unless the cargo condition is compromised.',
      'Refused loads get a refusal POD that is cryptographically sealed.',
    ],
    fraudRules: 'R-31 (false refusal for rate renegotiation)',
  },
  TOTAL_LOSS: {
    trigger: 'Cargo is confirmed unrecoverable after an incident: theft, destruction, or total damage.',
    actor: 'System (after incident investigation)',
    verified: 'Full incident chain sealed; insurance claim packet auto-assembled with all hashes and signatures.',
    edgeCases: [
      'Terminal state: no further transitions possible.',
      'Law enforcement report number can be attached to the sealed record.',
      'Insurance payout tracking linked to the load passport.',
    ],
    fraudRules: 'R-32 (fictitious loss pattern), R-33 (repeat driver total-loss correlation)',
  },
  FRAUD_ALERT: {
    trigger: 'System detects a fraud pattern that crosses the confidence threshold.',
    actor: 'System (automated)',
    verified: 'Fraud rule ID logged; all evidence hashes preserved; human review queued.',
    edgeCases: [
      'Load is frozen: no state transitions until a human reviews.',
      'All parties are notified but the specific fraud signal is not disclosed.',
      'False positives can be cleared by broker with an override audit trail.',
    ],
    fraudRules: 'Meta-rule: fires when any combination of R-01 through R-34 exceeds the composite threshold.',
  },
  DELIVERY_OVERDUE: {
    trigger: 'Load has not reached DELIVERY_VERIFIED within the expected delivery window plus buffer.',
    actor: 'System (automated time-based)',
    verified: 'Last known GPS position logged; time delta computed against original ETA.',
    edgeCases: [
      'Driver may report a legitimate delay (weather, HOS rest), which pauses the timer.',
      'If no driver response within 2 hours, escalates to FRAUD_ALERT.',
      'Broker receives escalating notifications at 1x, 2x, and 4x the buffer.',
    ],
    fraudRules: 'R-34 (cargo diversion), R-19 (route deviation re-check)',
  },
  GEOFENCE_FAIL: {
    trigger: 'Driver attempts pickup verification but is outside the geofence radius.',
    actor: 'System (automatic check)',
    verified: 'GPS coordinates compared against geofence polygon; distance delta logged.',
    edgeCases: [
      'Driver can retry after physically moving to the correct location.',
      'Three consecutive failures trigger a FRAUD_ALERT.',
      'Broker can expand the geofence radius for known large facilities.',
    ],
    fraudRules: 'R-13 (GPS spoofing), R-15 (device fingerprint mismatch)',
  },
  OTP_FAIL: {
    trigger: 'Driver enters an incorrect OTP during pickup or delivery verification.',
    actor: 'Driver',
    verified: 'OTP attempt count logged; device ID recorded; failure timestamp sealed.',
    edgeCases: [
      'Three failed attempts lock out OTP entry for 15 minutes.',
      'Shipper/receiver can regenerate a new OTP from their end.',
      'Persistent failures after regeneration escalate to FRAUD_ALERT.',
    ],
    fraudRules: 'R-18 (OTP replay), R-10 (ghost driver check re-triggered)',
  },
  TIER_LIMITED: {
    trigger: 'Broker on a free or trial tier attempts to create a load beyond their quota.',
    actor: 'System (automatic)',
    verified: 'Tier limits checked: load count, active loads, and feature flags.',
    edgeCases: [
      'Load is saved as DRAFT but cannot advance until the broker upgrades.',
      'Broker sees a clear upgrade prompt with tier comparison.',
      'Existing loads are not affected; only new load creation is blocked.',
    ],
    fraudRules: 'None (billing enforcement, not fraud)',
  },
  CANCELLED: {
    trigger: 'Broker or carrier cancels the load before delivery is complete.',
    actor: 'Broker or Carrier',
    verified: 'Cancellation reason required; timestamp sealed; all existing chain-of-custody data preserved.',
    edgeCases: [
      'Cancellation after PICKUP_VERIFIED requires both parties to acknowledge.',
      'Cancelled loads retain their full audit trail for compliance.',
      'Frequent cancellations by a carrier affect their trust score.',
    ],
    fraudRules: 'R-05 (rapid cycling check), carrier reliability score adjustment',
  },
  DISPUTED: {
    trigger: 'Any party raises a formal dispute after delivery or cancellation.',
    actor: 'Broker, Carrier, or Receiver',
    verified: 'Dispute reason categorized; all sealed evidence (hashes, photos, signatures) made available to both parties.',
    edgeCases: [
      'Dispute resolution is manual; the system provides the evidence, not the verdict.',
      'Both parties can submit additional documentation that gets sealed into the dispute record.',
      'Unresolved disputes after 30 days are flagged for escalation.',
    ],
    fraudRules: 'All prior fraud rules re-evaluated against dispute evidence.',
  },
};

/* ─── State categories for visual grouping ─── */

type StateColor = 'green' | 'blue' | 'amber' | 'red' | 'gray';

interface StateNode {
  id: string;
  label: string;
  color: StateColor;
}

const creationStates: StateNode[] = [
  { id: 'DRAFT', label: 'DRAFT', color: 'blue' },
  { id: 'PENDING_VERIFICATION', label: 'PENDING_VERIFICATION', color: 'blue' },
  { id: 'PUBLISHED', label: 'PUBLISHED', color: 'blue' },
  { id: 'CARRIER_ASSIGNED', label: 'CARRIER_ASSIGNED', color: 'blue' },
  { id: 'DRIVER_ASSIGNED', label: 'DRIVER_ASSIGNED', color: 'blue' },
  { id: 'PICKUP_PENDING', label: 'PICKUP_PENDING', color: 'blue' },
];

const coreStates: StateNode[] = [
  { id: 'PICKUP_VERIFIED', label: 'PICKUP_VERIFIED', color: 'green' },
  { id: 'IN_TRANSIT', label: 'IN_TRANSIT', color: 'blue' },
  { id: 'DELIVERY_VERIFIED', label: 'DELIVERY_VERIFIED', color: 'green' },
  { id: 'DELIVERED', label: 'DELIVERED', color: 'green' },
];

const branchStates: StateNode[] = [
  { id: 'PARTIALLY_DELIVERED', label: 'PARTIALLY_DELIVERED', color: 'amber' },
  { id: 'INCIDENT', label: 'INCIDENT', color: 'red' },
  { id: 'REFUSED', label: 'REFUSED', color: 'red' },
  { id: 'DELIVERY_OVERDUE', label: 'DELIVERY_OVERDUE', color: 'amber' },
  { id: 'GEOFENCE_FAIL', label: 'GEOFENCE_FAIL', color: 'red' },
  { id: 'OTP_FAIL', label: 'OTP_FAIL', color: 'red' },
  { id: 'FRAUD_ALERT', label: 'FRAUD_ALERT', color: 'red' },
];

const terminalStates: StateNode[] = [
  { id: 'TOTAL_LOSS', label: 'TOTAL_LOSS', color: 'red' },
  { id: 'CANCELLED', label: 'CANCELLED', color: 'gray' },
  { id: 'DISPUTED', label: 'DISPUTED', color: 'gray' },
  { id: 'TIER_LIMITED', label: 'TIER_LIMITED', color: 'amber' },
];

/* ─── Color helpers ─── */

const borderColorMap: Record<StateColor, string> = {
  green: 'border-success',
  blue: 'border-accent',
  amber: 'border-warning',
  red: 'border-critical',
  gray: 'border-border-strong',
};

const bgColorMap: Record<StateColor, string> = {
  green: 'bg-success-wash',
  blue: 'bg-bg-tint',
  amber: 'bg-warning-wash',
  red: 'bg-critical-wash',
  gray: 'bg-bg-tint',
};

/* ─── Component ─── */

export default function LoadLifecycle() {
  const [selected, setSelected] = useState('IN_TRANSIT');

  const detail = stateDetails[selected];

  const allGroups: { title: string; states: StateNode[] }[] = [
    { title: 'Creation', states: creationStates },
    { title: 'Core flow', states: coreStates },
    { title: 'Branch states', states: branchStates },
    { title: 'Terminal', states: terminalStates },
  ];

  return (
    <section
      id="load-lifecycle"
      className="border-t border-border py-28 md:py-36"
      aria-labelledby="lifecycle-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <span className="eyebrow">Load state machine</span>

        <h2
          id="lifecycle-heading"
          className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-ink"
        >
          Every load has a passport.
          <br />
          Every state change is signed.
        </h2>

        <p className="mt-5 text-base md:text-lg text-ink-muted max-w-2xl">
          Click any state to see what happens, who acts, what&rsquo;s verified, and
          what could go wrong.
        </p>

        {/* ─── State machine visualization ─── */}
        <div className="mt-14 space-y-8">
          {allGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3">
                {group.title}
                {group.title === 'Creation' && (
                  <span className="ml-2 text-ink-subtle opacity-60">
                    &rarr;
                  </span>
                )}
                {group.title === 'Core flow' && (
                  <span className="ml-2 text-ink-subtle opacity-60">
                    &rarr;
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.states.map((state) => {
                  const isSelected = selected === state.id;
                  return (
                    <button
                      key={state.id}
                      onClick={() => setSelected(state.id)}
                      className={`
                        inline-flex items-center px-3.5 py-1.5 rounded-full text-[12px] font-mono font-semibold
                        border-2 transition-all cursor-pointer
                        ${borderColorMap[state.color]}
                        ${bgColorMap[state.color]}
                        ${isSelected
                          ? 'ring-[3px] ring-accent/40 shadow-md scale-[1.04]'
                          : 'hover:scale-[1.02] hover:shadow-sm'
                        }
                      `}
                      aria-pressed={isSelected}
                      aria-label={`View details for ${state.label}`}
                    >
                      {state.label}
                    </button>
                  );
                })}

                {/* Flow arrows between states on desktop */}
                {(group.title === 'Creation' || group.title === 'Core flow') && (
                  <span className="hidden md:inline-flex items-center text-ink-subtle opacity-40 -ml-1" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Detail panel ─── */}
        {detail && (
          <div className="mt-10 card-shadow p-6 md:p-8 animate-fade-up" key={selected}>
            <div className="flex items-center gap-3 mb-6">
              <span className="chip-ink font-mono text-[12px]">{selected}</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle">
                State details
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* What triggers this state */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-2">
                  What triggers this state
                </h4>
                <p className="text-base text-ink-muted leading-relaxed">
                  {detail.trigger}
                </p>
              </div>

              {/* Who acts */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-2">
                  Who acts
                </h4>
                <p className="text-base text-ink font-semibold">{detail.actor}</p>
              </div>

              {/* What's verified */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-2">
                  What&rsquo;s verified
                </h4>
                <p className="text-base text-ink-muted leading-relaxed">
                  {detail.verified}
                </p>
              </div>

              {/* Fraud rules active */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-2">
                  Fraud rules active
                </h4>
                <p className="font-mono text-[11px] text-ink-muted leading-relaxed">
                  {detail.fraudRules}
                </p>
              </div>
            </div>

            {/* Edge cases */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-subtle mb-3">
                Edge cases
              </h4>
              <ul className="space-y-2">
                {detail.edgeCases.map((ec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base text-ink-muted">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-1.5 flex-shrink-0 text-warning"
                      aria-hidden="true"
                    >
                      <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{ec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
