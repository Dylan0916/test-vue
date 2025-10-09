<template>
  <div>{{ source.id }}</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ index: number; source: Record<string, any> }>()
</script>

<style></style>
