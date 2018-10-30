<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="card container">
      <mt-tab-container-item style="display:block;text-align:center">
        <h2>{{news.aTitle}}</h2>
        <span>{{news.aAddtime}}</span>
      </mt-tab-container-item>
      <div class="party">
        <!-- <mt-field label="活动时间" placeholder="活动时间" type="date" v-model="news.fAddtime"></mt-field>
        <mt-field label="活动地点" placeholder="活动地点" type="text" v-model="news.address"></mt-field>
        <mt-field label="参与人数" placeholder="请输入参加人数" type="number" v-model="news.number"></mt-field>
        <mt-field label="活动费用" placeholder="请输入活动费用" type="text" v-model="news.money"></mt-field>
        <mt-field label="活动内容" placeholder="内容介绍" type="textarea" rows="4" v-model="news.introduction"></mt-field>
        <mt-field label="上传图片" class="labelImg">
          <ul class="flex flex-wrap">
            <li v-for="(item,index) in news.labelImg" :key="index">
              <img :src="item.img" alt="">
            </li>
          </ul>
        </mt-field> -->
        <div v-html="news.aDesc"></div>
      </div>
      <div class="mt">
        <ul class="flex-wrap flex-align-center">
          <li class="mr mb" v-for="(item, index) in news.list" :key="index">
            <div class="img-box">
              <img :src="item.uimg" alt="">
              <p>{{item.uname}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex-center" @click="join">
        <mt-button class="button" type="danger">一键参加</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/societyNews/index';
@import '../../assets/less/group';
.party {
  span {
    color: #333;
    font-size: .26rem;
  }
}
.labelImg {
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.button {
  width: 80%;
  margin: 0.2rem auto;
  border-radius: 20px;
}
</style>
<script>
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      tabname: '微趴',
      news: {
        aTitle: '这里是标题',
        aAddtime: '2018-10-25',
        aDesc: '<h2 class="rich_media_title" id="activity-name">霸王餐免费吃！一口香到心尖！南阳也有100+元的澳洲黑牛肉了！限量供应！</h2><div id="meta_content" class="rich_media_meta_list">',
        list: [
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          },
          {
            uimg: 'http://img.hb.aicdn.com/151c8abb31e545ae4b5ba07458fdabcd25c83d8e35be-uQRUvm_fw658',
            uname: '歌颂者'
          }
        ]
      },
      user: {
        uimg: '',
        uname: ''
      }
    }
  },
  components: {
    Header
  },
  created() {
    this.user.uimg = sessionStorage.getItem('uImg')
    this.user.uname = sessionStorage.getItem('uName')
    console.log(this.$route.params.id)
    let form = this.$qs.stringify({
      aId: this.$route.params.id
    })
    api.getActivityById(form)
      .then((res) => {
        console.log(res)
        this.news = res.data.activity
      })
  },
  methods: {
    join () {
      let form = this.$qs.stringify({
        aId: this.$route.params.id,
        uId: uId
      })
      api.addactivitydesc(form)
        .then((res) => {
          console.log(res)
          Toast(res.msg)
          this.news.list.push(this.user)
        })
    }
  }
}
</script>
