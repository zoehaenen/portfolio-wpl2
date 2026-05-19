<script setup>
defineProps({
  allow: {
    type: String,
    default: 'autoplay; fullscreen; picture-in-picture',
  },
  src: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="animation-video">
    <iframe
      :src="src"
      :title="title"
      :allow="allow"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<style scoped>
.animation-video {
  width: 100%;
  max-width: 960px;
  aspect-ratio: 16 / 9;
  background: #eee;
  overflow: hidden;
  margin-bottom: 16px;
}

.animation-video iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 900px) {
  .animation-video {
    max-width: 100%;
  }
}
</style>
