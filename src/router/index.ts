import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/user',
      name:'user',
      component: () => import('@/views/user/user.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('@/views/user/login.vue')
    }
  ]
})

export default router
