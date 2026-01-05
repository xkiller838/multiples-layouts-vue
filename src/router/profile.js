import layoutDashboard from "@/layouts/dashboard.vue"

export default [
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile/index.vue'),
      meta: {
        layout: layoutDashboard
      }
    },
]
