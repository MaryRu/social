<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <noPage v-show="nopage"></noPage>
    <div class="container">
      <ul class="mt" v-show="!nopage">
        <li v-for="(item,index) in cardImg" :key="index" class="mb">
          <div class="cardImg">
            <img :src="item.img" alt="">
          </div>
          <div class="status" v-show="item.status">
            <img src="../../assets/images/icon/icon_01.png" alt="" v-show="item.status == 1">
            <img src="../../assets/images/icon/icon_02.png" alt="" v-show="item.status == 2">
            <img src="../../assets/images/icon/icon_03.png" alt="" v-show="item.status == 3">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
li {
  padding: 0 .2rem;
  position: relative;
}
.cardImg {
  width: 100%;
  img {
    width: 100%;
  }
}
.status {
  width: 95%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(104,104,104,.8);
  text-align: right;
}
</style>

<script>
import Header from '../base/header-back'
import noPage from '../base/noPage'
import api from '../../assets/js/api'
let uId = localStorage.getItem('uId')
export default {
  data () {
    return {
      nopage: false,
      tabname: '我的礼品卡',
      cardImg: [
        {
          status: '1',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card1.png'
        },
        {
          status: '2',
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          status: '3',
          img: 'http://ofkzpykzq.bkt.clouddn.com/card2.png'
        },
        {
          img: 'http://ofkzpykzq.bkt.clouddn.com/card3.png'
        }
      ]
    }
  },
  components: {
    Header,
    noPage
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.selectByUId(form)
      .then((res) => {
        console.log(res.data.giftOrderitemsList)
        if (res.data.giftOrderitemsList.length === 0) {
          this.nopage = true
        } else {
          this.cardImg = res.data.giftOrderitemsList
        }
      })
  }
}
</script>
