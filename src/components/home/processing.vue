<template>
  <div class="processing">
    <!-- 进行中 -->
    <ul class="mt">
      <li v-for="(item,index) in processList" :key="index" class="mb">
        <div class="imgBox">
          <img :src="item.img" alt="">
        </div>
        <div class="flex-align-center flex-around condition">
          <div class="modify btn"><router-link to="/">修改条件</router-link></div>
          <div class="deleat btn">删除</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group/available';
</style>

<script>
export default {
  data () {
    return {
      processList: [
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.jpg'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.png'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card2.png'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card3.png'
        }
      ]
    }
  }
}
</script>
