<template>
  <NMessageProvider :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <RouterView />
  </NMessageProvider>
</template>

<script setup lang="ts">
import { NMessageProvider, NGlobalStyle, type GlobalThemeOverrides } from 'naive-ui'
import { RouterView } from 'vue-router'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<style lang="scss">
body {
  @apply text-base text-black-50;
}
</style>
