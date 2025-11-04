import { createWebHistory, createRouter } from 'vue-router'

import { RouterName } from '@/router/constants'

const routes = [
  { path: '/icons', name: RouterName.ICONS, component: () => import('@/pages/Icons.vue') },
  { path: '', name: RouterName.HOME, component: () => import('@/pages/Home.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { RouterName }

export default router
