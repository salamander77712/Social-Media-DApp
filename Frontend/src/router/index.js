import { createRouter, createWebHistory } from 'vue-router'
import CheckView from '../views/CheckView.vue'
import MetaQA from '../views/MetaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'check',
      component: CheckView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
    }
  ]
})

export default router
