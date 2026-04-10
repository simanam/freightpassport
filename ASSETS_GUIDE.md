# FreightPassport Website — Asset Guide

This document lists all assets needed for the website. Try Envato Elements first, then generate with AI if not found.

---

## 1. HERO BACKGROUND VIDEO

**Where it goes:** Hero section background (replaces current 3D scene)
**File location:** `public/videos/hero-bg.mp4`
**Specs:** Horizontal 16:9, 1920x1080, 5-15 sec loop, dark/night mood

### Envato Search Terms:
- "aerial truck highway night"
- "semi truck drone shot dark"
- "freight truck night road aerial"
- "logistics truck cinematic dark"

### AI Generation Prompt (if not found):

**Image prompt:**
```
Aerial drone shot looking down at a semi-truck with white reefer trailer
driving on a straight dark highway at night. Bird's eye view from directly
above. The truck has a glowing green rectangular tracking box/bounding box
outline around it, like an AI computer vision detection system. Subtle green
scan lines and data points around the truck. HUD-style targeting overlay.
Dark road, no other vehicles, minimal ambient light. The tracking box gives
it a surveillance/AI monitoring feel. Cinematic, photorealistic, deep blacks,
neon green (#abff02) accent glow on the tracking elements, 16:9 aspect ratio,
8k quality
```

**Video animation prompt (Runway/Kling):**
```
Camera slowly tracking the truck from above as it drives forward on the
highway, AI bounding box staying locked on the truck, subtle data readout
flickering, smooth steady aerial follow shot
```

**Status:** [ ] Not started

---

## 2. JOURNEY STAGE LOTTIES (7 animations)

All Lottie files go in `public/lottie/`. JSON format. Prefer outline/line art style on transparent background. White or single color (we recolor to lime #abff02 in code).

### Stage 1 — Load Created / Passport Issued
**File:** `public/lottie/passport-card.json`
**Envato search:** "digital ID card", "passport scan", "document create animation"
**AI fallback:** Not applicable for Lottie — use SVG animation if not found
**What it shows:** An ID card or digital document assembling/appearing piece by piece
**Status:** [ ] Not started

### Stage 2 — Driver Verification
**File:** `public/lottie/face-scan.json`
**Envato search:** "face scan biometric", "face recognition lottie", "facial verification"
**What it shows:** Face outline with scanning circle/line sweeping over it, checkmark at end
**Status:** [ ] Not started

### Stage 3 — Truck & Trailer Verification
**File:** `public/lottie/truck-scan.json`
**Envato search:** "vehicle scan", "truck inspection animation", "car scan lottie"
**AI fallback image prompt:**
```
Minimalist line art illustration of a semi-truck side view with a scanning
overlay grid moving across it. Data points appearing at key locations
(wheels, cab, trailer). Clean outline style, white lines on transparent
background, technical/blueprint feel
```
**What it shows:** Truck silhouette with scanning overlay, data points appearing
**Status:** [ ] Not started

### Stage 4 — Shipper Pickup / Dock Verification
**File:** `public/lottie/dock-verify.json`
**Envato search:** "QR code scan", "barcode verify animation", "checkpoint verification"
**What it shows:** A verification checkpoint — scanning/matching animation
**Status:** [ ] Not started

### Stage 5 — In Transit / Live Tracking
**File:** `public/lottie/gps-tracking.json`
**Envato search:** "GPS tracking animation", "location tracking map", "route tracking lottie", "map pin moving"
**What it shows:** A dot/vehicle moving along a route line on a map, pulse effect
**Status:** [ ] Not started

### Stage 6 — Delivery & POD
**File:** `public/lottie/delivery-complete.json`
**Envato search:** "delivery success checkmark", "package delivered", "success completion lottie"
**What it shows:** Cascading green checkmarks or a delivery confirmation animation
**Status:** [ ] Not started

### Stage 7 — Audit Trail
**File:** `public/lottie/audit-timeline.json`
**Envato search:** "timeline animation", "checklist complete lottie", "task list animation"
**What it shows:** Timeline/checklist items filling in one by one from top to bottom
**Status:** [ ] Not started

---

## 3. SECTION ACCENT LOTTIES (4 animations)

### Intelligence Section — Shield
**File:** `public/lottie/shield-security.json`
**Envato search:** "shield security lottie", "cyber security shield", "protection shield animation"
**What it shows:** Shield with pulse/glow effect, checkmark appearing inside
**Status:** [ ] Not started

### Problem Section — Warning/Alert
**File:** `public/lottie/alert-warning.json`
**Envato search:** "warning alert animation", "error notification lottie", "danger alert triangle"
**What it shows:** Red warning triangle or alert icon pulsing
**Status:** [ ] Not started

### Network Effect — Connected Nodes
**File:** `public/lottie/network-nodes.json`
**Envato search:** "network connection animation", "connected dots lottie", "nodes linking animation"
**What it shows:** Dots/nodes connecting to each other forming a network web
**Status:** [ ] Not started

### CTA — Celebration/Success
**File:** `public/lottie/success-confetti.json`
**Envato search:** "success confetti lottie", "celebration checkmark", "completion animation"
**What it shows:** Celebratory checkmark with subtle confetti/particles
**Status:** [ ] Not started

---

## 4. OPTIONAL VIDEO BACKGROUNDS (for other sections)

### Problem Section Background
**File:** `public/videos/problem-bg.mp4`
**Envato search:** "dark warehouse", "logistics warehouse night", "freight yard dark"
**Specs:** Horizontal, 1080p, 5-10 sec loop, very dark/moody
**Status:** [ ] Not started

### Intelligence Section Background
**File:** `public/videos/intelligence-bg.mp4`
**Envato search:** "data flow particles dark", "digital network dark background", "AI data visualization"
**Specs:** Horizontal, 1080p, 5-10 sec loop, subtle particle/data flow
**Status:** [ ] Not started

---

## 5. INTEGRATION NOTES

### Lottie Integration
- Install: `npm install lottie-react`
- Each Lottie replaces the current SVG/CSS visual in its respective stage
- Recolor in code by modifying the JSON or using LottiePlayer color props
- Keep each file under 100KB for performance

### Video Integration
- Use HTML5 `<video>` tag with autoPlay, muted, loop, playsInline
- Apply dark overlay gradient on top for text readability
- Compress videos to under 5MB using HandBrake or ffmpeg
- Consider WebM format alongside MP4 for smaller file size

### File Size Targets
- Lottie JSON: < 100KB each
- Hero video: < 5MB (compress with ffmpeg: `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an hero-bg.mp4`)
- Section background videos: < 3MB each

### Folder Structure
```
public/
  videos/
    hero-bg.mp4
    problem-bg.mp4      (optional)
    intelligence-bg.mp4  (optional)
  lottie/
    passport-card.json
    face-scan.json
    truck-scan.json
    dock-verify.json
    gps-tracking.json
    delivery-complete.json
    audit-timeline.json
    shield-security.json
    alert-warning.json
    network-nodes.json
    success-confetti.json
```

---

## Priority Order

1. **Hero video** — biggest visual impact, do this first
2. **Journey stage Lotties (7)** — core experience
3. **Section accent Lotties (4)** — polish
4. **Optional video backgrounds** — extra polish, do last if time permits
