<!-- src/components/ProjectModal.vue -->
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { X, ChevronLeft, ChevronRight, Check, Copy } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  allProjects: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close', 'navigate'])

const copiedHex = ref(null)

const copyColor = (hex) => {
  navigator.clipboard.writeText(hex).then(() => {
    copiedHex.value = hex
    setTimeout(() => {
      copiedHex.value = null
    }, 2000)
  })
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  } else if (e.key === 'ArrowLeft') {
    navigateProject(-1)
  } else if (e.key === 'ArrowRight') {
    navigateProject(1)
  }
}

const navigateProject = (direction) => {
  if (!props.project || !props.allProjects.length) return
  const currentIndex = props.allProjects.findIndex(p => p.id === props.project.id)
  if (currentIndex === -1) return
  let nextIndex = currentIndex + direction
  if (nextIndex < 0) nextIndex = props.allProjects.length - 1
  if (nextIndex >= props.allProjects.length) nextIndex = 0
  emit('navigate', props.allProjects[nextIndex])
}

const goToContact = () => {
  emit('close')
  requestAnimationFrame(() => {
    const el = document.querySelector('#contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
}

watch(() => props.project, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  if (props.project) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="project"
      class="modal-backdrop"
      :style="{ '--modal-accent': project.accentColor || 'var(--color-signature)' }"
      @click.self="emit('close')"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
    >
      <div class="modal-dialog">
        <!-- Close Button -->
        <button
          class="modal-close-btn"
          @click="emit('close')"
          aria-label="Close project modal"
        >
          <X :size="20" />
        </button>

        <!-- Navigation Buttons -->
        <button
          class="modal-nav-btn prev-btn"
          @click="navigateProject(-1)"
          aria-label="Previous project"
          title="Previous project (Left Arrow)"
        >
          <ChevronLeft :size="24" />
        </button>
        <button
          class="modal-nav-btn next-btn"
          @click="navigateProject(1)"
          aria-label="Next project"
          title="Next project (Right Arrow)"
        >
          <ChevronRight :size="24" />
        </button>

        <div class="modal-body-scrollable">
          <!-- Hero Banner Image (preserves original artwork colors) -->
          <div
            class="modal-hero-media"
            :style="{ backgroundColor: project.mediaBg || 'var(--color-pale-sand)' }"
          >
            <img
              :src="project.image"
              :alt="project.alt || project.title"
              class="modal-main-img"
              :class="{ 'is-contain': project.fit === 'contain' }"
            />
            <div class="modal-hero-badge-row">
              <span
                class="badge-cat"
                :style="{ backgroundColor: project.accentColor || 'var(--color-deep-espresso)' }"
              >
                {{ project.category }}
              </span>
              <span v-if="project.isSpeculative" class="badge-spec">
                {{ project.speculativeLabel || 'Speculative Concept' }}
              </span>
            </div>
          </div>

          <!-- Main Content Body -->
          <div class="modal-content-container">
            <!-- Header Info -->
            <div class="modal-header-section">
              <div class="modal-title-row">
                <div>
                  <span
                    class="modal-client-label"
                    :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
                  >
                    {{ project.client }} • {{ project.year }}
                  </span>
                  <h2 class="modal-headline">{{ project.title }}</h2>
                </div>
              </div>
              <p class="modal-tagline">{{ project.tagline }}</p>
            </div>

            <!-- Quick Specs Metadata Strip -->
            <div class="modal-meta-grid">
              <div class="meta-box">
                <span
                  class="meta-box-label"
                  :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
                >
                  Discipline
                </span>
                <span class="meta-box-val">{{ project.category }}</span>
              </div>
              <div class="meta-box">
                <span
                  class="meta-box-label"
                  :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
                >
                  Client / Context
                </span>
                <span class="meta-box-val">{{ project.client }}</span>
              </div>
              <div class="meta-box">
                <span
                  class="meta-box-label"
                  :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
                >
                  Year Completed
                </span>
                <span class="meta-box-val">{{ project.year }}</span>
              </div>
              <div class="meta-box">
                <span
                  class="meta-box-label"
                  :style="{ color: project.accentColor || 'var(--color-signature-dark)' }"
                >
                  Typography System
                </span>
                <span class="meta-box-val">{{ project.typePair }}</span>
              </div>
            </div>

            <!-- Brand-Specific Color Palette System -->
            <div class="modal-palette-section" v-if="project.palette?.length">
              <div class="palette-header-row">
                <h4 class="section-sub-title">Brand Color Palette & Tokens</h4>
                <span class="palette-tagline">Unique brand identity tokens for this project</span>
              </div>
              <p class="section-sub-desc">Click any swatch to copy its hexadecimal code.</p>
              
              <div class="palette-swatches-row">
                <button
                  v-for="color in project.palette"
                  :key="color.hex"
                  class="swatch-btn"
                  @click="copyColor(color.hex)"
                  :title="`Copy ${color.name} (${color.hex})`"
                >
                  <div
                    class="swatch-color"
                    :style="{ backgroundColor: color.hex }"
                  >
                    <Check v-if="copiedHex === color.hex" :size="16" class="swatch-copied-icon" />
                    <Copy v-else :size="13" class="swatch-copy-hint" />
                  </div>
                  <div class="swatch-labels">
                    <span class="swatch-name">{{ color.name }}</span>
                    <span class="swatch-hex">{{ color.hex }}</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Detailed Overview & Rationale -->
            <div class="modal-editorial-body">
              <div class="editorial-col">
                <h4 class="section-sub-title">Project Overview & Rationale</h4>
                <p class="editorial-paragraph">{{ project.overview }}</p>
              </div>

              <div class="editorial-col">
                <h4 class="section-sub-title">Strategic Creative Decisions</h4>
                <ul class="decisions-list">
                  <li v-for="(decision, idx) in project.creativeDecisions" :key="idx">
                    <span
                      class="decision-bullet"
                      :style="{
                        color: project.accentColor || 'var(--color-signature-dark)',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderColor: project.accentColor || 'var(--color-border-subtle)'
                      }"
                    >
                      0{{ idx + 1 }}
                    </span>
                    <span>{{ decision }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Deliverables & Outcomes -->
            <div class="modal-deliverables-section">
              <h4 class="section-sub-title">Deliverables & Applied Scope</h4>
              <div class="deliverables-grid">
                <div
                  v-for="(del, idx) in project.deliverables"
                  :key="idx"
                  class="deliv-item-card"
                >
                  <div
                    class="deliv-icon"
                    :style="{
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      color: project.accentColor || 'var(--color-deep-espresso)'
                    }"
                  >
                    ✓
                  </div>
                  <span>{{ del }}</span>
                </div>
              </div>
            </div>

            <!-- Additional Visual Asset Gallery -->
            <div class="modal-gallery-section" v-if="project.gallery?.length > 1">
              <h4 class="section-sub-title">Visual Asset Gallery & Applications</h4>
              <div class="gallery-grid">
                <div
                  v-for="(imgUrl, idx) in project.gallery"
                  :key="idx"
                  class="gallery-item-wrapper"
                >
                  <img
                    :src="imgUrl"
                    :alt="`${project.title} - view ${idx + 1}`"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Modal Footer Callout -->
            <div class="modal-footer-callout">
              <div class="callout-text">
                <strong>Interested in a similar identity system or poster commission?</strong>
                <span>Let's discuss how we can bring your creative brief to life.</span>
              </div>
              <a
                href="#contact"
                class="btn-primary-editorial"
                @click="goToContact"
              >
                Inquire About This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 18, 16, 0.78);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow: hidden;
}

.modal-dialog {
  position: relative;
  width: 100%;
  max-width: 980px;
  max-height: 90vh;
  background-color: var(--color-warm-ivory);
  border-radius: 20px;
  border: 1px solid var(--color-border-subtle);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Close & Nav Buttons */
.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(8px);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  background-color: var(--modal-accent, var(--color-signature));
  color: #FFFFFF;
  transform: rotate(90deg);
}

.modal-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: var(--color-deep-espresso);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: 1px solid var(--color-border-subtle);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: all var(--transition-fast);
}

