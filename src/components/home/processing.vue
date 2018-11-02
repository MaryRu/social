<template>
  <div class="processing">
    <noPage v-show="nopage"></noPage>
    <!-- 进行中 -->
    <ul class="mt" v-show="!nopage">
      <li v-for="(item,index) in processList" :key="index" class="mb">
        <div class="imgBox">
          <img :src="item.pic" alt="">
        </div>
        <div class="flex-align-center flex-around condition">
          <div class="modify btn"><router-link :to="{path: '/condition/'+item.eId}">修改条件</router-link></div>
          <div class="deleat btn" @click="delect(processList, index, item)">删除</div>
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
      processList: [
        {
          eId: '1',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          eId: '2',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.png'
        },
        {
          eId: '3',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card2.png'
        },
        {
          eId: '4',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card3.png'
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
      status: 0
    })
    api.getentertainByUser(form)
      .then((res) => {
        console.log(res)
        if (res.data.length === 0) {
          this.nopage = true
          return false
        }
        this.processList = res.data.entertainsList
      })
  },
  methods: {
    delect (list, index, value) {
      console.log(value)
      let form = this.$qs.stringify({
        eId: value.eId
      })
      api.delentertain(form)
        .then((res) => {
          console.log(res)
          Toast('删除成功')
        })
      list.splice(index, 1)
      if (list.length === 0) {
        this.nopage = true
      }
    }
  }
}
</script>
