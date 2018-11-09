<template>
  <div class="wrapper">
    <div class="member">
      <router-link to="/homePage">
        <div class="name-box flex-align-center">
          <img :src="userInfo.uImg" alt="" />
          <div>
            <p class="ml flex-align name">
              {{userInfo.uName}}
              <i class="icon icon-vip" v-show="userInfo.uPic === '1'"></i>
            </p>
            <span class="ml">查看个人主页</span>
          </div>
        </div>
      </router-link>
      <div class="member-list">
        <ul>
          <!-- <li>
            <router-link to="/" class="flex-align-center">
              <i class="icon icon-msg mr"></i>
              <p>会员信息</p>
            </router-link>
          </li> -->
          <li>
            <router-link to="/record" class="flex-align-center">
              <i class="icon icon-record mr"></i>
              <p>消费记录</p>
            </router-link>
          </li>
          <li>
            <router-link to="/membership" class="flex-align-center">
              <i class="icon icon-card mr"></i>
              <p>会员卡</p>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/coupon" class="flex-align-center">
              <i class="icon icon-coupon mr"></i>
              <p>优惠券</p>
            </router-link>
          </li> -->
          <li>
            <router-link to="/active" class="flex-align-center">
              <i class="icon icon-activity mr"></i>
              <p>我的活动</p>
            </router-link>
          </li>
          <li>
            <router-link to="/verified" class="flex-align-center">
              <i class="icon icon-certify mr"></i>
              <p>实名认证</p>
            </router-link>
          </li>
          <li>
            <router-link to="/invite" class="flex-align-center">
              <i class="icon icon-invite mr"></i>
              <p>邀请有奖</p>
            </router-link>
          </li>
          <li>
            <router-link to="/service" class="flex-align-center">
              <i class="icon icon-service mr"></i>
              <p>客服中心</p>
            </router-link>
          </li>
          <li class="flex-align-center" @click="out">
            <i class="icon icon-out mr"></i>
            <p>退出</p>
          </li>
        </ul>
      </div>
    </div>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
.name {
  font-size: .3rem;
}
.out {
  background-color: @theme_background;
  color: #fff;
  text-align: center;
}
</style>
<script>
import { MessageBox,Toast } from 'mint-ui'
import api from '../../assets/js/api'
import Footer from '../base/footer'
export default {
  data () {
    return {
      cartLength: 3,
      vipBage: false,
      userInfo: {
        uImg: '',
        uName: '没头脑的不高兴不开心'
      }
    }
  },
  components: {
    Footer
  },
  created () {
    if (!localStorage.getItem('uId')) {
      console.log('11')
      Toast('请先登录')
      this.$router.push('/login')
    } else {
      let form = this.$qs.stringify({
        uId: localStorage.getItem('uId')
      })
      api.getUserById(form)
        .then((res) => {
          console.log(res)
          this.userInfo = res.data.users
        })
    }
    
  },
  methods: {
    out () {
      MessageBox.confirm('确定退出?', '提示').then(() => {
        localStorage.clear()
        sessionStorage.clear()
        this.$router.replace('/login')
      })
    }
  }
}
</script>
