import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import BaseHeader from '@/components/common/BaseHeader.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/layout',
      name:'layour',
      component: BaseHeader
    }
  ]
})

export default router
