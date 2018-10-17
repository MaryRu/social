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
          <Progress></Progress>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <Pending></Pending>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <Complete></Complete>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Progress from './processing'
import Pending from './Pending'
import Complete from './Complete'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '我的招待',
      selected: '1'
    }
  },
  components: {
    Header,
    Progress,
    Pending,
    Complete
  }
}
</script>
