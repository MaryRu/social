<template>
  <div class="complete mt">
    <!-- 已完成 -->
    <ul>
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
export default {
  data () {
    return {
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
  }
}
</script>
