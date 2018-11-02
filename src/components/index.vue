<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="index container">
      <mt-swipe :auto="4000" class="swiper" style="height: 3rem">
        <mt-swipe-item v-for="(swiper,index) in swiperList" :key="index">
          <img :src="swiper.rPic" alt="">
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
            <li v-for="(card,index) in cardList" :key="index" class="friendsList">
              <img :src="card.gPic" alt="">
              <div class="name-box">
                <p>{{card.gTitle}}</p>
                <!-- <span>{{friend.desc}}</span> -->
                <div class="friends-button mt">
                  <div class="add-button" @click="buyNow">
                    <p>立即购买</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="friends-bottom">
          <router-link to="/giftcard">
            <div class="friends-all mt">
              查看所有
            </div>
          </router-link>
        </div>
      </div>
      <div class="group-content">
        <ul>
          <li v-for="(item,index) in listDetail" :key="index">
            <div class="list-top flex-between">
              <router-link :to="{path: '/otherHome/'+item.uId}">
                <div class="flex-between">
                  <div class="img-box">
                    <img :src="item.uimg" alt="">
                  </div>
                  <div class="name-box">
                    <div>
                      <p class="mb title">{{item.uname}}</p>
                      <span>{{item.platename}}  丨</span>  <span>{{item.tAddtime  | goodTime}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- <i class="icon icon-more"></i> -->
            </div>
            <div class="list-content mb">
              <div class="text mb">
                <router-link :to="{path: '/detail/'+item.tId}">{{item.tTitle}}</router-link>
              </div>
              <div class="thumbnails my-gallery">
                <figure v-for="(img, index) in item.tiebaPictureslist" :key="index" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a :href="img.ptPic" itemprop="contentUrl" :data-size="img.ptPic | dataSize">
                    <img :src="img.ptPic + '?imageView2/5/w/100/h/100'" itemprop="thumbnail" alt="" />
                  </a>
                </figure>
              </div>
            </div>
            <div class="list-bottom flex-align-center flex-between">
              <span class="like flex-align-center mr">
                <div class="VueStar" :class="[item.r1 == 1 ? 'islike' : '']">
                  <div class="VueStar__ground">
                    <div class="VueStar__icon" @click="islike(item)" :class="{'animated tada': !!item.is_like}">
                      <i class="icon icon-like"></i>
                    </div>
                    <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': !!item.is_like }"></div>
                  </div>
                </div>
                {{item.tNum}}
              </span>
              <router-link :to="{path: '/detail/'+item.tId}">
                <span class="comment flex-align-center">
                  <i class="icon icon-comment"></i>{{item.tComment}}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <scrollTop></scrollTop>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index';
</style>

<script>
import Header from './base/header'
import scrollTop from './base/scrollTop'
import Footer from './base/footer'
import group from './base/group'
import api from '../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '青沫茶颜',
      cartLength: 0,
      S_width: 0,
      swiperList: [
        {
          rPic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          rPic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          rPic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        }
      ],
      cardList: [
        {
          gPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          gTitle: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          gPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          gTitle: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          gPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          gTitle: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          gPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          gTitle: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        },
        {
          gPic: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          gTitle: '这里是卡品名称',
          desc: '这里是简介这里是简介这里是简介这里是简介，且只占一行'
        }
      ],
      listDetail: [
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          tAddtime: '2018-10-13',
          content: '这里是描述内容这里是描述内容这里是描述内容述内容这里是描述内容这里是描述内容这里是描述内容',
          files: [
            {
              ptPic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          comment_size: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          tAddtime: '2018-10-13',
          content: '这里是描述内容这里是描述内容这里是描述内容述内容这里是描述内容这里是描述内容这里是描述内容',
          files: [
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          comment_size: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          tAddtime: '2018-10-13',
          content: '这里是描述内容这里是描述内容这里是描述内容述内容这里是描述内容这里是描述内容这里是描述内容',
          files: [
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          comment_size: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          tAddtime: '2018-10-13',
          content: '这里是描述内容这里是描述内容这里是描述内容述内容这里是描述内容这里是描述内容这里是描述内容',
          files: [
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          comment_size: '555'
        }
      ],
      userInfo: {
        uImg: '',
        uName: ''
      }
    }
  },
  components: {
    Header,
    scrollTop,
    Footer,
    group
  },
  filters: {
    dataSize (value) {
      var reg1 = new RegExp('(^|&)w=([^&]*)(&|$)', 'i')
      var reg2 = new RegExp('(^|&)h=([^&]*)(&|$)', 'i')
      var w, h
      if (value.match(reg1)) {
        w = unescape(value.match(reg1)[2])
      } else {
        w = 400
      }
      if (value.match(reg2)) {
        h = unescape(value.match(reg2)[2])
      } else {
        h = 400
      }
      return w + 'x' + h
    },
    goodTime(value) {
      var now = new Date().getTime(),
        oldTime = new Date(value).getTime(),
        difference = now - oldTime,
        result = '',
        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        halfamonth = day * 15,
        month = day * 30,
        year = month * 12,

        _year = difference / year,
        _month = difference / month,
        _week = difference / (7 * day),
        _day = difference / day,
        _hour = difference / hour,
        _min = difference / minute
      if (_year >= 1) { result = ~~(_year) + " 年前" }
      else if (_month >= 1) { result = ~~(_month) + " 个月前" }
      else if (_week >= 1) { result = ~~(_week) + " 周前" }
      else if (_day >= 1) { result = ~~(_day) + " 天前" }
      else if (_hour >= 1) { result = ~~(_hour) + " 小时前" }
      else if (_min >= 1) { result = ~~(_min) + " 分钟前" }
      else result = "刚刚"
      return result
    }
  },
  created () {
    let _l = this.cardList.length
    // this.S_width = _l * 1.28 + (_l - 1) * 0.26
    this.S_width = _l * 2 + (_l - 1) * 1
    // if (!uId) {
    //   Toast('您还未登录')
    //   setTimeout(this.$router.replace('/login', 3000))
    // } else {
     
    // }
     
  },
  mounted () {
    var uId = localStorage.getItem('uId')
    if (!uId) {
      Toast('您还未登录')
      this.$router.replace('/login')
    } else {
      let form = this.$qs.stringify({
        uId: uId
      })
      api.index(form)
        .then((res) => {
          console.log(res)
          this.swiperList = res.data.pixlist
          this.cardList = res.data.giftlist
          this.listDetail = res.data.tiebalist
        })
      // 个人信息
      api.getUserById(form)
        .then((res) => {
          console.log(res)
          sessionStorage.setItem('uImg',res.data.users.uImg)
          sessionStorage.setItem('uName',res.data.users.uName)
        })
    }
  },
  methods: {
    islike (value) {
      console.log(value)
      let form = this.$qs.stringify({
        uId: uId,
        tId: value.tId
      })
      api.givelike(form)
        .then((res) => {
          console.log(res)
        })
      value.r1 = 1
      value.tNum++
    },
    buyNow () {
      this.$router.push('/success')
    }
  }
}
</script>
