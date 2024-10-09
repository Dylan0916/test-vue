<template>
  <div class="flex gap-3">
    <input v-model="callingCode" />
    <input v-model="phoneNumber" @blur="$emit('blur')" />
  </div>
</template>

<script lang="ts" setup>
import { computed, watchEffect, useAttrs } from 'vue'

interface Props {}

interface Emits {
  (event: 'blur'): void
}

const props = defineProps<Props>()

defineEmits<Emits>()

const phoneValue = defineModel<string>({ required: true })

const attrs = useAttrs()

watchEffect(() => {
  console.log(attrs)
})

const callingCode = computed({
  get: () => phoneValue.value.split(' ')[0],
  set: (value: string) => {
    phoneValue.value = `${value} ${phoneValue.value.split(' ')[1]}`
  },
})

const phoneNumber = computed({
  get: () => phoneValue.value.split(' ')[1],
  set: (value: string) => {
    phoneValue.value = `${phoneValue.value.split(' ')[0]} ${value}`
  },
})
</script>
