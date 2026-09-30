<!-- src/component/MyPort.vue -->
<script setup>
import { ref, onMounted } from 'vue'

// Loader State
const isLoading = ref(true)
const loaderText = ref('Hello')
const isBlurring = ref(false)

// Page 2 Marquee State Management
const isHovered = ref(false)
const isMerged = ref(false)
let hoverTimer = null

const handleMouseEnter = () => {
  isHovered.value = true
  if (!isMerged.value) {
    hoverTimer = setTimeout(() => {
      isMerged.value = true
    }, 5000)
  }
}

const handleMouseLeave = () => {
  isHovered.value = false
  if (!isMerged.value && hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
}

onMounted(() => {
  setTimeout(() => {
    isBlurring.value = true
  }, 1200)

  setTimeout(() => {
    loaderText.value = 'Welcome'
    isBlurring.value = false
  }, 1800)

  setTimeout(() => {
    isLoading.value = false
  }, 3200)
})

// Section 1 Images
const heroGallery = ref([
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    alt: 'Design Work 1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    alt: 'Design Work 2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    alt: 'Design Work 3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    alt: 'Design Work 4',
  },
])

// Page 2 Portfolio Data
const projects = ref([
  {
    id: 1,
    slug: 'echo-coffee',
    title: 'Brand Identity: Echo Coffee',
    category: 'Branding & Packaging',
    description:
      'Developed a complete visual system for an artisanal roastery, including custom logo design, warm earthy color palettes, sustainable packaging materials, and digital brand guidelines.',
    tags: ['Logo Design', 'Illustrator', 'Branding', 'Packaging'],
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    slug: 'geode-series',
    title: 'Geode Vector Art Series',
    category: 'Illustration & Print',
    description:
      'A decorative series of layered mineral vector illustrations designed for modern interior print collections, combining geometric precision with organic earth textures.',
    tags: ['Vector Art', 'Print Design', 'Geode', 'Fine Art'],
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    slug: 'localnoms',
    title: 'UX/UI Redesign: localNoms',
    category: 'Product Design',
    description:
      'End-to-end design system and mobile UI experience created for a community-driven food discovery platform, prioritizing seamless accessibility and rich visual menus.',
    tags: ['Figma', 'Prototyping', 'UI/UX', 'Design System'],
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    slug: 'vogue-editorial',
    title: 'Editorial Layout: VOGUE Feature',
    category: 'Print & Layout',
    description:
      'Multi-page print publication spread designed around sustainable high-fashion aesthetics, utilizing bespoke typography pairings and generous negative space.',
    tags: ['InDesign', 'Typography', 'Layout', 'Editorial'],
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
  },
])

// Modal & Selection State for Clickable Project Display
const selectedProject = ref(null)

const openProjectDetails = (project) => {
  selectedProject.value = project
}

const closeProjectDetails = () => {
  selectedProject.value = null
}
</script>

