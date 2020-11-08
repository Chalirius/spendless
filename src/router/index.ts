import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CopyPeople from '../components/CopyPeople/CopyPeople.vue'
import CopyPeopleDetail from '../components/CopyPeople/CopyPeopleDetail.vue'
import MainPage from '../components/MainPage/MainPage.vue'

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
    path: '/copy-user',
    name: 'CopyPeopleDetail',
    component: CopyPeopleDetail
  },
  {
    path: '/main',
    name: 'Main',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
