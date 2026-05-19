<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectDetail from '../components/projects/ProjectDetail.vue'
import ProjectOverview from '../components/projects/ProjectOverview.vue'
import ProjectSidebar from '../components/projects/ProjectSidebar.vue'
import Lightbox from '../components/ui/Lightbox.vue'
import { useLightbox } from '../composables/useLightbox'
import { projectNavigation, projectSummaries } from '../data/projects'

const route = useRoute()
const router = useRouter()
const projectKeys = new Set(projectNavigation.map((project) => project.key))

const activeProject = computed(() => {
  const hash = route.hash.replace('#', '').trim()
  return projectKeys.has(hash) ? hash : null
})

const {
  closeLightbox,
  currentImage,
  currentIndex,
  go,
  goTo,
  images,
  isOpen,
  openLightbox,
  title,
} = useLightbox()

function showOverview() {
  router.replace({ name: 'projects', hash: '#overzicht' })
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function selectProject(projectKey) {
  router.replace({ name: 'projects', hash: `#${projectKey}` })
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function openGallery({ images: galleryImages, index, title: galleryTitle }) {
  openLightbox(galleryImages, index, galleryTitle)
}
</script>

<template>
  <main class="projecten-page">
    <ProjectSidebar
      :projects="projectNavigation"
      :active-project="activeProject"
      @show-overview="showOverview"
      @select-project="selectProject"
    />

    <section class="body-right">
      <ProjectOverview
        v-if="!activeProject"
        :projects="projectSummaries"
        @open-project="selectProject"
      />
      <ProjectDetail v-else :project-key="activeProject" @open-gallery="openGallery" />
    </section>
  </main>

  <Lightbox
    :is-open="isOpen"
    :images="images"
    :current-index="currentIndex"
    :current-image="currentImage"
    :title="title"
    @close="closeLightbox"
    @previous="go(-1)"
    @next="go(1)"
    @select="goTo"
  />
</template>

<style scoped>
.projecten-page {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: var(--gap);
  align-items: start;
  padding-bottom: 80px;
}

.body-right {
  padding-top: 20px;
}

@media (max-width: 900px) {
  .projecten-page {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-bottom: 60px;
  }
}
</style>
