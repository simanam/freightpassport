'use client';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 py-24 lg:py-32 bg-[var(--color-darker)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
            How It Works
            <span className="w-6 h-px bg-[var(--color-primary)]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            From tender to delivery. <span className="text-[var(--color-primary)]">Verified.</span>
          </h2>

          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            Every step tracked. Every party connected. Complete visibility and accountability throughout the entire journey.
          </p>
        </div>

        {/* Main Journey Timeline */}
        <div className="relative mb-24">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-[var(--color-border)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] via-[var(--color-tertiary)] to-[var(--color-primary)] opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Create */}
            <div className="relative group">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[var(--color-primary)] hover:-translate-y-2">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                  <span className="font-mono text-2xl font-bold text-[var(--color-primary-text)]">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Create Passport</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 text-center lg:text-left">Broker creates load with unique passport ID. All details in one place.</p>

                {/* Mini Visual */}
                <div className="bg-[var(--color-dark)] rounded-xl p-4 border border-[var(--color-border)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-primary-glow)] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className="font-mono text-xs text-[var(--color-primary)]">FP-2025-00004521</div>
                  </div>
                  <div className="text-xs text-[var(--color-muted)]">Fresno, CA → Phoenix, AZ</div>
                  <div className="text-xs text-[var(--color-muted)]/60 mt-1">Rate: $2,450 • 485 miles</div>
                </div>
              </div>
            </div>

            {/* Step 2: Assign & Verify */}
            <div className="relative group">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[var(--color-secondary)] hover:-translate-y-2">
                <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                  <span className="font-mono text-2xl font-bold text-[var(--color-primary-text)]">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Assign & Verify</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 text-center lg:text-left">Carrier assigns driver. Driver verifies identity with selfie + location.</p>

                {/* Verification Visual */}
                <div className="bg-[var(--color-dark)] rounded-xl p-4 border border-[var(--color-border)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dim)] rounded-full flex items-center justify-center text-sm font-bold text-white">
                      MJ
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Mike Johnson</div>
                      <div className="text-xs text-[var(--color-muted)]">Driver • CDL-A</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="flex items-center gap-1 text-[var(--color-success)]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Face verified
                    </span>
                    <span className="flex items-center gap-1 text-[var(--color-success)]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Location matched
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Track Live */}
            <div className="relative group">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[var(--color-tertiary)] hover:-translate-y-2">
                <div className="w-16 h-16 bg-[var(--color-tertiary)] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                  <span className="font-mono text-2xl font-bold text-[var(--color-primary-text)]">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Track & Document</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 text-center lg:text-left">Real-time GPS tracking. Status updates. Documents uploaded instantly.</p>

                {/* Live Tracking Visual */}
                <div className="bg-[var(--color-dark)] rounded-xl p-4 border border-[var(--color-border)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></div>
                      <span className="text-xs text-[var(--color-success)] font-semibold">LIVE</span>
                    </div>
                    <span className="text-xs text-[var(--color-muted)]">ETA: 6:45 PM</span>
                  </div>
                  <div className="relative h-2 bg-[var(--color-border)] rounded-full overflow-hidden mb-2">
                    <div className="absolute left-0 top-0 h-full w-3/5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-tertiary)] rounded-full"></div>
                    <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[var(--color-tertiary)]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-[var(--color-muted)]/60">
                    <span>Fresno</span>
                    <span>Bakersfield</span>
                    <span>Phoenix</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Complete */}
            <div className="relative group">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:border-[var(--color-primary)] hover:-translate-y-2">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                  <span className="font-mono text-2xl font-bold text-[var(--color-primary-text)]">04</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Complete & Seal</h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 text-center lg:text-left">POD uploaded, delivery verified. Complete audit trail sealed forever.</p>

                {/* Completion Visual */}
                <div className="bg-[var(--color-dark)] rounded-xl p-4 border border-[var(--color-verified-border)] bg-gradient-to-br from-[var(--color-verified-bg)] to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[var(--color-verified)] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--color-primary-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[var(--color-verified)]">Delivered & Verified</div>
                  </div>
                  <div className="text-xs text-[var(--color-muted)]">POD signed by J. Smith • 6:42 PM</div>
                  <div className="text-xs text-[var(--color-muted)]/60 mt-1">12 events logged in audit trail</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Party Visibility Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Everyone Sees the Same Truth</h3>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto">One passport, multiple stakeholders. Real-time visibility for everyone involved in the shipment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Broker View */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--color-secondary-glow)] border-b border-[var(--color-border)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Broker View</div>
                    <div className="text-xs text-[var(--color-muted)]">Full operational control</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Create & manage load passports</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Pre-verify carriers before booking</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Real-time fraud score monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Access all documents & audit trail</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Share tracking link with shipper</span>
                </div>
              </div>
            </div>

            {/* Carrier View */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--color-tertiary-glow)] border-b border-[var(--color-border)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-tertiary)] rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13" rx="2"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Carrier View</div>
                    <div className="text-xs text-[var(--color-muted)]">Driver & fleet management</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Assign drivers to loads</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Monitor driver verification status</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Track all active loads</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Build reputation score over time</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Access load history & documents</span>
                </div>
              </div>
            </div>

            {/* Shipper View */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--color-primary-glow)] border-b border-[var(--color-border)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-primary-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Shipper View</div>
                    <div className="text-xs text-[var(--color-muted)]">Shipment visibility</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Real-time shipment tracking</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Verified driver information</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Accurate ETA predictions</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Instant delivery confirmation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>POD access when delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Tracking Demo */}
        <div className="mb-24">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map Visualization */}
              <div className="relative bg-[var(--color-dark)] p-8 lg:p-12 min-h-[400px]">
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-[var(--color-surface)]/90 border border-[var(--color-border-light)] rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[var(--color-success)]">LIVE TRACKING</span>
                </div>

                {/* Simplified Route Visualization */}
                <div className="relative h-full flex items-center justify-center">
                  <svg className="w-full max-w-md" viewBox="0 0 400 200">
                    {/* Route Line */}
                    <path
                      d="M 50 100 Q 150 50 200 100 Q 250 150 350 100"
                      fill="none"
                      stroke="var(--color-border)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Completed Route */}
                    <path
                      d="M 50 100 Q 150 50 200 100"
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-tertiary)" />
                      </linearGradient>
                    </defs>

                    {/* Origin Point */}
                    <circle cx="50" cy="100" r="8" fill="var(--color-primary)" />
                    <circle cx="50" cy="100" r="12" fill="none" stroke="var(--color-primary)" strokeWidth="2" opacity="0.5" />

                    {/* Current Location (Truck) */}
                    <circle cx="200" cy="100" r="12" fill="var(--color-tertiary)" />
                    <circle cx="200" cy="100" r="18" fill="none" stroke="var(--color-tertiary)" strokeWidth="2" opacity="0.3">
                      <animate attributeName="r" from="18" to="28" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Destination Point */}
                    <circle cx="350" cy="100" r="8" fill="var(--color-border-light)" />
                    <circle cx="350" cy="100" r="12" fill="none" stroke="var(--color-border-light)" strokeWidth="2" opacity="0.5" />

                    {/* Labels */}
                    <text x="50" y="130" textAnchor="middle" fill="var(--color-muted)" fontSize="12">Fresno, CA</text>
                    <text x="200" y="75" textAnchor="middle" fill="var(--color-light)" fontSize="12" fontWeight="600">Bakersfield</text>
                    <text x="350" y="130" textAnchor="middle" fill="var(--color-muted)" fontSize="12">Phoenix, AZ</text>
                  </svg>
                </div>

                {/* Distance & ETA */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <div>
                    <div className="text-xs text-[var(--color-muted)]">Distance Remaining</div>
                    <div className="text-lg font-mono font-bold">194 mi</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--color-muted)]">Estimated Arrival</div>
                    <div className="text-lg font-mono font-bold text-[var(--color-success)]">6:45 PM</div>
                  </div>
                </div>
              </div>

              {/* Live Status Panel */}
              <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-[var(--color-border)]">
                <h4 className="text-lg font-semibold mb-6">Live Status Updates</h4>

                <div className="space-y-4">
                  {/* Current Status */}
                  <div className="flex items-start gap-4 p-4 bg-[var(--color-tertiary-glow)] border border-[var(--color-tertiary)]/30 rounded-xl">
                    <div className="w-10 h-10 bg-[var(--color-tertiary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[var(--color-tertiary)]">In Transit</span>
                        <span className="text-xs text-[var(--color-muted)]">Now</span>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] mt-1">Near Bakersfield, CA • Moving at 65 mph</p>
                    </div>
                  </div>

                  {/* Past Events */}
                  <div className="flex items-start gap-4 p-4 bg-[var(--color-surface-elevated)]/50 rounded-xl">
                    <div className="w-10 h-10 bg-[var(--color-success-glow)] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-success)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Picked Up</span>
                        <span className="text-xs text-[var(--color-muted)]">2:34 PM</span>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] mt-1">BOL signed at XYZ Warehouse, Fresno</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[var(--color-surface-elevated)]/50 rounded-xl">
                    <div className="w-10 h-10 bg-[var(--color-secondary-glow)] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Driver Verified</span>
                        <span className="text-xs text-[var(--color-muted)]">2:30 PM</span>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] mt-1">Mike Johnson • Face + Location match</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[var(--color-surface-elevated)]/50 rounded-xl">
                    <div className="w-10 h-10 bg-[var(--color-border)]/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Passport Created</span>
                        <span className="text-xs text-[var(--color-muted)]">9:15 AM</span>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] mt-1">Load tendered to ABC Transport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trail Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Complete Audit Trail</h3>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto">Every action, every change, every document — logged with timestamp, location, and user. Disputes become simple.</p>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
            {/* Audit Trail Header */}
            <div className="bg-[var(--color-surface-elevated)]/50 border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span className="font-semibold">Audit Trail</span>
                <span className="text-xs text-[var(--color-muted)] bg-[var(--color-surface-elevated)] px-2 py-1 rounded">FP-2025-00004521</span>
              </div>
              <div className="text-sm text-[var(--color-muted)]">12 events recorded</div>
            </div>

            {/* Audit Events */}
            <div className="divide-y divide-[var(--color-border)]">
              {[
                { time: '6:42 PM', event: 'Delivery Completed', detail: 'POD signed by J. Smith', user: 'Driver: Mike Johnson', type: 'success', icon: 'check' },
                { time: '6:40 PM', event: 'Arrived at Delivery', detail: 'Geofence entry detected', user: 'System', type: 'info', icon: 'location' },
                { time: '4:15 PM', event: 'Random Re-verification', detail: 'Driver identity confirmed', user: 'System', type: 'info', icon: 'shield' },
                { time: '2:34 PM', event: 'Pickup Completed', detail: 'BOL uploaded (3 pages)', user: 'Driver: Mike Johnson', type: 'success', icon: 'document' },
                { time: '2:30 PM', event: 'Driver Verified', detail: 'Face match 98.5% • Location within 50ft', user: 'AI Verification', type: 'success', icon: 'user' },
              ].map((item, index) => (
                <div key={index} className="px-6 py-4 flex items-start gap-4 hover:bg-[var(--color-surface-elevated)]/30 transition-colors">
                  <div className="text-sm text-[var(--color-muted)] w-20 flex-shrink-0 font-mono">{item.time}</div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.type === 'success' ? 'bg-[var(--color-success-glow)] text-[var(--color-success)]' : 'bg-[var(--color-info-glow)] text-[var(--color-info)]'
                  }`}>
                    {item.icon === 'check' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    {item.icon === 'location' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>}
                    {item.icon === 'shield' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                    {item.icon === 'document' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>}
                    {item.icon === 'user' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{item.event}</div>
                    <div className="text-sm text-[var(--color-muted)]">{item.detail}</div>
                  </div>
                  <div className="text-xs text-[var(--color-muted)]/60 text-right flex-shrink-0">{item.user}</div>
                </div>
              ))}
            </div>

            {/* Sealed Badge */}
            <div className="bg-[var(--color-verified-bg)] border-t border-[var(--color-verified-border)] px-6 py-4 flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-[var(--color-verified)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="text-sm font-semibold text-[var(--color-verified)]">Audit Trail Sealed & Immutable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
