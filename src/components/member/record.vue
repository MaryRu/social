<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="record container">
      <ul>
        <li v-for="(item,index) in recordList" :key="index" class="flex-align-center flex-between">
          <div class="img-box" v-show="item.payway == 1">
            <img src="../../assets/images/icon/alipay.png" alt="">
          </div>
          <div class="img-box" v-show="item.payway == 2">
            <img src="../../assets/images/icon/weixin.png" alt="">
          </div>
          <div class="content">
            <div class="flex-between">
              <p class="shop">{{item.shop}}</p>
              <p class="price">￥{{item.price}}</p>
            </div>
            <div class="flex-between ">
              <span>{{item.time}}</span>
              <span>积分{{item.integral}}</span>
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
export default {
  data () {
    return {
      tabname: '消费记录',
      recordList: [
        {
          payway: 1,
          shop: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          payway: 2,
          shop: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          payway: 2,
          shop: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        },
        {
          payway: 1,
          shop: '青沫茶颜府衙店',
          price: '15',
          time: '2018-10-20',
          integral: '+3'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>
