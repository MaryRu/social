<template>
  <div class="post-edit">
    <mt-header>
      <router-link to="/group" slot="left">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <mt-button slot="right" @click="saveForm">
        <!-- <i :class="!!form.content?'active':''" class="icon finish-icon"></i> -->
        发表
      </mt-button>
    </mt-header>
    <div class="content">
      <a class="mint-cell mint-field is-textarea is-nolabel">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text"></span>
          </div>
          <div class="mint-cell-value">
            <textarea @change="changetext" placeholder="说点什么吧~" rows="5" class="mint-field-core" maxlength="500" v-model="content"></textarea>
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
        <div v-for="(img, index) in imglist" :key="index" class="img-list">
          <img :src="img" alt="">
          <i class="icon icon-cha cha" @click="cha(imglist, index, img)"></i>
        </div>
        <label v-show="imgLength" class="upload-img" for="upload-img">
          <i slot="icon" class="icon icon-img"></i>
        </label>
        <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
      </div>
      <input type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden">
    </div>
    <div class="lable mt">
      <div class="title">请选择标签</div>
      <el-radio-group v-model="radio2">
        <el-radio class="radio mt" :label="item.lId" v-for="(item,index) in lableList" :key="index">{{item.lname}}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/post';
.lable {
  background-color: #fff;
  padding: .2rem;
  .radio {
    border: 1px dashed #ccc;
    padding: .1rem .2rem;
  }
  .isSelect {
    border: none;
    color: #fff;
    background-color: @theme_background;
  }
}
.img-list {
  position: relative;
  .cha {
    position: absolute;
    top: 0;
    right: 0.2rem;
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, .6);
  }
}
</style>
<script>
import { Toast } from 'mint-ui'
import api, { uId } from '../../assets/js/api'
export default {
  data () {
    return {
      radio2: '',
      imgLength: true,
      imglist: [],
      lableList: [
        {
          lId: 1,
          lName: '上班'
        },
        {
          lId: 2,
          lName: '逛街'
        },
        {
          lId: 3,
          lName: '吃饭'
        }
      ],
      selectArr: [],
      content: ''
    }
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.chooseLabel(form)
      .then((res) => {
        console.log(res)
        let that = this
        this.lableList = res.data.labelUsersList
        this.lableList.forEach(function (item) {
          if (typeof item.isSelect === 'undefined') {
            that.$set(item, 'isSelect', false)
          }
        })
      })
  },
  methods: {
    saveForm () {
      if (this.content === '' && this.imglist.length === 0) {
        Toast('告诉大家现在的想法吧~')
      } else if (this.radio2 === '') {
        Toast('请选择您的专属标签')
      } else {
        let form = this.$qs.stringify({
          tTitle: this.content,
          plId: this.radio2,
          uId: uId,
          picName: JSON.stringify(this.imglist)
        })
        api.addTieba(form)
          .then((res) => {
            console.log(res)
            this.$router.replace('/group')
          })
      }
    },
    changetext () {
      if (this.content.length > 500) {
        Toast('发布内容不能超过500字')
      }
    },
    uploadImg () {
      if (this.imglist.length >= 9) {
        this.imgLength = false
        Toast('最多只能上传9张图片')
      } else {
        var formData = new FormData()
        var reader = new FileReader()
        var imgName = this.$el.querySelector('.file').files[0]
        reader.readAsDataURL(this.$el.querySelector('.file').files[0]);
        // 判断图片大小
        if (imgName.size / 1024 > 10000) {
          Toast('图片过大不支持上传')
        } else {
          this.imgPreview(imgName)
        }
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
          console.log(data.length)
          self.imgUrl = result

          var formData = new FormData()
          let form = self.$qs.stringify({
            uploadFile: data
          })
          api.upload(form)
            .then((res) => {
              self.imglist.push(res.data.url)
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
    cha (imgList, index, item) {
      // 删除背景图片
      let form = this.$qs.stringify({
        picName: item
      })
      api.delete(form)
        .then((res) => {
          console.log(res)
        })
      imgList.splice(index, 1)
    }
  }
}
</script>
