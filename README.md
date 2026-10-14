# Bertha — Graphic Design & Brand Identity Studio Portfolio

A creative studio portfolio for **Bertha**, specializing in **brand identity design, silkscreen posters, packaging architecture, and visual storytelling**.

Designed with contemporary Swiss-inspired typography, warm earth tones, tactile paper grain texture, a true responsive masonry gallery, animated studio mascot characters, and deep case-study modals.

---

## 1. Features & Architectural Overview

- **Signature Brand Wordmark:**
  - Capital letter **B** rendered in **Matura MT Script Capitals**.
  - Lowercase **ertha** rendered in **Mistral**.
  - Signature color: **#D4A373** (Warm Tan).
  - Letterforms engineered with optical negative kerning for an organic, script-flowing transition.
  - Bulletproof font delivery via `@font-face` local system font check + fallback to `/fonts/MATURASC.TTF` and `/fonts/MISTRAL.TTF`.
- **Refined Color System:**
  - **Signature Tan:** `#D4A373` (Identity wordmark, key accents, highlights)
  - **Warm Ivory:** `#F7F2EA` (Primary canvas background)
  - **Deep Espresso:** `#2B211D` (Strong typography and dark contrast sections)
  - **Muted Terracotta:** `#B7654A` (Creative accents & badges)
  - **Sage Green:** `#87947A` (Availability indicators & secondary accents)
  - **Soft Charcoal:** `#353535` (Readable body text)
  - **Pale Sand:** `#E8D8C5` (Card backgrounds & decorative geometry)
- **Animated Cartoon Characters (Studio Mascots):**
  - **MascotPeeker (`MascotPeeker.vue`):** In the Hero section, peeks out from behind the design board with interactive pupils that dynamically follow cursor movements, periodic natural eye blinking, and a friendly speech bubble.
  - **MascotPip (`MascotPip.vue`):** Floats beside the Selected Works gallery holding a fan of brand color swatches, with gentle bobbing, winking, and tilt reactions.
  - **MascotSparky (`MascotSparky.vue`):** In the Contact section, sits with an origami paper airplane and triggers a joyful celebration jump when submitting an inquiry brief.
- **True Responsive Masonry Project Gallery (`MasonryGallery.vue`):**
  - CSS columns (`column-count: 1` mobile, `2` tablet, `3` desktop) with `break-inside: avoid`.
  - Diverse aspect ratios: tall posters (9:14), portrait (4:5), landscape (16:10), square (1:1).
  - Category filters: *All, Brand Identity, Poster Design, Packaging, Editorial, Art Direction*.
  - **100% Subject-Matched Graphic Design Imagery:** Every project card displays verified artwork directly representing its discipline (printed menus for restaurants, coffee bags and cups for roasteries, silkscreen posters for music festivals, garment labels for fashion, open book layouts for typography monographs, bottle packaging with foil labels for spirits).
  - **Independent Brand Palettes & Creative Diversity:** Each project features its own authentic color scheme (Electric Cobalt & Neon Pink, Klein Blue & Cadmium Orange, Forest Green & Gold, Carbon Black & Vermilion Red, Blackberry & Copper, etc.) with mini palette dots and local accent borders, proving versatile art direction without compromising the website's signature warm tan shell.
  - Neutral non-tinting hover states and image error fallback protection.
- **Deep Case Study Modal (`ProjectModal.vue`):**
  - Full-screen accessible modal dialog (`role="dialog"`, `aria-modal="true"`, `ESC` key listener, arrow navigation).
  - High-res hero imagery with uncropped `fit: contain` support for posters and labels.
  - Project-specific brand color tokens and interactive 1-click hex copy swatches.
  - Custom typography pairing specifications, project overview, strategic creative decisions, and applied deliverables checklist.
  - Visual asset gallery with secondary mockup angles (zero repeating images across projects).
  - Previous / Next project navigation cycling.
