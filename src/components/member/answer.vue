<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="answer container">
      <h2 class="mb">{{notices.title}}</h2>
      <div v-html="notices.answer" class="conent"></div>
    </div>
  </div>
</template>
<style lang="less">
.answer {
  h2 {
    text-align: center;
    font-size: .35rem;
    font-weight: 500;
  }
  .conent {
    p {
      text-indent:2em;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<script>
import api from '../../assets/js/api'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '解决方案',
      notices: {
        title: '这里是标题',
        answer: '<p>松岛枫的股份大概</p><p><img src="http://localhost:8080/social_project/upload/image/20181031/20181031112528_556.jpg" alt="" /></p>'
      }
    }
  },
  components: {
    Header
  },
  created () {
    let form = this.$qs.stringify({
      Id: this.$route.params.id
    })
    api.getnoticesById(form)
      .then((res) => {
        console.log(res)
      })
  },
}
</script>
