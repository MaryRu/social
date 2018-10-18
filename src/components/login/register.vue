<template>
  <div class="login">
    <div class="login-top">
      <img src="../../assets/images/login.png" alt="">
    </div>
    <div class="login-cont">
      <div class="flex-align-center content">
        <i class="icon icon-phone"></i>
        <input type="number" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div class="flex-align-center content code">
        <i class="icon icon-code"></i>
        <input type="number" placeholder="请输入验证码" v-model="code">
        <span :class="{'haveSend':isSend}" @click="sendCode">{{verificationCodeTxt}}</span>
      </div>
      <div class="flex-align-center content">
        <i class="icon icon-password"></i>
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="flex-align-center content">
        <i class="icon icon-againword"></i>
        <input type="password" placeholder="确认密码" v-model="againword">
      </div>
    </div>
    <div class="login-bottom">
      <el-row class=""><el-button @click="register" type="danger" class="button">注&nbsp;&nbsp;册</el-button></el-row>
      <div class="desc">
        注册代表您已阅读并同意 <span>青沫茶颜用户协议</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/less/login/login';
</style>

<script>
import api from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      phone: '',
      password: '',
      againword: '',
      code: '',
      isSend: false,
      verificationCodeTxt: '获取验证码',
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/
    }
  },
  created () {
  },
  methods: {
    // 倒计时
    ctimer (time) {
      var t = time
      var that = this
      if (t > 0) {
        this.isSend = true
        this.verificationCodeTxt = t + 's后重发'
        t--
        setTimeout(function () {
          that.ctimer(t)
        }, 1000)
      } else {
        this.isSend = false
        this.verificationCodeTxt = '获取验证码'
      }
    },
    // 点击发送验证码
    sendCode () {
      if (!this.phone) {
        Toast('请填写电话号码!')
        return false
      }
      if (this.z_tel.test(this.phone) === false) {
        Toast('您的电话号码格式有误!')
        return false
      }
      if (this.isSend) {
        Toast('请稍后点击！')
        return false
      } else {
        // 调取发送短信接口
        let code = this.$qs.stringify({
          number: this.phone
        })
        api.getSsm(code)
          .then((res) => {
            console.log(res)
            Toast(res.data.msg)
          })
        this.ctimer(60)
      }
    },
    register () {
      if (!this.phone) {
        Toast('请填写电话号码!')
        return false
      }
      if (this.z_tel.test(this.phone) === false) {
        Toast('您的电话号码格式有误!')
        return false
      }
      if (!this.password) {
        Toast('请填写密码!')
        return false
      }
      if (this.password.length < 6 || this.password.length > 20) {
        Toast('请您输入6-20位密码')
        return false
      }
      if (this.password !== this.againword) {
        Toast('您两次输入的密码不同，请重新输入')
        this.password = ''
        this.againword = ''
      }
      // let form = this.$qs.stringify({
      //   uTel: this.phone,
      //   uPassword: this.password
      // })
      // api.register(form)
      //   .then((res) => {
      //     console.log(res)
      //   })
    }
  }
}
</script>
