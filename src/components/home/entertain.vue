<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">进行中</mt-tab-item>
        <mt-tab-item id="2">待领取</mt-tab-item>
        <mt-tab-item id="3">已完成</mt-tab-item>
      </mt-navbar>      
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <noPage v-show="nopage"></noPage>
          <Progress v-show="!nopage"></Progress>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <noPage v-show="nopage"></noPage>
          <Pending v-show="!nopage"></Pending>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <noPage v-show="nopage"></noPage>
          <Complete v-show="!nopage"></Complete>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page-part {
  position: fixed;
  top: .75rem;
  width: 100%;
  z-index: 9999;
}
.mint-tab-container {
  margin-top: 1.3rem;
}
</style>

<script>
import Progress from './processing'
import Pending from './Pending'
import Complete from './Complete'
import noPage from '../base/noPage'
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '我的招待',
      selected: '1',
      nopage: false
    }
  },
  components: {
    Header,
    Progress,
    Pending,
    Complete,
    noPage
  },
  created () {
  },
  watch: {
  },
  methods: {
  }
}
</script>
