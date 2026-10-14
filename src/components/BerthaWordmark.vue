<!-- src/components/BerthaWordmark.vue -->
<script setup>
defineProps({
  size: {
    type: String,
    default: 'md', // 'sm', 'md', 'lg', 'xl', 'hero'
  },
  toTop: {
    type: Boolean,
    default: true,
  },
  interactive: {
    type: Boolean,
    default: true,
  }
})

const scrollToTop = (e) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <component
    :is="toTop ? 'a' : 'div'"
    :href="toTop ? '#' : undefined"
    class="bertha-wordmark"
    :class="[`size-${size}`, { 'is-interactive': interactive }]"
    @click="toTop ? scrollToTop($event) : null"
    aria-label="Bertha — Graphic Design Portfolio"
  >
    <!-- Matura MT Script Capitals for uppercase B -->
    <span class="letter-b" aria-hidden="true">B</span>
    <!-- Mistral for lowercase ertha -->
    <span class="letters-ertha" aria-hidden="true">ertha</span>
    <span class="sr-only">Bertha</span>
  </component>
</template>

<style scoped>
.bertha-wordmark {
  display: inline-flex;
  align-items: baseline;
  text-decoration: none;
  line-height: 0.9;
  user-select: none;
  white-space: nowrap;
  position: relative;
  transition: transform var(--transition-normal), opacity var(--transition-fast);
}

.bertha-wordmark.is-interactive:hover {
  transform: scale(1.02);
}

/* Capital B using Matura MT Script Capitals */
.letter-b {
  font-family: var(--font-matura);
  font-weight: 400;
  color: var(--color-signature); /* Exact #D4A373 */
  display: inline-block;
  letter-spacing: -0.02em;
  transform: translateY(-0.02em);
  transition: color var(--transition-fast);
}

/* Lowercase ertha using Mistral */
.letters-ertha {
  font-family: var(--font-mistral);
  font-weight: 400;
  color: var(--color-signature); /* Exact #D4A373 */
  display: inline-block;
  margin-left: -0.07em; /* Organic script flow from B loop into e */
  letter-spacing: -0.015em;
  transition: color var(--transition-fast);
}

/* Scale Variants */
.size-sm {
  font-size: clamp(1.4rem, 2vw, 1.8rem);
}

.size-md {
  font-size: clamp(1.85rem, 2.5vw, 2.4rem);
}

.size-lg {
  font-size: clamp(2.5rem, 4vw, 3.8rem);
}

.size-xl {
  font-size: clamp(3.5rem, 6vw, 5.5rem);
}

.size-hero {
  font-size: clamp(4.5rem, 11vw, 9.5rem);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
