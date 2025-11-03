<template>
  <NMessageProvider :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <!-- <VCalendar /> -->
    <!-- <Test /> -->
    <!-- <Vueuse /> -->
    <!-- <VeeValidate /> -->
    <!-- <Proxy /> -->
    <!-- <WebApi /> -->
    <!-- <Vuetify /> -->
    <!-- <Copper /> -->
    <!-- <BulletedEditor /> -->
    <!-- <LargeList /> -->
    <IconList />
  </NMessageProvider>
</template>

<script setup lang="ts">
import { NMessageProvider, NGlobalStyle, type GlobalThemeOverrides } from 'naive-ui'

import VCalendar from './components/VCalendar.vue'
import Test from './components/Test.vue'
import VeeValidate from './components/VeeValidate.vue'
import Proxy from './components/Proxy.vue'
import Vueuse from './components/Vueuse.vue'
import Vuetify from './components/Vuetify.vue'
import Copper from './components/Copper.vue'
import BulletedEditor from './components/BulletedEditor.vue'
import LargeList from './components/large-list/LargeList.vue'
import IconList from './components/IconList.vue'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<style scoped lang="scss"></style>
