<!-- src/component/MyPort.vue -->
<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import MasonryGallery from '../components/MasonryGallery.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import CreativeProcess from '../components/CreativeProcess.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import CustomCursor from '../components/CustomCursor.vue'
</script>

<template>
  <div class="portfolio-app-root">
    <!-- Subtle tactile paper grain overlay -->
    <div class="grain-overlay" aria-hidden="true"></div>

    <!-- Desktop Smooth Custom Cursor -->
    <CustomCursor />

    <!-- Sticky Navigation with scroll blur & live availability pill -->
    <Navbar />

    <!-- Main Content Flow -->
    <main id="main-content">
      <!-- Hero Section with Matura/Mistral Wordmark & MascotPeeker -->
      <Hero />

      <!-- Selected Work: True Responsive Masonry Gallery with Aspect Ratios -->
      <MasonryGallery />

      <!-- Editorial About Section with Bertha's Portrait & Principles -->
      <About />

      <!-- Services & Capabilities with Inquire Actions -->
      <Services />

      <!-- Creative Process: 4-Step Methodology -->
      <CreativeProcess />

      <!-- Contact & Inquiry Form with MascotSparky Celebration -->
      <Contact />
    </main>

    <!-- Studio Footer with Type Specs & Back to Top -->
    <Footer />
  </div>
</template>

<style scoped>
.portfolio-app-root {
  min-height: 100vh;
  position: relative;
  background-color: var(--color-warm-ivory);
  color: var(--color-deep-espresso);
}

main {
  position: relative;
  z-index: 1;
}
</style>
