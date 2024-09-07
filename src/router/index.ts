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
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/user.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/login.vue')
    },
    {
      path: '/anime-news',
      name: 'animeNews',
      component: () => import('@/views/anime/AnimeNews.vue')
    },
    {
      path: '/anime-discussion',
      name: 'animeDiscussion',
      component: () => import('@/views/anime/AnimeDiscussion.vue')
    },
    {
      path: '/anime-library',
      name: 'animeLibrary',
      component: () => import('@/views/anime/AnimeLibrary.vue')
    },
    {
      path: '/fan-creation',
      name: 'fanCreation',
      component: () => import('@/views/fan/FanCreation.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/events/Events.vue')
    }
  ]
})

export default router
