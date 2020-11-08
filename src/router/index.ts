import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CopyPeople from '../components/CopyPeople/CopyPeople.vue'
import CopyPeopleDetail from '../components/CopyPeople/CopyPeopleDetail.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/copy-people',
    name: 'CopyPeople',
    component: CopyPeople
  },
  {
    path: '/copy-people-detail',
    name: 'CopyPeopleDetail',
    component: CopyPeopleDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
