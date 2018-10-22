import axios from 'axios'
import { Toast } from 'mint-ui'

var url = 'http://115.158.20.211:8080/social_project/'
// var token = localStorage.getItem('token')
var uId = localStorage.getItem('uId')

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = url

export function Post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
        if (response.data.status === 200) {
          resolve(response.data)
        } else {
          Toast({
            message: response.data.msg
          })
        }
      }, err => {
        reject(err)
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
  })
}
export function Get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data)
        } else {
          Toast({
            message: response.data
          })
        }
      }, err => {
        reject(err)
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '服务器出问题了~快去找程序员'
        })
      })
  })
}

export default {
  register (params) {
    // 注册
    return Post('/user/register', params)
  },
  getSsm (params) {
    // 发送验证码
    return Post('/send/getSsm', params)
  },
  login (params) {
    // 登录
    return Post('/user/login', params)
  },
  forgetPsd (params) {
    // 忘记密码
    return Post('/user/editPassword', params)
  },
  index () {
    // 首页
    return Post('/index/getIndexDetail', uId)
  },
  editUser (params) {
    // 创建名片
    return Post('/user/editUser', params)
  },
  upload (params) {
    // 上传头像
    return Post('/picture/upload', params)
  },
  lable () {
    // 上传头像
    return Post('/label/getlabel')
  }
}
