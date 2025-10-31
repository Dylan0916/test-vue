<template>
  <div class="flex flex-wrap gap-4 gap-y-5">
    <div v-for="iconName in iconNames" :key="iconName" class="text-red-400 flex flex-col items-center w-17 overflow-hidden">
      <FunNowSvgIcon class="size-8" :name="iconName" />
      <p class="m-0 mt-2 truncate w-full text-center">{{ iconName }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FunNowSvgIcon from './FunNowSvgIcon.vue'

const iconMap = import.meta.glob('@/assets/icons/*.svg', { eager: true })
const iconNames = Object.keys(iconMap).map(key => key.replace('/src/assets/icons/', '').replace('.svg', ''))
</script>
