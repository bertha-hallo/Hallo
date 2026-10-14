<!-- src/components/Contact.vue -->
<script setup>
import MascotSparky from './MascotSparky.vue'
import { Mail, MapPin } from 'lucide-vue-next'
</script>

<template>
  <section class="contact-section section-padding" id="contact">
    <div class="container">
      <div class="contact-grid">
        <!-- Left Column: Narrative, Direct Inquiries & Socials -->
        <div class="contact-info-col">
          <div class="section-eyebrow">Start a Project</div>
          <h2 class="section-heading-editorial">
            Have an idea? <br />
            <span class="italic-accent">Let's make it unforgettable.</span>
          </h2>
          <p class="section-lead-editorial">
            I partner with visionaries, founders, and cultural institutions who value distinctive typography and thoughtful visual identities.
          </p>

          <!-- Direct Studio Inquiries -->
          <div class="studio-direct-box">
            <div class="direct-item">
              <div class="direct-icon">
                <Mail :size="20" />
              </div>
              <div class="direct-text">
                <span class="direct-label">Direct Studio Email</span>
                <a href="mailto:hello@berthadesign.studio" class="direct-link">
                  hello@berthadesign.studio
                </a>
              </div>
            </div>

            <div class="direct-item">
              <div class="direct-icon">
                <MapPin :size="20" />
              </div>
              <div class="direct-text">
                <span class="direct-label">Studio Location</span>
                <span class="direct-val">Independent Studio • Working Globally</span>
              </div>
            </div>
          </div>

          <!-- Mascot Sparky Beside the Narrative -->
          <div class="mascot-contact-wrapper">
            <MascotSparky />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  background-color: var(--color-warm-ivory);
  border-top: 1px solid var(--color-border-subtle);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
  max-width: 760px;
}

@media (min-width: 992px) {
  .contact-grid {
    gap: 3rem;
  }
}

/* Left Column */
.contact-info-col {
  display: flex;
  flex-direction: column;
}

.studio-direct-box {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 2.25rem 0;
  padding: 1.5rem;
  background-color: var(--color-surface-pure);
  border-radius: 14px;
  border: 1px solid var(--color-border-subtle);
}

.direct-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.direct-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: var(--color-warm-ivory);
  color: var(--color-signature-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border-subtle);
}

.direct-text {
  display: flex;
  flex-direction: column;
}

.direct-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-signature-dark);
}

.direct-link {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  transition: color var(--transition-fast);
  overflow-wrap: anywhere;
  word-break: break-word;
}

.direct-link:hover {
  color: var(--color-signature-dark);
}

.direct-val {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  font-weight: 500;
}

.mascot-contact-wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

/* ---------- Responsive: breathing room on phones ---------- */
@media (max-width: 640px) {
  .contact-grid {
    gap: 2rem;
  }
  .studio-direct-box {
    padding: 1.15rem;
    margin: 1.5rem 0;
  }
  .direct-link {
    font-size: 0.95rem;
  }
}
</style>