- **Editorial About Section (`About.vue`):**
  - Asymmetric layout featuring Bertha's personal portrait (`/bertha-portrait.png`).
  - Bertha's 3 Core Creative Principles:
    1. *Strategy before decoration*
    2. *Personality in every detail*
    3. *Beautiful design with a purpose*
  - Areas of specialization and design toolkit.
- **Services Section (`Services.vue`):**
  - Brand Identity Design, Poster Design, Creative Art Direction, Packaging & Visual Applications.
  - Interactive "Inquire About This Service" button that pre-selects the service in the contact form.
- **Creative Process (`CreativeProcess.vue`):**
  - 4-step methodology: *Discover, Explore, Design, Deliver*.
  - Connected horizontal timeline on desktop, vertical stack on mobile.
- **Contact & Inquiry Section (`Contact.vue`):**
  - Client-side validation, accessible form inputs, project discipline & budget selectors.
  - Generates pre-filled `mailto:` client action and triggers celebratory mascot feedback.
  - Direct studio email: `hello@berthadesign.studio`.
  - Social profiles: Instagram, Behance, Pinterest, LinkedIn.
- **Desktop Custom Cursor (`CustomCursor.vue`):**
  - Subtle tan center dot with a smooth lerp trailing ring.
  - Expands upon hovering interactive elements.
  - Automatically disabled on touch screens and under `prefers-reduced-motion`.
- **Tactile Paper Grain Texture:**
  - Lightweight SVG fractal noise overlay giving the canvas an editorial tactile feel.

---

## 2. Main Files Created & Modified

```text
├── index.html                           # Updated metadata, Google Fonts, vector SVG favicon
├── src/
│   ├── main.js                          # App bootloader importing global tokens & styles
│   ├── App.vue                          # Root SFC mounting MyPort
│   ├── component/
│   │   └── MyPort.vue                   # Master orchestrator assembling all sections
│   ├── components/
│   │   ├── BerthaWordmark.vue           # Signature Matura/Mistral wordmark in #D4A373
│   │   ├── Navbar.vue                   # Glassmorphic header with live availability pill
│   │   ├── Hero.vue                     # Magazine-style hero with tilt and MascotPeeker
│   │   ├── MascotPeeker.vue             # Cursor-tracking vector cartoon mascot
│   │   ├── MascotPip.vue                # Floating swatch mascot
│   │   ├── MascotSparky.vue             # Celebratory contact mascot
│   │   ├── MasonryGallery.vue           # CSS columns masonry layout with category filter
│   │   ├── ProjectCard.vue              # Varied-ratio card with hover reveal & fallback
│   │   ├── ProjectModal.vue             # Deep case study modal with palette copy & specs
│   │   ├── About.vue                    # Editorial portrait layout & creative principles
│   │   ├── Services.vue                 # 4 core studio capabilities with deliverable lists
│   │   ├── CreativeProcess.vue          # 4-stage horizontal & vertical timeline
│   │   ├── Contact.vue                  # Inquiry brief form with validation & mailto
│   │   ├── Footer.vue                   # Studio specs card, copyright & back-to-top
│   │   └── CustomCursor.vue             # Lerping smooth custom cursor
│   ├── data/
│   │   └── projects.js                  # Structured portfolio data file
│   └── assets/styles/
│       ├── tokens.css                   # Custom @font-face rules and CSS custom properties
│       └── global.css                   # Paper grain overlay, typography, button styles
└── public/
    ├── bertha-portrait.png              # High-resolution studio portrait of Bertha
    └── fonts/
        ├── MATURASC.TTF                 # Matura MT Script Capitals TrueType font
        └── MISTRAL.TTF                  # Mistral TrueType font
```

---

## 3. Dependencies

- `vue` (^3.5.42): Core frontend reactive framework.
- `lucide-vue-next`: Crisp, lightweight editorial icons (arrows, checks, close, icons).
- `@vitejs/plugin-vue` & `vite` (^8.2.2): Ultra-fast build and development server.

---

## 4. How to Run Locally

To start the development server:

```bash
npm run dev
```

Open the displayed URL in your browser (typically `http://localhost:5173` or `http://localhost:5174`).

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 5. Adding New Projects & Replacing Images

