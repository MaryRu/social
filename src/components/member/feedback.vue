<template>
  <div class="wrapper post-edit">
    <Header :tabname="tabname"></Header>
    <div class="content">
      <a class="mint-cell mint-field is-textarea is-nolabel">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text"></span>
          </div>
          <div class="mint-cell-value">
            <textarea @change="changetext" placeholder="如果您对我们有什么建议，想法和期望，请告诉我们" rows="5" class="mint-field-core" maxlength="500" v-model="content"></textarea>
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
    <div class="button mt">
      <mt-button type="danger" class="sub-button">提交</mt-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/post';
.post-edit .content {
  margin-top: .8rem;
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
.button {
  width: 80%;
  margin: .2rem auto;
  .sub-button {
    width: 100%;
    border-radius: 20px;
  }
}
</style>
<script>
import { Toast } from 'mint-ui'
import api, { uId } from '../../assets/js/api'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '意见反馈',
      radio2: '',
      imgLength: true,
      imglist: [
      ],
      selectArr: [],
      content: ''
    }
  },
  components: {
    Header
  },
  created() {
  },
  methods: {
    saveForm () {
      if (this.content === '' && this.imglist.length === 0) {
        Toast('请向我们说明详细意见哦')
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
            this.$router.replace('/member')
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
        var imgName = this.$el.querySelector('.file').files[0].name
        reader.readAsDataURL(this.$el.querySelector('.file').files[0]);
        reader.onload = (e) => {
          var image = new Image()
          image.src = e.target.result
          image.onload = () => {
            let form = this.$qs.stringify({
              uploadFile: image.src
            })
            api.upload(form)
              .then((res) => {
                this.imglist.push(res.data.url)
              })
          }
        }
        console.log( JSON.stringify(this.imglist))
      }
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
