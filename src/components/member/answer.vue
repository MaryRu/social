<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
  </div>
</template>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '解决方案'
    }
  },
  components: {
    Header
  }
}
</script>
