<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div class="taskContent">
        <h2>{{task.tTitle}}</h2>
        <p class="textual">{{task.tDesc}}</p>
        <p>任务要求: {{task.tConditions}}</p>
        <p>积分奖励: {{task.tReward}}</p>
        <p>任务时间：{{task.tAddtime}} 至 {{task.tEndtime}}</p>
      </div>
      <div class="confirm post-edit">
        <p class="finish">完成任务啦~上传感受赢得积分吧！</p>
        <div class="content">
          <a class="mint-cell mint-field is-textarea is-nolabel">
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <span class="mint-cell-text"></span>
              </div>
              <div class="mint-cell-value">
                <textarea @change="changetext" placeholder="谈谈自己的感受吧~" rows="5" class="mint-field-core" maxlength="500" v-model="content"></textarea>
                <div class="mint-field-clear" style="display: none;">
                  <i class="mintui mintui-field-error"></i>
                </div>
                <span class="mint-field-state is-default">
                  <i class="mintui mintui-field-default"></i>
                </span>
                <div class="mint-field-other"></div>
              </div>
            </div>
            <div class="mint-cell-right"></div>
          </a>
          <div class="content_len">
            <span id="content_len">{{content.length}}/500</span>
          </div>
          <div class="img-wrap">
            <label for="upload-img">
              <div class="flex-align-center flex-center iconBox" v-show="imgLength">
                <i slot="icon" class="icon icon-img"></i>
              </div>
              <img slot="icon" :src="img" width="80" height="80" v-show="!imgLength">
            </label>
            <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
          </div>
          <input type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden">
        </div>
        <div class="mt button" @click="submit">
          <mt-button size="large" type="danger">提交</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scope>
@import '../../assets/less/post';
.container {
  background-color: #fff;
}
.iconBox {
  width: 80px;
  height: 80px;
  background-color: #f2f2f2;
}
.taskContent {
  padding: .2rem;
  h2 {
    text-align: center;
    font-size: 0.35rem;
    font-weight: 500;
  }
  p {
    text-indent: 2em;
    line-height: .5rem;
  }
}
.finish {
  color: #e97889;
  text-indent: 2em;
  line-height: .5rem;
}
.button {
  width: 80%;
  margin: .2rem auto;
  .mint-button {
    border-radius: 20px;
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
      imgLength: true,
      // imglist: [],
      img: '',
      tabname: '任务',
      content: '',
      task: {
        tTitle: '任务',
        tDesc: '这里是任务的文本内容',
        tConditions: '满足条件满足条件',
        tReward: '500',
        tAddtime: '2018-10-23 17:03:13',
        tEndtime: '2018-10-24 00:00:00'
      }
    }
  },
  components: {
    Header
  },
  created () {
    // console.log(this.$route.params.id)
    let form = this.$qs.stringify({
      tId: this.$route.params.id
    })
    api.getUserFriendBytId(form)
      .then((res) => {
        console.log(res)
        this.task = res.data.tasks
        this.task.tAddtime = res.data.tasks.tAddtime.split(' ')[0]
        this.task.tEndtime = res.data.tasks.tEndtime.split(' ')[0]
      })
  },
  methods: {
    changetext () {
      if (this.content.length > 500) {
        Toast('发布内容不能超过500字')
      }
    },
    uploadImg () {
        var formData = new FormData()
        var reader = new FileReader()
        var imgName = this.$el.querySelector('.file').files[0]
        reader.readAsDataURL(this.$el.querySelector('.file').files[0])
        // 判断图片大小
        if (imgName.size / 1024 > 10000) {
          Toast('图片过大不支持上传')
        } else {
          this.imgPreview(imgName)
        }
      },
      // 获取图片
    imgPreview (file, callback) {
      let self = this
      // 判断是否支持FileReader
      if (!file || !window.FileReader) return
      // 创建一个reader
      var reader = new FileReader()
      // 将图片转成base64格式
      reader.readAsDataURL(file)
      // 读取成功后的回调
      reader.onloadend = function () {
        let result = this.result
        let img = new Image()
        img.src = result
        console.log('============未压缩图片===========')
        console.log(result.length)
        
        img.onload = function () {
          let data = self.compress(img)
          self.imgUrl = result

          var formData = new FormData()
          let form = self.$qs.stringify({
            uploadFile: data
          })
          api.upload(form)
            .then((res) => {
              console.log(res)
              self.img = res.data.url
              console.log(self.img)
              if (self.img !== '') {
                self.imgLength = false
              }
            })
        }
      }
    },
      // 压缩图片
      compress(img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        canvas.width = width;
        canvas.height = height;
        // 铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);

        //进行最小压缩
        let ndata = canvas.toDataURL("image/jpeg", 0.1);
        console.log("*******压缩后的图片大小*******");
        // console.log(ndata)
        console.log(ndata.length);
        return ndata;
      },
      submit () {
        if (this.content === '' && this.img === '') {
          Toast('请发表您的感受，赚取积分')
        } else {
          let form = this.$qs.stringify({
            id: sessionStorage.getItem('id'),
            tId: this.$route.params.id,
            tContent: this.content,
            picName: this.img
          })
          api.addTaskFriend(form)
            .then((res) => {
              console.log(res)
              Toast('提交成功')
              this.$router.replace('/intimate')
            })
        }
      }
    }
  }
</script>
