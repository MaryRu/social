<template>
  <div class="wrapper">
    <Header></Header>
    <div class="container">
      <el-container style="height: 9.6rem">
        <el-aside width="1.5rem" class="aside">
          <el-row>
            <el-col >
              <el-menu 
                default-active="0"
                class="el-menu-vertical-demo">
                <el-menu-item @click="select(item)" :index="''+index" v-for="(item, index) in teaList" :key="index" style="padding-left: 0">
                  <span slot="title">{{item.pName}}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <div class="flex">
            <div class="cardImg">
              <img :src="info.pPic" alt="">
            </div>
            <div class="ml">
              <p class="title">
                {{info.pName}}
              </p>
              <span>{{info.pDesc}}</span>
              <p class="price">￥{{info.pPrices}}</p>
              <el-input-number v-model="info.cartNum" @change="handleChange(info)" size="mini" :min="num1" :max="info.pStock" label=""></el-input-number>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
    <el-footer class="footer flex-align-center" style="height: .8rem">
      <div class="cart" @click="cart">
        <el-badge :value="value" class="item">
          <i class="icon icon-cart" size="small"></i>
        </el-badge>
      </div>
      <p class="allprice price">￥{{allprice}}</p>
      <el-button type="danger" class="button" @click="toPay()">去结算</el-button>
    </el-footer>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="cartList">
        <ul>
          <li class="flex-align-center flex-end" @click="delectAll">
            <i class="icon icon-delect"></i>
            <span class="mr">删除购物车</span>
          </li>
          <li class="flex-around flex-align-center" v-for="(item, index) in cartList" :key="index">
            <p>{{item.pname}}</p>
            <p class="price">￥{{item.prices}}</p>
            <el-input-number v-model="item.puNum" @change="handleChange(item)" size="mini" :min="num1" :max="item.pStock" label=""></el-input-number>
          </li>
          <li class="popFoot flex-align-center">
            <div class="cart popCart">
              <el-badge :value="value" class="item">
                <i class="icon icon-cart" size="small"></i>
              </el-badge>
            </div>
            <p class="allprice price">￥{{allprice}}</p>
            <el-button type="danger" class="button" @click="toPay()">去结算</el-button>
          </li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
.el-main {
  padding: .2rem;
}
.aside {
  padding-left: 0;
  ul {
    li {
      height: .8rem;
      line-height: .8rem;
      font-size: .22rem;
      text-align: center;
      // border-bottom: 1px solid #ccc;
      // border-right: 1px solid #ccc;
    }
  }
}
.allprice {
  margin-left: 60px;
}
.cart {
  width: 30px;
  height: 30px;
  padding: .2rem;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  background-color: @theme_background;
  &.popCart{
    position: relative;
    left: .2rem;
  }
}
.button {
  position: fixed;
  right: 0;
  height: .8rem;
  border-radius: 0;
}
.cardImg {
  img {
    width: 2rem;
    height: 2rem;
  }
}
.title {
  font-size: .26rem;
  font-weight: 600;
}
.footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.select {
  color: @font_color
}
.cartList {
  ul {
    li {
      border-bottom: 1px solid #f0f0f0;
      padding: .2rem 0;
      &:last-child{
        border-bottom: none;
      }
    }
    .popFoot {
      padding: 0 .2rem;
      .allprice{
        margin-left: 0.2rem;
      }
    }
  }
}
</style>

<script>
import Header from '../base/header-search'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      popupVisible: false,
      allprice: 0,
      shopList:[
        {
          pId: 1,
          pic: "http://115.158.20.211:8088/social_project/upload/card1.png",
          pname: "减肥茶",
          prices: "50",
          puId: 16,
          puNum: 2,
          uId: 28
        }
      ],
      cartList: [
        {
          pId: 1,
          pname: '青沫茶颜茶品名称*花瓣茶',
          pPrices: '15.9',
          pStock: 50
        },
        {
          pId: 1,
          pname: '青沫茶颜茶品名称*花瓣茶',
          pPrices: '15.9',
          pStock: 50
        },
        {
          pId: 1,
          pname: '青沫茶颜茶品名称*花瓣茶',
          pPrices: '15.9',
          pStock: 50
        },
        {
          pId: 1,
          pname: '青沫茶颜茶品名称*花瓣茶',
          pPrices: '15.9',
          pStock: 50
        },
        {
          pId: 1,
          pname: '青沫茶颜茶品名称*花瓣茶',
          pPrices: '15.9',
          pStock: 50
        }
      ],
      num1: 0,
      value: 0,
      info: {
        pName: '青沫茶颜茶品名称*花瓣茶',
        pDesc: '这里是描述',
        pPic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
        pStock: 50,
        pPrices: '15.9',
        cartNum: 3
      },
      teaList: [
        {
          pName: '减肥茶'
        },
        {
          pName: '减肥茶'
        },
        {
          pName: '减肥茶'
        },
        {
          pName: '减肥茶'
        },
        {
          pName: '减肥茶'
        }
      ]
    }
  },
  computed: {

  },
  components: {
    Header
  },
  created () {
    // 获取所有商品
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getAllProduct(form)
      .then((res) => {
        // console.log(res)
        this.teaList = res.data.list
        this.info = this.teaList[0]
      })
    // 获取购物车
    api.getCart(form)
      .then((res) => {
        // console.log(res)
        this.cartList = res.data
        this.cartList.forEach((item) => {
          this.value += item.puNum
          this.allprice += item.prices*item.puNum
        })
      })
  },
  methods: {
    delectAll () {
      let form = this.$qs.stringify({
        uId: uId
      })
      // 删除全部购物车商品
      api.deleteCartByUid(form)
        .then((res) => {
          console.log(res)
          this.$router.replace('/cartdata')
        })
    },
    handleChange (info) {
      // 修改数量
      console.log(info)
      // 加入购物车
      let form = this.$qs.stringify({
        uId: uId,
        pId: info.pId,
        puNum: info.cartNum || info.puNum
      })
      api.addCart(form)
        .then((res) => {
          // console.log(res)
        })
      this.cartList.forEach((item) => {
        if (info.pId === item.pId) {
          this.info.cartNum = item.puNum
        }
      })
      this.value += 1
      this.allprice += Number(info.pPrices) || Number(info.prices)
    },
    select (e) {
      console.log(e.pId)
      // 获取购物车详情
      let form = this.$qs.stringify({
        pId: e.pId,
        uId: uId
      })
      api.getProductByPid(form)
        .then((res) => {
          console.log(res)
          this.info = res.data.product
        })
    },
    cart () {
      this.popupVisible = !this.popupVisible
      // 获取购物车所有商品
      let form = this.$qs.stringify({
        uId: uId
      })
      api.getCart(form)
        .then((res) => {
          console.log(res)
        })
    },
    toPay () {
      // 去结算
      let orderArr = []
      this.cartList.forEach((item) => {
        let obj = {}
        obj.puId = item.puId
        orderArr.push(obj)
      })
      let form = this.$qs.stringify({
        uId: uId,
        cidlist: JSON.stringify(orderArr)
      })
      api.addOrderByCart(form)
        .then((res) => {
          console.log(res)
          // 拿到订单ID，调用支付接口
          this.$router.push('/success')
        })
    }
  }
}
</script>
