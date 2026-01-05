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
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/views/auth/forgot-password.vue'),
      meta: {
        layout: layoutAuth
      }
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import('@/views/auth/reset-password.vue'),
      meta: {
        layout: layoutAuth
      }
    },
    {
      path: '/confirm-password',
      name: 'ConfirmPassword',
      component: () => import('@/views/auth/confirm-password.vue'),
      meta: {
        layout: layoutAuth
      }
    },
]