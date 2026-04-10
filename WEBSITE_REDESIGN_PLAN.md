# FreightPassport Website Redesign - Journey Storytelling

## Context
The current landing page is a generic SaaS layout with static sections. We're rebuilding it as an immersive, scroll-driven storytelling experience inspired by Terminal Industries. The site should walk visitors through the complete lifecycle of a freight load on FreightPassport — showing how every step is protected, verified, and tracked in real-time.

**Design DNA:** Dark theme + lime green accents (like Terminal Industries), 3D hero + 2D animated sections, cinematic scroll animations.

---

## Tech Stack Additions
- `framer-motion` — scroll-triggered animations, layout transitions
- `gsap` + `@gsap/react` — ScrollTrigger for timeline-based scroll animations
- `@react-three/fiber` + `@react-three/drei` — 3D hero scene
- `lenis` — smooth scrolling (buttery scroll feel)

---

## Page Structure — "The Journey of a Protected Load"

### Section 1: HERO — "The Digital Thread"
- **3D Scene:** A stylized digital corridor/pathway stretching into distance with glowing data particles flowing through it. A freight "passport" document floats in center, slowly rotating.
- **Text reveal:** Character-by-character animation: "One Load. One Thread. Complete Protection."
- **Subtext fades in:** "Every person, every checkpoint, every mile — connected to one immutable digital thread."
- **Scroll indicator** with lime pulse animation
- **Stats bar** at bottom: $500M lost to fraud / 0 identity standards / Until now

### Section 2: THE PROBLEM — "What Goes Wrong Today"
- **Dark, moody section** with red/warning accents
- Scroll-triggered cards that slide in showing fraud scenarios:
  - Double brokering: Load gets handed off to unknown carriers
  - Identity fraud: Wrong driver shows up at shipper's dock
  - Cargo theft: Truck goes off-route, trailer disappears
  - Document chaos: Fake BOLs, recycled PODs
- Each card has a simple animated illustration
- Ends with a powerful stat/statement that transitions to...

### Section 3: THE JOURNEY — "One Load, Protected End to End"
This is the CORE of the page. **Horizontal scroll-pinned** — page pins in place, user scrolls vertically but the 7 stages move horizontally like a filmstrip. A progress bar at top shows which stage you're at. GSAP ScrollTrigger handles the pin + horizontal translation.

#### Stage 1: Load Created → Passport Issued
- Load details appear on a digital passport card (animated build-up)
- Pre-verification score of the carrier/company appears (gauge animation)
- MC number, safety rating, insurance status verified
- Visual: Passport card assembles piece by piece

#### Stage 2: Driver Verification
- Driver opens app → face scan animation overlay
- Biometric match confirmed → green checkmark
- CDL scanned and validated → data extraction animation
- Visual: Phone mockup with face scan overlay, lime green verification ring

#### Stage 3: Truck & Trailer Verification
- Truck unit number read from photo → matched to assignment
- Trailer GPS linked to load thread
- Equipment type confirmed (reefer/van/flatbed)
- Visual: Truck silhouette with scanning overlay, data points appearing

#### Stage 4: Shipper Verification (Pickup)
- Dock screen shows driver photo, truck plate, MC number
- All pre-verified before trailer opens
- If mismatch → alert visualization (red pulse)
- Digital BOL signed on the thread
- Visual: Split screen — dock view + passport data

#### Stage 5: In Transit — Live Tracking
- Map view with truck moving along route
- Dual GPS: truck + trailer (both on thread)
- Route corridor with geofence visualization
- Deviation alert: truck goes off route → instant alert to all parties
- Trailer unhook detection: GPS divergence → stolen trailer signal
- Visual: Animated map with glowing route, alert popups

#### Stage 6: Delivery & POD
- Receiver check-in (same verification flow)
- Digital POD with photo confirmation
- Timestamps on thread
- Green checkmark cascade: every checkpoint verified
- Visual: Completion animation — full chain lights up green

#### Stage 7: Complete Audit Trail
- Timeline view of the entire load
- Every event, every verification, every document — immutable
- "Load closes. Chain of custody complete."
- Visual: Vertical timeline that fills in as you scroll

### Section 4: THE INTELLIGENCE — "AI That Learns From Every Load"
- Scroll-triggered feature cards (3-4 key AI capabilities):
  - Fraud Detection: Pattern recognition across network
  - Route Intelligence: Predictive alerts before problems happen
  - Document AI: Automated extraction and validation
  - Network Effect: Every load makes the system smarter
