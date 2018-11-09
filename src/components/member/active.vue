<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="active container">
      <!-- <mt-navbar v-model="selected" class="navbar">
        <mt-tab-item id="1">我发起的活动</mt-tab-item>
        <mt-tab-item id="2">我参与的活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="active-list">
        <mt-tab-container-item id="1">
          
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <noPage v-show="nopage"></noPage>
          <ul v-show="!nopage">
            <li v-for="(item,index) in activitydesc" :key="index" >
              <router-link to="/" class="flex-align-center">
                <div class="img-box mr">
                  <img :src="item.aimg" alt="">
                </div>
                <div class="content">
                  <p class="title mb">{{item.atitle}}</p>
                  <span>{{item.addtime}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container> -->
      <div class="active-list">
        <noPage v-show="nopage"></noPage>
        <ul v-show="!nopage">
          <li v-for="(item,index) in activeList" :key="index" >
            <router-link :to="{path: '/partyContent/'+item.aId}" class="flex-align-center">
              <div class="img-box mr">
                <img :src="item.aimg" alt="">
              </div>
              <div class="content">
                <p class="title mb">{{item.atitle}}</p>
                <span>{{item.addtime}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/active';
</style>
<script>
import Header from '../base/header-back'
import noPage from '../base/noPage'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '我的活动',
      selected: '1',
      nopage: false,
      activeList: [
        {
          r1: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          aTitle: '这里是发起活动的标题',
          aAddtime: '2018-10-20'
        },
        {
          r1: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          aTitle: '这里是发起  活动的标题',
          aAddtime: '2018-10-20'
        },
        {
          r1: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          aTitle: '这里是发起  活动的标题',
          aAddtime: '2018-10-20'
        }
      ],
      activitydesc: []
    }
  },
  components: {
    Header,
    noPage
  },
  watch: {
    selected (value) {
      console.log(value)
      if (value === 1) {
        // this.getActive()
      } else {
        // this.getDesc()
      }
    }
  },
  created () {
    this.getDesc()
  },
  methods: {
    // getActive () {
    //   let form = this.$qs.stringify({
    //     uId: uId
    //   })
    //   api.ActivityInfoUser(form)
    //     .then((res) => {
    //       console.log(res)
    //       if (res.data.list.length === 0) {
    //         this.nopage = true
    //       } else {
    //         this.activeList = res.data.list
    //       }
    //     })
    // },
    getDesc () {
      let form = this.$qs.stringify({
        uId: localStorage.getItem('uId')
      })
      api.activitydescUser(form)
        .then((res) => {
          console.log(res)
          if (res.data.list.length === 0) {
            this.nopage = true
          } else {
            this.activeList = res.data.list
          }
        })
    }
  }
}
</script>
