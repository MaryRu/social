<template>
  
</template>
<script>
export default {
  data () {
    return {}
  },
  created() {
    this.$router.replace('/chat/'+this.$route.params.id)
  },
}
</script>
