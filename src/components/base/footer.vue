<template>
  <footer class="flex flex-align-center">
    <div class="footer-item" :class="{active:urlRouter == '/index' || urlRouter == '/'}">
      <router-link to='./index'>
        <i class="icon footerIcon footerHomeIcon"></i>
        <p class="footer-title">首页</p>
      </router-link>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/group'}">
      <router-link to='./group'>
        <i class="icon footerIcon footerGroupIcon"></i>
        <p class="footer-title">颜络社</p>
      </router-link>
    </div>
    <div class="footer-item flex-center" @click="add">
      <div class="addButton flex-center flex-align-center">
        <i class="icon footerIcon footerAddIcon"></i>
      </div>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/societyNews'}">
      <router-link to='./societyNews'>
        <i class="icon footerIcon footerNewsIcon"></i>
        <p class="footer-title">颜粉圈</p>
      </router-link>
    </div>
    <div class="footer-item" :class="{active:urlRouter == '/member'}">
      <router-link to='./member'>
        <i class="icon footerIcon footerMemberIcon"></i>
        <p class="footer-title">我的</p>
      </router-link>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="flex-end" >
      <div class="pop-box flex-align-end flex-wrap">
        <div class="flex pop-content">
          <div class="list-box">
            <router-link to="/mall">
              <img src="../../assets/images/drink.png" alt="">
              <p>点单</p>
            </router-link>
          </div>
          <div class="list-box">
            <router-link to="/giftcard">
              <img src="../../assets/images/giftCard.png" alt="">
              <p>礼品卡</p>
            </router-link>
          </div>
        </div>
        <div class="icon icon-close pop-bottom" @click="close"></div>
      </div>
    </mt-popup>
  </footer>
</template>

<script>
export default {
  props: ['urlRouter', 'cartnum'],
  data () {
    return {
      popupVisible: false
    }
  },
  methods: {
    add () {
      this.popupVisible = true
    },
    close () {
      this.popupVisible = false
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
  width: 20%;
  text-align: center;
  position: relative;
}
.icon {
  display: inline-block;
  background: url('../../assets/images/icon.png') no-repeat;
  background-size: 400px 400px;
  &.footerHomeIcon {
    width: 30px;
    height: 30px;
    background-position: -60px 0;
  }
  &.footerGroupIcon {
    width: 30px;
    height: 30px;
    background-position: -60px -30px;
  }
  &.footerAddIcon {
    width: 40px;
    height: 40px;
    background-position: -150px 0;
  }
  &.footerNewsIcon {
    width: 30px;
    height: 30px;
    background-position: -60px -60px;
  }
  &.footerMemberIcon {
    width: 30px;
    height: 30px;
    background-position: -60px -90px;
  }
  &.icon-close {
    width: 30px;
    height: 30px;
    background-position: 0 -60px;
  }
}
.active .footer-title{
  color: @theme_color;
}
.active .footerHomeIcon {
  background-position: -90px 0;
}
.active .footerGroupIcon {
  background-position: -90px -30px;
}
.active .footerNewsIcon {
  background-position: -90px -60px;
}
.active .footerMemberIcon {
  background-position: -90px -90px;
}
.addButton {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: @theme_background;
}
.footer-title {
  color: @base_textColor;
}
.mint-popup {
  width: 100%;
  height: 100vh;
}
.pop-bottom {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  margin-left: -15px;
}
.pop-box {
  margin-bottom: 3.5rem;
  .list-box {
    // margin-top: 2.5rem;
    height: 50%;
    text-align: center;
    img {
      width: 30%;
    }
  }
}
</style>
