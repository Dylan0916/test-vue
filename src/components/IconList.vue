<template>
  <div class="flex flex-wrap gap-4 gap-y-5">
    <div
      v-for="iconName in ICON_NAMES"
      :key="iconName"
      class="text-red-400 flex flex-col items-center w-17 cursor-pointer overflow-hidden"
      @click="onIconClick(iconName)"
    >
      <FunNowSvgIcon class="size-8" :name="iconName" />
      <p class="m-0 mt-2 truncate w-full text-center text-base">{{ iconName }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { useMessage } from 'naive-ui'

import { ICON_NAMES } from '@/constants/icon'
import FunNowSvgIcon from './FunNowSvgIcon.vue'

const { copy } = useClipboard()
const message = useMessage()

function onIconClick(iconName: string) {
  copy(iconName)
  message.success(`${iconName} copied`)
}
</script>
