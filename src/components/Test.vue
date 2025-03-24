<template>
  <div>
    <AppInfiniteScroll
      :is-loading="isLoading"
      :items-count="data.length"
      :total-count="30"
      class="pt-1 h-300px overflow-y-scroll border"
      @load-more="onLoadMore"
    >
      <h2>test test</h2>
      <div v-for="item in data" :key="item" class="h-15 bg-gray-500/5 rounded p-3">
        {{ item }}
      </div>
    </AppInfiniteScroll>
    <!-- <button
      :data-testid="testIds.scope.somePage"
      class="123"
      :class="{
        '123': true,
        '456': false,
      }"
      @click="
        () => {
          console.log('123')
        }
      "
    >
      click
    </button>
    <button
      data-testid="test-id123"
      class="123"
      @click="
        () => {
          console.log('123')
        }
      "
    >
      click2
    </button> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import AppInfiniteScroll from './AppInfiniteScroll.vue'

const data = ref([1, 2, 3, 4, 5, 6])
const isLoading = ref(false)

function onLoadMore() {
  console.log('== load more ==')
  const length = data.value.length + 1

  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
  }, 2000)
}
</script>
