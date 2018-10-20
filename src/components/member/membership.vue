<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="membership">
      <div class="bill">
        <router-link to="/bill">积分规则</router-link>
      </div>
      <div class="top-box flex-align-center flex-center">
        <div class="card-detail ">
          <div class="card-top flex-align-center flex-between">
            <img src="../../assets/images/logo.png" alt="">
            <div class="info">
              <p class="name">{{info.name}}</p>
              <span>{{info.level}}</span>
            </div>
          </div>
          <div class="card-content">
            <p>卡内余额</p>
            <h1>{{info.price}}</h1>
          </div>
        </div>
      </div>
      <div class="content-box mt">
        <p>升级为VIP，享受更多权益</p>
        <ul class="flex-align-center flex-around flex-wrap mt">
          <li>
            <div class="img-box">
             <i class="ship ship-vip"></i>
            </div>
            <div class="desc mt">
              <span>VIP身份标识图标彰显独特魅力</span>
            </div>
          </li>
          <li>
            <div class="img-box">
              <i class="ship ship-free"></i>
            </div>
            <div class="desc mt">
              <span>每月一张免费饮品券</span>
            </div>
          </li>
          <li>
            <div class="img-box">
              <i class="ship ship-half"></i>
            </div>
            <div class="desc mt">
              <span>每月一张半价饮品券</span>
            </div>
          </li>
          <li>
            <div class="img-box">
              <i class="ship ship-exclusive"></i>
            </div>
            <div class="desc mt">
              <span>专属VIP招待茶饮即刻品尝美味</span>
            </div>
          </li>
          <li>
            <div class="img-box">
              <i class="ship ship-lable"></i>
            </div>
            <div class="desc mt">
              <span>可申请加入标签不匹配社区</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt button">
        <el-button type="danger" round style="width: 100%">一键升级</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
ul {
  li {
    padding: .2rem;
    width: 27%;
    text-align: center;
  }
}
.desc span {
  color: #333;
}
.button {
  width: 80%;
  margin: 0.8rem auto;
}
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '会员卡',
      info: {
        name: '歌颂者',
        level: '青铜会员',
        price: '0.00'
      }
    }
  },
  components: {
    Header
  }
}
</script>
