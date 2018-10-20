<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(swiper,index) in swiperList" :key="index">
          <img :src="swiper.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="mt cardBox">
        <p class="mb">颜茶 + 祝福 即刻表心意</p>
        <ul class="flex-between flex-wrap">
          <li v-for="(item,index) in cardList" :key="index">
            <router-link to="/">
              <div class="cardImg">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="card-bottom mt">
          <router-link to="/mycard">
            <img src="../../assets/images/icon/card.png" alt="">
            <p>我的礼品卡</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
ul {
  li {
    width: 48%;
    border-radius: .2rem;
    margin-bottom: .2rem;
    box-shadow: 2px 2px 5px #888888;
  }
}
.card-bottom {
  text-align: center;
  img {
    width: .8rem;
    height: .8rem;
  }
}
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '礼品卡',
      swiperList: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        }
      ],
      cardList: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.png',
          title: '爱上颜茶爱上你'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card2.png',
          title: '爱上颜茶爱上你'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card3.png',
          title: '爱上颜茶爱上你'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card4.png',
          title: '爱上颜茶爱上你'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card5.png',
          title: '爱上颜茶爱上你'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.png',
          title: '爱上颜茶爱上你'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>