<template>
  <div>
    <!-- Loader Overlay -->
    <Transition name="fade">
      <div v-if="isLoading" class="loader-overlay">
        <h1 class="loader-text" :class="{ 'blur-out': isBlurring }">
          {{ loaderText }}
        </h1>
      </div>
    </Transition>

    <div class="portfolio-wrapper">
      <!-- ================= PAGE 1 ================= -->
      <section class="page-container page-1-hero">
        <div class="converging-stage">
          <div
            v-for="(img, idx) in heroGallery"
            :key="img.id"
            class="converge-card"
            :class="`pos-${idx + 1}`"
          >
            <img :src="img.src" :alt="img.alt" />
          </div>

          <div class="center-brand-name">
            <h1 class="bertha-typography">
              <span class="font-matura-unbold">B</span
              ><span class="font-mistral-unbold">ertha</span>
            </h1>
            <p class="subtitle-graphic-designer">Graphic designer</p>
          </div>
        </div>
      </section>

      <!-- ================= PAGE 2 ================= -->
      <section id="portfolio-section" class="page-container page-2-portfolio">
        <!-- Background SVG Art -->
        <svg
          class="mineral-art mineral-1"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="100,10 160,50 140,130 60,150 20,80" fill="#D4A373" opacity="0.35" />
          <polygon points="100,10 160,50 110,85 60,40" fill="#CCD5AE" opacity="0.45" />
          <polygon points="160,50 140,130 110,85" fill="#E9EDC9" opacity="0.6" />
          <polygon points="140,130 60,150 110,85" fill="#B07D4F" opacity="0.4" />
          <polygon points="60,150 20,80 110,85" fill="#FAEDCD" opacity="0.5" />
          <polygon points="20,80 100,10 60,40 110,85" fill="#FEFAE0" opacity="0.5" />
        </svg>

        <!-- Frameless Flexbox Gallery Projects Section -->
        <main id="projects" class="projects-gallery-section">
          <div class="projects-flex-container">
            <div
              v-for="project in projects"
              :key="project.id"
              class="project-frame-card"
              @click="openProjectDetails(project)"
            >
              <div class="project-frame-inner">
                <img :src="project.image" :alt="project.title" loading="lazy" />
                <div class="project-overlay">
                  <span class="overlay-category">{{ project.category }}</span>
                  <h3 class="overlay-title">{{ project.title }}</h3>
                  <span class="click-hint">Click for details →</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Interactive Project Details Modal -->
        <Transition name="fade">
          <div
            v-if="selectedProject"
            class="project-modal-backdrop"
            @click.self="closeProjectDetails"
          >
            <div class="project-modal-card">
              <button class="close-modal-btn" @click="closeProjectDetails">&times;</button>
              <div class="modal-image-wrapper">
                <img :src="selectedProject.image" :alt="selectedProject.title" />
              </div>
              <div class="modal-content">
                <span class="modal-category">{{ selectedProject.category }}</span>
                <h2 class="modal-title">{{ selectedProject.title }}</h2>
                <p class="modal-description">{{ selectedProject.description }}</p>
                <div class="modal-tags">
                  <span v-for="tag in selectedProject.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Interactive Marquee Section -->
        <section
          class="marquee-wrapper-section"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div v-if="!isMerged" class="multi-column-marquee">
            <!-- Column 1 -->
            <div class="marquee-vertical-box">
              <div class="marquee-track-down" :class="{ 'is-running': isHovered }">
                <div class="marquee-content-vertical">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
                <div class="marquee-content-vertical" aria-hidden="true">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
              </div>
            </div>

            <!-- Column 2 -->
            <div class="marquee-vertical-box">
              <div class="marquee-track-up" :class="{ 'is-running': isHovered }">
                <div class="marquee-content-vertical">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
                <div class="marquee-content-vertical" aria-hidden="true">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
              </div>
            </div>

            <!-- Column 3 -->
            <div class="marquee-vertical-box">
              <div class="marquee-track-down" :class="{ 'is-running': isHovered }">
                <div class="marquee-content-vertical">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
                <div class="marquee-content-vertical" aria-hidden="true">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
              </div>
            </div>

            <!-- Column 4 -->
            <div class="marquee-vertical-box">
              <div class="marquee-track-up" :class="{ 'is-running': isHovered }">
                <div class="marquee-content-vertical">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
                <div class="marquee-content-vertical" aria-hidden="true">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
              </div>
            </div>

            <!-- Column 5 -->
            <div class="marquee-vertical-box">
              <div class="marquee-track-down" :class="{ 'is-running': isHovered }">
                <div class="marquee-content-vertical">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
                <div class="marquee-content-vertical" aria-hidden="true">
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                  <span class="marquee-item"
                    ><span class="font-matura">B</span><span class="font-mistral">ertha</span></span
                  >
                </div>
              </div>
            </div>
          </div>

          <div v-else class="merged-text-container">
            <h1 class="big-merged-text">
              <span class="font-matura-large">B</span><span class="font-mistral-large">ertha</span>
            </h1>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import './portfolio.css';
</style>
