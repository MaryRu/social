<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="index container">
      <mt-swipe :auto="4000" class="swiper">
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
                  <div class="add-button">
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
            <div class="list-top mb flex-between">
              <div class="flex-between">
                <div class="img-box">
                  <img :src="item.uimg" alt="">
                </div>
                <div class="name-box ml">
                  <p class="mb title">{{item.uname}}</p>
                  <span>{{item.tAddtime}}</span>
                </div>
              </div>
              <i class="icon icon-more"></i>
            </div>
            <div class="list-content mb">
              <div class="text">
                <router-link to="/">{{item.tTitle}}</router-link>
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
              <span class="like flex-align-center">
                <div class="VueStar" :class="[item.is_like == 1 ? 'islike' : '']">
                  <div class="VueStar__ground">
                    <div class="VueStar__icon" @click="islike(item.tId, index)" :class="{'animated tada': !!item.is_like}">
                      <i class="icon icon-like"></i>
                    </div>
                    <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': !!item.is_like }"></div>
                  </div>
                </div>
                {{item.tNum}}
              </span>
              <router-link to="/">
                <span class="comment flex-align-center">
                  <i class="icon icon-comment"></i>{{item.comment_size}}</span>
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

<script>
import Header from './base/header'
import scrollTop from './base/scrollTop'
import Footer from './base/footer'
import group from './base/group'
import api from '../assets/js/api'
var uId = localStorage.getItem('uId')
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
      ]
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
    }
  },
  created () {
    let _l = this.cardList.length
    // this.S_width = _l * 1.28 + (_l - 1) * 0.26
    this.S_width = _l * 2 + (_l - 1) * 1
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
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index';
</style>
