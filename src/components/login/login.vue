<template>
  <div class="login">
    <div class="login-top">
      <img src="../../assets/images/login.png" alt="">
    </div>
    <div class="login-cont">
      <div class="flex-align-center content">
        <i class="icon icon-phone"></i>
        <input type="text" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div class="flex-align-center content">
        <i class="icon icon-password"></i>
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
    </div>
    <div class="login-bottom">
      <router-link to="/">
        <el-row class=""><el-button type="danger" class="button">登&nbsp;&nbsp;录</el-button></el-row>
      </router-link>
      <div class="flex-between login-forget">
        <router-link to="/"><p>忘记密码</p></router-link>
        <router-link to="/register"><p>立即注册</p></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/login/login';
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
