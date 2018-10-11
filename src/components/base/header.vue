<template>
  <header class="head">
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
    padding: .2rem;
    background-color: @theme_background;
    color: @base_color;
    text-align: center;
  }
</style>
