<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: { type: Array, required: true },
})

const emit = defineEmits(['open-project'])
</script>

<template>
  <div id="overzicht">
    <ProjectCard
      v-for="project in projects"
      :key="project.key"
      :project="project"
      @open="emit('open-project', $event)"
    />
  </div>
</template>
