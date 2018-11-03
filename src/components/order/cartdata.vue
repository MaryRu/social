<template>
</template>
<script>
export default {
  data () {
    return{}
  },
  created () {
    this.$router.replace('/classify/'+this.$route.params.id)
  }
}
</script>
