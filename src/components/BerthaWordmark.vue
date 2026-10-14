<!-- src/components/BerthaWordmark.vue -->
<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
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
  },
  // Elegant hero typing reveal — opt-in so nav/footer wordmarks stay static
  typing: {
    type: Boolean,
    default: false,
  },
  typingSpeed: {
    type: Number,
    default: 170, // ms per character — calm, calligraphic pace
  },
  typingDelay: {
    type: Number,
    default: 350, // ms before first stroke, lets hero settle
  },
})

const FULL = 'Bertha'
const visibleCount = ref(FULL.length)
const typingDone = ref(true)
let timers = []

const showTyping = computed(() => props.typing && !reducedMotion())
const reducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

const shownB = computed(() => (showTyping.value ? (visibleCount.value >= 1 ? 'B' : '') : 'B'))
const shownErtha = computed(() =>
  showTyping.value ? FULL.slice(1, Math.max(1, visibleCount.value)) : 'ertha',
)
const erthaHidden = computed(() => showTyping.value && visibleCount.value < 1)

const scrollToTop = (e) => {
  if (e) e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  if (!props.typing || reducedMotion()) return
  visibleCount.value = 0
  typingDone.value = false
  let t = window.setTimeout(function tick() {
    visibleCount.value += 1
    if (visibleCount.value < FULL.length) {
      timers.push(window.setTimeout(tick, props.typingSpeed + Math.random() * 70))
    } else {
      // Let the final flourish linger, then rest the caret
      timers.push(
        window.setTimeout(() => {
          typingDone.value = true
        }, 1400),
      )
    }
  }, props.typingDelay)
  timers.push(t)
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
  timers = []
})
</script>

<template>
  <component
    :is="toTop ? 'a' : 'div'"
    :href="toTop ? '#hero' : undefined"
    class="bertha-wordmark"
    :class="[`size-${size}`, { 'is-interactive': interactive, 'is-typing': showTyping }]"
    @click="toTop ? scrollToTop($event) : null"
    aria-label="Bertha — Graphic Design Portfolio"
  >
    <!-- Invisible full word reserves final width → zero layout shift while typing -->
    <span v-if="showTyping" class="type-ghost" aria-hidden="true"><span class="letter-b">B</span><span class="letters-ertha">ertha</span></span>
    <span v-if="showTyping" class="type-live" aria-hidden="true"><span class="letter-b">{{ shownB }}</span><span class="letters-ertha" :class="{ 'is-empty': erthaHidden }">{{ shownErtha }}</span><span class="type-caret" :class="{ 'is-done': typingDone }"></span></span>
    <template v-else>
      <!-- Matura MT Script Capitals for uppercase B -->
      <span class="letter-b" aria-hidden="true">B</span>
      <!-- Mistral for lowercase ertha -->
      <span class="letters-ertha" aria-hidden="true">ertha</span>
    </template>
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

/* Typing overlay: ghost holds layout, live text paints over it */
.type-ghost {
  display: inline-flex;
  align-items: baseline;
  visibility: hidden;
}
.type-ghost .letter-b,
.type-ghost .letters-ertha {
  visibility: hidden;
}
.type-live {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
}
.letters-ertha.is-empty {
  margin-left: 0;
}
/* Slim calligraphic caret — rests after the flourish */
.type-caret {
  display: inline-block;
  width: 0.045em;
  height: 0.82em;
  margin-left: 0.08em;
  align-self: center;
  border-radius: 2px;
  background-color: var(--color-signature);
  animation: caret-blink 0.9s ease-in-out infinite;
  transition: opacity 0.6s ease;
}
.type-caret.is-done {
  opacity: 0;
  animation: none;
}
@keyframes caret-blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.15;
  }
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

@media (prefers-reduced-motion: reduce) {
  .type-caret {
    animation: none;
    display: none;
  }
}
</style>


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
