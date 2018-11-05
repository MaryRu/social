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
import condition from '@/components/home/condition'
import chat from '@/components/home/chat'
import chatContent from '@/components/home/chatContent'
import task from '@/components/home/task'
import giftcard from '@/components/giftcard/index'
import mycard from '@/components/giftcard/mycard'
import mall from '@/components/order/index'
import classify from '@/components/order/classify'
import search from '@/components/order/search'
import cartdata from '@/components/order/cartdata'
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
import plate from '@/components/member/plate'
import forgetPsd from '@/components/login/forgetPassword'
import order from '@/components/order/order'
import waitpay from '@/components/order/waitpay'
import orderdown from '@/components/order/orderdown'
import success from '@/components/order/success'
import shop from '@/components/order/shop'

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
      path: '/classify/:id',
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
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/cartdata/:id',
      name: 'cartdata',
      component: cartdata
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/waitpay',
      name: 'waitpay',
      component: waitpay
    },
    {
      path: '/orderdown',
      name: 'orderdown',
      component: orderdown
    },
    {
      path: '/success',
      name: 'success',
      component: success
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
      path: '/condition/:id',
      name: 'condition',
      component: condition
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: chat
    },
    {
      path: '/chatContent/:id',
      name: 'chatContent',
      component: chatContent
    },
    {
      path: '/task/:id',
      name: 'task',
      component: task
    },
    {
      path: '/plate/:id',
      name: 'plate',
      component: plate
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