.modal-nav-btn:hover {
  background-color: var(--modal-accent, var(--color-signature));
  color: #FFFFFF;
  transform: translateY(-50%) scale(1.08);
}

.prev-btn {
  left: 1.25rem;
}

.next-btn {
  right: 1.25rem;
}

@media (max-width: 768px) {
  .modal-nav-btn {
    display: none;
  }
}

/* Scrollable Container */
.modal-body-scrollable {
  overflow-y: auto;
  max-height: 90vh;
  -webkit-overflow-scrolling: touch;
}

/* Hero Media */
.modal-hero-media {
  position: relative;
  width: 100%;
  height: clamp(280px, 45vh, 480px);
  background-color: var(--color-pale-sand);
  overflow: hidden;
}

.modal-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-main-img.is-contain {
  object-fit: contain;
  padding: 1.5rem;
}

.modal-hero-badge-row {
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

.badge-cat {
  color: #FFFFFF;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.badge-spec {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: var(--color-deep-espresso);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-subtle);
}

/* Modal Content Container */
.modal-content-container {
  padding: clamp(1.75rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Header */
.modal-client-label {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.modal-headline {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: var(--color-deep-espresso);
  line-height: 1.15;
  margin-top: 0.35rem;
  letter-spacing: -0.03em;
}

.modal-tagline {
  font-size: 1.125rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
  margin-top: 0.75rem;
  font-style: italic;
  font-family: var(--font-serif);
}

/* Quick Specs Grid */
.modal-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--color-surface-pure);
  border-radius: 12px;
  border: 1px solid var(--color-border-subtle);
}

.meta-box {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-box-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.meta-box-val {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
}

/* Subheadings */
.section-sub-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
}

.palette-header-row {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
}

.palette-tagline {
  font-size: 0.8125rem;
  color: var(--color-soft-charcoal);
  font-style: italic;
}

.section-sub-desc {
  font-size: 0.8125rem;
  color: var(--color-soft-charcoal);
  margin-bottom: 1.25rem;
}

/* Palette Swatches */
.palette-swatches-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.swatch-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.85rem;
  background-color: var(--color-surface-pure);
  border-radius: 8px;
  border: 1px solid var(--color-border-subtle);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.swatch-btn:hover {
  border-color: var(--modal-accent, var(--color-signature));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.swatch-color {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.swatch-copied-icon {
  color: #FFFFFF;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6));
}

.swatch-copy-hint {
  opacity: 0;
  color: #FFFFFF;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6));
  transition: opacity var(--transition-fast);
}

.swatch-btn:hover .swatch-copy-hint {
  opacity: 0.85;
}

.swatch-labels {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.swatch-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
}

.swatch-hex {
  font-size: 0.72rem;
  color: var(--color-soft-charcoal);
  font-family: monospace;
}

/* Editorial Body */
.modal-editorial-body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .modal-editorial-body {
    grid-template-columns: 1fr 1fr;
  }
}

.editorial-paragraph {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-soft-charcoal);
  margin-top: 0.5rem;
}

.decisions-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 0.5rem;
}

.decisions-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-soft-charcoal);
}

