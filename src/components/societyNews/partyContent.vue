<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="card container">
      <mt-tab-container-item style="display:block;text-align:center">
        <h2>{{news.fTitle}}</h2>
        <span>{{news.fAddtime}}</span>
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
        <div v-html="news.fDesc"></div>
      </div>
      <div class="flex-center">
        <mt-button class="button" type="danger">一键参加</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/societyNews/index';
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
export default {
  data () {
    return {
      tabname: '微趴',
      news: {
        fTitle: '这里是标题',
        fAddtime: '2018-10-25',
        fDesc: '<h2 class="rich_media_title" id="activity-name">霸王餐免费吃！一口香到心尖！南阳也有100+元的澳洲黑牛肉了！限量供应！</h2><div id="meta_content" class="rich_media_meta_list">'
      }
    }
  },
  components: {
    Header
  }
}
</script>
