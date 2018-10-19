<template>
  <div class="wrapper">
    <div class="member">
      <router-link to="/homePage">
        <div class="name-box flex-align-center">
          <img :src="userInfo.img" alt="" />
          <div>
            <p class="ml">{{userInfo.name}}</p>
            <span class="ml">查看个人主页</span>
          </div>
        </div>
      </router-link>
      <div class="member-list">
        <ul>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-msg mr"></i>
              <p>会员信息</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-record mr"></i>
              <p>消费记录</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-card mr"></i>
              <p>会员卡</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-coupon mr"></i>
              <p>优惠券</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-activity mr"></i>
              <p>我的活动</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-certify mr"></i>
              <p>实名认证</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-invite mr"></i>
              <p>邀请有奖</p>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-service mr"></i>
              <p>客服中心</p>
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
