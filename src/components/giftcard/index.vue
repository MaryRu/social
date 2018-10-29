<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(swiper,index) in rollpicsList" :key="index">
          <img :src="swiper.rPic" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="mt cardBox">
        <p class="mb">颜茶 + 祝福 即刻表心意</p>
        <ul class="flex-between flex-wrap" >
          <li v-for="(item,index) in cardList" :key="index">
            <router-link to="/index">
              <div class="cardImg">
                <img :src="item.pPic" alt="">
                <p>{{item.pName}}</p>
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
  position: fixed;
  bottom: 0.2rem;
  right: 0.2rem;
  width: 1.3rem;
  height: 1.3rem;
  padding: .2rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  img {
    width: .8rem;
    height: .8rem;
  }
}
</style>
<script>
import Header from '../base/header-back'
import api from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '礼品卡',
      rollpicsList: [
        {
          rPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          rPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
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
      ],
      page: 1
    }
  },
  components: {
    Header
  },
  created () {
    this.giftCard(1)
  },
  methods: {
    giftCard (page) {
      let form = this.$qs.stringify({
        start: page,
        length: 10
      })
      api.getAllgift(form)
        .then((res) => {
          console.log(res)
          this.rollpicsList = res.data.rollpicsList
          if (this.page === 1) {
            if (res.data.list.length === 0) {
              Toast('暂时还没有会员卡哟~')
            } else {
              this.cardList = res.data.list
            }
          }
        })
    }
  }
}
</script>
