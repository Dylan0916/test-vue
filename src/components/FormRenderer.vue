<template>
  <div class="p-10 max-w-720px flex flex-col gap-2">
    <template v-for="item in props.formSchema[0].content" :key="item.fieldPath">
      <p v-if="item.prefixLabel" class="my-1">{{ item.prefixLabel }}</p>
      <div v-if="item.rows" class="flex items-start gap-2">
        <div v-for="row in item.rows" :key="row.fieldPath" class="flex flex-col gap-2 flex-1">
          <label>{{ row.label }}</label>
          <input :disabled="row.disabled" :placeholder="row.placeholder" />
        </div>
      </div>
      <div v-else class="flex flex-col gap-2">
        <label>{{ item.label }}</label>
        <input :disabled="item.disabled" :placeholder="item.placeholder" />
      </div>
      <p v-if="item.suffixLabel" class="my-1">{{ item.suffixLabel }}</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { HTMLAttributes } from 'vue'

interface CollapseItem extends Record<string, unknown> {
  title: string
  content?: any
}

type FormFieldItem<P = string> = {
  fieldPath: P
  label: string
  prefixLabel?: string
  suffixLabel?: string
  labelClass?: HTMLAttributes['class']
  placeholder?: string
  disabled?: boolean
  prefix?: string
  suffix?: string
  currencyCode?: string
}

type FormContentItem<Item> = ({ rows: Item[] } & Partial<Item>) | ({ rows?: undefined } & Item)

interface FormSchemaItem<T = FormFieldItem> extends CollapseItem {
  content: FormContentItem<T>[]
}

interface Props {
  formSchema: FormSchemaItem[]
}

const props = defineProps<Props>()
</script>

<style></style>
