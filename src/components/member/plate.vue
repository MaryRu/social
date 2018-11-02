<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <i class="icon icon-search search"></i>
    <div class="group container">
      <div class="group-top flex-align-center">
        <div class="img-box">
          <img :src="info.img" alt="">
        </div>
        <div class="text-box">
          <router-link to="/postEdit">
            <div class="flex-between flex-align-center">
              <p>分享新鲜事</p>
              <div class="flex-align-center">
                <i class="icon icon-edit"></i>
                <p>丨</p>
                <i class="icon icon-camera"></i>
              </div>
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
                  <div class="name-box ml">
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
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/group';
@import '../../assets/less/group/index';
</style>

<script>
import Footer from '../base/footer'
import Header from '../base/header-back'
import scrollTop from '../base/scrollTop'
import group from '../base/group'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '我的社团',
      info: {
        img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
      },
      listDetail: []
    }
  },
  components: {
    Header,
    Footer,
    group,
    scrollTop
  },
  created () {
    this.info.img = sessionStorage.getItem('uImg')
    let form = this.$qs.stringify({
      plid: this.$route.params.id
    })
    api.getByPlid(form)
      .then((res) => {
        console.log(res)
        this.listDetail = res.data.tiebaList
      })
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
  methods: {
    islike () {

    }
  }
}
</script>

