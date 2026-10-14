<!-- src/components/Navbar.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BerthaWordmark from './BerthaWordmark.vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToSection = (e, href) => {
  e.preventDefault()
  closeMobileMenu()
  const target = document.querySelector(href)
  if (target) {
    const navOffset = 85
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="navbar-root"
    :class="{ 'is-scrolled': isScrolled, 'menu-is-open': mobileMenuOpen }"
  >
    <div class="container nav-container">
      <!-- Signature Wordmark with Script Letter B Brand Icon -->
      <div class="nav-brand">
        <a href="#hero" class="brand-link" @click="scrollToSection($event, '#hero')" title="Bertha — Graphic Design">
          <div class="brand-b-icon" aria-hidden="true">
            <img src="/bertha-b-icon.svg" alt="" class="b-icon-img" />
          </div>
          <BerthaWordmark size="md" :toTop="false" />
        </a>
      </div>

      <!-- Desktop Nav Links -->
      <nav class="nav-links-desktop" aria-label="Main Navigation">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="nav-item"
          @click="scrollToSection($event, link.href)"
        >
          <span>{{ link.name }}</span>
        </a>
      </nav>

      <!-- Right Side Actions & Availability Indicator -->
      <div class="nav-actions-desktop">
        <!-- Live Availability Pill -->
        <a
          href="#contact"
          class="availability-pill"
          @click="scrollToSection($event, '#contact')"
          title="Bertha is accepting new commissions for 2026"
        >
          <span class="status-dot">
            <span class="status-pulse"></span>
          </span>
          <span class="status-text">Available for projects</span>
        </a>

        <!-- Quick Inquiry Button -->
        <a
          href="#contact"
          class="nav-cta-btn"
          @click="scrollToSection($event, '#contact')"
        >
          <span>Let's Talk</span>
          <ArrowUpRight :size="15" />
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        class="mobile-toggle-btn"
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle mobile navigation menu"
      >
        <Menu v-if="!mobileMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-drawer" @click.self="closeMobileMenu">
        <div class="mobile-drawer-content">
          <div class="mobile-drawer-header">
            <div class="mobile-brand-row">
              <div class="brand-b-icon mobile-b-icon" aria-hidden="true">
                <img src="/bertha-b-icon.svg" alt="" class="b-icon-img" />
              </div>
              <BerthaWordmark size="sm" :toTop="false" />
            </div>
            <span class="mobile-status-tag">● Accepting Select Projects</span>
          </div>

          <nav class="mobile-nav-list" aria-label="Mobile Navigation">
            <a
              v-for="(link, idx) in navLinks"
              :key="link.name"
              :href="link.href"
              class="mobile-nav-link"
              :style="{ transitionDelay: `${idx * 40}ms` }"
              @click="scrollToSection($event, link.href)"
            >
              <span class="link-number">0{{ idx + 1 }}</span>
              <span class="link-label">{{ link.name }}</span>
              <ArrowUpRight :size="20" class="link-arrow" />
            </a>
          </nav>

          <div class="mobile-drawer-footer">
            <a
              href="#contact"
              class="btn-primary-editorial mobile-contact-btn"
              @click="scrollToSection($event, '#contact')"
            >
              Start a Conversation
            </a>
            <div class="mobile-contact-meta">
              <span>hello@berthadesign.studio</span>
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar-root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: background-color var(--transition-normal),
              backdrop-filter var(--transition-normal),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
  border-bottom: 1px solid transparent;
}

.navbar-root.is-scrolled {
  background-color: var(--color-surface-translucent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--color-border-subtle);
  box-shadow: 0 4px 20px rgba(43, 33, 29, 0.04);
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.brand-link:hover {
  transform: translateY(-1px);
}

.brand-b-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(43, 33, 29, 0.12);
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.brand-link:hover .brand-b-icon {
  transform: scale(1.06);
}

.b-icon-img {
  width: 100%;
  height: 100%;
  display: block;
}

.mobile-brand-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.mobile-b-icon {
  width: 30px;
  height: 30px;
}

/* Desktop Links */
.nav-links-desktop {
  display: none;
  align-items: center;
  gap: 2.25rem;
}

@media (min-width: 900px) {
  .nav-links-desktop {
    display: flex;
  }
}

.nav-item {
  font-family: var(--font-display);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
  position: relative;
  padding: 0.4rem 0;
  letter-spacing: -0.01em;
  transition: color var(--transition-fast);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: var(--color-signature);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-normal);
}

.nav-item:hover {
  color: var(--color-signature-dark);
}

.nav-item:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Actions Desktop */
.nav-actions-desktop {
  display: none;
  align-items: center;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .nav-actions-desktop {
    display: flex;
  }
}

/* Availability Pill */
.availability-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.95rem;
  background-color: rgba(135, 148, 122, 0.12);
  border: 1px solid rgba(135, 148, 122, 0.28);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
  transition: all var(--transition-fast);
}

.availability-pill:hover {
  background-color: rgba(135, 148, 122, 0.2);
  border-color: var(--color-sage-green);
  transform: translateY(-1px);
}

.status-dot {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-sage-green);
}

.status-pulse {
  position: absolute;
  top: -3px;
  left: -3px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: var(--color-sage-green);
  opacity: 0.75;
  animation: pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  70%, 100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

.nav-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.2rem;
  background-color: var(--color-deep-espresso);
  color: var(--color-warm-ivory);
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 999px;
  transition: all var(--transition-fast);
}

.nav-cta-btn:hover {
  background-color: var(--color-signature-dark);
  color: #FFFFFF;
  transform: translateY(-1px);
}

/* Mobile Toggle */
.mobile-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--color-deep-espresso);
  background-color: rgba(43, 33, 29, 0.05);
  border: 1px solid var(--color-border-subtle);
  transition: all var(--transition-fast);
}

@media (min-width: 900px) {
  .mobile-toggle-btn {
    display: none;
  }
}

.mobile-toggle-btn:hover {
  background-color: var(--color-pale-sand);
  color: var(--color-deep-espresso);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(43, 33, 29, 0.6);
  backdrop-filter: blur(8px);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}

.mobile-drawer-content {
  width: 86vw;
  max-width: 400px;
  height: 100%;
  background-color: var(--color-warm-ivory);
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -10px 0 30px rgba(43, 33, 29, 0.15);
  overflow-y: auto;
}

.mobile-drawer-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border-subtle);
}

.mobile-status-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-sage-green);
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(43, 33, 29, 0.06);
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.link-number {
  font-size: 0.85rem;
  color: var(--color-signature);
  font-family: monospace;
}

.link-label {
  flex: 1;
  margin-left: 1rem;
}

.mobile-nav-link:hover {
  color: var(--color-signature-dark);
  transform: translateX(4px);
}

.mobile-drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-subtle);
}

.mobile-contact-btn {
  width: 100%;
  text-align: center;
}

.mobile-contact-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8125rem;
  color: var(--color-soft-charcoal);
  text-align: center;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active .mobile-drawer-content {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-leave-active .mobile-drawer-content {
  transition: transform 0.25s ease-in;
}

.mobile-menu-enter-from .mobile-drawer-content {
  transform: translateX(100%);
}

.mobile-menu-leave-to .mobile-drawer-content {
  transform: translateX(100%);
}

/* ---------- Responsive: compact brand lockup on very small phones ---------- */
@media (max-width: 400px) {
  .brand-link {
    gap: 0.5rem;
  }
  .brand-b-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
