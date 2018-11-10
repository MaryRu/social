<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div class="comment-form">
        <mt-field class="comment-input" placeholder="搜索优惠券码" v-model="userComment"></mt-field>
        <mt-button @click="commentForm" class="comment-btn" type="default">查询</mt-button>
      </div>
      <div v-show="!isNull">
        <div class="quan-item flex-between flex-align-center" v-for="(no, index) in noUser" :key="index">
          <div class="q-type">
            <div class="q-title text-ellipsis flex-between">
              {{no.cName}}
            </div>
            <p class="q-code">优惠券码：{{no.ciType}}</p>
          </div>
          <div class="q-ops-box">
            <div class="q-opbtns">
              <div class="btn" @click="hexiao(noUser, index, no.ciId)">
                <b></b>
                <span>核销</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/function';
.comment-form{
  padding: 5px;
  background-color: #fff;
  .clearfix();
  .comment-input{
    float: left;
    width: 79%;
    border: 1px solid #ddd;
    border-radius: 3px;
    min-height: 39px;
  }
  .comment-btn{
    float: right;
    width: 20%;
  }
}
.quan-item {
  padding: .2rem;
  background-color: #fff;
}
.q-ops-box {
    background-color:  @theme_color;
    height: 1.5rem;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .q-opbtns{
      .btn{
        b{
          position: absolute;
          z-index: 2;
          top: 0;
          left: -1px;
          display: block;
          width: 3px;
          height: 100%;
          background: url(//misc.360buyimg.com/user/quan/3.0.0/widget/quan-index/i/small-circle.png) top left repeat-y;
        }
        span{
          color: #fff;
        }
      }
    }
  }
</style>

<script>
import Header from '../base/header-back'
import api from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '优惠券核销',
      userComment: '',
      isNull: true,
      user: {
        name: '歌颂者',
        member: '123456'
      },
      noUser: [
        {
          cName: '青沫茶颜-水果茶',
          ciType: '123456',
          ciAddtime: '2018.08.10',
          ciEndtime: '2018.08.10',
          couponCode: '1'
        }
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    commentForm () {
      // 搜索优惠券券码
      let form = this.$qs.stringify({
        key: this.userComment
      })
      api.selectCoupon(form)
        .then((res) => {
          console.log(res)
          if (res.data.list.length === 0) {
            Toast('没有该优惠券')
            this.userComment = ''
          } else {
            this.isNull = false
            this.noUser = res.data.list
          }
        })
    },
    hexiao (list, index, id) {
      console.log(id)
      let form = this.$qs.stringify({
        ciId: id
      })
      api.getByCiId(form)
        .then((res) => {
          Toast(res.msg)
          list.splice(index, 1)
        })
    }
  }
}
</script>
