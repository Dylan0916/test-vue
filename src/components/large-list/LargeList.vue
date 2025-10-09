<template>
  <div class="container">
    <virtual-list style="height: 800px; overflow-y: auto" data-key="id" :data-sources="list" :keeps="50" :data-component="Item" />
  </div>
</template>

<script lang="ts" setup>
import VirtualList from 'vue3-virtual-scroll-list'

import largeList from '../../assets/large-list.json'
import Item from './Item.vue'

const list = largeList.slice(0, 1000).map(item => ({ id: item }))
</script>

<style scoped></style>
