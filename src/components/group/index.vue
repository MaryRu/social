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
      <group></group>
    </div>
    <scrollTop></scrollTop>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/less/group/index';
</style>

<script>
import Footer from '../base/footer'
import Header from '../base/header'
import scrollTop from '../base/scrollTop'
import group from '../base/group'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      cartLength: 1,
      tabname: '颜络社',
      info: {
        img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
      }
    }
  },
  components: {
    Header,
    Footer,
    group,
    scrollTop
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getUserById(form)
      .then((res) => {
        console.log(res)
        this.info.img = res.data.users.uImg
        sessionStorage.setItem('userinfo',JSON.stringify(res.data.users))
      })
  },
  methods: {
  }
}
</script>
