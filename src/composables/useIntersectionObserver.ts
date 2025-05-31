import { onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

export function useIntersectionObserver(
  element: Ref<HTMLElement | null>,
  callback: () => void,
  threshold = 0.1
) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
        observer?.disconnect()
      }
    }, { threshold })

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}