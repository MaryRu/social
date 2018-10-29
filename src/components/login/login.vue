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
      <div @click="login">
        <el-row class="" ><el-button type="danger" class="button">登&nbsp;&nbsp;录</el-button></el-row>
      </div>
      <div class="flex-between login-forget">
        <router-link to="/forgetPsd"><p>忘记密码</p></router-link>
        <router-link to="/register"><p>立即注册</p></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/login/login';
</style>

<script>
import { Toast } from 'mint-ui'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      phone: '',
      password: '',
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/
    }
  },
  methods: {
    login () {
      if (!this.phone) {
        Toast('请输入手机号码')
        return false
      }
      if (!this.z_tel.test(this.phone)) {
        Toast('您输入的手机号格式有误')
        this.phone = ''
        return false
      }
      if (!this.password) {
        Toast('请输入密码')
        return false
      }
      let form = this.$qs.stringify({
        account: this.phone,
        loginpwd: this.password
      })
      api.login(form)
        .then((res) => {
          console.log(res)
          localStorage.setItem('uId', res.data.uId)
          localStorage.setItem('token', res.data.token)
          this.$router.replace('/index')
        })
    }
  }
}
</script>
