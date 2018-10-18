<template>
  <div class="wrapper">
    <Header></Header>
    <div class="container">
      <el-container style="height: 9.6rem">
        <el-aside width="1.2rem" class="aside">
          <ul>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
          </ul>
        </el-aside>
        <el-main>
          <div class="flex">
            <div class="cardImg">
              <img src="../../assets/images/card1.png" alt="">
            </div>
            <div class="ml">
              <p class="title">
                青沫茶颜茶品名称*花瓣茶
              </p>
              <span>这里是产品描述</span>
              <p class="price">￥15.9</p>
              <el-input-number v-model="num1" @change="handleChange" size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
    <el-footer class="footer" style="height: .8rem">
      <div class="cart">
        <i class="icon icon-cart"></i>
      </div>
    </el-footer>
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
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
}
.cart {
  width: 30px;
  height: 30px;
  padding: .2rem;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  background-color: @theme_background;
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
</style>

<script>
import Header from '../base/header-search'
export default {
  data () {
    return {
      num1: 1
    }
  },
  components: {
    Header
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
