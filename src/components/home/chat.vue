<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div>
        <ul class="content">
          <li>
            <img src="' + hisIconSrc + '" width=40px height=40px >
            <span style="word-wrap: break-word; word-break: break-all;">' + saying[sayNum - 1] + '</span>
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
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '聊天中'
    }
  },
  components: {
    Header
  },
  methods: {
    commentForm () {

    }
  }
}
</script>