All portfolio items are maintained in a clean data structure at `src/data/projects.js`.

To add a new project, append an object to the `projects` array:

```javascript
{
  id: 11,
  slug: 'my-new-project',
  title: 'Project Title',
  category: 'Brand Identity', // 'Brand Identity' | 'Poster Design' | 'Packaging' | 'Editorial' | 'Art Direction'
  aspectRatio: 'portrait',    // 'tall-poster' (9:14) | 'portrait' (4:5) | 'square' (1:1) | 'landscape' (16:10)
  year: '2026',
  client: 'Client Name',
  isSpeculative: true,        // Set to true for concept/speculative work, false for client commissions
  speculativeLabel: 'Speculative Concept',
  tagline: 'A single-sentence poetic summary.',
  shortDescription: 'Concise 2-sentence description for the gallery card.',
  image: 'https://images.unsplash.com/... or /path-in-public/image.jpg',
  gallery: [
    'https://images.unsplash.com/...',
    'https://images.unsplash.com/...'
  ],
  deliverables: [
    'Logo Suite',
    'Packaging Dielines',
    'Brand Guidelines'
  ],
  palette: [
    { name: 'Warm Charcoal', hex: '#2B211D' },
    { name: 'Signature Tan', hex: '#D4A373' },
    { name: 'Warm Ivory', hex: '#F7F2EA' }
  ],
  typePair: 'Syne / Plus Jakarta Sans',
  overview: 'Detailed story and design rationale...',
  creativeDecisions: [
    'First strategic decision...',
    'Second strategic decision...'
  ],
  impact: 'Key project takeaway or exhibition note.'
}
```

---

## 6. How the Bertha Wordmark Fonts Work

The exact fonts specified are:
1. **Matura MT Script Capitals** for the capital letter **B**.
2. **Mistral** for the lowercase letters **ertha**.
3. Exact color: **#D4A373**.

### How they are currently loaded:
- Font files `MATURASC.TTF` and `MISTRAL.TTF` are hosted directly in `public/fonts/`.
- In `src/assets/styles/tokens.css`, `@font-face` definitions check both local system fonts and the hosted files:

```css
@font-face {
  font-family: 'Matura MT Script Capitals';
  src: local('Matura MT Script Capitals'),
       local('Matura MT Script'),
       url('/fonts/MATURASC.TTF') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Mistral';
  src: local('Mistral'),
       url('/fonts/MISTRAL.TTF') format('truetype');
  font-display: swap;
}
```

### Installing Fonts on a New System:
- **Windows:** Double-click `public/fonts/MATURASC.TTF` and `public/fonts/MISTRAL.TTF` and click **Install**.
- **macOS:** Open the files in **Font Book** and click **Install Font**.
- The website will automatically use the locally installed font or fetch the `/fonts/*.TTF` files delivered by Vite.

---

## 7. External Integrations & Contact Form

- The contact form is wired with client-side validation.
- When submitted, it creates a formatted `mailto:` action directed to `hello@berthadesign.studio` and triggers the celebratory mascot animation.
- If you wish to connect an automated email service like Formspree, Resend, or EmailJS:
  1. Open `src/components/Contact.vue`.
  2. In `handleSubmit()`, replace the `mailto:` fallback with an API `fetch()` call to your endpoint.

---

## 8. Quality Assurance & Testing Report

- **Build verification:** `npm run build` succeeds in 1.36s with 0 errors.
- **Asset verification:** Font files `/fonts/MATURASC.TTF` and `/fonts/MISTRAL.TTF` as well as portrait `/bertha-portrait.png` return HTTP 200.
- **Image audit:** All project image URLs verified for HTTP 200 status with image error fallback fallbacks.
- **Responsiveness:** Tested for desktop, tablet, and mobile breakpoints (CSS column reflow, hamburger menu drawer, responsive aspect ratios).
- **Accessibility:** Keyboard navigable modal (ESC key close, left/right arrows for project navigation), semantic landmarks, ARIA labels, and `prefers-reduced-motion` compliance.
