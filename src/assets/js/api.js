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
  index (params) {
    // 首页
    return Post('/index/getIndexDetail', params)
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
    // 查看所有标签
    return Post('/label/getlabel')
  },
  addlabel (params) {
    // 添加标签
    return Post('/labelusers/addlabel', params)
  },
  getAllTieba (params) {
    // 颜络社
    return Post('/tieba/getAllTieba', params)
  },
  getAllgift (params) {
    // 礼品卡
    return Post('/gift/getAllgift', params)
  },
  getHotProduct () {
    // 热销商品和商品轮播图
    return Post('/product/getHotProduct')
  },
  selectByUId (params) {
    // 我的礼品卡
    return Post('/gift/selectByUId', params)
  },
  getAllfreshsmell () {
    // 鲜闻
    return Post('/freshsmell/getAllfreshsmell')
  },
  getAllactivity () {
    // 微趴
    return Post('/activity/getAllactivity')
  },
  getCouponInfoByUser (params) {
    // 优惠券
    return Post('/couponInfo/getCouponInfoByUser', params)
  },
  getRechargeUser (params) {
    // 会员消费记录
    return Post('/recharge/getRechargeUser', params)
  },
  getRecordById (params) {
    // 会员卡
    return Post('/records/getRecordById', params)
  },
  ActivityInfoUser (params) {
    // 个人发起的活动
    return Post('/activityInfo/ActivityInfoUser', params)
  },
  activitydescUser (params) {
    // 个人参与的活动
    return Post('/activitydesc/activitydescUser', params)
  },
  getByTid (params) {
    // 颜络社详情
    return Post('/tieba/getByTid', params)
  },
  addcomment (params) {
    // 用户评论
    return Post('/comment/addcomment', params)
  },
  chooseLabel (params) {
    // 用户选择标签
    return Post('/label/chooseLabel', params)
  },
  addTieba (params) {
    // 发布颜络社
    return Post('/tieba/addTieba', params)
  },
  getFreshById (params) {
    // 根据ID查找鲜闻
    return Post('/freshsmell/getFreshById', params)
  },
  getUserById (params) {
    // 个人主页信息
    return Post('/user/getUserById', params)
  },
  pictureupload (params) {
    // 上传封面
    return Post('/pictureupload/upload', params)
  },
  editUserByUId (params) {
    // 修改个人信息
    return Post('/user/editUserByUId', params)
  },
  realNameAuthe (params) {
    // 实名认证
    return Post('/user/realNameAuthe', params)
  },
  getAllProduct () {
    // 获取所有商品
    return Post('/product/getAllProduct')
  },
  getProductBySearch (params) {
    // 搜索
    return Post('/product/getProductBySearch', params)
  },
  getProductByPid (params) {
    // 商品详情
    return Post('/product/getProductByPid', params)
  },
  addCart (params) {
    // 加入购物车
    return Post('/cart/addCart', params)
  },
  getCart (params) {
    // 用户的购物车
    return Post('/cart/getCart', params)
  },
  deleteCart (params) {
    // 删除购物车商品
    return Post('/cart/deleteCart', params)
  },
  deleteCartByUid (params) {
    // 删除购物车全部商品
    return Post('/cart/deleteCartByUid', params)
  },
  getOrderByUser (params) {
    // 订单列表
    return Post('/order/getOrderByUser', params)
  },
  getOrederByOid (params) {
    // 通过订单编号获取订单详情
    return Post('/order/getOrederByOid', params)
  },
  givelike (params) {
    // 通过订单编号获取订单详情
    return Post('/tieba/givelike', params)
  }
}
export { uId }
