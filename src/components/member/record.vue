<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="record container">
      <noPage v-show="nopage"></noPage>
      <ul v-show="!nopage">
        <li v-for="(item,index) in recordList" :key="index" class="flex-align-center flex-between">
          <div class="img-box" v-show="item.rtId == 1">
            <img src="../../assets/images/icon/alipay.png" alt="">
          </div>
          <div class="img-box" v-show="item.rtId == 2">
            <img src="../../assets/images/icon/weixin.png" alt="">
          </div>
          <div class="content">
            <div class="flex-between">
              <p class="shop">{{item.sname}}</p>
              <p class="price">￥{{item.rMoney}}</p>
            </div>
            <div class="flex-between ">
              <span>{{item.payTime}}</span>
              <span>积分{{item.iNum}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
.content {
  padding: .2rem;
  width: 80%;
}
li {
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
}
</style>
<script>
import Header from '../base/header-back'
import noPage from '../base/noPage'
import api from '../../assets/js/api'
var uId = localStorage.getItem('uId')
export default {
  data () {
    return {
      tabname: '消费记录',
      nopage: false,
      recordList: [
        {
          rtId: 1,
          sname: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          rtId: 2,
          sname: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          rtId: 2,
          sname: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          rtId: 1,
          sname: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
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
    api.getRechargeUser(form)
      .then((res) => {
        console.log(res)
        if (res.data.list.length === 0) {
          this.nopage = true
          return false
        }
        this.recordList = res.data.list
      })
  }
}
</script>
