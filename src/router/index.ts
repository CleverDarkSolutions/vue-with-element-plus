import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/doctorsearch',
    name: 'DoctorSearch',
    component: () => import('../views/DoctorSearch.vue')
  },
  {
    path: '/',
    name: 'DefaultView',
    component: () => import('../views/DefaultView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
