<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useBreakpoints } from '@vueuse/core'
import { reactive, watchEffect } from 'vue'

const BREAKPOINTS = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  desktop: 1024,
} as const

const breakpointsCtx = useBreakpoints(BREAKPOINTS)

const breakpoints = reactive({
  xs: breakpointsCtx.smaller('sm'),
  sm: breakpointsCtx.between('sm', 'md'),
  md: breakpointsCtx.between('md', 'lg'),
  lg: breakpointsCtx.greater('lg'),
  desktop: breakpointsCtx.greater('desktop'),
  xsAndDown: breakpointsCtx.smaller('xs'),
  xsAndUp: breakpointsCtx.greater('xs'),
  smAndDown: breakpointsCtx.smaller('sm'),
  smAndUp: breakpointsCtx.greater('sm'),
  mdAndDown: breakpointsCtx.smaller('md'),
  mdAndUp: breakpointsCtx.greater('md'),
  lgAndDown: breakpointsCtx.smaller('lg'),
  lgAndUp: breakpointsCtx.greater('lg'),
  desktopAndDown: breakpointsCtx.smaller('desktop'),
  desktopAndUp: breakpointsCtx.greater('desktop'),
})

watchEffect(() => {
  console.log(breakpoints.lg)
})
</script>
