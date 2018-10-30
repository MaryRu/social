<template>
  <div class="group-content">
    <ul>
      <li v-for="(item,index) in listDetail" :key="index">
        <div class="list-top mb flex-between">
          <div class="flex-between">
            <div class="img-box">
              <img :src="item.uimg" alt="">
            </div>
            <div class="name-box ml flex-align-center">
              <div>
                <p class="title">{{item.uname}}</p>
                <span>{{item.platename}}  丨</span> <span>{{item.tAddtime | goodTime}}</span>
              </div>
            </div>
          </div>
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
          <span class="like flex-align-center">
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
          <router-link :to="'/detail/'+item.tId">
            <span class="comment flex-align-center">
              <i class="icon icon-comment"></i>{{item.tComment}}</span>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
@import '../../assets/less/group';
</style>
<script>
import api from '../../assets/js/api'
import { Toast } from 'mint-ui'
var uId = localStorage.getItem('uId')
export default {
  data () {
    return {
      listDetail: [
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          time: '2018-10-13',
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
            },
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          tComment: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          time: '2018-10-13',
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
          tComment: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          time: '2018-10-13',
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
          tComment: '555'
        },
        {
          id: '1',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '没头脑的不高兴不开心',
          time: '2018-10-13',
          content: '这里是描述内容这里是描述内容这里是描述内容述内容这里是描述内容这里是描述内容这里是描述内容',
          files: [
            {
              file_name: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ],
          is_like: '1',
          likes_size: '123',
          tComment: '555'
        }
      ],
      loading: false
    }
  },
  created () {
    this.groupList()
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
    groupList () {
      let form = this.$qs.stringify({
        uId: uId
      })
      api.getAllTieba(form)
        .then((res) => {
          console.log(res)
          if (res.data.length === 0) {
            Toast('没有数据啦~')
          } else {
            this.listDetail = res.data.tiebaList
          }
        })
    },

  }
}
</script>
