<template>
  <div class="svg-icon" :class="[`icon-${props.name}`, { 'no-fill': noFill }]">
    <component :is="svgComponent" :width="size ?? width" :height="size ?? height" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, shallowRef, watch } from 'vue'

interface Props {
  name: string
  size?: string | number
  width?: string | number
  height?: string | number
  noFill?: boolean
}

const props = withDefaults(defineProps<Props>(), { width: '100%', height: '100%' })

const svgComponent = shallowRef()

watch(
  () => props.name,
  newName => {
    svgComponent.value = defineAsyncComponent(() => import(`@/assets/icons/${newName}.svg`))
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped></style>
