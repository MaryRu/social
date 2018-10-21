<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="otherHome container">
      <div class="topPage">
        <router-link to="/">
          <img src="../../assets/images/bgImg.png" alt="">
        </router-link>
        <div class="headImg">
          <img src="../../assets/images/login1.png" alt="">
        </div>
      </div>
      <div class="home-page-info">
        <p>{{info.name}}</p>
        <span>{{info.sign}}</span>
      </div>
      <div class="mt">
        <!-- 小伙伴发布的动态哦 -->
        <Group></Group>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
.home-page-info {
  padding-top: .8rem;
  padding-bottom: .2rem;
  text-align: center;
  background-color: #fff;
  p {
    font-size: .3rem;
  }
}
</style>

<script>
import Group from '../base/group'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '',
      info: {
        name: '小明',
        sign: '个性签名'
      }
    }
  },
  components: {
    Header,
    Group
  },
  created () {
    this.tabname = this.info.name + '的个人主页'
  },
  methods: {
  }
}
</script>
