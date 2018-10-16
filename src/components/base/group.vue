<template>
  <div class="group-content">
        <ul>
          <li v-for="(item,index) in listDetail" :key="index">
            <div class="list-top mb flex-between">
              <div class="flex-between">
                <div class="img-box">
                  <img :src="item.img" alt="">
                </div>
                <div class="name-box ml">
                  <p class="mb title">{{item.name}}</p>
                  <span>{{item.time}}</span>
                </div>
              </div>
              <i class="icon icon-more"></i>
            </div>
            <div class="list-content mb">
              <div class="text">
                <router-link to="/">{{item.content}}</router-link>
              </div>
              <div class="thumbnails my-gallery">
                <figure v-for="(img, index) in item.files" :key="index" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                  <a :href="img.file_name" itemprop="contentUrl" :data-size="img.file_name | dataSize">
                    <img :src="img.file_name + '?imageView2/5/w/100/h/100'" itemprop="thumbnail" alt="" />
                  </a>
                </figure>
              </div>
            </div>
            <div class="list-bottom flex-align-center flex-between">
              <span class="like flex-align-center">
                <div class="VueStar" :class="[item.is_like == 1 ? 'islike' : '']">
                  <div class="VueStar__ground">
                    <div class="VueStar__icon" @click="islike(item.id, index)" :class="{'animated tada': !!item.is_like}">
                      <i class="icon icon-like"></i>
                    </div>
                    <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': !!item.is_like }"></div>
                  </div>
                </div>
                {{item.likes_size}}
              </span>
              <router-link to="/">
                <span class="comment flex-align-center">
                  <i class="icon icon-comment"></i>{{item.comment_size}}</span>
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
          comment_size: '555'
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
          comment_size: '555'
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
          comment_size: '555'
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
          comment_size: '555'
        }
      ]
    }
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
    islike (i) {
    }
  }
}
</script>
