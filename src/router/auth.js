import layoutAuth from "@/layouts/auth.vue"
export default [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/login.vue'),
      meta: {
        layout: layoutAuth
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/auth/register.vue'),
      meta: {
        layout: layoutAuth
      }
    },
]