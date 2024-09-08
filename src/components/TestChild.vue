<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ obj }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue'

interface Props {
  name?: string
  obj?: Record<string, any>
}

const { name = 'default name', obj = { a: 1 } } = defineProps<Props>()
// const props = defineProps<Props>()
// const { name, obj } = toRefs(props)
</script>

<style></style>
