<!-- src/component/MyPort.vue -->
<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import MasonryGallery from '../components/MasonryGallery.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import WelcomeIntro from '../components/WelcomeIntro.vue'
import CustomCursor from '../components/CustomCursor.vue'

const introActive = ref(true)
</script>

<template>
  <div class="portfolio-app-root" :class="{ 'is-intro': introActive }">
    <!-- Two-state intro overlay (welcome → bertha); homepage hidden until done -->
    <WelcomeIntro @done="introActive = false" />

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

      <!-- Editorial About Section with Bertha's Portrait -->
      <About />

      <!-- Contact & Direct Inquiries with MascotSparky -->
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

/* While the intro overlay plays, keep the homepage hidden so no
   navbar / hero / gallery bleeds through the welcome screen.
   Scoped fallback (body class is set by the intro as a non-scoped backup). */
.portfolio-app-root.is-intro main,
.portfolio-app-root.is-intro .navbar-root,
.portfolio-app-root.is-intro .footer-root {
  visibility: hidden;
}
</style>
