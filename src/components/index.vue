<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <noPage></noPage>
    <div class="index"></div>
    <scrollTop></scrollTop>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>

<script>
import Header from './base/header'
import noPage from './base/noPage'
import scrollTop from './base/scrollTop'
import Footer from './base/footer'
export default {
  data () {
    return {
      tabname: '首页',
      cartLength: 0
    }
  },
  components: {
    Header,
    noPage,
    scrollTop,
    Footer
  }
}
</script>

<style lang="less" scoped>
.index {
  height: 8000px;
}
</style>
