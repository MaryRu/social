<template>
  <div class="complete mt">
    <!-- 已完成 -->
    <noPage v-show="nopage"></noPage>
    <ul v-show="!nopage">
      <li v-for="(item,index) in complete" :key="index" class="mb">
        <div class="imgBox">
          <router-link to="/">
            <img :src="item.img" alt="">
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group/available';
</style>
<script>
import noPage from '../base/noPage'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      nopage: false,
      complete: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        }
      ]
    }
  },
  components: {
    noPage
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId,
      status: 2
    })
    api.getentertainByUser(form)
      .then((res) => {
        console.log(res)
        if (res.data.length === 0) {
          this.nopage = true
          return false
        }
        this.complete = res.data
      })
  }
}
</script>
