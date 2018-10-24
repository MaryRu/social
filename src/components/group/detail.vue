<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="post-detail">
      <div class="post-item page-loadmore-listitem">
        <div class="post-header">
          <div class="avatar"><img :src="info.uimg" alt=""></div>
          <div class="info">
            <div class="user">
              <span>{{info.uname}}
                <i class="icon male-icon"></i>
              </span>
            </div>
            <div>
              <span class="time">{{info.tAddtime | goodTime}}</span>
            </div>
          </div>
        </div>
        <div class="post-content">
          <div class="text">{{info.tTitle}}</div>
          <div class="thumbnails my-gallery">
            <figure v-for="(img, index) in info.tiebaPictureslist" :key="index" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
              <a :href="img.ptPic" itemprop="contentUrl" :data-size="img.ptPic | dataSize">
                <img :src="img.ptPic + '?imageView2/5/w/100/h/100'" itemprop="thumbnail" alt="" />
              </a>
            </figure>
          </div>
        </div>
        <div class="post-bottom">
          <span class="like">
            <div class="VueStar" :class="[isLike == 1 ? 'islike' : '']">
              <div class="VueStar__ground">
                <div class="VueStar__icon" @click="islike(info.tId)" :class="{'animated tada': !!isLike}">
                  <i class="icon icon-like"></i>
                </div>
                <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': !!isLike }"></div>
              </div>
            </div>
            {{info.tNum}}
          </span>
          <span class="comment">
            <i class="icon icon-comment"></i>{{info.tComment}}</span>
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
            <!--<button class="pswp__button pswp__button--share" title="Share"></button>-->
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
    <!-- 评论列表 -->
    <div class="comment-wrap">
      <div class="reply-title">
        <span>
          <i class="icon icon-reply"></i>全部评论({{info.tComment}})</span>
      </div>
      <div class="content">
        <div class="comment-item" v-for="(list, index) in info.commentsList" :key="index">
          <div class="comment-header">
            <div class="avatar">
              <img :src="list.uimg" alt="">
              <p>{{index + 1}}楼</p>
            </div>
            <div class="info">
              <div class="user">
                <span>{{list.uname}}
                  <i class="icon male-icon"></i>
                </span>
              </div>
              <div>
                <span class="time">{{list.r1 | goodTime}}</span>
                <!-- <span class="local">南阳理工学院</span> -->
              </div>
            </div>
            <mt-button>
              <i class="icon icon-like"></i>
            </mt-button>
          </div>
          <div class="comment-content">
            <div class="text">{{list.cContent}}</div>
            <!-- <div class="img"><img src="" alt=""></div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="comment-form">
      <mt-field class="comment-input" placeholder="评论" v-model="userComment"></mt-field>
      <mt-button @click="commentForm" class="comment-btn" type="default">评论</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/post';
.pswp {
  height: 0;
}
</style>
<script>
import Header from '../base/header-back'
import api, {uId} from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '详情',
      info: {
        uimg: 'http://img.hb.aicdn.com/a7bc3183547c3b0e0744e4ecd24f63da6e45d6d27ac5-Y2Y0eY_fw658',
        uname: '歌颂者',
        tAddtime: '2018-10-19',
        tiebaPictureslist: [
          {
            ptPic: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658'
          },
          {
            ptPic: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658'
          },
          {
            ptPic: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658'
          },
          {
            ptPic: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658'
          }
        ],
        tNum: '123',
        tComment: '123',
        commentsList: [
          {
            uimg: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658',
            uname: '其他人',
            cContent: '这里是评论内容'
          },
          {
            uimg: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658',
            uname: '其他人',
            cContent: '这里是评论内容'
          },
          {
            uimg: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658',
            uname: '其他人',
            cContent: '这里是评论内容'
          },
          {
            uimg: 'http://img.hb.aicdn.com/21a8d3bf73d31e67532ce4222dcbf941a36a8ac321c6f-63EPv4_fw658',
            uname: '其他人',
            cContent: '这里是评论内容'
          }
        ]
      },
      userComment: '',
      isLike: ''
    }
  },
  components: {
    Header
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      let form = this.$qs.stringify({
        tId: this.$route.params.id
      })
      api.getByTid(form)
        .then((res) => {
          console.log(res)
          this.info = res.data.tieba
        })
    },
    commentForm () {
      let addcom = this.$qs.stringify({
        uId: uId,
        cContent: this.userComment,
        tId: this.$route.params.id
      })
      api.addcomment(addcom)
        .then((res) => {
          console.log(res)
          this.$router.replace('/reload/'+this.$route.params.id)
          // location.reload()
        })
    },
    initPhotoSwipeFromDOM (gallerySelector) {
      var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item
        for (var i = 0; i < numNodes; i++) {
          figureEl = thumbElements[i]
          if (figureEl.nodeType !== 1) {
            continue
          }
          linkEl = figureEl.children[0]
          size = linkEl.getAttribute('data-size').split('x')
          item = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          }
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
      var closest = function closest (el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn))
      }
      var onThumbnailsClick = function (e) {
        e = e || window.event
        e.preventDefault ? e.preventDefault() : e.returnValue = false
        var eTarget = e.target || e.srcElement
        var clickedListItem = closest(eTarget, function (el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
        })

        if (!clickedListItem) {
          return
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
        return false
      }
      var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
          params = {}
        if (hash.length < 5) {
          return params
        }
        var vars = hash.split('&')
        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue
          }
          var pair = vars[i].split('=')
          if (pair.length < 2) {
            continue
          }
          params[pair[0]] = pair[1]
        }
        if (params.gid) {
          params.gid = parseInt(params.gid, 10)
        }
        return params
      }

      var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items
        items = parseThumbnailElements(galleryElement)
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
    },
    islike(tid) {
      if (!!localStorage.getItem('uId')) {
        // var form = {
        //   user_id: localStorage.getItem('user_id'),
        //   token: localStorage.getItem('token'),
        //   tid: tid
        // }
        // this.$http.post(url + 'tieba/v1/tieba/like', form)
        //   .then(response => {
        //     Toast({
        //       message: response.data.message[0],
        //       position: 'bottom',
        //       duration: 2000
        //     })
        //     if (response.data.code == 200) {
        //       this.isLike = response.data.data.is_like
        //     }
        //   })
        //   .catch(error => {
        //     if (error.response.data.code == 0) {
        //       Toast({
        //         message: '服务器开小差啦（ﾉ´д｀）快去告诉程序猿~',
        //         position: 'bottom',
        //         duration: 2000
        //       })
        //     } else {
        //       Toast({
        //         message: error.response.data.message[0],
        //         position: 'bottom',
        //         duration: 2000
        //       })
        //     }
        //     console.log(error.response)
        //   })
      } else {
        Toast({
          message: '您还未登录',
          position: 'bottom',
          duration: 2000
        })
        this.$router.push('/login')
      }
    }
  },
  updated() {
    this.initPhotoSwipeFromDOM('.my-gallery')
  },
  filters: {
    dataSize: function(value) {
      var reg1 = new RegExp('(^|&)w=([^&]*)(&|$)', 'i')
      var reg2 = new RegExp('(^|&)h=([^&]*)(&|$)', 'i')
      var w, h
      if (!!value.match(reg1)) {
        w = unescape(value.match(reg1)[2])
      } else {
        w = 400
      }
      if (!!value.match(reg2)) {
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
  }
}
</script>
