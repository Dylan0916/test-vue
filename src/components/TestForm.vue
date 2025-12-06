<template>
  <FormRenderer :formSchema="formSchema" />
</template>

<script lang="ts" setup>
import FormRenderer from '@/components/FormRenderer.vue'
import { computed } from 'vue'

const displayRemarks = [{}, {}]

const formSchema = computed(() => [
  {
    title: 'Remark Details',
    content: [
      ...displayRemarks.flatMap((_, index) => [
        {
          fieldPath: 'refund',
          ...(displayRemarks.length > 1 && { prefixLabel: `Prefix Label (${index + 1})` }),
          rows: [
            { fieldPath: 'refund.status', label: 'Status' },
            { fieldPath: 'refund.amount', label: 'Refund Amount' },
          ],
        },
        {
          fieldPath: 'refundTime',
          label: 'Created at',
          ...(displayRemarks.length > 1 && { suffixLabel: `Suffix Label (${index + 1})` }),
        },
      ]),
    ],
  },
])
</script>

<style></style>
