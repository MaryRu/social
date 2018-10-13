import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import group from '@/components/group/index'
import societyNews from '@/components/societyNews/index'
import member from '@/components/member/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/societyNews',
      name: 'societyNews',
      component: societyNews
    },
    {
      path: '/member',
      name: 'member',
      component: member
    }
  ]
})