- Visual: Abstract data visualization, particle networks

### Section 5: THE NETWORK EFFECT — "Why Everyone Joins"
- Animated flywheel diagram:
  - Brokers require verified carriers → Carriers join to get freight → Shippers trust verified loads → More data → Better protection → More brokers join
- "Brokers are the hub. They become your distribution channel."
- Visual: Circular/orbital animation showing the flywheel

### Section 6: SOCIAL PROOF / TRUST
- Key metrics with count-up animations
- Industry quotes or early access testimonials
- Logo bar (when available)

### Section 7: CTA — "Be Part of the Standard"
- Bold statement: "The freight industry's first identity standard."
- Early access signup form
- Subtle 3D background element (particles or the passport floating)

---

## Design System

### Colors
```
--bg-primary: #0a0a0a (near black)
--bg-surface: #141414
--bg-elevated: #1a1a1a
--text-primary: #fafafa
--text-secondary: rgba(255, 255, 255, 0.5)
--accent-lime: #abff02
--accent-lime-glow: rgba(171, 255, 2, 0.15)
--accent-danger: #ef4444
--accent-warning: #f59e0b
--border: rgba(255, 255, 255, 0.08)
```

### Typography
- Headings: Inter or a geometric sans (bold, tight tracking)
- Body: Inter (regular weight)
- Mono/Data: JetBrains Mono or Geist Mono

### Animation Principles
- Smooth scroll via Lenis
- Text reveals: character-by-character or word-by-word on scroll
- Section transitions: opacity + transform, staggered
- Scroll-pinned journey section with horizontal/staged progression
- Parallax depth on background elements
- Lime green glow effects on verified/positive states
- Red pulse effects on alert/fraud states

---

## Files to Create/Modify

### New Files
- `src/components/journey/` — directory for journey section components
  - `HeroScene.tsx` — R3F 3D hero component
  - `ProblemSection.tsx` — The fraud problem
  - `JourneySection.tsx` — Main scroll-pinned journey (container)
  - `JourneyStage.tsx` — Individual stage component
  - `IntelligenceSection.tsx` — AI capabilities
  - `NetworkEffect.tsx` — Flywheel diagram
  - `FinalCTA.tsx` — Call to action
- `src/components/ui/` — reusable animated components
  - `TextReveal.tsx` — character/word reveal animation
  - `ScrollProgress.tsx` — scroll progress indicator
  - `SmoothScroll.tsx` — Lenis provider
- `src/hooks/useScrollProgress.ts` — custom scroll position hook

### Modified Files
- `src/app/page.tsx` — complete restructure with new sections
- `src/app/globals.css` — new color variables, animation keyframes
- `src/app/layout.tsx` — add smooth scroll provider
- `src/components/Navigation.tsx` — restyle for new design system
- `src/components/Footer.tsx` — restyle
- `package.json` — add new dependencies

### Files to Remove (or archive)
- Current section components (Problem, Solution, PreVerification, HowItWorks, AICapabilities, Testimonials, CTA, Hero) — replaced by journey components
- ThemeToggle, ThemeContext — single dark theme only

---

## Assets Needed from Envato (User will source these)

**3D Models (GLB/GLTF):**
- Semi-truck / trailer model (stylized or low-poly) for hero scene
- Optional: warehouse/dock model for pickup stage

**Lottie Animations:**
- Face scan / biometric verification
- Document scan / OCR extraction
- GPS / location tracking pulse
- Checkmark / verification complete
- Shield / security scan
- Alert / warning pulse

**Stock Video:**
- Dark cinematic truck on highway footage (for background sections)
- Aerial freight corridor / logistics footage

**Note:** We'll build everything code-first with SVG/CSS animations as placeholders. Lottie and 3D models can be dropped in later via designated placeholder components.

---

## Implementation Order
1. Install dependencies + set up Lenis smooth scroll + new color system
2. Build reusable animation components (TextReveal, ScrollProgress)
3. Build 3D Hero scene (can start simple, iterate)
4. Build journey section with GSAP ScrollTrigger (the core experience)
5. Build problem section
6. Build intelligence + network effect sections
7. Build CTA + footer
8. Polish: transitions between sections, loading state, responsive
9. Performance optimization (lazy load 3D, reduce bundle)

---

## Verification
- Run `npm run dev` and test scroll experience end-to-end
- Test on mobile (responsive)
- Test performance (Lighthouse, no jank on scroll)
- Verify 3D scene loads and renders correctly
- Check all scroll-triggered animations fire at correct positions
