<script setup>
defineProps({
  activeProject: { type: String, default: null },
  projects: { type: Array, required: true },
})

const emit = defineEmits(['show-overview', 'select-project'])
</script>

<template>
  <aside class="body-left">
    <nav class="project-container" aria-label="Project categorieën">
      <div class="project-titel">
        <a class="cat-link" href="#overzicht" @click.prevent="emit('show-overview')">projecten</a>
      </div>

      <ol class="project-list">
        <li v-for="project in projects" :key="project.key">
          <a
            class="cat-link"
            :class="{ 'is-active': activeProject === project.key }"
            :href="`#${project.key}`"
            @click.prevent="emit('select-project', project.key)"
          >
            {{ project.title }}
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>

<style scoped>
.body-left {
  position: sticky;
  top: var(--header-h);
  align-self: start;
  padding-top: 0;
}

.project-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-titel {
  font-weight: 700;
  letter-spacing: 1px;
}

.project-list {
  margin-top: 10px;
  padding-left: 18px;
}

.project-list li {
  display: grid;
  grid-template-columns: 22px 1fr;
  column-gap: 8px;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
}

.cat-link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
}

.cat-link:hover,
.cat-link.is-active {
  color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 900px) {
  .body-left {
    position: relative;
    top: auto;
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: start;
    column-gap: 16px;
  }

  .project-container {
    margin-top: 0;
  }
}
</style>
