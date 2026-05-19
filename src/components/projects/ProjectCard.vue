<script setup>
defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['open'])
</script>

<template>
  <article
    class="project project-card"
    role="button"
    tabindex="0"
    @click="emit('open', project.key)"
    @keydown.enter="emit('open', project.key)"
    @keydown.space.prevent="emit('open', project.key)"
  >
    <div class="project-thumbnail">
      <img class="project-img" :src="project.image" :alt="project.alt" loading="lazy" />
    </div>
    <div class="project-omschrijving-container">
      <h2 class="project-titel">{{ project.title }}</h2>
      <p class="project-omschrijving">{{ project.summary }}</p>
    </div>
  </article>
</template>

<style scoped>
.project {
  scroll-margin-top: calc(var(--header-h) + 24px);
  margin-bottom: 100px;
}

.project-card {
  cursor: pointer;
}

.project-thumbnail {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  background-color: rgba(128, 128, 128, 0.22);
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.project-omschrijving-container {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.project-titel {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.project-omschrijving {
  width: min(60%, 720px);
  text-transform: none;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.45;
  margin: 0;
}

@media (max-width: 900px) {
  .project-omschrijving-container {
    flex-direction: column;
    gap: 10px;
  }

  .project-omschrijving {
    width: 100%;
  }
}
</style>
