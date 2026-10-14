<!-- src/components/MascotPeeker.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const eyeOffsetX = ref(0)
const eyeOffsetY = ref(0)
const isBlinking = ref(false)
const containerRef = ref(null)

let blinkInterval = null

const handlePointerMove = (e) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const mascotCenterX = rect.left + rect.width / 2
  const mascotCenterY = rect.top + rect.height / 2

  const dx = e.clientX - mascotCenterX
  const dy = e.clientY - mascotCenterY
  const angle = Math.atan2(dy, dx)
  const distance = Math.min(Math.hypot(dx, dy), 350)
  const maxPupilShift = 4.5

  const intensity = distance / 350
  eyeOffsetX.value = Math.cos(angle) * maxPupilShift * intensity
  eyeOffsetY.value = Math.sin(angle) * maxPupilShift * intensity
}

const startBlinking = () => {
  const triggerBlink = () => {
    isBlinking.value = true
    setTimeout(() => {
      isBlinking.value = false
    }, 180)
    const nextBlink = 3000 + Math.random() * 4000
    blinkInterval = setTimeout(triggerBlink, nextBlink)
  }
  blinkInterval = setTimeout(triggerBlink, 2500)
}

onMounted(() => {
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  startBlinking()
})

onUnmounted(() => {
  window.removeEventListener('pointermove', handlePointerMove)
  if (blinkInterval) clearTimeout(blinkInterval)
})
</script>

<template>
  <div ref="containerRef" class="mascot-peeker" aria-hidden="true">
    <div class="peeker-speech-bubble">
      <span>Psst... hover over the work!</span>
    </div>
    
    <svg
      viewBox="0 0 160 130"
      class="peeker-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Subtle Shadow -->
      <ellipse cx="80" cy="115" rx="55" ry="8" fill="rgba(43, 33, 29, 0.08)" />

      <!-- Mascot Body / Head (Soft Sand Pebble) -->
      <path
        d="M32 118 C28 65, 45 28, 80 28 C115 28, 132 65, 128 118 Z"
        fill="#E8D8C5"
        stroke="#2B211D"
        stroke-width="3"
        stroke-linejoin="round"
      />

      <!-- Studio Beret / Cap in Muted Terracotta -->
      <path
        d="M48 38 C52 14, 108 14, 112 38 C95 44, 65 44, 48 38 Z"
        fill="#B7654A"
        stroke="#2B211D"
        stroke-width="2.5"
      />
      <!-- Beret Stem -->
      <path
        d="M80 18 C80 10, 83 9, 85 9"
        stroke="#2B211D"
        stroke-width="2.5"
        stroke-linecap="round"
      />

      <!-- Cheeks (Warm Tan Blush) -->
      <circle cx="50" cy="80" r="7" fill="#D4A373" opacity="0.45" />
      <circle cx="110" cy="80" r="7" fill="#D4A373" opacity="0.45" />

      <!-- Left Eye Group -->
      <g transform="translate(60, 68)">
        <!-- Eye Sclera (Ivory) -->
        <circle cx="0" cy="0" r="9" fill="#FFFDF9" stroke="#2B211D" stroke-width="2" />
        <!-- Pupil (Espresso) with Dynamic Offset -->
        <circle
          v-if="!isBlinking"
          :cx="eyeOffsetX"
          :cy="eyeOffsetY"
          r="4.2"
          fill="#2B211D"
        />
        <!-- Pupil Catchlight -->
        <circle
          v-if="!isBlinking"
          :cx="eyeOffsetX - 1.2"
          :cy="eyeOffsetY - 1.2"
          r="1.4"
          fill="#FFFDF9"
        />
        <!-- Blink Line -->
        <line
          v-if="isBlinking"
          x1="-7"
          y1="0"
          x2="7"
          y2="0"
          stroke="#2B211D"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </g>

      <!-- Right Eye Group -->
      <g transform="translate(100, 68)">
        <!-- Eye Sclera -->
        <circle cx="0" cy="0" r="9" fill="#FFFDF9" stroke="#2B211D" stroke-width="2" />
        <!-- Pupil with Dynamic Offset -->
        <circle
          v-if="!isBlinking"
          :cx="eyeOffsetX"
          :cy="eyeOffsetY"
          r="4.2"
          fill="#2B211D"
        />
        <!-- Catchlight -->
        <circle
          v-if="!isBlinking"
          :cx="eyeOffsetX - 1.2"
          :cy="eyeOffsetY - 1.2"
          r="1.4"
          fill="#FFFDF9"
        />
        <!-- Blink Line -->
        <line
          v-if="isBlinking"
          x1="-7"
          y1="0"
          x2="7"
          y2="0"
          stroke="#2B211D"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </g>

      <!-- Content Smile -->
      <path
        d="M74 86 Q80 92, 86 86"
        stroke="#2B211D"
        stroke-width="2.2"
        stroke-linecap="round"
        fill="none"
      />

      <!-- Paws Gripping the Edge -->
      <!-- Left Paw -->
      <path
        d="M38 116 C38 108, 48 108, 48 116 C48 122, 38 122, 38 116 Z"
        fill="#D4A373"
        stroke="#2B211D"
        stroke-width="2"
      />
      <!-- Right Paw -->
      <path
        d="M112 116 C112 108, 122 108, 122 116 C122 122, 112 122, 112 116 Z"
        fill="#D4A373"
        stroke="#2B211D"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style scoped>
.mascot-peeker {
  position: relative;
  display: inline-block;
  width: 140px;
  height: 115px;
  animation: gentle-bob 4.5s ease-in-out infinite;
  user-select: none;
  pointer-events: auto;
  cursor: pointer;
}

.peeker-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 6px 12px rgba(43, 33, 29, 0.08));
  transition: transform var(--transition-normal);
}

.mascot-peeker:hover .peeker-svg {
  transform: translateY(-6px) rotate(-2deg);
}

.peeker-speech-bubble {
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: var(--color-surface-pure);
  color: var(--color-deep-espresso);
  border: 1px solid var(--color-border-medium);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 12px rgba(43, 33, 29, 0.08);
  z-index: 10;
}

.peeker-speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 7px;
  height: 7px;
  background-color: var(--color-surface-pure);
  border-right: 1px solid var(--color-border-medium);
  border-bottom: 1px solid var(--color-border-medium);
}

.mascot-peeker:hover .peeker-speech-bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@keyframes gentle-bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .mascot-peeker {
    animation: none;
  }
}
</style>
