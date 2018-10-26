import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import group from '@/components/group/index'
import detail from '@/components/group/detail'
import reload from '@/components/group/reload'
import postEdit from '@/components/group/post-edit'
import societyNews from '@/components/societyNews/index'
import newsContent from '@/components/societyNews/newsContent'
import partyContent from '@/components/societyNews/partyContent'
import release from '@/components/societyNews/releaseActive'
import member from '@/components/member/index'
import available from '@/components/home/available'
import entertain from '@/components/home/entertain'
import intimate from '@/components/home/intimate'
import giftcard from '@/components/giftcard/index'
import mycard from '@/components/giftcard/mycard'
import mall from '@/components/order/index'
import classify from '@/components/order/classify'
import homePage from '@/components/member/homePage'
import homePagenull from '@/components/member/homePagenull'
import information from '@/components/member/information'
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
// import demo from '@/components/giftcard/demo'

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
      path: '/detail/:id', // 帖子详情
      name: 'detail',
      component: detail
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
      path: '/giftcard',
      name: 'giftcard',
      component: giftcard
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
      path: '/otherHome',
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
      path: '/newsContent/:id',
      name: 'newsContent',
      component: newsContent
    },
    {
      path: '/partyContent/:id',
      name: 'partyContent',
      component: partyContent
    },
    {
      path: '/release', // 发布活动
      name: 'release',
      component: release
    }
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: demo
    // }
  ]
})
