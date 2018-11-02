<template>
  <div class="pending mt">
    <!-- 待领取 -->
    <noPage v-show="nopage"></noPage>
    <ul v-show="!nopage">
      <li v-for="(item,index) in pending" :key="index" class="mb">
        <div class="imgBox">
          <img :src="item.pic" alt="">
        </div>
        <p class="mt">已领取的人</p>
        <div class=" mt flex-align-center">
          <div class="header-box">
            <router-link :to="{path: '/otherHome/'+item.fId}">
              <div class="headImg mr">
                <img :src="item.fimg" alt="">
              </div>
            </router-link>
          </div>
          <div class="headImg" v-show="headImgBox">
            <img src="../../assets/images/icon/more.png" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group/available';
</style>

<script>
import noPage from '../base/noPage'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      nopage: false,
      headImgBox: false,
      pending: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          headImg: [
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ]
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          headImg: [
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ]
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          headImg: [
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ]
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg',
          headImg: [
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            },
            {
              pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
            }
          ]
        }
      ]
    }
  },
  components: {
    noPage
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId,
      status: 1
    })
    api.getentertainByUser(form)
      .then((res) => {
        console.log(res)
        if (res.data.length === 0) {
          this.nopage = true
          return false
        }
        this.pending = res.data.entertainsList
      })
  }
}
</script>
