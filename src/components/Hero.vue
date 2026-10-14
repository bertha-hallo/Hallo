<!-- src/components/Hero.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BerthaWordmark from './BerthaWordmark.vue'
import MascotPeeker from './MascotPeeker.vue'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-vue-next'

const heroRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
let animationFrameId = null

const handlePointerMove = (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5

  cancelAnimationFrame(animationFrameId)
  animationFrameId = requestAnimationFrame(() => {
    mouseX.value = x * 18 // subtle tilt
    mouseY.value = y * 12
  })
}

const scrollTo = (targetId) => {
  const el = document.querySelector(targetId)
  if (el) {
    const navOffset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('pointermove', handlePointerMove)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <section ref="heroRef" class="hero-section" id="hero">
    <!-- Subtle Background Organic Geometry -->
    <div class="hero-bg-shapes" aria-hidden="true">
      <div
        class="bg-shape shape-1"
        :style="{ transform: `translate3d(${mouseX * 0.4}px, ${mouseY * 0.4}px, 0)` }"
      ></div>
      <div
        class="bg-shape shape-2"
        :style="{ transform: `translate3d(${mouseX * -0.3}px, ${mouseY * -0.3}px, 0)` }"
      ></div>
      <div class="hero-grid-lines"></div>
    </div>

    <div class="container hero-container">
      <!-- Top Row: Availability Pill & Studio Meta -->
      <div class="hero-top-bar">
        <div class="availability-badge">
          <span class="pulse-dot"></span>
          <span class="badge-text">Available for Q4 2026 Commissions</span>
        </div>
        <div class="studio-discipline-tags">
          <span>Identity</span>
          <span class="sep">•</span>
          <span>Posters</span>
          <span class="sep">•</span>
          <span>Editorial</span>
          <span class="sep">•</span>
          <span>Storytelling</span>
        </div>
      </div>

      <!-- Main Editorial Layout: Asymmetrical Grid -->
      <div class="hero-grid">
        <!-- Left Column: Typography & Narrative -->
        <div class="hero-content">
          <!-- Prominent Signature Wordmark -->
          <div class="hero-brand-signature">
            <BerthaWordmark size="hero" :interactive="true" />
            <div class="brand-sub-badge">Graphic Design Studio</div>
          </div>

          <!-- Bold Main Headline -->
          <h1 class="hero-headline">
            Building identities <br />
            that leave <span class="italic-highlight">a mark.</span>
          </h1>

          <!-- Supporting Statement -->
          <p class="hero-description">
            I'm <strong class="tan-text">Bertha</strong>, an independent graphic designer crafting distinctive brand identities, expressive posters, and visual experiences that turn ideas into lasting impressions.
          </p>

          <!-- Calls to Action -->
          <div class="hero-actions">
            <button
              class="btn-primary-editorial"
              @click="scrollTo('#work')"
            >
              <span>Explore My Work</span>
              <ArrowDown :size="16" />
            </button>

            <button
              class="btn-secondary-editorial"
              @click="scrollTo('#contact')"
            >
              <span>Let's Collaborate</span>
              <ArrowUpRight :size="16" />
            </button>
          </div>

          <!-- Creative Metrics / Trust Strip -->
          <div class="hero-metrics-strip">
            <div class="metric-item">
              <span class="metric-num">10+</span>
              <span class="metric-label">Curated Systems</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-num">Swiss</span>
              <span class="metric-label">Grid Philosophy</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-num">100%</span>
              <span class="metric-label">Intentional Craft</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Art-Directed Composition + Mascot Peeker -->
        <div class="hero-visual-composition">
          <!-- Animated Cartoon Mascot Peeking from Behind the Artboard -->
          <div
            class="hero-mascot-wrapper"
            :style="{ transform: `translate3d(${mouseX * -0.5}px, ${mouseY * -0.5}px, 0)` }"
          >
            <MascotPeeker />
          </div>

          <!-- Layered Primary Poster Card -->
          <div
            class="poster-card-primary"
            :style="{ transform: `perspective(1000px) rotateY(${mouseX * 0.4}deg) rotateX(${mouseY * -0.4}deg)` }"
          >
            <div class="poster-inner">
              <img
                src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
                alt="Resonance silkscreen poster design composition"
                class="poster-img"
                loading="eager"
              />
              <div class="poster-overlay-tag">
                <span class="tag-title">Resonance '25</span>
                <span class="tag-cat">Poster Series</span>
              </div>
            </div>
            <div class="poster-stamp">
              <span>EST. 2026</span>
            </div>
          </div>

          <!-- Secondary Overlapping Card: Brand Packaging Mockup -->
          <div
            class="poster-card-secondary"
            :style="{ transform: `translate3d(${mouseX * 0.7}px, ${mouseY * 0.7}px, 0)` }"
          >
            <div class="card-secondary-inner">
              <img
                src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=600&q=80"
                alt="Komorebi specialty coffee bag packaging mockup"
                loading="eager"
              />
              <div class="card-caption">
                <span class="caption-dot"></span>
                <span>Komorebi Identity System</span>
              </div>
            </div>
          </div>

          <!-- Floating Typographic Badge -->
          <div
            class="floating-seal-badge"
            :style="{ transform: `translate3d(${mouseX * -0.6}px, ${mouseY * -0.6}px, 0)` }"
          >
            <div class="seal-inner">
              <Sparkles :size="18" class="seal-sparkle" />
              <span class="seal-text">Editorial Precision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 94vh;
  padding-top: calc(var(--nav-height) + 2.5rem);
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-warm-ivory);
}

