<!-- src/components/MascotPip.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isBlinking = ref(false)
let blinkInterval = null

const startBlinking = () => {
  const triggerBlink = () => {
    isBlinking.value = true
    setTimeout(() => {
      isBlinking.value = false
    }, 180)
    blinkInterval = setTimeout(triggerBlink, 3500 + Math.random() * 3000)
  }
  blinkInterval = setTimeout(triggerBlink, 2000)
}

onMounted(() => {
  startBlinking()
})

onUnmounted(() => {
  if (blinkInterval) clearTimeout(blinkInterval)
})
</script>

<template>
  <div class="mascot-pip" aria-hidden="true">
    <div class="pip-speech-bubble">
      <span>Color & precision!</span>
    </div>

    <svg
      viewBox="0 0 140 140"
      class="pip-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Shadow -->
      <ellipse cx="70" cy="126" rx="38" ry="6" fill="rgba(43, 33, 29, 0.08)" />

      <!-- Floating Body -->
      <g class="pip-floater">
        <!-- Main Egg/Teardrop Body -->
        <path
          d="M70 24 C44 24, 30 50, 30 78 C30 106, 48 116, 70 116 C92 116, 110 106, 110 78 C110 50, 96 24, 70 24 Z"
          fill="#F7F2EA"
          stroke="#2B211D"
          stroke-width="3"
        />

        <!-- Belly Tone (Pale Sand) -->
        <path
          d="M50 82 C50 102, 60 110, 70 110 C80 110, 90 102, 90 82 C90 68, 50 68, 50 82 Z"
          fill="#E8D8C5"
          opacity="0.8"
        />

        <!-- Left Eye -->
        <g transform="translate(56, 62)">
          <circle cx="0" cy="0" r="4.5" fill="#2B211D" v-if="!isBlinking" />
          <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFFDF9" v-if="!isBlinking" />
          <line
            v-if="isBlinking"
            x1="-5"
            y1="0"
            x2="5"
            y2="0"
            stroke="#2B211D"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </g>

        <!-- Right Eye (Winking or Open) -->
        <g transform="translate(84, 62)">
          <circle cx="0" cy="0" r="4.5" fill="#2B211D" v-if="!isBlinking" />
          <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFFDF9" v-if="!isBlinking" />
          <line
            v-if="isBlinking"
            x1="-5"
            y1="0"
            x2="5"
            y2="0"
            stroke="#2B211D"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </g>

        <!-- Cute Smile -->
        <path
          d="M66 74 Q70 79, 74 74"
          stroke="#2B211D"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
        />

        <!-- Cheeks -->
        <ellipse cx="46" cy="68" rx="4.5" ry="3" fill="#D4A373" opacity="0.6" />
        <ellipse cx="94" cy="68" rx="4.5" ry="3" fill="#D4A373" opacity="0.6" />

        <!-- Color Swatch Fan in Right Hand -->
        <g class="swatch-fan" transform="translate(98, 72) rotate(15)">
          <!-- Swatch 1: Terracotta -->
          <rect x="-4" y="-28" width="10" height="24" rx="2" fill="#B7654A" stroke="#2B211D" stroke-width="1.8" transform="rotate(-25)" />
          <!-- Swatch 2: Tan -->
          <rect x="-4" y="-28" width="10" height="24" rx="2" fill="#D4A373" stroke="#2B211D" stroke-width="1.8" transform="rotate(-5)" />
          <!-- Swatch 3: Sage -->
          <rect x="-4" y="-28" width="10" height="24" rx="2" fill="#87947A" stroke="#2B211D" stroke-width="1.8" transform="rotate(15)" />
          <!-- Swatch Pin / Pivot -->
          <circle cx="0" cy="0" r="3" fill="#2B211D" />
        </g>

        <!-- Left Hand waving -->
        <path
          d="M32 78 Q20 72, 22 62"
          stroke="#2B211D"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
        />
        <circle cx="22" cy="61" r="4.5" fill="#E8D8C5" stroke="#2B211D" stroke-width="2" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.mascot-pip {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 110px;
  user-select: none;
  cursor: pointer;
}

.pip-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.pip-floater {
  animation: float-pip 4s ease-in-out infinite;
  transform-origin: center bottom;
  transition: transform var(--transition-normal);
}

.mascot-pip:hover .pip-floater {
  transform: translateY(-8px) scale(1.05);
}

.swatch-fan {
  transform-origin: 0 0;
  animation: sway-swatch 3s ease-in-out infinite alternate;
}

.pip-speech-bubble {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: var(--color-surface-pure);
  color: var(--color-deep-espresso);
  border: 1px solid var(--color-border-medium);
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 12px rgba(43, 33, 29, 0.08);
  z-index: 10;
}

.pip-speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  background-color: var(--color-surface-pure);
  border-right: 1px solid var(--color-border-medium);
  border-bottom: 1px solid var(--color-border-medium);
}

.mascot-pip:hover .pip-speech-bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@keyframes float-pip {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

@keyframes sway-swatch {
  0% {
    transform: translate(98px, 72px) rotate(10deg);
  }
  100% {
    transform: translate(98px, 72px) rotate(24deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pip-floater, .swatch-fan {
    animation: none;
  }
}
</style>
