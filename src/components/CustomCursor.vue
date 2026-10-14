<!-- src/components/CustomCursor.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isHovering = ref(false)
const cursorX = ref(-100)
const cursorY = ref(-100)
const followerX = ref(-100)
const followerY = ref(-100)

let rafId = null

const onPointerMove = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  isVisible.value = true

  // Check if target is interactive
  const target = e.target
  if (target) {
    const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .project-card, .mascot-peeker, .mascot-pip, .mascot-sparky')
    isHovering.value = !!isInteractive
  }
}

const onPointerLeave = () => {
  isVisible.value = false
}

const render = () => {
  // Smooth lerp follower
  followerX.value += (cursorX.value - followerX.value) * 0.18
  followerY.value += (cursorY.value - followerY.value) * 0.18
  rafId = requestAnimationFrame(render)
}

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerleave', onPointerLeave)
    rafId = requestAnimationFrame(render)
  }
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerleave', onPointerLeave)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    v-if="isVisible"
    class="custom-cursor-layer"
    aria-hidden="true"
  >
    <!-- Sharp center dot -->
    <div
      class="cursor-dot"
      :style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
      :class="{ 'is-active': isHovering }"
    ></div>

    <!-- Smooth trailing ring -->
    <div
      class="cursor-follower"
      :style="{ transform: `translate3d(${followerX}px, ${followerY}px, 0)` }"
      :class="{ 'is-hovering': isHovering }"
    ></div>
  </div>
</template>

<style scoped>
.custom-cursor-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99999;
}

.cursor-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
  border-radius: 50%;
  background-color: var(--color-deep-espresso);
  transition: transform 0.05s linear, background-color var(--transition-fast);
}

.cursor-dot.is-active {
  background-color: var(--color-signature);
  transform: scale(1.5);
}

.cursor-follower {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  margin-left: -16px;
  border-radius: 50%;
  border: 1.5px solid var(--color-signature);
  background-color: rgba(212, 163, 115, 0.08);
  transition: width var(--transition-fast),
              height var(--transition-fast),
              margin var(--transition-fast),
              background-color var(--transition-fast),
              border-color var(--transition-fast);
}

.cursor-follower.is-hovering {
  width: 54px;
  height: 54px;
  margin-top: -27px;
  margin-left: -27px;
  background-color: rgba(212, 163, 115, 0.18);
  border-color: var(--color-signature-dark);
}

@media (pointer: coarse) or (prefers-reduced-motion: reduce) {
  .custom-cursor-layer {
    display: none;
  }
}
</style>
