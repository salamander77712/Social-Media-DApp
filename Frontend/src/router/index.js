import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePageView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/meta-mask-qa',
      name: 'meta',
      component: () => import('../views/MetaView.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue')
    },
    {
      path: '/u/:address',
      name: 'profile-page',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/compose',
      name: 'compose',
      component: () => import('../views/ComposeView.vue')
    },
    {
    path: '/check',
    name: 'check',
    component: () => import('../views/CheckView.vue')
    },
    {
      path: '/u/:address/p/:id',
      name: 'message-page',
      component: () => import('../views/MessageView.vue')
    }
  ]
})

export default router
