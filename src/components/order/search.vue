<template>
  <div class="wrapper">
    <div class="search">
      <header>
        <a class="el-icon-arrow-left" href="javascript:history.go(-1);"></a>
        <div class="search-input">
          <div class="inputBox">
            <label class="icon icon-search searchIcon" for="search"></label>
            <input type="text" v-model="key_words" id='search' placeholder='搜索商品' />
          </div>
        </div>
        <button class="search-button" @click="search">确定</button>
      </header>
      <div class="content">
        <div class="cont-box hot-search" v-show="isHot">
          <p>热门搜索</p>
          <div class="search-hot">
            <input type="button" @click="hotA" v-model="hot1">
            <input type="button" @click="hotB" v-model="hot2">
            <input type="button" @click="hotC" v-model="hot3">
          </div>
        </div>
        <div class="search-list">
          <div v-show="isNull">
            <noPage></noPage>
          </div>
          <ul class="flex flex-wrap flex-between" v-show="!isNull">
            <li v-for="(item,index) in searchList" :key="index">
              <router-link :to="{path: '/detail/'+item.pId}">
                <img :src="item.pImage" alt="">
                <div class="goods-desc">
                  <p class="titile text-ellipsis">{{item.pName}}</p>
                  <span>￥{{item.pPrice}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/search.less';
</style>

<script>
import api from '../../assets/js/api'
import noPage from '../base/noPage'
export default {
  data () {
    return {
      isHot: true,
      isNull: false,
      hot1: '苹果',
      hot2: '牛奶',
      hot3: '油',
      value: '',
      key_words: '',
      searchList: []
    };
  },
  components: {
    noPage
  },
  computed: {
    
  },
  methods: {
    search () {
      console.log(this.key_words)
      let form = this.$qs.stringify({
        pName: this.key_words
      })
      api.getProductBySearch(form)
      .then((res) => {
        console.log(res)
        if (res.data.length == 0) {
          this.isNull = true
          this.isHot = true
          this.searchList = res.data
        } else {
          this.isNull = false
          this.isHot = false
          this.searchList = res.data
        }
      })
    },
    hotA () {
      this.key_words = this.hot1
      this.search()
    },
    hotB () {
      this.key_words = this.hot2
      this.search()
    },
    hotC () {
      this.key_words = this.hot3
      this.search()
    }
  }
}
</script>
