import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import group from '@/components/group/index'
import societyNews from '@/components/societyNews/index'
import member from '@/components/member/index'
import available from '@/components/home/available'
import entertain from '@/components/home/entertain'
import intimate from '@/components/home/intimate'
import card from '@/components/card/index'
import mycard from '@/components/card/mycard'
import mall from '@/components/order/index'
import classify from '@/components/order/classify'
import homePage from '@/components/member/homePage'
import personal from '@/components/login/personal'
import lable from '@/components/login/lable'

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
    },
    {
      path: '/available',
      name: 'available',
      component: available
    },
    {
      path: '/entertain',
      name: 'entertain',
      component: entertain
    },
    {
      path: '/intimate',
      name: 'intimate',
      component: intimate
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/mycard',
      name: 'mycard',
      component: mycard
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/lable',
      name: 'lable',
      component: lable
    }
  ]
})
