<template>
  <div class="wrapper">
    <!-- <Header :tabname="tabname"></Header> -->
    <div class="invite">
      <header class="header">
        <a href="javascript:history.go(-1)" class="left"><i class="el-icon-arrow-left"></i></a>
        <p class="title">邀请好友</p>
      </header>
      <div class="flex-center flex-align-center img-box">
        <div>
          <img src="../../assets/images/qrcode.png" alt="">
          <p class="mt">邀请好友获得积分奖励</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.invite {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/images/backgroundImg1.jpg') no-repeat;
  background-size: cover;
  .header {
    height: .8rem;
    line-height: .8rem;
    background-color: rgba(255, 0, 0, .1);
    color: #fff;
    text-align: center;
    .left {
      position: absolute;
      left: 0.2rem;
      color: #fff;
    }
  }
  .img-box {
    margin-top: 2rem;
    text-align: center;
    color: #fff;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0;
  }
}
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '邀请好友'
    }
  },
  components: {
    Header
  }
}
</script>
