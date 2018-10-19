<template>
  <div class="wrapper">
    <div class="personal container">
      <h2>首次使用，从创建名片开始</h2>
      <div class="headImg mt">
        <img src="../../assets/images/login.png" alt="">
        <div class="camera" @click="headImg">
          <i class="icon icon-camera-select"></i>
        </div>
      </div>
      <div class="infoBox">
        <ul>
          <li class="info">
            <input type="text" placeholder="请输入昵称(不超过八个字)" v-model="name">
          </li>
          <li class="info">
            <input type="text" placeholder="请填写个性签名" v-model="sign">
          </li>
          <div style="width: 50%;height: .8rem;margin: 0 auto;">
            <el-col>
              <el-date-picker type="date" placeholder="选择生日" v-model="date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </div>
          <div class="label">
            <router-link to="/lable">
              请设置形象标签
            </router-link>
          </div>
        </ul>
        <div class="sex mt flex-around">
          <el-button type="primary" plain v-model="man" @click="male">
            <div class="flex-align-center">
              <i class="icon icon-male mr"></i>
              <p>男</p>
            </div>
          </el-button>
          <el-button type="danger" plain v-model="woman" @click="female">
            <div class="flex-align-center">
              <i class="icon icon-female mr"></i>
              <p>女</p>
            </div>
          </el-button>
        </div>
      </div>
      <div class="button" @click="submit">
        <p>创建完成</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
@import '../../assets/less/login/login';
</style>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      date1: '',
      man: '',
      woman: '',
      name: '',
      sign: ''
    }
  },
  methods: {
    male () {
      this.man = 1
      this.woman = ''
    },
    female () {
      this.woman = 2
      this.man = ''
    },
    headImg () {
      console.log('111')
    },
    submit () {
      if (!this.name) {
        Toast('请输入昵称')
        return false
      }
      if (!this.name.length > 8) {
        Toast('昵称不要大于八位数呀~')
        this.name = ''
        return false
      }
      if (!this.sign) {
        Toast('请填写个性签名')
        return false
      }
      if (!this.date1) {
        Toast('请填写生日')
        return false
      }
      if (this.woman === '' && this.man === '') {
        Toast('请选择性别')
        return false
      }
    }
  }
}
</script>
