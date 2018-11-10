import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/login/register'
import detail from '@/components/group/detail'
import reload from '@/components/group/reload'
import postEdit from '@/components/group/post-edit'
import member from '@/components/member/index'
import homePage from '@/components/member/homePage'
import homePagenull from '@/components/member/homePagenull'
import information from '@/components/member/information'
import invite from '@/components/member/invite'
import service from '@/components/member/service'
import answer from '@/components/member/answer'
import feedback from '@/components/member/feedback'
import personal from '@/components/login/personal'
import lable from '@/components/login/lable'
import record from '@/components/member/record'
import membership from '@/components/member/membership'
import bill from '@/components/member/bill'
import coupon from '@/components/member/coupon'
import active from '@/components/member/active'
import verified from '@/components/member/verified'
import otherHome from '@/components/member/otherHome'
import forgetPsd from '@/components/login/forgetPassword'
import festival from '@/components/member/festival'
import hexiao from '@/components/member/hexiao'
import demo from '@/components/base/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: member
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
      path: '/detail/:id', // 帖子详情
      name: 'detail',
      component: detail
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/homePagenull',
      name: 'homePagenull',
      component: homePagenull
    },
    {
      path: '/information',
      name: 'information',
      component: information
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
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/membership',
      name: 'membership',
      component: membership
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/verified',
      name: 'verified',
      component: verified
    },
    {
      path: '/otherHome/:id',
      name: 'otherHome',
      component: otherHome
    },
    {
      path: '/forgetPsd',
      name: 'forgetPsd',
      component: forgetPsd
    },
    {
      path: '/reload/:id',
      name: 'reload',
      component: reload
    },
    {
      path: '/postEdit',
      name: 'postEdit',
      component: postEdit
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/answer/:id',
      name: 'answer',
      component: answer
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/festival',
      name: 'festival',
      component: festival
    },
    {
      path: '/hexiao',
      name: 'hexiao',
      component: hexiao
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
