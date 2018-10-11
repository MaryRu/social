<template>
  <div class="login">
    <div class="login-top">
      <img src="../../assets/images/login.png" alt="">
    </div>
    <div class="login-cont">
      <div class="flex-center flex-align-center content">
        <i class="icon icon-phone"></i> <el-input class="name" v-model="phone" placeholder="请输入手机号码"></el-input>
      </div>
      <div class="flex-center flex-align-center content">
        <i class="icon icon-password"></i><el-input class="name" v-model="password" placeholder="请输入密码"></el-input>
      </div>
    </div>
    <div class="login-bottom">
      <el-row class=""><el-button type="danger" class="button">登&nbsp;&nbsp;录</el-button></el-row>
      <div class="flex-between login-forget">
        <router-link to="/"><p>忘记密码</p></router-link>
        <router-link to="/register"><p>立即注册</p></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/login/login';
.el-input__inner {
  background-color: transparent;
}
</style>

<script>
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  }
}
</script>