.decision-bullet {
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  border: 1px solid;
  flex-shrink: 0;
}

/* Deliverables Grid */
.deliverables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.deliv-item-card {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-surface-pure);
  border-radius: 8px;
  border: 1px solid var(--color-border-subtle);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
}

.deliv-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 0.75rem;
}

@media (min-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.gallery-item-wrapper {
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background-color: var(--color-pale-sand);
}

.gallery-item-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item-wrapper:hover img {
  transform: scale(1.04);
}

/* Footer Callout */
.modal-footer-callout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem;
  background-color: var(--color-surface-pure);
  border-radius: 12px;
  border: 1px solid var(--color-border-subtle);
  flex-wrap: wrap;
  gap: 1.25rem;
}

.callout-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9375rem;
  color: var(--color-deep-espresso);
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

/* ---------- Responsive: modal on phones ---------- */
@media (max-width: 640px) {
  .modal-backdrop {
    padding: 0.75rem;
    align-items: flex-end;
  }
  .modal-dialog {
    max-height: 94vh;
    border-radius: 16px;
  }
  .modal-hero-media {
    height: clamp(200px, 30vh, 320px);
  }
  .modal-hero-badge-row {
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
    flex-wrap: wrap;
  }
  .modal-footer-callout {
    padding: 1.25rem;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-dialog {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-leave-active .modal-dialog {
  transition: transform 0.2s ease-in;
}

.modal-fade-enter-from .modal-dialog {
  transform: scale(0.95) translateY(20px);
}

.modal-fade-leave-to .modal-dialog {
  transform: scale(0.95) translateY(20px);
}
</style>
