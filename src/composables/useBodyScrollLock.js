import { onBeforeUnmount, watch } from 'vue'

export function useBodyScrollLock(source) {
  watch(
    source,
    (isLocked) => {
      document.documentElement.style.overflow = isLocked ? 'hidden' : ''
      document.body.style.overflow = isLocked ? 'hidden' : ''
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  })
}
