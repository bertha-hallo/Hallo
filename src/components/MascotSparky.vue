<!-- src/components/MascotSparky.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  celebrating: {
    type: Boolean,
    default: false
  }
})

const isBlinking = ref(false)
let blinkInterval = null

const startBlinking = () => {
  const triggerBlink = () => {
    isBlinking.value = true
    setTimeout(() => {
      isBlinking.value = false
    }, 180)
    blinkInterval = setTimeout(triggerBlink, 3000 + Math.random() * 3000)
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
  <div class="mascot-sparky" :class="{ 'is-celebrating': celebrating }" aria-hidden="true">
    <div class="sparky-speech-bubble">
      <span v-if="celebrating">Woohoo! Talk soon! ✨</span>
      <span v-else>Let's make something iconic! ✦</span>
    </div>

    <svg
      viewBox="0 0 150 150"
      class="sparky-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Shadow -->
      <ellipse cx="75" cy="135" rx="42" ry="7" fill="rgba(43, 33, 29, 0.08)" />

      <!-- Celebratory Sparkles -->
      <g class="sparkles" v-if="celebrating">
        <path d="M25 45 Q28 40, 30 35 Q32 40, 35 45 Q30 47, 25 45 Z" fill="#D4A373" />
        <path d="M115 35 Q118 30, 120 25 Q122 30, 125 35 Q120 37, 115 35 Z" fill="#B7654A" />
        <circle cx="128" cy="55" r="3" fill="#87947A" />
        <circle cx="20" cy="65" r="2.5" fill="#D4A373" />
      </g>

      <!-- Mascot Character Body -->
      <g class="sparky-body-group">
        <!-- Main Bean Body in Warm Ivory / Pale Sand -->
        <path
          d="M45 125 C30 115, 30 70, 52 48 C74 26, 95 38, 105 60 C115 82, 110 115, 95 125 C82 132, 58 132, 45 125 Z"
          fill="#E8D8C5"
          stroke="#2B211D"
          stroke-width="3"
        />

        <!-- Little Scarf / Bandana in Signature Tan -->
        <path
          d="M50 78 C65 84, 85 84, 98 76 C94 88, 80 94, 62 92 C54 90, 51 84, 50 78 Z"
          fill="#D4A373"
          stroke="#2B211D"
          stroke-width="2"
        />
        <!-- Scarf knot -->
        <circle cx="76" cy="90" r="4" fill="#B7654A" stroke="#2B211D" stroke-width="1.8" />

        <!-- Cheeks -->
        <circle cx="56" cy="66" r="5" fill="#D4A373" opacity="0.6" />
        <circle cx="92" cy="66" r="5" fill="#D4A373" opacity="0.6" />

        <!-- Left Eye (Wink when celebrating) -->
        <g transform="translate(62, 58)">
          <template v-if="celebrating">
            <!-- Winking curved line -->
            <path d="M-6 0 Q0 -5, 6 0" stroke="#2B211D" stroke-width="2.5" stroke-linecap="round" fill="none" />
          </template>
          <template v-else>
            <circle cx="0" cy="0" r="4.5" fill="#2B211D" v-if="!isBlinking" />
            <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFFDF9" v-if="!isBlinking" />
            <line v-if="isBlinking" x1="-5" y1="0" x2="5" y2="0" stroke="#2B211D" stroke-width="2.5" stroke-linecap="round" />
          </template>
        </g>

        <!-- Right Eye -->
        <g transform="translate(86, 58)">
          <circle cx="0" cy="0" r="4.5" fill="#2B211D" v-if="!isBlinking" />
          <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFFDF9" v-if="!isBlinking" />
          <line v-if="isBlinking" x1="-5" y1="0" x2="5" y2="0" stroke="#2B211D" stroke-width="2.5" stroke-linecap="round" />
        </g>

        <!-- Big Joyful Smile -->
        <path
          d="M68 70 Q75 79, 82 70"
          stroke="#2B211D"
          stroke-width="2.5"
          stroke-linecap="round"
          fill="none"
        />

        <!-- Paper Airplane or Spark in Right Hand -->
        <g class="sparky-hand-right" transform="translate(104, 82)">
          <!-- Origami Paper Plane -->
          <polygon
            points="0,-12 26,-24 16,-6 10,-2"
            fill="#FFFDF9"
            stroke="#2B211D"
            stroke-width="1.8"
          />
          <polygon
            points="10,-2 26,-24 14,-10"
            fill="#F7F2EA"
            stroke="#2B211D"
            stroke-width="1.5"
          />
          <!-- Hand Paw -->
          <circle cx="2" cy="-4" r="5" fill="#D4A373" stroke="#2B211D" stroke-width="2" />
        </g>

        <!-- Left Arm Resting / Waving -->
        <path
          d="M38 88 C32 94, 30 102, 38 108"
          stroke="#2B211D"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
        />
        <circle cx="38" cy="108" r="4.5" fill="#D4A373" stroke="#2B211D" stroke-width="2" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.mascot-sparky {
  position: relative;
  display: inline-block;
  width: 130px;
  height: 130px;
  user-select: none;
  cursor: pointer;
}

.sparky-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.sparky-body-group {
  animation: float-sparky 4s ease-in-out infinite;
  transform-origin: 75px 125px;
  transition: transform var(--transition-normal);
}

.mascot-sparky:hover .sparky-body-group {
  transform: translateY(-6px) rotate(-3deg);
}

.mascot-sparky.is-celebrating .sparky-body-group {
  animation: celebrate-jump 0.8s ease-in-out infinite alternate;
}

.sparky-hand-right {
  animation: wave-airplane 3s ease-in-out infinite alternate;
  transform-origin: 2px -4px;
}

.sparky-speech-bubble {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: var(--color-surface-pure);
  color: var(--color-deep-espresso);
  border: 1px solid var(--color-border-medium);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 12px rgba(43, 33, 29, 0.08);
  z-index: 10;
}

.sparky-speech-bubble::after {
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

.mascot-sparky:hover .sparky-speech-bubble,
.mascot-sparky.is-celebrating .sparky-speech-bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@keyframes float-sparky {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px) rotate(1.5deg);
  }
}

@keyframes celebrate-jump {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-16px) scale(1.06) rotate(3deg);
  }
}

@keyframes wave-airplane {
  0% {
    transform: translate(104px, 82px) rotate(0deg);
  }
  100% {
    transform: translate(104px, 82px) rotate(-14deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sparky-body-group, .sparky-hand-right {
    animation: none;
  }
}
</style>
