<template>
  <div class="wrapper">

  </div>
</template>
<script>
export default {
  data () {
    return{
    }
  },
  created () {
    this.$router.replace('/detail/'+this.$route.params.id)
  }
}
</script>
