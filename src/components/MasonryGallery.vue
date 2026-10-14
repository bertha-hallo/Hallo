<!-- src/components/MasonryGallery.vue -->
<script setup>
import { ref, computed } from 'vue'
import { categories, projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import MascotPip from './MascotPip.vue'
import { Filter, Layers } from 'lucide-vue-next'

const activeCategory = ref('All')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

const openProject = (project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}

const switchProject = (project) => {
  selectedProject.value = project
}
</script>

<template>
  <section class="gallery-section section-padding" id="work">
    <div class="container">
      <!-- Section Header -->
      <div class="gallery-header-row">
        <div>
          <div class="section-eyebrow">Selected Works • 2024–2026</div>
          <h2 class="section-heading-editorial">
            Crafted with intention, <br />
            <span class="italic-accent">composed for longevity.</span>
          </h2>
          <p class="section-lead-editorial">
            A curated collection of brand identity systems, silkscreen posters, packaging architectures, and typographic experiments.
          </p>
        </div>

        <!-- Floating Mascot Pip by the Gallery Filter -->
        <div class="gallery-mascot-container">
          <MascotPip />
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="filter-bar">
        <div class="filter-pills-scrollable">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-pill"
            :class="{ 'is-active': activeCategory === cat }"
            @click="activeCategory = cat"
            :aria-pressed="activeCategory === cat"
          >
            <span>{{ cat }}</span>
            <span class="filter-count">
              {{ cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length }}
            </span>
          </button>
        </div>
      </div>

      <!-- True Responsive CSS Columns Masonry Gallery -->
      <div class="masonry-columns-container">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @select="openProject"
        />
      </div>

      <!-- Empty State if filter yields zero -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <Layers :size="36" class="empty-icon" />
        <p>No projects currently match this filter.</p>
        <button class="btn-secondary-editorial" @click="activeCategory = 'All'">
          View All Projects
        </button>
      </div>

      <!-- Bottom Gallery Note -->
      <div class="gallery-footer-note">
        <span class="note-pill">Editorial Disclosure</span>
        <p>
          Concept and speculative exploration projects are explicitly identified to celebrate experimental creative freedom alongside client deliverables.
        </p>
      </div>
    </div>

    <!-- Project Modal Component -->
    <ProjectModal
      :project="selectedProject"
      :all-projects="filteredProjects"
      @close="closeProject"
      @navigate="switchProject"
    />
  </section>
</template>

<style scoped>
.gallery-section {
  position: relative;
  background-color: var(--color-warm-ivory);
}

.gallery-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.75rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.gallery-mascot-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .gallery-mascot-container {
    display: none;
  }
}

/* Filter Bar */
.filter-bar {
  margin-bottom: 3rem;
  position: sticky;
  top: var(--nav-height);
  z-index: 100;
  padding: 0.75rem 0;
  background: linear-gradient(
    to bottom,
    rgba(247, 242, 234, 0.95) 0%,
    rgba(247, 242, 234, 0.85) 80%,
    transparent 100%
  );
  backdrop-filter: blur(8px);
}

.filter-pills-scrollable {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.filter-pills-scrollable::-webkit-scrollbar {
  display: none;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 1.15rem;
  background-color: var(--color-surface-pure);
  color: var(--color-soft-charcoal);
  border: 1px solid var(--color-border-subtle);
  border-radius: 9999px;
  font-family: var(--font-display);
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.filter-pill:hover {
  border-color: var(--color-signature);
  color: var(--color-deep-espresso);
  transform: translateY(-1px);
}

.filter-pill.is-active {
  background-color: var(--color-deep-espresso);
  color: var(--color-warm-ivory);
  border-color: var(--color-deep-espresso);
  box-shadow: 0 4px 14px rgba(43, 33, 29, 0.15);
}

.filter-count {
  font-size: 0.72rem;
  font-family: monospace;
  opacity: 0.8;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  background-color: rgba(212, 163, 115, 0.2);
  color: inherit;
}

.filter-pill.is-active .filter-count {
  background-color: var(--color-signature);
  color: var(--color-deep-espresso);
  font-weight: 700;
}

/* True CSS Columns Masonry Gallery Layout */
.masonry-columns-container {
  column-count: 1;
  column-gap: 2rem;
  width: 100%;
}

@media (min-width: 640px) {
  .masonry-columns-container {
    column-count: 2;
    column-gap: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .masonry-columns-container {
    column-count: 3;
    column-gap: 2.25rem;
  }
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 5rem 2rem;
  text-align: center;
  color: var(--color-soft-charcoal);
}

.empty-icon {
  color: var(--color-signature);
}

/* Gallery Footer Note */
.gallery-footer-note {
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  background-color: var(--color-surface-pure);
  border-radius: 12px;
  border: 1px solid var(--color-border-subtle);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.note-pill {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-signature-dark);
  background-color: rgba(212, 163, 115, 0.15);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
}

.gallery-footer-note p {
  font-size: 0.875rem;
  color: var(--color-soft-charcoal);
  margin: 0;
  line-height: 1.6;
}

/* ---------- Responsive: keep masonry fluid on phones/tablets ---------- */
@media (max-width: 639px) {
  .masonry-columns-container {
    column-gap: 1.25rem;
  }
  .filter-bar {
    top: 64px;
    margin-bottom: 2rem;
  }
  .gallery-footer-note {
    padding: 1.25rem;
    gap: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .filter-pill:hover {
    transform: none;
  }
}
</style>
