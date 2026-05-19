<script setup>
defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true },
})

const emit = defineEmits(['open'])
</script>

<template>
  <section class="photo-section" :aria-label="`${title} galerij`">
    <h3 class="photo-section-title">{{ title }}</h3>

    <div class="photo-grid">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        class="photo-thumb"
        type="button"
        @click="emit('open', { images, index, title })"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.photo-section {
  margin-top: 48px;
}

.photo-section-title {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 14px;
  color: rgba(0, 0, 0, 0.75);
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.photo-thumb {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: block;
  overflow: hidden;
  border-radius: 8px;
  outline: none;
}

.photo-thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transform: scale(1);
  transition:
    transform 0.22s ease,
    opacity 0.22s ease;
  opacity: 0.96;
}

.photo-thumb:hover img {
  transform: scale(1.02);
  opacity: 1;
}

@media (max-width: 900px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
