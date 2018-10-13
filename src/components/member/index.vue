<template>
  <div class="wrapper">
    <div class="member"></div>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
import Footer from '../base/footer'
export default {
  data () {
    return {
      cartLength: 3
    }
  },
  components: {
    Footer
  }
}
</script>
