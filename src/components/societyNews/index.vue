<template>
  <div class="wrapper">
    <div class="societyNews"></div>
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
      cartLength: 2
    }
  },
  components: {
    Footer
  }
}
</script>
