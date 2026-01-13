<template>
  <div>
    <button @click="onClick">onClick</button>
    <AppDrawer v-model:show="show" class="my-drawer">
      <div>content</div>
    </AppDrawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import AppDrawer from '@/components/AppDrawer.vue'

const show = ref(false)

function onClick() {
  show.value = true
}
</script>
