<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="coupon">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">未使用</mt-tab-item>
        <mt-tab-item id="2">已使用</mt-tab-item>
        <mt-tab-item id="3">已过期</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="coupon-list">
        <mt-tab-container-item id="1">
          <noPage v-show="nopage"></noPage>
          <ul v-show="!nopage">
            <li v-for="(no,index) in noUsed" :key="index">
              <div class="quan-item flex-between flex-align-center">
                <!-- <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div> -->
                <div class="q-type">
                  <div class="q-title text-ellipsis flex-between">
                    {{no.cName}}
                    <!-- <span class="q-time surplus">剩余：{{no.cNum}} 张</span> -->
                  </div>
                  <p class="q-code">优惠券码：{{no.ciType}}</p>
                  <div class="q-time">
                    {{no.ciAddtime}} 至 {{no.ciEndtime}}
                  </div>
                </div>
                <div class="q-ops-box">
                  <div class="q-opbtns">
                    <div class="btn" @click="popup(no.ciType)">
                      <b></b>
                      <span>去使用</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <noPage v-show="nopage"></noPage>
          <ul v-show="!nopage">
            <li v-for="(no,index) in noUsed" :key="index" class="useless">
              <div class="quan-item flex-between flex-align-center">
                <!-- <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div> -->
                <div class="q-type">
                  <div class="q-tips">
                  </div>
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}} 至 {{no.ciEndtime}}
                  </div>
                </div>
                <div class="q-ops-box">
                  <div class="q-opbtns">
                    <div href="/" class="btn">
                      <b></b>
                      <span>已使用</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <noPage v-show="nopage"></noPage>
          <ul v-show="!nopage">
            <li v-for="(no,index) in noUsed" :key="index" class="useless">
              <div class="quan-item flex-between flex-align-center">
                <!-- <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div> -->
                <div class="q-type">
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}} 至 {{no.ciEndtime}}
                  </div>
                </div>
                <div class="q-ops-box">
                  <div class="q-opbtns">
                    <div class="btn">
                      <b></b>
                      <span>已过期</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mint-popup-1 flex-align-center flex-center">
      <div>
        <!-- <h1>优惠券码</h1> -->
        <p class="text-code">{{couponCode}}</p>
        <div class="img-box">
          <img src="../../assets/images/code.png" alt="">
        </div>
      </div>
    </mt-popup>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/coupon';
.mint-navbar {
  position: fixed;
  top: .7rem;
  width: 100%;
  z-index: 1000;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #e97889;
  color: #e97889;
}
.coupon .coupon-list {
  margin-top: 1.6rem;
  padding-bottom: .8rem;
}
.surplus {
  margin-left: .8rem;
}
.mint-popup {
  width: 4.5rem;
  height: 4.5rem;
  // padding: .5rem;
  text-align: center;
  .text-code {
    font-size: .5rem;
  }
  .img-box {
    img {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
<script>
import Header from '../base/header'
import noPage from '../base/noPage'
import Footer from '../base/footer'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      popupVisible: false,
      tabname: '优惠券',
      selected: '1',
      loading: false,
      nopage: false,
      status: 0,
      cartLength: 1,
      couponCode: '',
      noUsed: [
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '1'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '12'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '123'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '1234'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '12345'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '123456'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '1541744095'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '12345678'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '123456789'
        }
      ]
    }
  },
  components: {
    Header,
    noPage,
    Footer
  },
  watch: {
    selected (value) {
      console.log(value)
      if (value == 1) {
        this.couponList(0)
      } else if (value == 2) {
        this.couponList(1)
      } else if (value == 3) {
        this.couponList(2)
      }
    }
  },
  created () {
    this.couponList(0)
  },
  methods: {
    couponList (status) {
      let form = this.$qs.stringify({
        uId: localStorage.getItem('uId'),
        status: status
      })
      api.getCouponInfoByUser(form)
        .then((res) => {
          console.log(res)
          if (res.data.length === 0) {
            this.nopage = true
            return false
          }
          this.noUsed = res.data
          this.nopage = false
          this.noUsed.forEach((item) => {
            item.ciAddtime = item.ciAddtime.split(' ')[0]
            item.ciEndtime = item.ciEndtime.split(' ')[0]
          })
        })
    },
    popup (i) {
      this.popupVisible = true
      this.couponCode = i
    }
    // used (noUsed, index, item) {
    //   console.log(item)
    //   let form = this.$qs.stringify({
    //     uId: uId,
    //     cId: item.cId
    //   })
    //   api.useCoupon(form)
    //     .then((res) => {
    //       console.log(res)
    //     })
    //   noUsed.splice(index, 1)
    //   if (noUsed.length == 0) {
    //     this.nopage = true
    //     return false
    //   }
    // }
  }
}
</script>
