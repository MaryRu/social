<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="verified container">
      <div class="topBox">
        <img src="../../assets/images/verified.png" alt="">
        <div class="info-box">
          <ul>
            <li>
              真实姓名：
              <input type="text" v-model="name" placeholder="请输入真实姓名">
            </li>
            <li>
              身份证号：
              <input type="text" v-model="idnumber" placeholder="请输入15位或18位身份证号">
            </li>
          </ul>
        </div>
      </div>
      <div class="idcard-box">
        <ul class="flex-align-center flex-between">
          <li>
            <label class="upload-img" for="upload-img">
              <img src="../../assets/images/card-zheng.png" alt="" v-show="nozCard">
              <img v-show="!nozCard" :src="img[0]" alt="">
            </label>
            <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
            <p>请上传身份证正面</p>
          </li>
          <li>
            <label class="upload-img" for="upload-img">
              <img src="../../assets/images/card-fan.png" alt="" v-show="nofCard">
              <img v-show="!nofCard" :src="img[1]" alt="">
            </label>
            <input @change="uploadImg" type="file" accept="image/*" id="upload-img" name="upload-img" hidden="hidden" class="file">
            <p>请上传身份证反面</p>
          </li>
        </ul>
      </div>
      <div class="button" @click="submit">
         <el-button type="danger" round style="width: 100%">提交</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
.idcard-box {
  padding: .2rem;
  li {
    width: 50%;
    text-align: center;
    img {
      width: 95%;
      height: 2rem;
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
import api, { uId } from '../../assets/js/api'
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      nozCard: false,
      nofCard: false,
      tabname: '实名认证',
      name: '',
      idnumber: '',
      img:[]
    }
  },
  components: {
    Header
  },
  created () {
    if (this.img.length === 0) {
      this.nozCard = true
      this.nofCard = true
    }
  },
  methods: {
    uploadImg () {
      var formData = new FormData()
      var reader = new FileReader()
      // var imgName = this.$el.querySelector('.file').files[0].name
      reader.readAsDataURL(this.$el.querySelector('.file').files[0]);
      Indicator.open()
      reader.onload = (e) => {
        var image = new Image()
        image.src = e.target.result
        image.onload = () => {
          let form = this.$qs.stringify({
            uploadFile: image.src
          })
          api.upload(form)
            .then((res) => {
              console.log(res)
              Indicator.close()
              this.img.push(res.data.url)
              this.nozCard = false
              if (this.img.length == 2) {
                this.nofCard = false
              }
            })
        }
      }
    },
    submit () {
      if (!this.name) {
        Toast('请输入您的真实姓名')
        return false
      }
      if (!this.idnumber) {
        Toast('请输入您的身份证号码')
      } else {
        this.checkID(this.idnumber)
      }
      if (this.img.length !== 2) {
        Toast('上传身份证正反面图片')
        return false
      }
      let form = this.$qs.stringify({
        uId: uId,
        picName: this.img,
        uIdNumber: this.idnumber
      })
      api.realNameAuthe(form)
        .then((res) => {
          console.log(res)
          this.$router.replace('/member')
        })
    },
    checkID(ID) {
      if(typeof ID !== 'string') {
        Toast('非法字符串')
        this.idnumber = ''
        return '非法字符串'
      };
      var city = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
      var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
      var d = new Date(birthday);
      var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
      var currentTime = new Date().getTime();
      var time = d.getTime();
      var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      var sum = 0, i, residue;
    
      if(!/^\d{17}(\d|x)$/i.test(ID)) {
        Toast('身份证号码有误')
        this.idnumber = ''
        return '身份证号码有误'
      };
      if(city[ID.substr(0,2)] === undefined) {
        Toast('身份证地区有误')
        this.idnumber = ''
        return "身份证地区有误"
      }
      if(time >= currentTime || birthday !== newBirthday) return '非法生日';
      for(i=0; i<17; i++) {
        sum += ID.substr(i, 1) * arrInt[i];
      }
      residue = arrCh[sum % 11];
      if (residue !== ID.substr(17, 1)) {
        Toast('身份证号码有误哦')
        this.idnumber = ''
        return '身份证号码有误哦'
      }
    
      return city[ID.substr(0,2)]+","+birthday+","+(ID.substr(16,1)%2?" 男":"女")
    }
  }
}
</script>
