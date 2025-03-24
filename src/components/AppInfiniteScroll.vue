<template>
  <div ref="containerRef">
    <slot />
    <h1 v-show="isLoading">loading ...</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect, type HTMLAttributes } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

interface Props {
  isLoading: boolean
  itemsCount: number
  totalCount: number
  threshold?: number
  distance?: number
  loadingClass?: HTMLAttributes['class']
}

interface Emits {
  (even: 'load-more'): void
}

const props = withDefaults(defineProps<Props>(), { threshold: 0.1, distance: 200 })
const emit = defineEmits<Emits>()

const containerRef = ref<HTMLDivElement | null>(null)
// const anchorRef = ref<Nullable<HTMLDivElement>>(null)

const hasMoreItems = computed(() => props.itemsCount < props.totalCount)
// const isAnchorShown = computed(() => !props.isLoading && hasMoreItems.value)
const canLoadMore = computed(() => !props.isLoading && hasMoreItems.value)

useInfiniteScroll(containerRef, () => emit('load-more'), {
  interval: 0,
  throttle: props.threshold,
  distance: props.distance,
  canLoadMore: () => canLoadMore.value,
})

// useIntersectionObserver(
//   anchorRef,
//   ([anchor]) => {
//     if (!anchor.isIntersecting || !isAnchorShown.value) {
//       return
//     }

//     emit('load-more')
//   },
//   { threshold: props.threshold, rootMargin: `${props.distance}px` }
// )
</script>
