<template>
  <div class="festival">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <ul>
        <li class="flex-align-center mb" v-for="(item, index) in couponList" :key="index">
          <div class="pic-box">
            <img :src="item.cPic" alt="">
          </div>
          <div class="text-desc">
            <p>{{item.cName}}</p>
            <span>{{item.cConditions}}</span>
            <p>剩余{{item.cNum}}张</p>
            <el-button round class="mt button" v-show="item.cNum && item.cType === '0'" @click="submit(item)">立即领取</el-button>
            <el-button round class="mt button" disabled v-show="!item.cNum">暂无优惠券</el-button>
            <el-button round class="mt button" disabled v-show="item.cType === '1'">已领取</el-button>
            <p><span>{{item.cAddtime}} 至 {{item.cEndtime}}</span></p>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <div class="footer">
        <router-link to="/coupon">查看我的优惠券 →</router-link>
      </div>
    </footer>
  </div>
</template>
<style lang="less" scoped>
.festival {
  ul {
    li {
      background-color: rgba(243, 143, 143, .8);
      .pic-box {
        width: 2.5rem;
        // height: 3rem;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .text-desc {
        width: 55%;
        margin: .2rem auto;
        text-align: center;
        padding: .2rem;
        color: #fff;  
      }
      .button {
        margin-top: .2rem;
        margin-bottom: .2rem;
      }
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: .2rem;
  text-align: center;
  background-color: #e97889;
  a {
    color: #fff;
  }
}
</style>
<script>
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '寻找天生一对',
      couponList: [
        {
          img: 'http://phuqyyem1.bkt.clouddn.com/active1.png',
          title: '一折乐享券',
          desc: '加入会员100元变1000元',
          cNum: 1
        },
        {
          img: 'http://phuqyyem1.bkt.clouddn.com/active2.png',
          title: '5折畅享券',
          desc: '全场5折畅饮',
          cNum: 1
        }
      ]
    }
  },
  components: {
    Header
  },
  created() {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.CouponById(form)
      .then((res) => {
        console.log(res)
        this.couponList = res.data.couponlist
        this.couponList.forEach((item) => {
          item.cAddtime = item.cAddtime.split(' ')[0]
          item.cEndtime = item.cEndtime.split(' ')[0]
        })
      })
  },
  methods: {
    submit (item) {
      console.log(item)
      let form = this.$qs.stringify({
        uId: uId,
        cId: item.cId
      })
      api.receiveCoupon(form)
        .then((res) => {
          console.log(res)
          item.cType = '1'
          item.cNum--
          Toast(res.msg)
        })
    }
  }
}
</script>
