import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '../views/Courses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course/:name',
    name: 'course',
    component: () => import(/* webpackChunkName: "course" */ '../views/Course.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
