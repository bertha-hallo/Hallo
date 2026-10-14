<!-- src/components/Footer.vue -->
<script setup>
import BerthaWordmark from './BerthaWordmark.vue'
import { ArrowUp, Mail, MapPin } from 'lucide-vue-next'

const navLinks = [
  { name: 'Selected Work', href: '#work' },
  { name: 'About Bertha', href: '#about' },
  { name: 'Contact & Inquiries', href: '#contact' },
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const navOffset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="footer-root">
    <div class="container footer-container">
      <!-- Main Footer Grid: Clean & Balanced 3-Column Studio Layout -->
      <div class="footer-main-row">
        <!-- Brand Signature, Monogram Icon & Mission -->
        <div class="footer-brand-col">
          <div class="footer-brand-header">
            <div class="footer-b-icon" aria-hidden="true">
              <img src="/bertha-b-icon.svg" alt="" class="b-icon-img" />
            </div>
            <BerthaWordmark size="lg" :interactive="true" />
          </div>

          <p class="footer-mission">
            Building identities that leave a mark. Independent graphic design studio specializing in comprehensive brand identity systems, silkscreen posters, and visual storytelling.
          </p>

          <div class="footer-availability">
            <span class="status-indicator"></span>
            <span>Available for select commissions globally</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav-col">
          <span class="footer-heading">Navigation</span>
          <ul class="footer-links-list">
            <li v-for="link in navLinks" :key="link.name">
              <a
                :href="link.href"
                class="footer-link"
                @click.prevent="scrollTo(link.href)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Studio Contact & Social Channels -->
        <div class="footer-contact-col">
          <span class="footer-heading">Direct Inquiries</span>
          <div class="footer-contact-details">
            <a href="mailto:hello@berthadesign.studio" class="footer-email-link">
              <Mail :size="16" class="contact-icon" />
              <span>hello@berthadesign.studio</span>
            </a>
            <div class="footer-location">
              <MapPin :size="16" class="contact-icon" />
              <span>Independent Studio • Available Worldwide</span>
            </div>
          </div>

          <div class="footer-social-wrap">
            <span class="contact-note">For commissions and collaborations, reach out directly by email.</span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar: Copyright & Back-to-Top -->
      <div class="footer-bottom-bar">
        <div class="bottom-copy">
          <span>© 2026 Bertha Graphic Design Studio. All rights reserved.</span>
          <span class="sep">•</span>
          <span>Crafted with typography, negative space, and intention.</span>
        </div>

        <button
          class="back-to-top-btn"
          @click="scrollToTop"
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp :size="15" />
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-root {
  background-color: var(--color-deep-espresso);
  color: var(--color-warm-ivory);
  padding-top: 5.5rem;
  padding-bottom: 2.75rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border-subtle);
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.footer-main-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
}

@media (min-width: 768px) {
  .footer-main-row {
    grid-template-columns: 1.4fr 0.8fr 1.2fr;
    gap: 3.5rem;
  }
}

/* Brand Column */
.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-brand-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.footer-b-icon {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.b-icon-img {
  width: 100%;
  height: 100%;
  display: block;
}

.footer-mission {
  font-size: 0.9375rem;
  color: var(--color-pale-sand);
  line-height: 1.7;
  max-width: 400px;
  opacity: 0.85;
}

.footer-availability {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8125rem;
  color: var(--color-signature);
  font-weight: 600;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-sage-green);
  box-shadow: 0 0 0 3px rgba(135, 148, 122, 0.3);
}

/* Headings */
.footer-heading {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-signature);
  margin-bottom: 1.25rem;
  display: block;
}

.footer-sub-heading {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-signature);
  margin-bottom: 0.65rem;
  display: block;
  opacity: 0.8;
}

.contact-note {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--color-pale-sand);
  opacity: 0.75;
  display: block;
  max-width: 280px;
}

/* Links List */
.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  font-size: 0.9375rem;
  color: var(--color-pale-sand);
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: inline-block;
}

.footer-link:hover {
  color: var(--color-signature);
  transform: translateX(4px);
}

/* Contact Details Column */
.footer-contact-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-email-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-warm-ivory);
  transition: color var(--transition-fast);
}

.footer-email-link:hover {
  color: var(--color-signature);
}

.footer-location {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.8125rem;
  color: var(--color-pale-sand);
  opacity: 0.75;
}

.contact-icon {
  color: var(--color-signature);
  flex-shrink: 0;
}

.footer-social-wrap {
  display: flex;
  flex-direction: column;
}

/* Bottom Bar */
.footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
  gap: 1.25rem;
}

.bottom-copy {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8125rem;
  color: var(--color-pale-sand);
  opacity: 0.7;
  flex-wrap: wrap;
}

.sep {
  color: var(--color-signature);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.06);
  color: var(--color-warm-ivory);
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-fast);
}

.back-to-top-btn:hover {
  background-color: var(--color-signature);
  color: var(--color-deep-espresso);
  border-color: var(--color-signature);
  transform: translateY(-2px);
}
</style>
