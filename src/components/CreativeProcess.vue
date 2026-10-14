<!-- src/components/CreativeProcess.vue -->
<script setup>
import { Compass, Sparkles, Sliders, CheckCircle2 } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    name: 'Discover',
    icon: Compass,
    tagline: 'Immersion & Strategic Framing',
    description: 'We initiate every collaboration by mapping the strategic landscape: brand values, competitor benchmarks, historical influences, and the visceral emotional response we intend to provoke.'
  },
  {
    num: '02',
    name: 'Explore',
    icon: Sparkles,
    tagline: 'Visual Divergence & Typography Studies',
    description: 'Developing 2–3 divergent visual concepts. We explore contrasting typographic pairings, experimental layout grids, physical material moodboards, and exploratory poster treatments.'
  },
  {
    num: '03',
    name: 'Design',
    icon: Sliders,
    tagline: 'Systematic Refinement & Craft',
    description: 'Once the core direction is locked, we hone every curve, kerning pair, and color token. The system expands into real-world packaging dielines, responsive layouts, and editorial spreads.'
  },
  {
    num: '04',
    name: 'Deliver',
    icon: CheckCircle2,
    tagline: 'Production Assets & Living Guidelines',
    description: 'Packaging production-ready vector assets, print specifications with spot colors, and an exhaustive 60+ page brand book ensuring seamless execution across digital and tactile applications.'
  }
]
</script>

<template>
  <section class="process-section section-padding" id="process">
    <div class="container">
      <div class="process-header">
        <div class="section-eyebrow">Creative Methodology</div>
        <h2 class="section-heading-editorial">
          A disciplined process for <br />
          <span class="italic-accent">unconventional results.</span>
        </h2>
        <p class="section-lead-editorial">
          Great design is never an accident. It is the output of deep listening, rigorous typographic exploration, and relentless refinement.
        </p>
      </div>

      <!-- Horizontal / Vertical Connected Timeline -->
      <div class="timeline-container">
        <!-- Connecting Track Line -->
        <div class="timeline-track" aria-hidden="true">
          <div class="timeline-progress-fill"></div>
        </div>

        <div class="steps-grid">
          <div
            v-for="(step, idx) in steps"
            :key="step.num"
            class="step-card"
          >
            <!-- Step Marker Node -->
            <div class="step-node">
              <span class="step-number">{{ step.num }}</span>
            </div>

            <!-- Card Content -->
            <div class="step-body">
              <div class="step-icon-wrap">
                <component :is="step.icon" :size="20" />
              </div>
              <h3 class="step-name">{{ step.name }}</h3>
              <span class="step-tagline">{{ step.tagline }}</span>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  position: relative;
  background-color: var(--color-warm-ivory);
  border-top: 1px solid var(--color-border-subtle);
}

.process-header {
  margin-bottom: 4.5rem;
}

/* Timeline Container */
.timeline-container {
  position: relative;
}

/* Track Line for Desktop */
.timeline-track {
  display: none;
  position: absolute;
  top: 26px;
  left: 3rem;
  right: 3rem;
  height: 2px;
  background-color: var(--color-border-medium);
  z-index: 0;
}

@media (min-width: 900px) {
  .timeline-track {
    display: block;
  }
}

.timeline-progress-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-signature),
    var(--color-muted-terracotta),
    var(--color-sage-green),
    var(--color-signature)
  );
  opacity: 0.8;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 600px) and (max-width: 899px) {
  .steps-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .steps-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;
  }
}

.step-card {
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Node */
.step-node {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--color-surface-pure);
  border: 2px solid var(--color-signature);
  box-shadow: 0 4px 14px rgba(43, 33, 29, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform var(--transition-fast), background-color var(--transition-fast);
}

.step-card:hover .step-node {
  transform: scale(1.12);
  background-color: var(--color-signature);
}

.step-card:hover .step-number {
  color: #FFFFFF;
}

.step-number {
  font-family: var(--font-display);
  font-size: 0.9375rem;
  font-weight: 800;
  color: var(--color-deep-espresso);
  transition: color var(--transition-fast);
}

/* Body */
.step-body {
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.step-card:hover .step-body {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(43, 33, 29, 0.07);
}

.step-icon-wrap {
  color: var(--color-signature-dark);
  margin-bottom: 0.85rem;
}

.step-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  margin-bottom: 0.35rem;
}

.step-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.8125rem;
  color: var(--color-signature-dark);
  margin-bottom: 0.85rem;
  line-height: 1.4;
}

.step-description {
  font-size: 0.875rem;
  color: var(--color-soft-charcoal);
  line-height: 1.65;
}
</style>
