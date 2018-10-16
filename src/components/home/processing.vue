<template>
  <div class="processing">
    <!-- 进行中 -->
    <ul>
      <li v-for="(item,index) in processList" :key="index">
        <div class="imgBox">
          <img :src="item.img" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      processList: [
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        }
      ]
    }
  }
}
</script>
