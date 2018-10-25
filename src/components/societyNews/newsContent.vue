<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="card container">
      <mt-tab-container-item style="display:block;text-align:center">
        <h2>{{news.fTitle}}</h2>
        <span>{{news.fAddtime}}</span>
      </mt-tab-container-item>
      <div class="content" v-html="news.fDesc"></div>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/societyNews/index';
.content {
  width: 100%;
}
p {
  width: 100%;
  img {
    display: block;
  }
}
</style>
<script>
import Header from '../base/header-back'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '鲜闻',
      news: {
        title: '这里是标题',
        time: '2018-10-20',
        content: '这里是文本内容'
      }
    }
  },
  components: {
    Header
  },
  created () {
    let form = this.$qs.stringify({
      fId: this.$route.params.id
    })
    api.getFreshById(form)
      .then((res) => {
        console.log(res)
        this.news = res.data.freshSmell
      })
  }
}
</script>
