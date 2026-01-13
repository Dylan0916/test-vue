<template>
  <div>
    <NDatePicker v-model:value="timestamp" :default-value="1767052800000" type="date" />
    <NDatePicker :default-value="1767052800000" type="date" />
    <NDatePicker v-model:formatted-value="formattedValue" value-format="yyyy--MM--dd" format="yyyy/MM/dd" type="date" />
    <p>{{ timestamp }} , {{ formattedValue }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NDatePicker } from 'naive-ui'

const timestamp = ref(1183135260000)
const formattedValue = ref('2007--06--30')
</script>
