import layoutDefault from "@/layouts/default.vue";
export default [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/welcome.vue'),
      meta: {
        layout: layoutDefault
      }
    }
]