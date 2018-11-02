<template>
  <div class="wrapper">
    <header class="head">
      <a href="#/member" class="left"><i class="el-icon-arrow-left"></i></a>
      <p>{{tabname}}</p>
    </header>
    <div class="order">
      <ordertab :urlRouter="$route.path"></ordertab>
      <div class="container">
        <div v-show="!havepage">
          <nopage></nopage>
        </div>
        <div class="order-item" v-show="havepage">
          <div v-for="(item,index) in itemPay" :key="index" class="orderList">
            <div class="order-top flex-between">
              <p>订单号{{item.oId}}</p>
              <p class="goods-state">待付款</p>
            </div>
            <div class="order-content">
              <div class="flex" v-for="(goods,i) in item.list" :key="i">
                <div class="order-img">
                  <img :src="goods.pics" />
                </div>
                <div class="order-text ">
                  <p class="goods-name text-ellipsis">{{goods.pName}}</p>
                  <p class="goods-num">x{{goods.oiNum}}</p>
                  <p class="goods-price">¥{{goods.oiSubtotal}}</p>
                </div>
              </div>
            </div>
            <div class="order-bottom">
              <div class="order-list">
                <p>共{{item.list.length}}件商品 &nbsp; 合计¥{{item.oTotal}}</p>
              </div>
              <div class="order-btn">
                <span @click="cancle(itemPay, index, item)">取消订单</span>
                <span @click="goBuy(item.oId)">去付款</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/order';
.mint-header{
    background-color: #fff;
    color: #000000; 
  }
.orderList {
  margin-bottom: .2rem;
}
.head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: .2rem;
  background-color: @theme_background;
  color: @base_color;
  text-align: center;
  i {
    color: #fff;
  }
  p {
    text-align: center;
  }
}
</style>
<script>
import Nopage from '../base/noPage.vue'
import Ordertab from '../base/orderTab.vue'
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      tabname: '订单中心',
      selected: this.$route.params.id,
      isOrder: false,
      havepage: true,
      itemPay: []
    }
  },
  components: {
    Nopage,
    Ordertab,
    Header
  },
  created() {
    let form = this.$qs.stringify({
      uId: uId,
      oState: 0
    })
    api.getOrderByUser(form)
    .then((res) => {
      console.log(res)
      if (res.data.length == 0) {
        this.havepage = false
        return false
      }
      this.itemPay = res.data
    })
  },
  methods: {
    goBuy (oId) {
      console.log(oId)
      this.$router.push('/success')
    },
    cancle (list, index, item) {
      console.log(list)
      list.splice(index, 1)
    }
  }
}
</script>
