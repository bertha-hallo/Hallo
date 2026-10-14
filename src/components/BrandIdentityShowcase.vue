<!-- src/components/BrandIdentityShowcase.vue -->
<script setup>
import { ref } from 'vue'
import { Layers, Sparkles, Image, CheckCircle, ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const logoMode = ref('light') // 'light' or 'dark'
</script>

<template>
  <div class="brand-identity-system">
    <!-- Brand System Intro Badge -->
    <div class="system-intro-bar">
      <div class="system-badge">
        <Layers :size="16" class="badge-icon" />
        <span>Comprehensive Brand Identity System</span>
      </div>
      <p class="system-summary">
        A unified visual language presented across three core pillars: <strong>The Logo Architecture</strong>, <strong>Campaign Poster</strong>, and <strong>Applied Physical Mockups</strong>.
      </p>
    </div>

    <!-- ================= PILLAR 1: LOGO PRESENTATION ================= -->
    <section class="pillar-section logo-pillar">
      <div class="pillar-header">
        <span class="pillar-num">Pillar 01</span>
        <h3 class="pillar-title">Core Logo Architecture & Mark</h3>
        <p class="pillar-desc">
          The foundational symbol and typographic lockup engineered for maximum scalability, recognition, and tonal resonance.
        </p>
      </div>

      <!-- Interactive Logo Presentation Card -->
      <div class="logo-showcase-box" :class="`mode-${logoMode}`">
        <!-- Mode Switcher -->
        <div class="logo-mode-switch">
          <button
            class="mode-btn"
            :class="{ 'is-active': logoMode === 'light' }"
            @click="logoMode = 'light'"
            aria-label="View logo on light background"
          >
            Light Application
          </button>
          <button
            class="mode-btn"
            :class="{ 'is-active': logoMode === 'dark' }"
            @click="logoMode = 'dark'"
            aria-label="View logo on dark background"
          >
            Dark Application
          </button>
        </div>

        <!-- Rendered Vector Logo Presentation -->
        <div class="logo-display-stage">
          <!-- Komorebi Logo -->
          <div v-if="project.slug === 'komorebi-coffee'" class="brand-logo-render logo-komorebi">
            <!-- Japanese Canopy Leaf Emblem -->
            <svg viewBox="0 0 100 100" class="brand-emblem-svg">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 2" opacity="0.6" />
              <!-- Geometric Leaf Rays -->
              <path d="M50 16 C30 35, 30 65, 50 84 C70 65, 70 35, 50 16 Z" fill="none" stroke="currentColor" stroke-width="3" />
              <line x1="50" y1="18" x2="50" y2="82" stroke="currentColor" stroke-width="2" />
              <line x1="50" y1="36" x2="62" y2="28" stroke="currentColor" stroke-width="2" />
              <line x1="50" y1="52" x2="65" y2="44" stroke="currentColor" stroke-width="2" />
              <line x1="50" y1="68" x2="60" y2="60" stroke="currentColor" stroke-width="2" />
              <line x1="50" y1="42" x2="38" y2="34" stroke="currentColor" stroke-width="2" />
              <line x1="50" y1="58" x2="35" y2="50" stroke="currentColor" stroke-width="2" />
            </svg>
            <div class="logo-typography-block">
              <span class="logo-primary-name">KOMOREBI</span>
              <span class="logo-subtext">COFFEE ROASTERS • DAIKANYAMA</span>
              <span class="logo-kanji">木漏れ日 焙煎所</span>
            </div>
          </div>

          <!-- Ochre & Thyme Logo -->
          <div v-else-if="project.slug === 'ochre-thyme-bistro'" class="brand-logo-render logo-ochre">
            <!-- Thyme Botanical Crest -->
            <svg viewBox="0 0 100 100" class="brand-emblem-svg">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3" opacity="0.6" />
              <!-- Botanical Thyme Sprig -->
              <path d="M50 80 Q50 48, 50 22 Q46 32, 38 36 M50 38 Q58 32, 62 26 M50 52 Q38 48, 34 42 M50 64 Q62 60, 66 52 M50 72 Q40 68, 36 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            </svg>
            <div class="logo-typography-block">
              <span class="logo-primary-name serif-font">OCHRE &amp; THYME</span>
              <span class="logo-subtext">BISTRO &amp; CULINARY SALON</span>
              <span class="logo-established">EST. 2024 • OPEN FIRE</span>
            </div>
          </div>

          <!-- Atelier Vesper Logo -->
          <div v-else-if="project.slug === 'atelier-vesper-paris'" class="brand-logo-render logo-vesper">
            <!-- Continuous Monolinear AV Monogram -->
            <svg viewBox="0 0 100 100" class="brand-emblem-svg">
              <path d="M18 78 L50 20 L82 78 L66 78 L50 48 L34 78 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
              <path d="M50 48 L68 20 L82 20 L50 78 L18 20 L32 20 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>
            <div class="logo-typography-block">
              <span class="logo-primary-name didone-font">ATELIER VESPER</span>
              <span class="logo-subtext tracking-wide">HAUTE COUTURE • PARIS</span>
            </div>
          </div>

          <!-- Generic / Custom Brand Logo Fallback -->
          <div v-else class="brand-logo-render logo-generic">
            <svg viewBox="0 0 80 80" class="brand-emblem-svg">
              <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" stroke-width="2.5" />
              <path d="M26 56 L40 24 L54 56 Z" fill="none" stroke="currentColor" stroke-width="3" />
            </svg>
            <div class="logo-typography-block">
              <span class="logo-primary-name">{{ project.title }}</span>
              <span class="logo-subtext">IDENTITY SYSTEM • {{ project.year }}</span>
            </div>
          </div>
        </div>

        <!-- Logo Technical Rationale Strip -->
        <div class="logo-specs-footer">
          <div class="spec-detail">
            <span class="spec-title">Typeface Lockup</span>
            <span class="spec-data">{{ project.typePair }}</span>
          </div>
          <div class="spec-detail">
            <span class="spec-title">Clearspace Rule</span>
            <span class="spec-data">1.5× Capital Height margin</span>
          </div>
          <div class="spec-detail">
            <span class="spec-title">Color Modes</span>
            <span class="spec-data">Tested across light, dark, and single-ink stamp applications</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PILLAR 2: CAMPAIGN POSTER ================= -->
    <section class="pillar-section poster-pillar">
      <div class="pillar-header">
        <span class="pillar-num">Pillar 02</span>
        <h3 class="pillar-title">Brand Campaign Poster</h3>
        <p class="pillar-desc">
          Demonstrating how the identity translates into public communication: typography hierarchy, graphic pacing, and narrative tone.
        </p>
      </div>

      <div class="campaign-poster-card">
        <div class="poster-media-wrapper">
          <img
            :src="project.brandSystem?.poster?.image || project.image"
            :alt="project.brandSystem?.poster?.title || `${project.title} campaign poster`"
            loading="lazy"
            class="poster-asset-img"
          />
        </div>
        <div class="poster-narrative-box">
          <div class="poster-meta-tag">
            <span class="tag-label">COMMUNICATION ARTIFACT</span>
            <span class="tag-title">{{ project.brandSystem?.poster?.title || 'Promotional Campaign Poster' }}</span>
          </div>
          <p class="poster-rationale">
            {{ project.brandSystem?.poster?.description || 'Engineered to communicate the brand ethos at scale, balancing macro-level headline impact with structured informational typography.' }}
          </p>
          <div class="poster-deliverable-pills">
            <span>B1 Format (707 × 1000mm)</span>
            <span>Spot-Color Silkscreen</span>
            <span>Digital Motion Billboards</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PILLAR 3: PRACTICAL MOCKUPS ================= -->
    <section class="pillar-section mockups-pillar">
      <div class="pillar-header">
        <span class="pillar-num">Pillar 03</span>
        <h3 class="pillar-title">Real-World Applications &amp; Mockups</h3>
        <p class="pillar-desc">
          Tactile touchpoints demonstrating how the visual system operates across physical substrates, packaging materials, and everyday brand encounters.
        </p>
      </div>

      <div class="mockups-editorial-grid">
        <div
          v-for="(mockup, idx) in (project.brandSystem?.mockups || [])"
          :key="idx"
          class="mockup-feature-card"
        >
          <div class="mockup-img-frame">
            <img :src="mockup.image" :alt="mockup.title" loading="lazy" />
            <span class="mockup-category-badge">{{ mockup.category }}</span>
          </div>
          <div class="mockup-content">
            <h4 class="mockup-title">{{ mockup.title }}</h4>
            <p class="mockup-desc">{{ mockup.description }}</p>
            <div class="mockup-specs-tag" v-if="mockup.substrate">
              <span class="spec-tag-label">Substrate &amp; Finish:</span>
              <span class="spec-tag-value">{{ mockup.substrate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.brand-identity-system {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding-top: 1rem;
}

/* Intro Bar */
.system-intro-bar {
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-left: 3px solid var(--modal-accent, var(--color-signature));
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.system-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--modal-accent, var(--color-signature-dark));
}

.system-summary {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
}

/* Pillar Common */
.pillar-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pillar-header {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.pillar-num {
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--modal-accent, var(--color-signature-dark));
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.pillar-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--color-deep-espresso);
  letter-spacing: -0.02em;
}

.pillar-desc {
  font-size: 0.9rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
  max-width: 680px;
}

/* ================= 1. LOGO PRESENTATION BOX ================= */
.logo-showcase-box {
  border-radius: 16px;
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

.logo-showcase-box.mode-light {
  background-color: #FFFFFF;
  color: #1A1A1A;
}

.logo-showcase-box.mode-dark {
  background-color: #161514;
  color: #F7F2EA;
}

.logo-mode-switch {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.15);
  background-color: rgba(128, 128, 128, 0.03);
}

.mode-btn {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(128, 128, 128, 0.25);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.mode-btn.is-active {
  background-color: var(--modal-accent, var(--color-deep-espresso));
  color: #FFFFFF;
  border-color: var(--modal-accent, var(--color-deep-espresso));
}

.logo-display-stage {
  padding: clamp(3rem, 6vw, 5rem) 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo-render {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.brand-emblem-svg {
  width: 90px;
  height: 90px;
  transition: transform var(--transition-normal);
}

.brand-logo-render:hover .brand-emblem-svg {
  transform: scale(1.06);
}

.logo-typography-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.logo-primary-name {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.1;
}

.logo-primary-name.serif-font {
  font-family: var(--font-serif);
  font-weight: 700;
  letter-spacing: 0.06em;
}

.logo-primary-name.didone-font {
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: 0.18em;
  font-weight: 600;
}

.logo-subtext {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  opacity: 0.75;
  text-transform: uppercase;
}

.logo-kanji {
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  margin-top: 0.2rem;
  opacity: 0.85;
}

.logo-established {
  font-size: 0.6875rem;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

.logo-specs-footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(128, 128, 128, 0.15);
  background-color: rgba(128, 128, 128, 0.03);
}

.spec-detail {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.spec-title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

.spec-data {
  font-size: 0.8125rem;
  font-weight: 600;
}

/* ================= 2. CAMPAIGN POSTER ================= */
.campaign-poster-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
}

@media (min-width: 768px) {
  .campaign-poster-card {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}

.poster-media-wrapper {
  width: 100%;
  aspect-ratio: 9 / 13;
  overflow: hidden;
  background-color: #1A1A1A;
}

.poster-asset-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.campaign-poster-card:hover .poster-asset-img {
  transform: scale(1.03);
}

.poster-narrative-box {
  padding: clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.poster-meta-tag {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tag-label {
  font-family: monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--modal-accent, var(--color-signature-dark));
  letter-spacing: 0.1em;
}

.tag-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-deep-espresso);
  line-height: 1.25;
}

.poster-rationale {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  line-height: 1.7;
}

.poster-deliverable-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border-subtle);
}

.poster-deliverable-pills span {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-soft-charcoal);
  background-color: var(--color-warm-ivory);
  padding: 0.3rem 0.65rem;
  border-radius: 4px;
  border: 1px solid var(--color-border-subtle);
}

/* ================= 3. MOCKUPS GALLERY ================= */
.mockups-editorial-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 650px) {
  .mockups-editorial-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

.mockup-feature-card {
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.mockup-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
}

.mockup-img-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: var(--color-pale-sand);
}

.mockup-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.mockup-feature-card:hover .mockup-img-frame img {
  transform: scale(1.04);
}

.mockup-category-badge {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  background-color: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(6px);
  color: #FFFFFF;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.mockup-content {
  padding: 1.35rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mockup-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  line-height: 1.3;
}

.mockup-desc {
  font-size: 0.85rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
}

.mockup-specs-tag {
  margin-top: 0.5rem;
  padding-top: 0.65rem;
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.spec-tag-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--modal-accent, var(--color-signature-dark));
  font-weight: 700;
}

.spec-tag-value {
  font-size: 0.78rem;
  color: var(--color-soft-charcoal);
  font-weight: 500;
}
</style>
