<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="index container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(swiper,index) in swiperList" :key="index">
          <img :src="swiper.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <ul class="mt classify flex-around">
        <li class="nav">
          <router-link to="/available">
            <div class="nav-content">
              <img src="../assets/images/nav_01.png" alt="">
              <p class="mt">可领招待</p>
            </div>
          </router-link>
        </li>
        <li class="nav">
          <router-link to="/entertain">
            <div class="nav-content">
              <img src="../assets/images/nav_02.png" alt="">
              <p class="mt">我的招待</p>
            </div>
          </router-link>
        </li>
        <li class="nav">
          <router-link to="/intimate">
            <div class="nav-content">
              <img src="../assets/images/nav_03.png" alt="">
              <p class="mt">亲密关系</p>
            </div>
          </router-link>
        </li>
        <li class="nav">
          <router-link to="/giftcard">
            <div class="nav-content">
              <img src="../assets/images/nav_04.png" alt="">
              <p class="mt">礼品卡</p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="friends mt">
        <p class="mb">礼品卡</p>
        <div class="friends-content">
          <ul :style="{width: S_width + 'rem'}">
            <li v-for="(friend,index) in friendsList" :key="index" class="friendsList">
              <img :src="friend.headImg" alt="">
              <div class="name-box">
                <p>{{friend.name}}</p>
                <!-- <span>{{friend.desc}}</span> -->
                <div class="friends-button mt">
                  <div class="add-button">
                    <p>立即购买</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="friends-bottom">
          <router-link to="/">
            <div class="friends-all mt">
              查看所有
            </div>
          </router-link>
        </div>
      </div>
      <group></group>
    </div>
    <scrollTop></scrollTop>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>

<script>
import Header from './base/header'
import scrollTop from './base/scrollTop'
import Footer from './base/footer'
import group from './base/group'
export default {
  data () {
    return {
      tabname: '青沫茶颜',
      cartLength: 0,
      S_width: 0,
      swiperList: [
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        }
      ],
      friendsList: [
        {
          headImg: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          name: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          headImg: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          name: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          headImg: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          name: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          headImg: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          name: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          headImg: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          name: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        }
      ]
    }
  },
  components: {
    Header,
    scrollTop,
    Footer,
    group
  },
  created () {
    let _l = this.friendsList.length
    // this.S_width = _l * 1.28 + (_l - 1) * 0.26
    this.S_width = _l * 2 + (_l - 1) * 1
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index';
</style>
