<template>
  <footer class="flex flex-align-center">
    <div class="footer-item" :class="{active:urlRouter == '/index' || urlRouter == '/'}">
      <router-link to='./index'>
        <i class="icon footerIcon footerHomeIcon"></i>
        <p class="footer-title">招待</p>
      </router-link>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/group'}">
      <router-link to='./group'>
        <i class="icon footerIcon footerGroupIcon"></i>
        <p class="footer-title">颜络社</p>
      </router-link>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/cart'}">
      <router-link to='./cart'>
        <i class="icon footerIcon footerCartIcon"></i>
        <p class="footer-title">颜粉圈</p>
      </router-link>
      <transition name="bullet">
        <div class="cart-num" v-show="showNum">{{cartnum}}</div>
      </transition>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/member'}">
      <router-link to='./member'>
        <i class="icon footerIcon footerMemberIcon"></i>
        <p class="footer-title">我的</p>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['urlRouter', 'cartnum'],
  data () {
    return {
      showNum: false
    }
  },
  watch: {
    showNum () {
      if (this.showNum) {
        setTimeout(() => {
          this.showNum = false
        }, 800)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/variable.less';
footer {
  bottom: 0;
  position:fixed;
  width: 100%;
  height: .8rem;
  padding: 0.15rem 0;
  background: @base_color;
  box-shadow: 0 -2px 9px rgba(0, 0, 0, .1);
}
.footer-item {
  width: 25%;
  text-align: center;
  position: relative;
}
.cart-num {
  position: absolute;
  background: @theme_background;
  color: @base_color;
  text-align: center;
  top: -.2rem;
  right: .3rem;
  width: .5rem;
  height: .4rem;
  line-height: .4rem;
  border-radius: 0.8rem;
  margin: auto;
}
.footer-title {
  color: @base_textColor;
}
</style>
