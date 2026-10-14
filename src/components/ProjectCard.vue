<!-- src/components/ProjectCard.vue -->
<script setup>
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const getAspectRatioClass = (ratio) => {
  switch (ratio) {
    case 'tall-poster':
      return 'aspect-tall-poster' // 9:14
    case 'portrait':
      return 'aspect-portrait'    // 4:5
    case 'square':
      return 'aspect-square'      // 1:1
    case 'landscape':
    default:
      return 'aspect-landscape'   // 16:10
  }
}
</script>

<template>
  <article
    class="project-card"
    :style="{ '--card-accent': project.accentColor || 'var(--color-signature)' }"
    @click="emit('select', project)"
    tabindex="0"
    @keydown.enter="emit('select', project)"
    @keydown.space.prevent="emit('select', project)"
    :aria-label="`View details for ${project.title}`"
  >
    <div
      class="card-media-wrapper"
      :class="[getAspectRatioClass(project.aspectRatio), { 'is-contain-box': project.fit === 'contain' }]"
      :style="{ backgroundColor: project.mediaBg || 'var(--color-pale-sand)' }"
    >
      <!-- Project Image (preserves original artwork colors, no global color filters) -->
      <img
        v-if="!imageError"
        :src="project.image"
        :alt="project.alt || project.title"
        loading="lazy"
        class="project-image"
        :class="{ 'fit-contain': project.fit === 'contain' }"
        @error="handleImageError"
      />

      <!-- Fallback Branded Visual if image network fails -->
      <div v-else class="image-fallback">
        <div class="fallback-content">
          <span class="fallback-category" :style="{ color: project.accentColor }">{{ project.category }}</span>
          <h4 class="fallback-title">{{ project.title }}</h4>
          <span class="fallback-hint">Bertha Studio Archive</span>
        </div>
      </div>

      <!-- Speculative Project Badge -->
      <div v-if="project.isSpeculative" class="speculative-pill">
        <span>Concept</span>
      </div>

      <!-- Clean Neutral Hover Overlay (does NOT tint or recolor the artwork) -->
      <div class="card-hover-overlay">
        <div class="overlay-top">
          <span class="overlay-year">{{ project.year }}</span>
          <span class="overlay-client">{{ project.client }}</span>
        </div>

        <div class="overlay-bottom">
          <span class="overlay-action">
            <span>Explore Case Study</span>
            <ArrowUpRight :size="15" />
          </span>
        </div>
      </div>
    </div>

    <!-- Metadata Content Below Media -->
    <div class="card-meta">
      <div class="meta-header">
        <!-- Project-specific Brand Color Dot -->
        <span
          class="project-brand-dot"
          :style="{ backgroundColor: project.accentColor }"
          :title="`Brand Accent: ${project.accentColor}`"
        ></span>
        <span
          class="project-category"
          :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
        >
          {{ project.category }}
        </span>
        <span class="meta-dot">•</span>
        <span class="project-year">{{ project.year }}</span>

        <!-- Palette Preview Dots for Creative Diversity -->
        <div class="palette-mini-row" v-if="project.palette?.length" title="Project Palette">
          <span
            v-for="c in project.palette"
            :key="c.hex"
            class="mini-dot"
            :style="{ backgroundColor: c.hex }"
            :title="`${c.name}: ${c.hex}`"
          ></span>
        </div>
      </div>

      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-summary">{{ project.shortDescription }}</p>

      <!-- Deliverables Tags Preview -->
      <div class="deliverables-preview">
        <span
          v-for="(del, idx) in project.deliverables.slice(0, 2)"
          :key="idx"
          class="deliv-tag"
        >
          {{ del }}
        </span>
        <span v-if="project.deliverables.length > 2" class="deliv-tag-more">
          +{{ project.deliverables.length - 2 }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  break-inside: avoid;
  margin-bottom: 2.25rem;
  background-color: var(--color-surface-pure);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border-subtle);
  box-shadow: 0 4px 18px rgba(43, 33, 29, 0.04);
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(43, 33, 29, 0.1);
  border-color: var(--card-accent, var(--color-border-accent));
}

.project-card:focus-visible {
  outline: 2px solid var(--card-accent, var(--color-signature));
  outline-offset: 3px;
}

/* Media Wrapper & Aspect Ratios */
.card-media-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-pale-sand);
}

.aspect-tall-poster {
  aspect-ratio: 9 / 14;
}

.aspect-portrait {
  aspect-ratio: 4 / 5;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-landscape {
  aspect-ratio: 16 / 10;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-image.fit-contain {
  object-fit: contain;
  padding: 1.25rem;
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

/* Fallback Container */
.image-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #1C1917 0%, #292524 100%);
  color: #FFFFFF;
  padding: 2rem;
  text-align: center;
}

.fallback-content {
  position: relative;
  z-index: 1;
}

.fallback-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.fallback-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: #FFFFFF;
}

.fallback-hint {
  font-size: 0.75rem;
  color: var(--color-pale-sand);
  opacity: 0.8;
}

/* Speculative Pill */
.speculative-pill {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(6px);
  color: #F5F5F4;
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Neutral Hover Overlay (does NOT tint original artwork) */
.card-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(15, 15, 15, 0.45) 0%,
    transparent 35%,
    rgba(15, 15, 15, 0.65) 100%
  );
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  transition: opacity var(--transition-normal);
  z-index: 1;
}

.project-card:hover .card-hover-overlay {
  opacity: 1;
}

.overlay-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #FFFFFF;
  font-weight: 600;
  letter-spacing: 0.05em;
  transform: translateY(-6px);
  transition: transform var(--transition-normal);
}

.project-card:hover .overlay-top {
  transform: translateY(0);
}

.overlay-bottom {
  transform: translateY(6px);
  transition: transform var(--transition-normal);
}

.project-card:hover .overlay-bottom {
  transform: translateY(0);
}

.overlay-action {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #FFFFFF;
  color: var(--color-deep-espresso);
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 700;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

/* Card Metadata Below Media */
.card-meta {
  padding: 1.25rem 1.35rem 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.meta-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-brand-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.project-category {
  font-weight: 700;
  transition: color var(--transition-fast);
}

.meta-dot {
  color: var(--color-border-medium);
}

.project-year {
  color: var(--color-soft-charcoal);
  font-weight: 500;
}

.palette-mini-row {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.mini-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  line-height: 1.25;
  transition: color var(--transition-fast);
}

.project-card:hover .project-title {
  color: var(--card-accent, var(--color-signature-dark));
}

.project-summary {
  font-size: 0.875rem;
  color: var(--color-soft-charcoal);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Deliverables Preview Tags */
.deliverables-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border-subtle);
}

.deliv-tag {
  font-size: 0.72rem;
  color: var(--color-soft-charcoal);
  background-color: var(--color-warm-ivory);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  border: 1px solid var(--color-border-subtle);
}

.deliv-tag-more {
  font-size: 0.72rem;
  color: var(--card-accent, var(--color-signature-dark));
  font-weight: 700;
  padding: 0.2rem 0.35rem;
}

/* ---------- Responsive: tap-friendly cards, calm motion on touch ---------- */
@media (max-width: 640px) {
  .project-card {
    margin-bottom: 1.5rem;
  }
  .card-meta {
    padding: 1rem 1.1rem 1.2rem;
  }
  .project-title {
    font-size: 1.1rem;
  }
}

@media (hover: none) {
  .project-card:hover {
    transform: none;
  }
  .project-card:hover .project-image {
    transform: none;
  }
  .card-hover-overlay {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card:hover,
  .project-card:hover .project-image {
    transform: none;
  }
}
</style>
