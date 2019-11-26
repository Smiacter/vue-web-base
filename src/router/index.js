import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import FamilyInfo from '@/views/FamilyInfo'
import Notification from '@/views/Notification'
import Setting from '@/views/Setting'
import Event from '@/views/Event'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/home',
  name: 'home',
  redirect: '/home/familyInfo',
  component: Home,
  children: [{
    path: '/home/familyInfo',
    name: 'familyInfo',
    component: FamilyInfo
  },
  {
    path: '/home/notification',
    name: 'notification',
    component: Notification
  },
  {
    path: '/home/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/home/event',
    name: 'event',
    component: Event
  }
  ]
}

]

const router = new VueRouter({
  routes
})

export default router
