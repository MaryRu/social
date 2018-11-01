<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="servic container">
      <ul>
        <li v-for="(item, index) in issueList" :key="index">
          <mt-cell :title="item.title" :to="{path: '/answer/'+item.id}" is-link></mt-cell>
        </li>
        <li>
          <mt-cell title="意见反馈" to="/feedback" is-link></mt-cell>
        </li>
        <li class="mint-cell external flex-align-center">
          <a href="tel:123456" id="save" class="flex-align-center">
            <i class="icon icon-hotline mr"></i>
            <p>拨打客服热线</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/variable';
.servic {
  ul {
    li {
      border-bottom: 1px solid #f2f2f2;
      &:last-child {
        border-bottom: none
      }
    }
  }
}
.external {
  padding: 0 10px;
  font-size: 16px;
}
</style>
<script>
import Header from '../base/header-back'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '客服中心',
      issueList: [
        {
          id: '1',
          title: '双11来啦！11月1号开始预热，敬请期待！'
        },
        {
          id: '2',
          title: '礼品卡领取时实名信息验证失败怎么办？'
        },
        {
          id: '3',
          title: '如何查询谁领取了我的礼品卡？'
        },
        {
          id: '4',
          title: '如何删除好友？'
        }
      ]
    }
  },
  components: {
    Header
  },
  created () {
    api.getAllnotices()
      .then((res) => {
        console.log(res)
        this.issueList = res.data.list
      })
  },
}
</script>
