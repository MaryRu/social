<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="active">
      <mt-navbar v-model="selected" class="navbar">
        <mt-tab-item id="1">我发起的活动</mt-tab-item>
        <mt-tab-item id="2">我参与的活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="active-list">
        <mt-tab-container-item id="1">
          <ul>
            <li v-for="(item,index) in activeList" :key="index" >
              <router-link to="/" class="flex-align-center">
                <div class="img-box mr">
                  <img :src="item.img" alt="">
                </div>
                <div class="content">
                  <p class="title mb">{{item.title}}</p>
                  <span>{{item.time}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <li v-for="(item,index) in activeList" :key="index" >
              <router-link to="/" class="flex-align-center">
                <div class="img-box mr">
                  <img :src="item.img" alt="">
                </div>
                <div class="content">
                  <p class="title mb">{{item.title}}</p>
                  <span>{{item.time}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/active';
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '我的活动',
      selected: '1',
      activeList: [
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          title: '这里是发起活动的标题',
          time: '2018-10-20'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          title: '这里是发起  活动的标题',
          time: '2018-10-20'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          title: '这里是发起  活动的标题',
          time: '2018-10-20'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>
