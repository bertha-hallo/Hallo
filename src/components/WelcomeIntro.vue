<!-- src/components/WelcomeIntro.vue — two-state intro overlay.
  FIRST arrival:  "Welcome to my canvas" (~2s, then blur/fade out).
  ALL revisits:   static "Bertha" wordmark (~1.2s, then blur/fade out).
  Opaque full-screen overlay; homepage is hidden until the exit finishes. -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BerthaWordmark from './BerthaWordmark.vue'

const emit = defineEmits(['done'])

const STORAGE_KEY = 'bertha-welcomed-v1'
const mode = ref('welcome') // 'welcome' | 'bertha'
const visible = ref(false)
const leaving = ref(false)
let hideTimer = null
let removeTimer = null
let prevOverflow = ''

const storageGet = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? window.sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}
const storageSet = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* storage unavailable — intro simply plays its welcome state */
    }
  }
}

const finish = () => {
  if (!visible.value) return
  visible.value = false
  leaving.value = false
  document.body.style.overflow = prevOverflow
  document.body.classList.remove('intro-playing')
  emit('done')
}

const dismiss = () => {
  if (!visible.value || leaving.value) return
  leaving.value = true
  removeTimer = window.setTimeout(finish, 600)
}

onMounted(() => {
  let seen = null
  try {
    seen = storageGet()
  } catch {
    seen = null
  }
  mode.value = seen ? 'bertha' : 'welcome'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  visible.value = true
  prevOverflow = document.body.style.overflow
  document.body.classList.add('intro-playing')
  if (reduced) {
    storageSet()
    hideTimer = window.setTimeout(dismiss, 350)
    return
  }
  document.body.style.overflow = 'hidden'
  storageSet()
  // First arrival ~2s (reveal + hold + exit); revisits ~1.4s
  hideTimer = window.setTimeout(dismiss, mode.value === 'welcome' ? 2000 : 1400)
})

onUnmounted(() => {
  if (hideTimer) clearTimeout(hideTimer)
  if (removeTimer) clearTimeout(removeTimer)
  document.body.style.overflow = prevOverflow
  document.body.classList.remove('intro-playing')
})
</script>

<template>
  <div
    v-if="visible"
    class="welcome-overlay"
    :class="[{ 'is-leaving': leaving }, `mode-${mode}`]"
    role="status"
    aria-live="polite"
    :aria-label="mode === 'welcome' ? 'Welcome to my canvas' : 'Bertha'"
  >
    <div v-if="mode === 'welcome'" class="welcome-inner">
      <h1 class="welcome-title" aria-label="Welcome to my canvas">
        <span class="w-line"><span class="w-word">Welcome</span></span>
        <span class="w-line w-line-2"><span class="w-word">to my <em>canvas</em></span></span>
      </h1>
      <span class="welcome-rule" aria-hidden="true"></span>
    </div>
    <div v-else class="welcome-inner welcome-bertha">
      <BerthaWordmark size="xl" :to-top="false" :interactive="false" />
    </div>
  </div>
</template>

<style scoped>
.welcome-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
  overflow: hidden;
  background-color: #f7f2ea;
  background-color: var(--color-warm-ivory);
  background-image: radial-gradient(circle at 50% 42%, rgba(212, 163, 115, 0.16) 0%, rgba(247, 242, 234, 0) 62%);
  transition: opacity 0.6s ease, filter 0.6s ease, visibility 0.6s;
}
.welcome-overlay.is-leaving {
  opacity: 0;
  filter: blur(14px);
  visibility: hidden;
  pointer-events: none;
}
.welcome-inner {
  text-align: center;
  max-width: min(92vw, 640px);
  margin-inline: auto;
}
.welcome-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2rem, 8vw, 4.5rem);
  line-height: 1.12;
  letter-spacing: -0.015em;
  color: var(--color-deep-espresso);
  text-wrap: balance;
}
.welcome-title em {
  font-style: italic;
  color: #d4a373;
  color: var(--color-signature);
}
.w-line {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
.w-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(110%);
  filter: blur(6px);
  animation: w-word-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.w-line-2 .w-word {
  animation-delay: 0.22s;
}
.welcome-rule {
  display: block;
  width: 0;
  height: 2px;
  margin: 1.4rem auto 0;
  border-radius: 2px;
  background: #d4a373;
  background: var(--color-signature);
  animation: w-rule 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
}
.welcome-bertha {
  animation: w-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.welcome-bertha :deep(.bertha-wordmark) {
  font-size: clamp(3rem, 14vw, 6rem);
  white-space: nowrap;
}
@keyframes w-word-in {
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
@keyframes w-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes w-rule {
  to {
    width: min(220px, 50vw);
  }
}
@media (prefers-reduced-motion: reduce) {
  .w-word,
  .welcome-rule,
  .welcome-bertha {
    animation-duration: 0.01ms !important;
    animation-delay: 0ms !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
  .welcome-rule {
    width: min(220px, 50vw);
  }
  .welcome-overlay,
  .welcome-overlay.is-leaving {
    transition-duration: 0.01ms !important;
    filter: none !important;
  }
}
</style>

