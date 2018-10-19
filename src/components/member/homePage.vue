<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="homePage container">
      <div class="topPage">
        <router-link to="/">
          <img src="../../assets/images/bgImg.png" alt="">
        </router-link>
        <router-link to="/">
          <div class="headImg">
            <router-link to="/">
              <img src="../../assets/images/login1.png" alt="">
              <i class="icon icon-camera-select"></i>
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '个人主页'
    }
  },
  components: {
    Header
  }
}
</script>
