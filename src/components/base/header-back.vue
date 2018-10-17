<template>
  <header class="head">
    <a href="javascript:history.go(-1)" class="left"><i class="el-icon-arrow-left"></i></a>
    <p>{{tabname}}</p>
  </header>
</template>

<script>
export default {
  props: ['tabname'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/variable';
  .head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    padding: .2rem;
    background-color: @theme_background;
    color: @base_color;
    text-align: center;
    i {
      color: #fff;
    }
    p {
      text-align: center;
    }
  }
</style>
