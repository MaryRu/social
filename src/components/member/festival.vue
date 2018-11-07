<template>
  <div class="festival">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <ul>
        <li>
          <div class="img-box">
            <img src="../../assets/images/active1.png" alt="">
          </div>
          <div class="img-desc">
            <span>加入会员100元变1000元</span>
            <p>一折乐享</p>
          </div>
        </li>
        <li>
          <div class="img-box">
            <img src="../../assets/images/active2.png" alt="">
          </div>
          <div class="img-desc">
            <span>全场5折畅饮</span>
            <p>5折畅享</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.festival {
  ul {
    li {
      img {
        display: block;
        width: 100%;
      }
      .img-desc {
        width: 55%;
        margin: .2rem auto;
        text-align: center;
        border-radius: .5rem;
        padding: .2rem;
        color: #fff;  
        background-color: rgba(243, 143, 143, .8);
      }
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '寻找天生一对'
    }
  },
  components: {
    Header
  }
}
</script>
