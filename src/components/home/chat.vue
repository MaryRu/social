<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div>
        <ul class="content">
          <li v-for="(item, index) in contentList" :key="index">
            <div class="flex-align-center list" :class="item.fId == friendId ? 'friends' : ''">
              <img :src="item.uimg" width=40px height=40px class="mr">
              <span style="word-wrap: break-word; word-break: break-all;">{{item.clContent}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="comment-form">
        <mt-field class="comment-input" placeholder="" v-model="userComment"></mt-field>
        <mt-button @click="commentForm" class="comment-btn" type="default">发送</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/function';
.comment-form{
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  padding: 5px;
  background-color: #fff;
  border-top: 1px solid #ddd;
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
.content {
  padding: .2rem;
  .clearfix();
  li {
    .clearfix();
    padding-bottom: .2rem;
    // border-bottom: 1px solid #ccc;
    img {
      border-radius: 50%;
    }
    span {
      background: #7cfc00;
      padding: 10px;
      border-radius: 10px;
      margin: 6px 10px 0 10px;
      max-width: 200px;
      border: 1px solid #ccc;
      box-shadow: 0 0 3px #ccc;
    }
    .list {
      float: right;
      display: flex;
      flex-direction: row-reverse;
    }
    .friends {
      float: left;
      flex-direction: row;
      span {
        background: #fff;
      }
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '聊天中',
      userComment: '',
      contentList: [
        {
          uImg: '',
          text: '你好呀'
        }
      ],
      friendId: uId
    }
  },
  computed: {
    // classObject: function () {
    //   return {
    //     friendId: this.$route.params.id 
    //   }
    // }
  },
  components: {
    Header
  },
  created() {
    let form = this.$qs.stringify({
      uId: uId,
      fId: this.$route.params.id
    })
    api.getByUid(form)
      .then((res) => {
        console.log(res)
        this.contentList = res.data.list
      })
  },
  methods: {
    commentForm () {
      if (this.userComment === '') {
        Toast('给对方说点什么吧')
      } else {
        let form = this.$qs.stringify({
          uId: uId,
          fId: this.$route.params.id,
          clContent: this.userComment
        })
        api.adduserchat(form)
          .then((res) => {
            console.log(res)
            this.$router.replace('/chatContent/'+this.$route.params.id)
          })
      }
    }
  }
}
</script>
