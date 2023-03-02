import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
    },

    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: () => import('@/views/not-found/not-fount.vue')
    }
  ]
})
router.beforeEach((to) => {
  console.log('router-to', to)
  // const token = localCache.getCache(LOGIN_TOKEN)
  // if (to.path.startsWith('/main') && !token) {
  //   if (!token) return '/login'
  // }
})

export default router
