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
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="(no,index) in noUsed" :key="index">
              <div class="quan-item flex-between flex-align-center">
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cValue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.cValue2}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}--{{no.ciEndtime}}
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
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="(no,index) in noUsed" :key="index" class="useless">
              <div class="quan-item flex-between flex-align-center">
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cValue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.cValue2}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-tips">
                  </div>
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}--{{no.ciEndtime}}
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
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="(no,index) in noUsed" :key="index" class="useless">
              <div class="quan-item flex-between flex-align-center">
                <div class="q-price">
                  <p>
                    <em>¥</em>
                    <strong>{{no.cValue}}</strong>
                  </p>
                  <span class="q-limit" data-tips="">满{{no.cValue2}}可用</span>
                </div>
                <div class="q-type">
                  <div class="q-title text-ellipsis">
                    {{no.cName}}
                  </div>
                  <div class="q-time">
                    {{no.ciAddtime}}--{{no.ciEndtime}}
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
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
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
export default {
  data () {
    return {
      tabname: '优惠券',
      selected: '1',
      loading: false,
      page: 1,
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
    Header
  },
  methods: {
    loadMore () {
      this.loading = true
      this.loading = false
    }
  }
}
</script>
