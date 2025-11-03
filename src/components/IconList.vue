<template>
  <div class="flex flex-col items-center">
    <input v-model="search" class="w-50% mt-5 mb-8 h-9 px-2" type="text" placeholder="Search" />
    <div class="flex flex-wrap gap-4 gap-y-5">
      <div
        v-for="iconName in iconNames"
        :key="iconName"
        class="text-red-400 flex flex-col items-center w-17 cursor-pointer overflow-hidden"
        @click="onIconClick(iconName)"
      >
        <FunNowSvgIcon class="size-8" :name="iconName" />
        <p class="m-0 mt-2 truncate w-full text-center text-base">{{ iconName }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useClipboard, refDebounced } from '@vueuse/core'
import { useMessage } from 'naive-ui'

import { ICON_NAMES } from '@/constants/icon'
import FunNowSvgIcon from './FunNowSvgIcon.vue'

const { copy } = useClipboard()
const message = useMessage()

const iconNames = ref(ICON_NAMES)
const search = ref('')
const deferredSearch = refDebounced(search, 200)

function onIconClick(iconName: string) {
  copy(iconName)
  message.success(`${iconName} copied`)
}

watch(deferredSearch, newDeferredSearch => {
  if (!newDeferredSearch) {
    iconNames.value = ICON_NAMES
  }

  iconNames.value = ICON_NAMES.filter(iconName => iconName.includes(newDeferredSearch))
})
</script>
