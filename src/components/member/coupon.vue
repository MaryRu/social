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
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}至{{no.ciEndtime}}
                  </div>
                </div>
                <div class="q-ops-box">
                  <div class="q-opbtns">
                    <a href="/" class="btn">
                      <b></b>
                      <span>去使用</span>
                    </a>
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
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-tips">
                  </div>
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}至{{no.ciEndtime}}
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
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cvalue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.contradition}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}至{{no.ciEndtime}}
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
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/coupon';
.mint-navbar {
  position: fixed;
  top: .7rem;
  width: 100%;
  z-index: 9999;
}
.coupon .coupon-list {
  margin-top: 1.6rem;
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
      tabname: '优惠券',
      selected: '1',
      loading: false,
      nopage: false,
      status: 0,
      noUsed: [
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        },
        {
          cValue: '50',
          cValue2: '60',
          cName: '青沫茶颜-水果茶',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10'
        }
      ]
    }
  },
  components: {
    Header,
    noPage
  },
  watch: {
    selected (value) {
      if (value === 1) {
        this.couponList(0)
      } else if (value === 2) {
        this.couponList(1)
      } else if (value === 3) {
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
        uId: uId,
        status: this.status
      })
      api.getCouponInfoByUser(form)
        .then((res) => {
          console.log(res)
          if (res.data.length === 0) {
            this.nopage = true
            return false
          }
          this.noUsed = res.data
        })
    }
  }
}
</script>
