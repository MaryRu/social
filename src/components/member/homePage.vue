<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <router-link to="/information" class="setting">
      <i class="icon icon-setting"></i>
    </router-link>
    <div class="homePage container">
      <div class="topPage">
        <label class="upload-img" for="upload-img">
          <img src="../../assets/images/bgImg.png" alt="" v-show="noPic">
          <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe-item class="slide1" v-for="(item,index) in users.list" :key="index">
              <img :src="item.puPic" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </label>
        <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
        <div class="headImg">
          <img :src="users.uImg" alt="">
          <i class="icon icon-camera-select"></i>
        </div>
      </div>
      <div class="home-page-info">
        <p>{{users.uName}}</p>
        <span>{{users.uIntroduction}}</span>
      </div>
      <div class="nav">
        <div class="flex-align-center">
          <i class="icon icon-group mr"></i>
          <p>我的社团</p>
        </div>
        <div class="noData" v-show="noData">
          <div class="noActive flex-center flex-align-center">
            <i class="icon icon-noActive"></i>
          </div>
          <p class="mt">您还没有加入社团哟</p>
        </div>
        <ul v-show="!noData" class="flex-align-center flex-wrap mt">
          <li v-for="(item,index) in groupList" :key="index">
            <router-link to="/">
              <img :src="item.plpic" alt="">
              <p class="text-ellipsis-line">{{item.plname}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="flex-align-center">
          <i class="icon icon-friends mr"></i>
          <p>我的好友</p>
        </div>
        <div class="noData" v-show="noData">
          <router-link to="/">
            <div class="noActive flex-center flex-align-center">
              <i class="icon icon-noFriend"></i>
            </div>
            <p class="mt">您还没有亲密好友哟~</p>
            <p>快去购买礼品卡送给心仪的她吧~</p>
          </router-link>
        </div>
        <ul v-show="!noData" class="flex-align-center flex-wrap mt">
          <li v-for="(item,index) in friends" :key="index">
            <router-link to="/otherHome">
              <img :src="item.pic" alt="">
              <p class="text-ellipsis-line">{{item.uname}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt">
        <!-- 我发布的动态哦 -->
        <div class="noData" v-show="noData">
          <router-link to="/postEdit">
            <div class="noActive flex-center flex-align-center">
              <i class="icon icon-noContent"></i>
            </div>
            <p class="mt">您还没有发布内容哟~</p>
            <p>快去告诉大家你现在的想法吧~</p>
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
                  <div class="name-box ml">
                    <p class="mb title">{{item.uname}}</p>
                    <span>{{item.tAddtime}}</span>
                  </div>
                </div>
                <i class="icon icon-more"></i>
              </div>
              <div class="list-content mb">
                <div class="text">
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
                <router-link :to="{path: '/detail/'+item.tId}">
                  <span class="comment flex-align-center">
                    <i class="icon icon-comment"></i>{{item.tComment}}</span>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <scrollTop></scrollTop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
@import '../../assets/less/group';
.setting {
  position: fixed;
  top: .1rem;
  right: 0.2rem;
  z-index: 9999;
}
.home-page-info {
  padding-top: .8rem;
  text-align: center;
  background-color: #fff;
  p {
    font-size: .3rem;
  }
}
.nav {
  padding: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}

.noData {
  text-align: center;
}
.noActive {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
</style>
<script>
import Header from '../base/header-back'
import Group from '../base/group'
import scrollTop from '../base/scrollTop'
import api, { uId } from '../../assets/js/api'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '个人主页',
      noData: false,
      noPic: false,
      users: {
        uName: '这里是昵称',
        uIntroduction: '这里是个性签名',
        uImg: '',
        list: [
          {
            src: 'http://img.hb.aicdn.com/78b6b50d6456d2ff440226520de1d8da7c60066c128ea-NJpMIe_fw658'
          },
          {
            src: 'http://img.hb.aicdn.com/78b6b50d6456d2ff440226520de1d8da7c60066c128ea-NJpMIe_fw658'
          },
          {
            src: 'http://img.hb.aicdn.com/78b6b50d6456d2ff440226520de1d8da7c60066c128ea-NJpMIe_fw658'
          },
          {
            src: 'http://img.hb.aicdn.com/78b6b50d6456d2ff440226520de1d8da7c60066c128ea-NJpMIe_fw658'
          }
          
        ]
      },
      groupList: [
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈养老圈养老圈养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        }
      ],
      friends: [
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        }
      ],
      listDetail: []
    }
  },
  components: {
    Header,
    Group,
    scrollTop
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getUserById(form)
      .then((res) => {
        console.log(res)
        this.users = res.data.users
        if (res.data.users.list === null) {
          this.noPic = true
        }
        if (res.data.plateUsersList.length === 0 ) {
          this.noData = true
        } else {
          this.groupList = res.data.plateUsersList
        }
        if (res.data.userFriendsList.length === 0) {
          this.noData = true
        } else {
          this.friends = res.data.userFriendsList
        }
        if (res.data.tiebaList.length === 0) {
          this.noData = true
        } else {
          this.listDetail = res.data.tiebaList
        }
        sessionStorage.setItem('name',res.data.users.uName)
        sessionStorage.setItem('sign',res.data.users.uIntroduction)
        sessionStorage.setItem('img',res.data.users.uImg)
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
    }
  },
  methods: {
    islike () {
      
    },
    uploadImg () {
      var formData = new FormData()
      var reader = new FileReader()
      var imgName = this.$el.querySelector('.file').files[0].name
      reader.readAsDataURL(this.$el.querySelector('.file').files[0]);
      Indicator.open()
      reader.onload = (e) => {
        var image = new Image()
        image.src = e.target.result
        image.onload = () => {
          let form = this.$qs.stringify({
            uploadFile: image.src,
            uId: uId
          })
          api.pictureupload(form)
            .then((res) => {
              console.log(res)
              setTimeout(() => Indicator.close(), 1000)
              this.$router.replace('/homePagenull')
            })
        }
      }
    }
  }
}
</script>
