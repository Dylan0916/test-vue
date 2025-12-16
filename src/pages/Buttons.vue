<template>
  <div class="p-5">
    <h1 class="text-3xl font-bold mb-8">Button 组件展示</h1>

    <div class="flex justify-between gap-3">
      <div class="flex-1 flex flex-col gap-4">
        <h2 class="text-3xl">Button 1</h2>
        <div v-for="type in buttonTypes" :key="type" class="space-y-6">
          <h2 class="text-2xl font-semibold capitalize border-b pb-2">{{ type }}</h2>

          <!-- 按 Size 分组 -->
          <div v-for="size in sizes" :key="size" class="space-y-4">
            <h3 class="text-xl font-medium capitalize text-gray-600">{{ size }}</h3>
            <div class="flex flex-wrap gap-4 items-center">
              <!-- 正常状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button :type="type" :size="size">正常</Button>
                <span class="text-xs text-gray-500">正常</span>
              </div>

              <!-- Loading 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button :type="type" :size="size" :loading="true">按鈕</Button>
                <span class="text-xs text-gray-500">loading</span>
              </div>

              <!-- Disabled 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button :type="type" :size="size" :disabled="true">禁用</Button>
                <span class="text-xs text-gray-500">disabled</span>
              </div>

              <!-- Loading + Disabled 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button :type="type" :size="size" :loading="true" :disabled="true">加载+禁用</Button>
                <span class="text-xs text-gray-500">loading+disabled</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h2 class="text-2xl font-semibold capitalize border-b pb-2">Custom</h2>
          <div class="mt-4">
            <Button type="primary" class="px-20 py-10">正常</Button>
            <span class="text-xs text-gray-500">正常</span>
          </div>
        </div>
      </div>

      <div class="flex-1 flex flex-col gap-4">
        <h2 class="text-3xl">Button 2</h2>
        <div v-for="type in buttonTypes" :key="type" class="space-y-6">
          <h2 class="text-2xl font-semibold capitalize border-b pb-2">{{ type }}</h2>

          <!-- 按 Size 分组 -->
          <div v-for="size in sizes" :key="size" class="space-y-4">
            <h3 class="text-xl font-medium capitalize text-gray-600">{{ size }}</h3>
            <div class="flex flex-wrap gap-4 items-center">
              <!-- 正常状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button2 :type="type" :size="size">正常</Button2>
                <span class="text-xs text-gray-500">正常</span>
              </div>

              <!-- Loading 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button2 :type="type" :size="size" :loading="true">按鈕</Button2>
                <span class="text-xs text-gray-500">loading</span>
              </div>

              <!-- Disabled 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button2 :type="type" :size="size" :disabled="true">禁用</Button2>
                <span class="text-xs text-gray-500">disabled</span>
              </div>

              <!-- Loading + Disabled 状态 -->
              <div class="flex flex-col items-center gap-2">
                <Button2 :type="type" :size="size" :loading="true" :disabled="true">加载+禁用</Button2>
                <span class="text-xs text-gray-500">loading+disabled</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h2 class="text-2xl font-semibold capitalize border-b pb-2">Custom</h2>
          <div class="mt-4">
            <Button2 type="primary" class="px-20 py-10">正常</Button2>
            <span class="text-xs text-gray-500">正常</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import Button2 from '@/components/Button2.vue'

const buttonTypes = ['primary', 'secondary', 'tertiary', 'default', 'ghost', 'text', 'primary-text', 'icon'] as const

const sizes = ['mini', 'small', 'medium', 'large'] as const
</script>
