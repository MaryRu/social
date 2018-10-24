<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <ul>
        <li class="bill-list flex-align-center">
          <div class="img-box mr">
            <i class="bill-icon bill-qingtong"></i>
          </div>
          <div class="">
            <h2>青铜会员</h2>
            <span>0-5000积分，1元积10分，日常消费无折扣</span>
          </div>
        </li>
        <li class="bill-list flex-align-center">
          <div class="img-box mr">
            <i class="bill-icon bill-baiyin"></i>
          </div>
          <div class="">
            <h2>白银会员</h2>
            <span>5001-20000积分，1元积11分，单次购买3杯送1杯</span>
          </div>
        </li>
        <li class="bill-list flex-align-center">
          <div class="img-box mr">
            <i class="bill-icon bill-huangjin"></i>
          </div>
          <div class="">
            <h2>黄金会员</h2>
            <span>20001-50000积分，1元积11分，单次购买3杯送1杯，累计购买10杯送1杯</span>
          </div>
        </li>
        <li class="bill-list flex-align-center">
          <div class="img-box mr">
            <i class="bill-icon bill-zuanshi"></i>
          </div>
          <div class="">
            <h2>钻石会员</h2>
            <span>50001积分以上，1元积15分，单次购买3杯送1杯，累计购买6杯送1杯</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
ul {
  li {
    border-bottom: 1px solid #ccc;
    padding: .2rem;
    background-color: #fff;
    &:last-child{
      border-bottom: none;
    }
    i {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 2px 2px 2px #ccc;
    }
  }
}
h2 {
  font-size: .3rem;
  font-weight: 600;
  color: #666;
}
</style>

<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '积分规则'
    }
  },
  components: {
    Header
  }
}
</script>
