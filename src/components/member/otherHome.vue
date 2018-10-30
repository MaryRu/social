<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="otherHome container">
      <div class="topPage">
        <img src="../../assets/images/bgImg.png" alt="" v-show="noPic">
        <mt-swipe :auto="4000" :show-indicators="false" v-show="!noPic">
          <mt-swipe-item class="slide1" v-for="(item,index) in info.list" :key="index">
            <img :src="item.puPic" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="headImg">
          <img :src="info.uImg" alt="">
        </div>
      </div>
      <div class="home-page-info">
        <p>{{info.uName}}</p>
        <span>{{info.uIntroduction}}</span>
      </div>
      <div class="mt">
        <!-- 小伙伴发布的动态哦 -->
        <div class="noData" v-show="noTiezi">
          <router-link to="/postEdit">
            <div class="noActive flex-center flex-align-center">
              <i class="icon icon-noContent"></i>
            </div>
            <p class="mt">小伙伴还没有发布内容哟~</p>
          </router-link>
        </div>
        <div class="group-content">
          <ul>
            <li v-for="(item,index) in listDetail" :key="index">
              <div class="list-top mb flex-between">
                <div class="flex-between">
                  <div class="img-box">
                    <img :src="item.uimg" alt="">
                  </div>
                  <div class="name-box flex-align-center ml">
                    <div>
                      <p class="mb title">{{item.uname}}</p>
                      <span>{{item.tAddtime}}</span>
                    </div>
                  </div>
                </div>
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
                <!-- <div class="flex-around flex-align-center"> -->
                  <span class="like flex-align-center mr">
                    <div class="VueStar" :class="[item.r1 == 1 ? 'islike' : '']">
                      <div class="VueStar__ground">
                        <div class="VueStar__icon" @click="islike(item)" :class="{'animated tada': !!item.r1}">
                          <i class="icon icon-like"></i>
                        </div>
                        <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': !!item.r1 }"></div>
                      </div>
                    </div>
                    {{item.tNum}}
                  </span>
                  <router-link :to="{path: '/detail/'+item.tId}">
                    <span class="comment flex-align-center">
                      <i class="icon icon-comment"></i>{{item.tComment}}</span>
                  </router-link>
                <!-- </div> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/index';
@import '../../assets/less/member/index';
.home-page-info {
  padding-top: .8rem; 
  padding-bottom: .2rem;
  text-align: center;
  background-color: #fff;
  p {
    font-size: .3rem;
  }
}
</style>

<script>
import Group from '../base/group'
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      noPic: false,
      noTiezi: false,
      tabname: '',
      info: {
        uName: '小明',
        uIntroduction: '个性签名',
        list: [
          {
            puPic: 'http://115.158.20.211:8088/social_project/upload/2b28c635-cd01-45cc-8b14-e5b33379e43d.jpeg'
          }
        ]
      },
      listDetail: [
        {

        }
      ]
    }
  },
  components: {
    Header,
    Group
  },
  created () {
    this.userInfo()
    console.log(this.$route.params.id)
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
  methods: {
    userInfo () {
      let form = this.$qs.stringify({
        uId: this.$route.params.id
      })
      api.getUserById(form)
        .then((res) => {
          console.log(res)
          this.info = res.data.users
          this.tabname = res.data.users.uName + '的个人主页'
          this.listDetail = res.data.tiebaList
        })
    },
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
    }
  }
}
</script>
