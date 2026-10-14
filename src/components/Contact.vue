<!-- src/components/Contact.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MascotSparky from './MascotSparky.vue'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  service: 'Brand Identity Design',
  budget: '$5,000 – $10,000',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const showCelebration = ref(false)

const serviceOptions = [
  'Brand Identity Design',
  'Poster Design & Silkscreen',
  'Packaging & Visual Applications',
  'Creative Art Direction',
  'Comprehensive Visual System'
]

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  '$20,000+'
]

const validate = () => {
  const errs = {}
  if (!form.value.name.trim()) {
    errs.name = 'Please provide your name.'
  }
  if (!form.value.email.trim()) {
    errs.email = 'Please provide your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errs.email = 'Please provide a valid email address.'
  }
  if (!form.value.message.trim()) {
    errs.message = 'Please share a brief note about your project.'
  }
  errors.value = errs
  return Object.keys(errs).length === 0
}

const handleSubmit = () => {
  if (!validate()) return

  isSubmitting.value = true
  showCelebration.value = true

  // Simulate local submission handling & construct clean mailto link
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true

    const subject = encodeURIComponent(`Project Inquiry: ${form.value.service} - ${form.value.name}`)
    const body = encodeURIComponent(
      `Hello Bertha,\n\n` +
      `My name is ${form.value.name} (${form.value.email}).\n` +
      `Service Requested: ${form.value.service}\n` +
      `Estimated Budget: ${form.value.budget}\n\n` +
      `Project Brief:\n${form.value.message}\n\n` +
      `Looking forward to collaborating!`
    )

    // Trigger local email client
    const mailtoLink = `mailto:hello@berthadesign.studio?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }, 600)
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    service: 'Brand Identity Design',
    budget: '$5,000 – $10,000',
    message: ''
  }
  isSubmitted.value = false
  showCelebration.value = false
  errors.value = {}
}

const handleServiceSelectEvent = (e) => {
  if (e.detail) {
    form.value.service = e.detail
  }
}

onMounted(() => {
  window.addEventListener('select-service', handleServiceSelectEvent)
})

onUnmounted(() => {
  window.removeEventListener('select-service', handleServiceSelectEvent)
})
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

          <!-- Creative Channels / Social Links -->
          <div class="social-channels-box">
            <span class="social-label">Creative Profiles & Archives</span>
            <div class="social-pills-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-pill"
              >
                <span>Instagram</span>
                <ArrowUpRight :size="14" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                class="social-pill"
              >
                <span>Behance</span>
                <ArrowUpRight :size="14" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-pill"
              >
                <span>Pinterest</span>
                <ArrowUpRight :size="14" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-pill"
              >
                <span>LinkedIn</span>
                <ArrowUpRight :size="14" />
              </a>
            </div>
          </div>

          <!-- Mascot Sparky Positioned Beside the Narrative -->
          <div class="mascot-contact-wrapper">
            <MascotSparky :celebrating="showCelebration" />
          </div>
        </div>

        <!-- Right Column: Interactive Inquiry Form -->
        <div class="contact-form-col">
          <div class="form-card">
            <!-- Form Card Header -->
            <div class="form-card-header">
              <h3 class="form-card-title">Project Inquiry Brief</h3>
              <p class="form-card-subtitle">Fill in the essentials and I’ll be in touch within 24–48 hours.</p>
            </div>

            <!-- Success State -->
            <div v-if="isSubmitted" class="form-success-banner">
              <div class="success-icon-wrap">
                <CheckCircle2 :size="32" />
              </div>
              <h4>Thank you, {{ form.name }}!</h4>
              <p>
                Your inquiry draft has been prepared and opened in your email client. If your client didn't open automatically, write to <a href="mailto:hello@berthadesign.studio">hello@berthadesign.studio</a>.
              </p>
              <button class="btn-secondary-editorial" @click="resetForm">
                Send Another Message
              </button>
            </div>

            <!-- Main Form -->
            <form v-else @submit.prevent="handleSubmit" novalidate class="inquiry-form">
              <!-- Name & Email -->
              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': errors.name }">
                  <label for="name" class="form-label">Your Name <span class="req">*</span></label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="e.g. Cameron Diaz"
                  />
                  <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                </div>

                <div class="form-group" :class="{ 'has-error': errors.email }">
                  <label for="email" class="form-label">Email Address <span class="req">*</span></label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    placeholder="e.g. cameron@studio.co"
                  />
                  <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                </div>
              </div>

              <!-- Service Type -->
              <div class="form-group">
                <label for="service" class="form-label">Project Discipline</label>
                <select id="service" v-model="form.service" class="form-select">
                  <option v-for="opt in serviceOptions" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
              </div>

              <!-- Budget Range -->
              <div class="form-group">
                <label for="budget" class="form-label">Estimated Budget Range</label>
                <select id="budget" v-model="form.budget" class="form-select">
                  <option v-for="b in budgetOptions" :key="b" :value="b">
                    {{ b }}
                  </option>
                </select>
              </div>

              <!-- Message Brief -->
              <div class="form-group" :class="{ 'has-error': errors.message }">
                <label for="message" class="form-label">Project Brief & Details <span class="req">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="form-textarea"
                  placeholder="Tell me about your brand, timeline, and what success looks like for this project..."
                ></textarea>
                <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn-primary-editorial submit-btn"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Inquiry Brief</span>
                <span v-else>Preparing Draft...</span>
                <Send :size="16" />
              </button>

              <p class="form-privacy-note">
                🔒 Privacy guaranteed. Your details are used strictly for project correspondence.
              </p>
            </form>
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
  gap: 4rem;
  align-items: start;
}

@media (min-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
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
}

.direct-link:hover {
  color: var(--color-signature-dark);
}

.direct-val {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  font-weight: 500;
}

/* Social Channels */
.social-channels-box {
  margin-bottom: 2rem;
}

.social-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-signature-dark);
  display: block;
  margin-bottom: 0.85rem;
}

.social-pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-surface-pure);
  color: var(--color-deep-espresso);
  border: 1px solid var(--color-border-subtle);
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.84rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.social-pill:hover {
  border-color: var(--color-signature);
  background-color: rgba(212, 163, 115, 0.1);
  color: var(--color-signature-dark);
  transform: translateY(-2px);
}

.mascot-contact-wrapper {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

/* Right Column: Form Card */
.form-card {
  background-color: var(--color-surface-pure);
  border: 1px solid var(--color-border-subtle);
  border-radius: 20px;
  padding: clamp(1.75rem, 3.5vw, 2.75rem);
  box-shadow: 0 16px 40px rgba(43, 33, 29, 0.06);
}

.form-card-header {
  margin-bottom: 1.75rem;
}

.form-card-title {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  margin-bottom: 0.35rem;
}

.form-card-subtitle {
  font-size: 0.875rem;
  color: var(--color-soft-charcoal);
  line-height: 1.5;
}

/* Form Styles */
.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-label {
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  letter-spacing: 0.02em;
}

.req {
  color: var(--color-muted-terracotta);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: var(--color-warm-ivory);
  border: 1px solid var(--color-border-subtle);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--color-deep-espresso);
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  background-color: #FFFFFF;
  border-color: var(--color-signature);
  box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.2);
}

.form-group.has-error .form-input,
.form-group.has-error .form-textarea {
  border-color: var(--color-muted-terracotta);
  background-color: rgba(183, 101, 74, 0.04);
}

.error-msg {
  font-size: 0.75rem;
  color: var(--color-muted-terracotta);
  font-weight: 600;
}

.submit-btn {
  width: 100%;
  padding: 1.1rem;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.form-privacy-note {
  font-size: 0.75rem;
  color: var(--color-soft-charcoal);
  text-align: center;
  opacity: 0.85;
}

/* Success Banner */
.form-success-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 2.5rem 1.5rem;
}

.success-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(135, 148, 122, 0.2);
  color: var(--color-sage-green);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-success-banner h4 {
  font-size: 1.5rem;
  color: var(--color-deep-espresso);
}

.form-success-banner p {
  font-size: 0.9375rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
  max-width: 400px;
}

.form-success-banner a {
  color: var(--color-signature-dark);
  font-weight: 600;
  text-decoration: underline;
}
</style>
