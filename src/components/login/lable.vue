<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="lable container">
      <p class="mt">仅能选择5个</p>
      <ul class="flex-align-center flex-wrap">
        <li v-for="(item,index) in lableList" :key="index" :class="item.isSelect ? 'isSelect' : ''">
          <!-- <span>{{item.lName}}</span> -->
          <label :for="item.lId">
            <input class="inputHidden" type="checkbox" :id="item.lId" :data-index="index" @click="choice(item)">
            {{item.lName}}
          </label>
        </li>
      </ul>
      <div class="flex-align-center flex-wrap">
      </div>
      <div class="button" @click="submit">
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
.inputHidden {
  display: none;
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
      selectArr: [],
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
        this.lableList = res.data.list
        this.lableList.forEach(function (item) {
          if (typeof item.isSelect === 'undefined') {
            that.$set(item, 'isSelect', false)
          }
        })
      })
  },
  methods: {
    choice (event) {
      const that = this
      that.selectArr = []
      event.isSelect = !event.isSelect
      that.lableList.forEach(function (item) {
        that.selectArr.push(item.isSelect)
      })
      var countedTrues = that.selectArr.reduce(function (allTrues, trues) {
        if (trues in allTrues) {
          allTrues[trues]++
        } else {
          allTrues[trues] = 1
        }
        return allTrues
      }, {})
      if (countedTrues.true > 5) {
        Toast('只能选择5个标签哟~')
        event.isSelect = !event.isSelect
        return false
      }
      if (event.isSelect) {
        that.lable.push(event.lId)
      } else {
        let selectid = event.lId
        let arr = []
        this.lable.forEach(function (item) {
          if (selectid !== item) {
            if (arr.indexOf(item) === -1) {
              arr.push(item)
            }
          }
        })
        this.lable = arr
      }
    },
    submit () {
      if (this.lable.length === 0) {
        Toast('选择属于你的标签吧~')
      } else {
        let form = this.$qs.stringify({
          uId: localStorage.getItem('uId'),
          lid: this.lable.toString()
        })
        api.addlabel(form)
          .then((res) => {
            console.log(res)
            window.location.href = '#/member'
          })
      }
    }
  }
}
</script>
