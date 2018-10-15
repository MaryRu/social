<template>
  <div class="wrapper">
    <div class="member">
      <router-link to="/">
        <div class="name-box flex-align-center">
          <img :src="userInfo.img" alt="" />
          <p class="ml">{{userInfo.name}}</p>
        </div>
      </router-link>
      <div class="member-list">
        <ul>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-msg mr"></i>
              <span>会员信息</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-record mr"></i>
              <span>消费记录</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-card mr"></i>
              <span>会员卡</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-coupon mr"></i>
              <span>优惠券</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-activity mr"></i>
              <span>我的活动</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-certify mr"></i>
              <span>实名认证</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-invite mr"></i>
              <span>邀请有奖</span>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-service mr"></i>
              <span>客服中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
</style>
<script>
import Footer from '../base/footer'
export default {
  data () {
    return {
      cartLength: 3,
      userInfo: {
        img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
        name: '没头脑的不高兴不开心'
      }
    }
  },
  components: {
    Footer
  }
}
</script>
