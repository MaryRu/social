<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="verified container">
      <div class="topBox">
        <img src="../../assets/images/verified.png" alt="">
        <div class="info-box">
          <ul>
            <li>
              真实姓名：
              <input type="text" v-model="name" placeholder="请输入真实姓名">
            </li>
            <li>
              身份证号：
              <input type="text" v-model="idnumber" placeholder="请输入15位或18位身份证号">
            </li>
          </ul>
        </div>
      </div>
      <div class="img-box">
        <ul class="flex-align-center flex-between">
          <li>
            <img src="../../assets/images/card-zheng.png" alt="">
            <p>请上传身份证正面</p>
          </li>
          <li>
            <img src="../../assets/images/card-fan.png" alt="">
            <p>请上传身份证反面</p>
          </li>
        </ul>
      </div>
      <div class="button">
         <el-button type="danger" round style="width: 100%">提交</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '实名认证',
      name: '',
      idnumber: ''
    }
  },
  components: {
    Header
  }
}
</script>
