<template>
  <div class="wrapper">
    <div class="scroll" @click="toTop" v-show="showTop">
      <img src="../../assets/images/icon/gotop.png" alt="">
    </div>
  </div>
</template>
<style lang="less" scoped>
.scroll {
  position: fixed;
  bottom: 1.5rem;
  right: .2rem;
  width: 40px;
  height: 40px;
  img{
    display: block;
    background-color: #fff;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    // 回到顶部
    showTop () {
      if (this.scrollTop > 200) {
        return true
      } else {
        return false
      }
    }
  },
  mounted  () {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop (e) {
      if (this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      let _this = this
      this.time = setInterval(function () { _this.gotoTop(_this.scrollTop - _this.dParams) }, 10)
    },
    gotoTop (distance) {
      this.dParams += 20
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  }
}
</script>
