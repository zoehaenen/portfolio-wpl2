import { computed, ref } from 'vue'

export function useLightbox() {
  const isOpen = ref(false)
  const images = ref([])
  const currentIndex = ref(0)
  const title = ref('foto')

  const currentImage = computed(() => images.value[currentIndex.value] || null)

  function openLightbox(nextImages, index = 0, nextTitle = 'foto') {
    images.value = nextImages
    currentIndex.value = index
    title.value = nextTitle
    isOpen.value = true
  }

  function closeLightbox() {
    isOpen.value = false
  }

  function goTo(index) {
    if (!images.value.length) return
    currentIndex.value = index
  }

  function go(delta) {
    if (!images.value.length) return
    currentIndex.value = (currentIndex.value + delta + images.value.length) % images.value.length
  }

  return {
    closeLightbox,
    currentImage,
    currentIndex,
    go,
    goTo,
    images,
    isOpen,
    openLightbox,
    title,
  }
}
