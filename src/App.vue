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

<style scoped lang="scss"></style>
