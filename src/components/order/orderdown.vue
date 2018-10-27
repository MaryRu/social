<template>
  <div class="wrapper">
    <header class="head">
      <a href="#/mall" class="left"><i class="el-icon-arrow-left"></i></a>
      <p>{{tabname}}</p>
    </header>
    <div class="order">
      <ordertab :urlRouter="$route.path"></ordertab>
      <div class="container">
        <div v-show="!havepage">
          <nopage describe="购物车空空的~快去添加吧"></nopage>
        </div>
        <div class="order-item" v-show="havepage">
          <div v-for="(item,index) in itemPay" :key="index" class="orderList">
            <div class="order-top flex-between">
              <p>订单号{{item.oId}}</p>
              <p class="goods-state">已完成</p>
            </div>
            <div class="order-content">
              <div class="flex" v-for="(goods,i) in item.list" :key="i">
                <div class="order-img">
                  <img :src="goods.pImage" />
                </div>
                <div class="order-text ">
                  <p class="goods-name text-ellipsis">{{goods.pName}}</p>
                  <p class="goods-num">x{{goods.oiCount}}</p>
                  <p class="goods-price">¥{{goods.pPrice}}</p>
                </div>
              </div>
            </div>
            <div class="order-bottom">
              <div class="order-list">
                <p>共{{item.list.length}}件商品 &nbsp; 合计¥{{item.total}}</p>
              </div>
              <div class="order-btn">
                <span @click="deleteOrder(item.oId)">删除订单</span>
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
import api from '../../assets/js/api'
import { Toast } from "mint-ui"
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
    // this.getOrder()
  },
  methods: {
    getOrder () {
      api.getOrderByUser({
        oState: 4
      })
      .then((res) => {
        console.log(res)
        if (res.data.length == 0) {
          this.havepage = false
          return false
        }
        this.itemPay = res.data
      })
    },
    deleteOrder (oId) {
      let del = this.$qs.stringify({
        oId: oId
      })
      api.delOrder(del)
      .then((res) => {
        console.log(res)
        Toast({
          message: res.data.msg
        })
        setTimeout(this.$router.go(0),3000)
      })
    }
  }
}
</script>
