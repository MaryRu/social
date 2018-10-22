<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="lable container">
      <p class="mt">仅能选择5个</p>
      <ul class="flex-align-center flex-wrap">
        <li  @click="choice(item)" :style="{color:item?('rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'):'#ccc'}" 
v-for="(item,index) in lableList" :key="index" :class="item.isSelect ? 'isSelect' : ''">
          <span>{{item.lName}}</span>
        </li>
      </ul>
      <div class="button">
        <el-button type="danger" round style="width: 100%">确认</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/variable';
.lable {
  p {
    text-align: center;
  }
}
ul {
  padding: .2rem;
  li {
    padding: .2rem;
    text-align: center;
    border: 1px dashed #ccc;
    margin-bottom: .2rem;
    margin-right: .2rem;
  }
}
.button {
  margin: 0 auto;
  width: 60%;
}
.isSelect {
  background-color: @theme_background;
  color: #fff;
  border: none;
}
</style>
<script>
import { Toast } from 'mint-ui'
import Header from '../base/header-back'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '选择形象标签',
      isSelect: false,
      lableList: [
        {
          lId: '0',
          lName: '日剧fans'
        }
      ],
      lable: []
    }
  },
  components: {
    Header
  },
  created () {
    api.lable()
      .then((res) => {
        console.log(res)
        let that = this
        this.lableList = res.data.data.list
        this.lableList.forEach(function (item) {
          console.log(item)
          if (typeof item.isSelect === 'undefined') {
            that.$set(item, 'isSelect', false)
          }
        })
      })
  },
  methods: {
    choice (event) {
      console.log(event)
      if (this.lable.length > 4) {
        Toast('只能选择5个标签')
      } else {
        
      }
    }
  }
}
</script>
