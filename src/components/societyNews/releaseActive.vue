<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="party container">
      <mt-field label="活动标题" placeholder="请输入活动标题" type="text" v-model="news.fTitle"></mt-field>
      <mt-field label="活动时间" placeholder="活动时间" type="date" v-model="news.fAddtime"></mt-field>
      <mt-field label="活动地点" placeholder="活动地点" type="text" v-model="news.address"></mt-field>
      <mt-field label="参与人数" placeholder="请输入参加人数" type="number" v-model="news.number"></mt-field>
      <mt-field label="活动费用" placeholder="请输入活动费用" type="text" v-model="news.money"></mt-field>
      <!-- <mt-field label="活动内容" placeholder="内容介绍" type="textarea" rows="4" v-model="news.introduction"></mt-field>
      <mt-field label="上传活动图片" class="labelImg">
        <ul class="flex flex-wrap">
          <li v-for="(item,index) in news.labelImg" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </mt-field> -->
      <div class="mint-cell mint-field">
        <div class="mint-cell-wrapper">
          <p>活动内容</p>
        </div>
      </div>
      <div class="mint-cell-value">
        <textarea placeholder="描述活动内容" rows="5" class="mint-field-core" maxlength="500" v-model="news.introduction"></textarea>
        <div class="mint-field-clear" style="display: none;">
          <i class="mintui mintui-field-error"></i>
        </div>
        <span class="mint-field-state is-default">
          <i class="mintui mintui-field-default"></i>
        </span>
        <div class="mint-field-other"></div>
      </div>
      <div class="mint-cell mint-field">
        <div class="mint-cell-wrapper">
          <p>上传活动图片</p>
        </div>
      </div>
      <div class="img-wrap">
        <div v-for="(img, index) in news.labelImg" :key="index" class="img-list">
          <img :src="img.img" alt="">
        </div>
        <label class="upload-img" for="upload-img">
          <i slot="icon" class="icon icon-img"></i>
        </label>
        <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
      </div>
    </div>
    <div class="flex-center">
      <mt-button type="danger" class="button">一键发布</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/function';
.party {
  background-color: #fff;
  span {
    color: #333;
    font-size: .26rem;
  }
}
.mint-cell-value {
  padding-left: .2rem;
  border-bottom: 1px solid #f0f0f0;
}
.img-list {
  float: left;
  img {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.upload-img {
  float: left;
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 10px;
  i {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 50%;
    margin-left: -15px;
  }
}
.upload-img:last-child{
  margin-bottom: 0;
}
.img-wrap{
  .clearfix();
  padding: 10px 10px 0 10px;
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
      tabname: '发布活动',
      news: {
        fTitle: '这里是标题',
        fAddtime: '2018-10-25',
        address: '河南省南阳市宛城区长江路80号南阳理工学院',
        number: 20,
        money: '30元',
        introduction: '这里是很长很长的活动介绍，主要说说活动都是干啥的',
        labelImg: [
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          },
          {
            img: 'http://img.hb.aicdn.com/4f61761008c6aaa56d92dc9c262e61bb9c88fd4f15dd6-S5IaKV_fw658'
          }
        ]
      }
    }
  },
  components: {
    Header
  },
  methods: {
    uploadImg () {

    }
  }
}
</script>
