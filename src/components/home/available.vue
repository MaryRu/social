<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div class="available-list">
        <noPage v-show="nopage"></noPage>
        <ul v-show="!nopage">
          <li v-for="(item, index) in entertainslist" :key="index" class="mb">
            <div class="list-top mb flex-between">
              <div class="flex-between">
                <div class="img-box">
                  <img :src="item.uimg" alt="">
                </div>
                <div class="name-box ml">
                  <p class="mb title">{{item.uname}}</p>
                  <span>{{item.eAddtime}}</span>
                </div>
              </div>
            </div>
            <div class="list-content">
              <img :src="item.pic" alt="">
            </div>
            <div class="button" @click="receive(entertainslist, index, item)"><p>一键领取，加为好友</p></div>
          </li>
        </ul>
      </div>
    </div>
    <scrollTop></scrollTop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
.available-list {
  ul {
    li {
      padding: .2rem;
      background-color: #fff;
      .list-content {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
import scrollTop from '../base/scrollTop'
import noPage from '../base/noPage'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      nopage: false,
      tabname: '可领招待',
      entertainslist: [
        {
          uimg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          uname: '这里是发布人的名字',
          eAddtime: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        }
      ]
    }
  },
  components: {
    Header,
    scrollTop,
    noPage
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getAllentertain(form)
      .then((res) => {
        console.log(res)
        if (res.data.entertainslist.length === 0) {
          this.nopage = true
          return false
        }
        this.entertainslist = res.data.entertainslist
      })
  },
  methods: {
    receive (list, index, value) {
      console.log(value)
      // uId: 发布招待的用户id，pId: 商品或礼品卡id，fuId：被领取人的id(我的id), id: 所领取产品id
      let form = this.$qs.stringify({
        uId: value.uId,
        pId: value.pId,
        fuId: uId,
        id: value.eId
      })
      api.getreceive(form)
        .then((res) => {
          console.log(res)
          Toast('添加好友成功')
        })
      list.splice(index, 1)
      if (list.length === 0) {
        this.nopage = true
      }
    }
  }
}
</script>
