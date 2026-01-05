import { createRouter, createWebHistory } from 'vue-router'
import layoutDefault from "@/layouts/default.vue";
import user from '@/router/auth'
import welcome from './welcome';
import profile from './profile';

let routes = [...user, ...welcome, ...profile];

routes =  routes.map((route)=>{
  if(!route.meta?.layout){
    route.meta = Object.assign({}, route.meta, { layout: layoutDefault})
  }
  return route
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
