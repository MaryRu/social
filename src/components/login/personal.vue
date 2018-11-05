<template>
  <div class="wrapper">
    <div class="personal container">
      <h2>首次使用，从创建名片开始</h2>
      <div class="headImg mt">
        <img :src="img" alt="">
        <div class="camera" @click="headImg">
          <i class="icon icon-camera-select"></i>
        </div>
        <input type="file" accept="image/*" enctype="multipart/form-data"
 name="upload" class="hiddenInput" @change="handleFile($event)">
      </div>
      <div class="infoBox">
        <ul>
          <li class="info">
            <input type="text" placeholder="请输入昵称(不超过八个字)" v-model="name">
          </li>
          <li class="info">
            <input type="text" placeholder="请填写个性签名" v-model="sign">
          </li>
          <div style="width: 50%;height: .8rem;margin: 0 auto;">
            <el-col>
              <el-date-picker type="date" placeholder="选择生日" v-model="date" style="width: 100%;"></el-date-picker>
            </el-col>
          </div>
        </ul>
        <div class="sex mt flex-around">
          <el-button type="primary" plain v-model="sex" @click="male">
            <div class="flex-align-center">
              <i class="icon icon-male mr"></i>
              <p>男</p>
            </div>
          </el-button>
          <el-button type="danger" plain v-model="sex" @click="female">
            <div class="flex-align-center">
              <i class="icon icon-female mr"></i>
              <p>女</p>
            </div>
          </el-button>
        </div>
      </div>
      <div class="button" @click="submit">
        <p>创建完成</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
@import '../../assets/less/login/login';
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.hiddenInput {
  display: none;
}
</style>
<script>
import { Toast } from 'mint-ui'
import api from '../../assets/js/api'
let uId = localStorage.getItem('uId')
export default {
  data () {
    return {
      date: '',
      sex: '',
      name: '',
      sign: '',
      img: 'http://ofkzpykzq.bkt.clouddn.com/login.png',
      imageUrl: ''
    }
  },
  methods: {
    male () {
      this.sex = 1
    },
    female () {
      this.sex = 2
    },
    headImg () {
      // 打开上传头像
      this.$el.querySelector('.hiddenInput').click()
    },
    handleFile (e) {
      // 将头像显示
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      if (file.size / 1024 > 10000) {
        Toast('图片过大不支持上传')
      } else {
        this.imgPreview(file)
      }
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        let uploadImg = res.result
        let form = this.$qs.stringify({
          uploadFile: uploadImg
        })
        api.upload(form)
          .then((res) => {
            console.log(res)
            this.img = res.data.url
          })
      }
      reader.readAsDataURL(file)
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
          let blob = self.dataURItoBlob(data)
          console.log("*******base64转blob对象******")
          console.log(blob)

          var formData = new FormData()
          formData.append("file", blob)
          console.log("********将blob对象转成formData对象********")
          console.log(formData.get("file"))
          let config = {
            headers: { "Content-Type": "multipart/form-data" }
          }
          let form = this.$qs.stringify({
            uploadFile: self.imgUrl
          })
          api.upload(form)
            .then((res) => {
              console.log(res)
              this.img = res.data.url
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
      // console.log("*******压缩后的图片大小*******");
      // console.log(ndata)
      // console.log(ndata.length);
      return ndata;
    },
    // base64转成bolb对象
    dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(base64Data.split(",")[1]);
      else byteString = unescape(base64Data.split(",")[1]);
      var mimeString = base64Data
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    },
    submit () {
      if (!this.name) {
        Toast('请输入昵称')
        return false
      }
      if (!this.name.length > 8) {
        Toast('昵称不要大于八位数呀~')
        this.name = ''
        return false
      }
      if (!this.sign) {
        Toast('请填写个性签名')
        return false
      }
      if (!this.sex) {
        Toast('请选择性别')
        return false
      }
      if (!this.date) {
        Toast('请填写生日')
        return false
      } else {
        var str = JSON.stringify(this.date)
        var birthday = str.slice(1, 11)
      }
      console.log(uId)
      let form = this.$qs.stringify({
        uId: uId,
        uName: this.name,
        uIntroduction: this.sign,
        uSex: this.sex,
        uBirthday: birthday,
        uImg: this.img
      })
      api.editUser(form)
        .then((res) => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          this.$router.replace('/lable')
        })
    }
  }
}
</script>
