<template>
  <div>
    <!-- <button @click="onClick">click</button> -->
    <div class="wd-flex wd-items-center wd-justify-center wd-flex-col wd-h-14 wd-py-1 !wd-text-gray60 !wd-bg-orange50">123</div>
    <div class="sm:(wd-text-lg wd-p-5 wd-m-5)">test group</div>
    <div class="sm:wd-text-lg sm:wd-p-5 sm:wd-m-5">test group2</div>
  </div>
</template>

<!-- <script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

import TestChild from './TestChild.vue'

const flag = ref(false)

function onClick() {
  flag.value = !flag.value
}
</script> -->

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
