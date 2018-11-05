<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <router-link to="/information" class="setting">
      <i class="icon icon-setting"></i>
    </router-link>
    <div class="homePage container">
      <div class="topPage">
        <label v-show="imgLength" class="upload-img" for="upload-img">
          <img src="../../assets/images/bgImg.png" alt="" v-show="noPic">
        </label>
        <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item class="slide1" v-for="(item,index) in users.list" :key="index">
            <img :src="item.puPic" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="headImg">
          <img :src="users.uImg" alt="">
          <!-- <i class="icon icon-camera-select"></i> -->
        </div>
      </div>
      <div class="home-page-info">
        <p>{{users.uName}}</p>
        <span>{{users.uIntroduction}}</span>
      </div>
      <div class="nav">
        <div class="flex-align-center">
          <i class="icon icon-album mr"></i>
          <p>我的相册</p>
        </div>
        <div class="noData" v-show="noPic">
          <div class="noActive flex-center flex-align-center">
            <i class="icon icon-noAlbum"></i>
          </div>
          <p class="mt">告诉大家你的近况吧</p>
        </div>
        <ul v-show="!noPic" class="flex-align-center flex-wrap mt">
          <li v-for="(item,index) in users.list" :key="index" class="img-list">
            <img :src="item.puPic" alt="">
            <i class="icon icon-cha cha" @click="cha(users.list, index, item)"></i>
          </li>
          <li>
            <label v-show="imgLength" class="upload-img" for="upload-img">
              <i slot="icon" class="icon icon-img"></i>
            </label>
            <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
          </li>
        </ul>
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
            <router-link :to="{path: '/plate/'+item.plId}">
              <img :src="item.plpic" alt="">
              <p class="text-ellipsis-line">{{item.plname}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav ">
        <div class="flex-align-center">
          <i class="icon icon-friends mr"></i>
          <p>我的好友</p>
        </div>
        <div class="noData" v-show="noFriends">
          <router-link to="/intimate">
            <div class="noActive flex-center flex-align-center">
              <i class="icon icon-noFriend"></i>
            </div>
            <p class="mt">您还没有亲密好友哟~</p>
            <p>快去购买礼品卡送给心仪的她吧~</p>
          </router-link>
        </div>
        <div class="friends-content">
          <ul :style="{width: S_width + 'rem'}" v-show="!noFriends" class="flex-align-center flex-wrap mt">
            <li v-for="(item,index) in friends" :key="index">
              <router-link :to="{path: '/otherHome/'+item.uId}">
                <img :src="item.pic" alt="">
                <p class="text-ellipsis-line">{{item.uname}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt">
        <!-- 我发布的动态哦 -->
        <div class="noData" v-show="noTiezi">
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
                  <div class="name-box flex-align-center">
                    <div>
                      <p class="title">{{item.uname}}</p>
                      <!-- <span>{{item.platename}}  丨</span>  -->
                       <span>{{item.tAddtime  | goodTime}}</span>
                    </div>
                  </div>
                </div>
                <!-- <i class="icon icon-more" @click="more(item)"></i> -->
                <div class="flex-align-center" @click="delect(listDetail, index, item)">
                  <i class="icon icon-delect"></i>
                  <!-- <span>删除</span> -->
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
    <!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <!-- 预览区域顶部的默认UI，可以修改 -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  与图片相关的操作 -->
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <!--将分享按钮去掉 -->
            <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
    <scrollTop></scrollTop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
@import '../../assets/less/group';
.img-box {
  padding: 0;
}
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
.img-list {
  position: relative;
}
.cha {
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  right: 0;
}
.nav {
  padding: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.friends-content {
  width: 6rem;
  overflow-x: scroll;
  ul {
    display: flex;
    li {
      width: 10%;
    }
  }
  .friendsList {
    height: auto;
    margin-left: .15rem;
    border: 1px solid #ccc;
    img {
      width: 100%;
      height: 2rem;
    }
  }
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
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import Header from '../base/header-back'
import Group from '../base/group'
import scrollTop from '../base/scrollTop'
import api, { uId } from '../../assets/js/api'
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '个人主页',
      noData: false,
      noTiezi: false,
      noFriends: false,
      noPic: false,
      imgLength: true,
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
    let _l = this.friends.length
    this.S_width = _l * 2 + (_l - 1) * 1
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getUserById(form)
      .then((res) => {
        console.log(res)
        this.users = res.data.users
        if (res.data.users.list === null) {
          this.noPic = true
        } else if (res.data.users.list.length >= 9) {
          this.imgLength = false
        }
        if (res.data.plateUsersList.length === 0 ) {
          this.noData = true
        } else {
          this.noData = false
          this.groupList = res.data.plateUsersList
        }
        if (res.data.userFriendsList.length === 0) {
          this.noFriends = true
        } else {
          this.friends = res.data.userFriendsList
        }
        if (res.data.tiebaList.length === 0) {
          this.noTiezi = true
        } else {
          this.listDetail = res.data.tiebaList
        }
        sessionStorage.setItem('userinfo',JSON.stringify(res.data.users))
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
  updated() {
    this.initPhotoSwipeFromDOM('.my-gallery')
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
    uploadImg () {
      if (this.users.list == null || this.users.list.length < 9) {
        var formData = new FormData()
        var reader = new FileReader()
        // var imgName = this.$el.querySelector('.file').files[0].name
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
      } else if (this.users.list.length >= 9) {
        this.imgLength = false
        Toast('最多只能上传9张图片')
      }
    },
    delect (list, index, item) {
      // 删除帖子
      let form = this.$qs.stringify({
        tId: item.tId
      })
      api.deleteTieba(form)
      .then((res) => {
        console.log(res)
      })
      list.splice(index, 1)
      if (list.length == 0) {
        this.noTiezi = true
        return false
      }
    },
    cha (imgList, index, item) {
      // 删除背景图片
      console.log(imgList)
      let form = this.$qs.stringify({
        picName: item.puPic,
        puId: item.puId
      })
      api.delete(form)
        .then((res) => {
          console.log(res)
        })
      imgList.splice(index, 1)
      if (imgList.length == 0) {
        this.noPic = true
        return false
      }
    },
    initPhotoSwipeFromDOM(gallerySelector) {
      var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item
        for (var i = 0; i < numNodes; i++) {
          figureEl = thumbElements[i];
          if (figureEl.nodeType !== 1) {
            continue
          }
          linkEl = figureEl.children[0];
          size = linkEl.getAttribute('data-size').split('x')
          item = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          };
          if (figureEl.children.length > 1) {
            item.title = figureEl.children[1].innerHTML
          }
          if (linkEl.children.length > 0) {
            item.msrc = linkEl.children[0].getAttribute('src')
          }
          item.el = figureEl
          items.push(item)
        }
        return items
      }
      var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn))
      }
      var onThumbnailsClick = function(e) {
        e = e || window.event
        e.preventDefault ? e.preventDefault() : e.returnValue = false
        var eTarget = e.target || e.srcElement
        var clickedListItem = closest(eTarget, function(el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
        });

        if (!clickedListItem) {
          return;
        }
        var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index
        for (var i = 0; i < numChildNodes; i++) {
          if (childNodes[i].nodeType !== 1) {
            continue
          }
          if (childNodes[i] === clickedListItem) {
            index = nodeIndex
            break
          }
          nodeIndex++
        }

        if (index >= 0) {
          openPhotoSwipe(index, clickedGallery)
        }
        return false;
      }
      var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
          params = {}
        if (hash.length < 5) {
          return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue
          }
          var pair = vars[i].split('=');
          if (pair.length < 2) {
            continue
          }
          params[pair[0]] = pair[1];
        }
        if (params.gid) {
          params.gid = parseInt(params.gid, 10)
        }
        return params
      }

      var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items
        items = parseThumbnailElements(galleryElement);
        options = {
          history: false,
          galleryUID: galleryElement.getAttribute('data-pswp-uid'),
          getThumbBoundsFn: function(index) {
            var thumbnail = items[index].el.getElementsByTagName('img')[0],
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect()
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          }

        }
        if (fromURL) {
          if (options.galleryPIDs) {
            for (var j = 0; j < items.length; j++) {
              if (items[j].pid == index) {
                options.index = j
                break
              }
            }
          } else {
            options.index = parseInt(index, 10) - 1
          }
        } else {
          options.index = parseInt(index, 10)
        }
        if (isNaN(options.index)) {
          return ''
        }
        if (disableAnimation) {
          options.showAnimationDuration = 0
        }

        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
        gallery.init()
      }
      var galleryElements = document.querySelectorAll(gallerySelector)
      for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1)
        galleryElements[i].onclick = onThumbnailsClick
      }
      var hashData = photoswipeParseHash()
      if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
      }
    }
  }
}
</script>
