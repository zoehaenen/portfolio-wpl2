<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useBodyScrollLock } from '../../composables/useBodyScrollLock'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  images: { type: Array, default: () => [] },
  currentIndex: { type: Number, default: 0 },
  currentImage: { type: Object, default: null },
  title: { type: String, default: 'foto' },
})

const emit = defineEmits(['close', 'next', 'previous', 'select'])

useBodyScrollLock(() => props.isOpen)

function onKeydown(event) {
  if (!props.isOpen) return
  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowLeft') emit('previous')
  if (event.key === 'ArrowRight') emit('next')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
      @click.self="emit('close')"
    >
      <div class="lightbox-top">
        <div class="lightbox-title">{{ title }}</div>
        <button class="lightbox-close" type="button" aria-label="Sluit" @click="emit('close')">
          ×
        </button>
      </div>

      <div class="lightbox-stage">
        <button class="lightbox-nav" type="button" aria-label="Vorige" @click="emit('previous')">
          ‹
        </button>

        <div class="lightbox-image-wrap">
          <img
            v-if="currentImage"
            class="lightbox-image"
            :src="currentImage.src"
            :alt="currentImage.alt || `Foto ${currentIndex + 1}`"
          />
        </div>

        <button class="lightbox-nav" type="button" aria-label="Volgende" @click="emit('next')">
          ›
        </button>
      </div>

      <div class="lightbox-thumbs" aria-label="Miniaturen">
        <button
          v-for="(image, index) in images"
          :key="image.src"
          class="lightbox-thumb"
          :class="{ 'is-active': index === currentIndex }"
          type="button"
          :aria-label="`Ga naar foto ${index + 1}`"
          @click="emit('select', index)"
        >
          <img :src="image.src" :alt="`Miniatuur ${index + 1}`" loading="lazy" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 9999;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.lightbox-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
}

.lightbox-title {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);
}

.lightbox-close {
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 10px;
}

.lightbox-stage {
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
}

.lightbox-nav {
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 56px;
  width: 56px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 22px;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.06);
}

.lightbox-image-wrap {
  height: min(70vh, 720px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.lightbox-thumbs {
  padding: 14px 16px 22px;
  overflow-x: auto;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.lightbox-thumb {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  width: 80px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.65;
  flex: 0 0 auto;
  outline: none;
}

.lightbox-thumb.is-active {
  opacity: 1;
}

.lightbox-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
