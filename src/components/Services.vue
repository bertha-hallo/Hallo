<!-- src/components/Services.vue -->
<script setup>
import { ArrowUpRight, Palette, Layout, Eye, Box } from 'lucide-vue-next'

const services = [
  {
    id: 'brand-identity',
    num: '01',
    icon: Palette,
    title: 'Brand Identity Design',
    tagline: 'Distinctive visual systems that turn vision into enduring brand equity.',
    description: 'Developing complete, cohesive brand identities from the foundational mark to comprehensive design token systems and cross-channel guidelines.',
    deliverables: [
      'Logo concepts & primary wordmark',
      'Color palettes & typography hierarchy',
      'Comprehensive brand guideline books',
      'Digital & physical brand collateral systems',
      'Social assets & stationery templates'
    ]
  },
  {
    id: 'poster-design',
    num: '02',
    icon: Layout,
    title: 'Poster Design & Print Craft',
    tagline: 'Expressive large-format compositions rooted in Swiss modernism.',
    description: 'Silkscreen, risograph, and digital poster designs for music events, cultural exhibitions, and architectural festivals where typography takes center stage.',
    deliverables: [
      'Event & festival exhibition posters',
      'Cultural & promotional campaign artwork',
      'Typography-led kinetic compositions',
      'Collector silkscreen print series',
      'Billboard & large-scale spatial graphics'
    ]
  },
  {
    id: 'art-direction',
    num: '03',
    icon: Eye,
    title: 'Creative Art Direction',
    tagline: 'Unifying narrative, still-life photography, and editorial vision.',
    description: 'Guiding the visual atmosphere of brand campaigns, editorial publications, and product launches to guarantee emotional resonance and aesthetic harmony.',
    deliverables: [
      'Visual concepts, treatments & moodboards',
      'Editorial lookbook & still-life styling',
      'Campaign creative direction',
      'Presentation decks & investor storytelling',
      'Creative strategy documentation'
    ]
  },
  {
    id: 'packaging-design',
    num: '04',
    icon: Box,
    title: 'Packaging & Visual Applications',
    tagline: 'Tactile vessel design that commands shelf presence and invites touch.',
    description: 'Transforming bottles, boxes, and unboxing rituals into tactile brand touchpoints through bespoke dielines, blind debossing, and foil-stamped substrates.',
    deliverables: [
      'Packaging structural concepts & dielines',
      'Apothecary, bottle & carton label architecture',
      'Foil-stamping, emboss & deboss specifications',
      'Photorealistic 3D packaging mockups',
      'Unboxing experience & branded paper goods'
    ]
  }
]

const scrollToContactWithService = (serviceTitle) => {
  const contactEl = document.querySelector('#contact')
  if (contactEl) {
    const navOffset = 80
    const top = contactEl.getBoundingClientRect().top + window.pageYOffset - navOffset
    window.scrollTo({ top, behavior: 'smooth' })

    // Optional dispatch event to prefill service dropdown
    window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }))
  }
}
</script>

<template>
  <section class="services-section section-padding" id="services">
    <div class="container">
      <!-- Section Header -->
      <div class="services-header">
        <div class="section-eyebrow">Studio Capabilities</div>
        <h2 class="section-heading-editorial">
          Specialized services for <br />
          <span class="italic-accent">ambitious creative visions.</span>
        </h2>
        <p class="section-lead-editorial">
          Every engagement is treated as a bespoke partnership. No templates, no generic formulas—only tailored design solutions engineered to leave a mark.
        </p>
      </div>

      <!-- 2x2 Clean Services Grid -->
      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <!-- Top Row: Number & Icon -->
          <div class="service-card-header">
            <span class="service-num">{{ service.num }}</span>
            <div class="service-icon-box">
              <component :is="service.icon" :size="22" />
            </div>
          </div>

          <!-- Title & Narrative -->
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-tagline">{{ service.tagline }}</p>
          <p class="service-description">{{ service.description }}</p>

          <!-- Deliverables List -->
          <div class="service-deliverables">
            <h4 class="deliverables-heading">Deliverables Include</h4>
            <ul class="deliverables-list">
              <li v-for="(item, idx) in service.deliverables" :key="idx">
                <span class="deliv-dash">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Action -->
          <div class="service-card-footer">
            <button
              class="service-inquire-btn"
              @click="scrollToContactWithService(service.title)"
              :aria-label="`Inquire about ${service.title}`"
            >
              <span>Inquire About This Service</span>
              <ArrowUpRight :size="16" class="btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  position: relative;
  background-color: var(--color-warm-ivory);
  border-top: 1px solid var(--color-border-subtle);
}

.services-header {
  margin-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
}

@media (min-width: 820px) {
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.service-card {
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  padding: clamp(2rem, 3.5vw, 2.75rem);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(43, 33, 29, 0.08);
  border-color: var(--color-border-accent);
}

.service-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.service-num {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-signature);
  letter-spacing: 0.05em;
}

.service-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--color-warm-ivory);
  color: var(--color-deep-espresso);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border-subtle);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.service-card:hover .service-icon-box {
  background-color: var(--color-signature);
  color: var(--color-deep-espresso);
}

.service-title {
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  margin-bottom: 0.5rem;
  line-height: 1.25;
}

.service-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9375rem;
  color: var(--color-signature-dark);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.service-description {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  line-height: 1.7;
  margin-bottom: 1.75rem;
}

.service-deliverables {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-subtle);
}

.deliverables-heading {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-signature-dark);
  margin-bottom: 0.85rem;
}

.deliverables-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.deliverables-list li {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  font-size: 0.875rem;
  color: var(--color-soft-charcoal);
  line-height: 1.5;
}

.deliv-dash {
  color: var(--color-signature);
  font-weight: bold;
}

.service-card-footer {
  margin-top: 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-subtle);
}

.service-inquire-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  transition: color var(--transition-fast), transform var(--transition-fast);
}

.service-card:hover .service-inquire-btn {
  color: var(--color-signature-dark);
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.service-card:hover .btn-arrow {
  transform: translate(2px, -2px);
}
</style>
