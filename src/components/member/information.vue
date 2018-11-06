<template>
  <div class="information">
    <!-- <mt-header fixed title="修改个人信息">
      <a href="javascript:history.go(-1);" slot="left" >
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header> -->
    <Header :tabname="tabname"></Header>
    <div class="content container">
      <div class="school">
        <mt-cell title="头像">
          <label for="upload-img">
            <img slot="icon" :src="user.uImg" width="40" height="40">
          </label>
          <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
        </mt-cell>
        <mt-cell title="昵称" @click.native="openPrompt" is-link>
          <span>{{user.uName}}</span>
        </mt-cell>
        <mt-cell title="个性签名" @click.native="openInt" is-link>
          <span>{{user.uIntroduction}}</span>
        </mt-cell>
      </div>
      <!-- <div class="me">
        <mt-cell title="手机号">
          <span>{{phone}}</span>
        </mt-cell>
      </div> -->
    </div>
    <div class="flex-center" @click="submit">
      <mt-button class="button" size="large" type="danger">保存</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/mine';
.button {
  width: 80%;
  border-radius: 20px;
}
</style>
<script>
import Header from '../base/header-back'
import { Toast, MessageBox, Indicator } from 'mint-ui'
import api,{ uId } from '../../assets/js/api'
export default {
  data() {
    return {
      tabname: '修改个人信息',
      user: {
        uImg: '',
        uName: '',
        uIntroduction: ''
      }
    }
  },
  components: {
    Header
  },
  created() {
    this.user = JSON.parse(sessionStorage.getItem('userinfo'))
  },
  methods: {
    userUpdate(sign, name) {
      
    },
    openPrompt() {
      MessageBox.prompt(' ', '请输入姓名').then(({ value }) => {
        console.log(value)
        if (value) {
          this.user.uName = value
        }
      })
    },
    openInt () {
      MessageBox.prompt(' ', '请输入个性签名').then(({ value }) => {
        if (value) {
          this.user.uIntroduction = value
        }
      })
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
      // Indicator.open()
      // reader.onload = (e) => {
      //   var image = new Image()
      //   image.src = e.target.result
      //   image.onload = () => {
      //     let form = this.$qs.stringify({
      //       uploadFile: image.src
      //     })
      //     api.upload(form)
      //       .then((res) => {
      //         Indicator.close()
      //         console.log(res)
      //         this.user.uImg = res.data.url
      //       })
      //   }
      // }
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
          console.log(data.length)
          self.imgUrl = result

          var formData = new FormData()
          let form = self.$qs.stringify({
            uploadFile: data
          })
          api.upload(form)
            .then((res) => {
              console.log(res)
              self.user.uImg = res.data.url
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
      let form = this.$qs.stringify({
        uId: uId,
        uName: this.user.uName,
        uIntroduction: this.user.uIntroduction,
        uImg: this.user.uImg
      })
      api.editUserByUId(form)
        .then((res) => {
          console.log(res)
          this.$router.replace('/homePage')
        })
    }
  },
  mounted() {
  }
}
</script>
