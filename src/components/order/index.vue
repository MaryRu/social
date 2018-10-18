<template>
  <div class="wrapper">
    <Header></Header>
    <div class="mall container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(swiper,index) in swiperList" :key="index">
          <img :src="swiper.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="order mt">
        <router-link to="/classify">
          <button class="flex-align-center flex-center">
            <i class="icon icon-buy"></i>开始点单
          </button>
        </router-link>
        <ul class="flex-align-center flex-around mt">
          <li>
            <div class="">
              <router-link to="/">
                <i class="icon icon-QR"></i>
                <p>会员码</p>
              </router-link>
            </div>
          </li>
          <li>
            <div class="">
              <router-link to="/">
                <i class="icon icon-package"></i>
                <p>我的卡包</p>
              </router-link>
            </div>
          </li>
          <li>
            <div class="">
              <router-link to="/">
                <i class="icon icon-order"></i>
                <p>我的订单</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt card-box flex-between">
        <div class="card">
          <router-link to="/">
            <div class="cardImg">
              <img src="../../assets/images/card1.jpg" alt="">
            </div>
            <span class="tips">人气推荐</span>
          </router-link>
        </div>
        <div class="card">
          <router-link to="/">
            <div class="cardImg">
              <img src="../../assets/images/card2.png" alt="">
            </div>
          </router-link>
          <span class="tips">新品体验</span>
        </div>
      </div>
      <div class="more mt">
        <p>更多服务</p>
        <ul class="flex-align-center flex-around mt">
          <li>
            <router-link to="/">
              <div class="icons">
                <i class="icon icon-msg"></i>
              </div>
              <p class="mt">会员</p>
            </router-link>
          </li>
          <li>
            <router-link to="/societyNews">
              <div class="icons">
                <i class="icon icon-activity"></i>
              </div>
              <p class="mt">活动</p>
            </router-link>
          </li>
          <li>
            <router-link to="/group">
              <div class="icons">
                <i class="icon icon-group"></i>
              </div>
              <p class="mt">颜络社</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="icons">
                <i class="icon icon-coupon"></i>
              </div>
              <p class="mt">优惠券</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
.order button{
  margin: 0 auto;
  color: #fff;
  width: 75%;
  border-radius: 50px;
  padding: 0.2rem 0;
  background: @theme_background;
}
li {
  text-align: center;
}
.icons {
  width: 30px;
  height: 30px;
  padding: .2rem;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 2px 2px 2px #ccc;
}
.card-box {
  padding: .2rem;
}
.card {
  width: 49%;
  position: relative;
}
.tips {
  position: absolute;
  top: .2rem;
  left: 0;
  display: block;
  background-color: #e02923;
  color: #fff;
  padding: 0 .2rem;
  font-size: .2rem;
}
.more {
  padding: 0 .2rem;
}
</style>
<script>
import Header from '../base/header-search'
export default {
  data () {
    return {
      swiperList: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>
