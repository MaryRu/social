<template>
  <div class="index">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :auto-fill="false" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="post-list page-loadmore-list">
          <div v-for="(item, index) in list" :key="index" class="post-item page-loadmore-listitem">
            <div class="post-header">
              <div class="avatar"><img :src="item.uimg" alt=""></div>
              <div class="info">
                <div class="user">
                  <span>{{item.uname}}
                    <i class="icon male-icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
import api from '../../assets/js/api'
import { Toast } from 'mint-ui'
var uId = localStorage.getItem('uId')
export default {
  data () {
    return {
      list: [
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 1
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 2
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 3
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 4
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 5
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 6
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 7
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 8
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 9
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 10
        // },
        // {
        //   uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        //   uname: 11
        // },
      ],
      topStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0,
      allLoaded: false,
      bottomStatus: '',
      page: 1
    }
  },
  created () {
    this.getList(1)
  },
  mounted () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 61
  },
  methods: {
    getList (page) {
      let form = this.$qs.stringify({
        start: page,
        length: 3,
        uId: uId
      })
      api.getAllTieba(form)
        .then((res) => {
          if (res.data.tiebaList.length === 0) {
            Toast({
              message: '没有了~',
              position: 'bottom',
              duration: 2000
            })
          } else {
            if (page === 1) {
              this.list = res.data.tiebaList
              this.page = 2
            } else {
              for (let i = 0; i < res.data.tiebaList.length; i++) {
                this.list.push(res.data.tiebaList[i])
              }
              this.page++
              console.log(this.page)
            }
          }
        })
    },
    handleTopChange (status) {
      console.log(status)
      this.moveTranslate = 1
      this.topStatus = status
    },
    loadTop () {
      setTimeout(() => {
        this.getList(1)
        this.$refs.loadmore.onTopLoaded()
      }, 1500)
    },
    handleBottomChange (status) {
      console.log(status)
      this.bottomStatus = status
    },
    loadBottom () {
      setTimeout(() => {
        this.getList(this.page)
        this.$refs.loadmore.onBottomLoaded()
      }, 1500)
    }
  }
}
</script>
