<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="condition container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="年龄范围">
          <el-col :span="11">
            <el-select v-model="form.age1" placeholder="请选择年龄">
              <el-option  v-for="(item, index) in ageList" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-select v-model="form.age2" placeholder="请选择年龄">
              <el-option  v-for="(item, index) in ageList" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男生" value="2"></el-option>
            <el-option label="女生" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择标签">
          <el-select v-model="form.lable" placeholder="请选择标签">
            <el-option v-for="(item, index) in lableList" :key="index" :label="item.lName" :value="item.lId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员等级">
          <el-select v-model="form.level" placeholder="请选择会员等级">
            <el-option v-for="(item, index) in level" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否VIP">
          <el-select v-model="form.vip" placeholder="请选择VIP标准">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button class="el-button" type="danger" round @click="onSubmit">立即创建</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.condition {
  background-color: #fff;
  padding: .2rem;
}
.button {
  margin: 0 auto;
  width: 80%;
}
.el-button {
  width: 100%;
}
</style>
<script>
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '修改条件',
      form: {
        age1: '',
        age2: '',
        sex: '',
        lable: '',
        level: '',
        vip: ''
      },
      ageList: ['18', '19', '20', '21', '22', '23', '24', '25'],
      lableList: [],
      level: ['青铜', '白银', '黄金', '钻石']
    }
  },
  components: {
    Header
  },
  created () {
    api.lable()
      .then((res) => {
        this.lableList = res.data.list
      })
  },
  methods: {
    onSubmit() {
      if (!this.form.age1 || !this.form.age2) {
        Toast('请选择赠送年龄')
        return false
      } if ( this.form.age1 > this.form.age2) {
        Toast('最小年龄必须小于最大年龄')
        return false
      }
      if (!this.form.sex) {
        Toast('请选择赠送的性别')
        return false
      }
      if (this.form.lable === '') {
        Toast('请选择条件标签')
        return false
      }
      if (this.form.level === '') {
        Toast('请选择赠送等级')
        return false
      }
      if (!this.form.vip) {
        Toast('请选择是否赠送给VIP用户')
        return false
      }
      let form = this.$qs.stringify({
        eId: this.$route.params.id,
        eAgeRange: this.form.age1,
        r2: this.form.age2,
        eSex: this.form.sex,
        eLevel: this.form.level,
        lId: this.form.lable,
        r1: this.form.vip
      })
      api.editentertain(form)
        .then((res) => {
          console.log(res)
          Toast('修改成功')
          this.$router.replace('/entertain')
        })
    }
  }
}
</script>
