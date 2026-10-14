<!-- src/components/About.vue -->
<script setup>
import { Compass, PenTool, Sparkles, Feather, Layers, BookOpen } from 'lucide-vue-next'

const principles = [
  {
    num: '01',
    title: 'Strategy before decoration',
    description: 'Every typographic choice, color pairing, and layout grid is anchored in narrative purpose. Beauty without strategic foundation is fleeting; intentional design commands attention.'
  },
  {
    num: '02',
    title: 'Personality in every detail',
    description: 'Memorable identities refuse to disappear into corporate neutrality. I infuse every identity with deliberate human idiosyncrasies, custom ligatures, and tactile finishes that invite touch.'
  },
  {
    num: '03',
    title: 'Beautiful design with a purpose',
    description: 'Merging the discipline of Swiss modernism with expressive warmth. The goal is never novelty for its own sake, but creating timeless artifacts that resonate across print and digital screens.'
  }
]

const disciplines = [
  'Brand Identity Systems',
  'Screenprint & Poster Design',
  'Typography & Type Pairing',
  'Art Direction & Styling',
  'Tactile Packaging & Finishes',
  'Editorial Book Design',
  'Visual Narrative & Guidelines'
]
</script>

<template>
  <section class="about-section section-padding" id="about">
    <div class="container">
      <div class="about-editorial-grid">
        <!-- Left Column: Artistic Portrait & Studio Artifact -->
        <div class="portrait-column">
          <div class="portrait-frame">
            <!-- Background Offset Block -->
            <div class="portrait-offset-accent" aria-hidden="true"></div>

            <div class="portrait-image-wrapper">
              <img
                src="/bertha-portrait.png"
                alt="Bertha, graphic designer and visual identity strategist"
                class="portrait-img"
                loading="lazy"
              />
              <div class="portrait-caption-tag">
                <span class="tag-name">Bertha</span>
                <span class="tag-role">Graphic Designer & Creative Director</span>
              </div>
            </div>

            <!-- Authentic Studio Quote Tag -->
            <div class="portrait-quote-box">
              <span class="quote-mark">“</span>
              <p class="quote-text">
                Typography is the architecture of thought made visible.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Narrative, Principles & Toolkit -->
        <div class="content-column">
          <div class="section-eyebrow">About the Studio</div>
          <h2 class="section-heading-editorial">
            Design with intention. <br />
            <span class="italic-accent">Create with feeling.</span>
          </h2>

          <div class="about-editorial-copy">
            <p class="lead-text">
              I’m Bertha, an independent designer dedicated to visual storytelling, distinctive brand identities, bold poster compositions, and the tactile poetry of physical print.
            </p>

            <p>
              I believe graphic design is at its most potent when it honors both head and heart: the rigorous discipline of Swiss grids paired with the warmth of tactile paper stocks, rich earth-toned palettes, and expressive letterforms. Whether designing an identity for an artisanal roastery or composing a silkscreen music poster, my focus remains constant—creating work that endures beyond fleeting digital cycles.
            </p>

            <!-- Editable Studio Note clearly marked -->
            <div class="editable-bio-note">
              <span class="note-pill">Studio Note</span>
              <span>
                Based in my private creative studio, collaborating with brands and cultural institutions worldwide. Open for select 2026 commissions.
              </span>
            </div>
          </div>

          <!-- Creative Principles: Editorial Layout -->
          <div class="principles-block">
            <h3 class="principles-heading">Core Creative Principles</h3>

            <div class="principles-list">
              <div
                v-for="item in principles"
                :key="item.num"
                class="principle-item"
              >
                <div class="principle-num">{{ item.num }}</div>
                <div class="principle-content">
                  <h4 class="principle-title">{{ item.title }}</h4>
                  <p class="principle-desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Disciplines & Toolkit Pills -->
          <div class="disciplines-block">
            <h4 class="disciplines-label">Areas of Specialization</h4>
            <div class="disciplines-pills">
              <span
                v-for="item in disciplines"
                :key="item"
                class="discipline-pill"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  background-color: var(--color-warm-ivory);
  overflow: hidden;
}

.about-editorial-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: start;
}

@media (min-width: 992px) {
  .about-editorial-grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 5.5rem;
  }
}

/* Portrait Column */
.portrait-column {
  position: relative;
  display: flex;
  justify-content: center;
}

.portrait-frame {
  position: relative;
  width: 100%;
  max-width: 440px;
}

.portrait-offset-accent {
  position: absolute;
  top: 24px;
  left: -20px;
  width: 100%;
  height: 100%;
  background-color: var(--color-pale-sand);
  border-radius: 16px;
  z-index: 0;
  border: 1px solid var(--color-border-subtle);
}

.portrait-image-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 14px;
  overflow: hidden;
  background-color: var(--color-pale-sand);
  box-shadow: 0 20px 50px rgba(43, 33, 29, 0.1);
  border: 1px solid var(--color-border-subtle);
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portrait-frame:hover .portrait-img {
  transform: scale(1.03);
}

.portrait-caption-tag {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  background-color: rgba(43, 33, 29, 0.88);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.tag-name {
  font-family: var(--font-display);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-warm-ivory);
}

.tag-role {
  font-size: 0.72rem;
  color: var(--color-signature);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Quote Box */
.portrait-quote-box {
  position: absolute;
  bottom: -30px;
  right: -20px;
  z-index: 2;
  background-color: var(--color-surface-pure);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  max-width: 280px;
  box-shadow: 0 12px 30px rgba(43, 33, 29, 0.12);
  border: 1px solid var(--color-border-subtle);
}

@media (max-width: 600px) {
  .portrait-quote-box {
    position: static;
    margin-top: 1.5rem;
    max-width: 100%;
  }
}

.quote-mark {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 0.8;
  color: var(--color-signature);
  display: block;
}

.quote-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9375rem;
  color: var(--color-deep-espresso);
  line-height: 1.45;
  margin-top: 0.25rem;
}

/* Content Column */
.content-column {
  display: flex;
  flex-direction: column;
}

.about-editorial-copy {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.75rem;
}

.lead-text {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-deep-espresso);
  line-height: 1.7;
}

.about-editorial-copy p {
  font-size: 1rem;
  color: var(--color-soft-charcoal);
  line-height: 1.75;
}

.editable-bio-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.15rem;
  background-color: var(--color-surface-pure);
  border-radius: 8px;
  border-left: 3px solid var(--color-signature);
  font-size: 0.84rem;
  color: var(--color-soft-charcoal);
  line-height: 1.5;
}

.note-pill {
  font-family: var(--font-display);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-signature-dark);
  background-color: rgba(212, 163, 115, 0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

/* Principles Block */
.principles-block {
  margin-bottom: 2.75rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-subtle);
}

.principles-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
  margin-bottom: 1.5rem;
}

.principles-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.principle-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.principle-num {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-signature);
  background-color: rgba(212, 163, 115, 0.12);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.principle-content {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.principle-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-deep-espresso);
}

.principle-desc {
  font-size: 0.9rem;
  color: var(--color-soft-charcoal);
  line-height: 1.6;
}

/* Disciplines Block */
.disciplines-block {
  padding-top: 1.75rem;
  border-top: 1px solid var(--color-border-subtle);
}

.disciplines-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-signature-dark);
  margin-bottom: 0.85rem;
}

.disciplines-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.discipline-pill {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-deep-espresso);
  background-color: var(--color-surface-pure);
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-subtle);
  transition: all var(--transition-fast);
}

.discipline-pill:hover {
  border-color: var(--color-signature);
  background-color: rgba(212, 163, 115, 0.1);
  transform: translateY(-1px);
}
</style>
