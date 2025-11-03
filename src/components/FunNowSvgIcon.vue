<template>
  <div class="svg-icon" :class="[`icon-${props.name}`, { 'no-fill': noFill }]">
    <component :is="svgComponent" :width="size ?? width" :height="size ?? height" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue'

interface Props {
  name: string
  size?: string | number
  width?: string | number
  height?: string | number
  noFill?: boolean
}

const props = withDefaults(defineProps<Props>(), { width: '100%', height: '100%' })

const svgComponent = computed(() => defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`)))
</script>

<style lang="scss" scoped></style>
