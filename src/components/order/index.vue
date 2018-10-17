<template>
  <div class="wrapper">
    <Header></Header>
    <div class="mall container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(swiper,index) in swiperList" :key="index">
          <img :src="swiper.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="button order mt">
        <p class="flex-align-center flex-center">
          <i class="icon icon-order"></i>开始点单
        </p>
        <ul>
          <li>
            <p>会员码</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
@import '../../assets/less/variable';
.order p{
  width: 75%;
  border-radius: 50px;
  padding: 0.2rem 0;
  background: @theme_background;
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
