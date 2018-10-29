<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
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
              <p class="goods-state">{{item.oState}}</p>
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
                <p>共{{item.list.length}}件商品 &nbsp; 合计¥{{item.r1}}</p>
              </div>
              <div class="order-btn">
                <span @click="cancle(item.oId)" v-show="item.waitpay">取消订单</span>
                <span @click="goBuy(item.oId)" v-show="item.waitpay">去付款</span>
                <span @click="confirm(item.oId)" v-show="item.waitreceive">确认收货</span>
                <span @click="deleteOrder(item.oId)" v-show="item.orderdown">删除订单</span>
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
  data () {
    return {
      tabname: '订单中心',
      havepage: true,
      itemPay: [
        {
          oId: '123456789',
          oState: '已完成',
          list: [
            {
              pImage: '//img14.360buyimg.com/mobilecms/s270x270_jfs/t21190/331/384235221/406944/959104e/5b0bd090N647a4259.jpg.dpg',
              pName: '鲜宴 四川安岳黄柠檬 3斤装 单果70-100g 新鲜水果',
              oiCount: '2',
              pPrice: '16.8'
            }
          ],
          total: '200'
        }
      ],
      waitpay: false,
      waitreceive: false,
      orderdown: false
    }
  },
  components: {
    Nopage,
    Ordertab,
    Header
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId,
      oState: 1
    })
    api.getOrderByUser(form)
      .then((res) => {
        console.log(res)
        if (res.data.length === 0) {
          this.havepage = false
        } else {
          this.itemPay = res.data
        }
      })
  },
}
</script>
