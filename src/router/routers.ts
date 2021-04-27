import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routes: any[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'router_i18n.home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/page2',
        name: 'router_i18n.page2',
        component: () => import('@/views/page2/index.vue'),
      },
    ],
  }
]
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})
export default router
