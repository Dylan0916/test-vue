<template>
  <n-drawer v-bind="drawerProps">
    <n-drawer-content v-bind="drawerContentProps">
      <slot />
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { useAttrs, computed } from 'vue'

import type { DrawerProps, DrawerContentProps } from 'naive-ui'
import { NDrawer, NDrawerContent } from 'naive-ui'

interface Props extends /* @vue-ignore */ DrawerProps {
  drawerContentProps?: Partial<DrawerContentProps>
}

const props = defineProps<Props>()

const attrs = useAttrs()

const drawerProps = computed(() => ({ ...props, ...attrs }))
</script>