/* Background Atmosphere */
.hero-bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.shape-1 {
  top: 10%;
  right: -5%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(212, 163, 115, 0.4) 0%, rgba(232, 216, 197, 0.1) 70%);
}

.shape-2 {
  bottom: 5%;
  left: -8%;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(183, 101, 74, 0.2) 0%, rgba(247, 242, 234, 0) 70%);
}

.hero-grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 80px 80px;
  background-image: 
    linear-gradient(to right, rgba(43, 33, 29, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(43, 33, 29, 0.02) 1px, transparent 1px);
  opacity: 0.8;
}

.hero-container {
  position: relative;
  z-index: 1;
}

/* Top Bar */
.hero-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--color-border-subtle);
  flex-wrap: wrap;
  gap: 1rem;
}

.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-deep-espresso);
  background: rgba(232, 216, 197, 0.5);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-subtle);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-sage-green);
  box-shadow: 0 0 0 3px rgba(135, 148, 122, 0.25);
}

.studio-discipline-tags {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-soft-charcoal);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.sep {
  color: var(--color-signature);
}

/* Main Grid */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4.5rem;
  }
}

/* Content Left */
.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-brand-signature {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.brand-sub-badge {
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-signature-dark);
  padding: 0.35rem 0.75rem;
  background-color: rgba(212, 163, 115, 0.15);
  border-radius: 4px;
}

.hero-headline {
  font-size: clamp(2.75rem, 5.2vw, 4.6rem);
  font-weight: 800;
  color: var(--color-deep-espresso);
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin-bottom: 1.75rem;
}

.italic-highlight {
  font-family: var(--font-serif);
  font-weight: 400;
  font-style: italic;
  color: var(--color-signature-dark);
  letter-spacing: -0.01em;
}

.hero-description {
  font-size: clamp(1.0625rem, 1.3vw, 1.25rem);
  color: var(--color-soft-charcoal);
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 2.25rem;
}

.tan-text {
  color: var(--color-deep-espresso);
  font-weight: 600;
}

/* Actions */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* Metrics Strip */
.hero-metrics-strip {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-subtle);
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-deep-espresso);
  line-height: 1.2;
}

.metric-label {
  font-size: 0.8125rem;
  color: var(--color-soft-charcoal);
  font-weight: 500;
}

.metric-divider {
  width: 1px;
  height: 32px;
  background-color: var(--color-border-subtle);
}

/* Right Visual Composition */
.hero-visual-composition {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
}

/* Mascot Placement: Peeking from Behind the Primary Card */
.hero-mascot-wrapper {
  position: absolute;
  top: -45px;
  right: 60px;
  z-index: 1;
  transition: transform 0.15s ease-out;
}

@media (max-width: 768px) {
  .hero-mascot-wrapper {
    right: 20px;
    top: -35px;
  }
}

/* Primary Card */
.poster-card-primary {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 380px;
  background-color: var(--color-surface-pure);
  padding: 1rem 1rem 1.25rem 1rem;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(43, 33, 29, 0.12),
              0 2px 6px rgba(43, 33, 29, 0.04);
  border: 1px solid var(--color-border-subtle);
  transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
  transform-style: preserve-3d;
}

.poster-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--color-pale-sand);
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.poster-card-primary:hover .poster-img {
  transform: scale(1.05);
}

.poster-overlay-tag {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: rgba(43, 33, 29, 0.85);
  backdrop-filter: blur(8px);
  color: var(--color-warm-ivory);
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}

.tag-title {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 700;
}

.tag-cat {
  font-size: 0.7rem;
  color: var(--color-signature);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.poster-stamp {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.85rem;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--color-signature-dark);
}

/* Secondary Overlapping Card */
.poster-card-secondary {
  position: absolute;
  bottom: -25px;
  left: -20px;
  z-index: 3;
  width: 220px;
  background-color: var(--color-surface-pure);
  padding: 0.65rem;
  border-radius: 10px;
  box-shadow: 0 16px 36px rgba(43, 33, 29, 0.14);
  border: 1px solid var(--color-border-subtle);
  transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

@media (max-width: 600px) {
  .poster-card-secondary {
    display: none;
  }
}

.card-secondary-inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-secondary-inner img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 6px;
}

.card-caption {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
}

.caption-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-signature);
}

/* Floating Seal Badge */
.floating-seal-badge {
  position: absolute;
  top: 40px;
  left: -15px;
  z-index: 4;
  background-color: var(--color-deep-espresso);
  color: var(--color-warm-ivory);
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(43, 33, 29, 0.2);
  border: 1px solid rgba(212, 163, 115, 0.3);
  transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.seal-inner {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.seal-sparkle {
  color: var(--color-signature);
}
</style>
