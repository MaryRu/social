import axios from 'axios'
import { Toast } from 'mint-ui'
// 线上
var url = 'http://tkbang.com.cn:8088'
// var url = 'http://47.100.216.85:8080/social_project/'
// 本地
// var url = 'http://115.158.20.211:8080/social_project'
// var token = localStorage.getItem('token')
var uId = localStorage.getItem('uId')
// axios 配置
// axios.defaults.timeout = 5000
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
  countintegral (params) {
    // 用户所得积分
    return Post('/integral/countintegral', params)
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
  getAllProduct (params) {
    // 获取所有商品
    return Post('/product/getAllProduct', params)
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
  },
  addOrderByCart (params) {
    // 在购物车中购买订单
    return Post('/order/addOrderByCart', params)
  },
  givelike (params) {
    // 用户点赞
    return Post('/tieba/givelike', params)
  },
  getentertainByUser (params) {
    // 可领招待
    return Post('/entertain/getentertainByUser', params)
  },
  deleteTieba (params) {
    // 删除发布的颜络社
    return Post('/tieba/deleteTieba', params)
  },
  deletecomment (params) {
    // 用户删除评论
    return Post('/comment/deletecomment',params)
  },
  getActivityById (params) {
    // 根据id查找微趴
    return Post('/activity/getActivityById',params)
  },
  addactivitydesc (params) {
    // 一键参与
    return Post('/activitydesc/addactivitydesc',params)
  },
  delete (params) {
    // delete
    return Post('/picture/delete',params)
  },
  getAllentertain (params) {
    // 可领招待
    return Post('/entertain/getAllentertain',params)
  },
  getreceive (params) {
    // 一键领取加为好友
    return Post('/entertain/getreceive',params)
  },
  editentertain (params) {
    // 修改条件
    return Post('/entertain/editentertain',params)
  },
  delentertain (params) {
    // 修改条件
    return Post('/entertain/delentertain',params)
  },
  getStatus (params) {
    // 我的招待(待领取/已完成)
    return Post('/entertain/getStatus',params)
  },
  getAllnotices () {
    // 客服中心
    return Post('/notices/getAllnotices')
  },
  getnoticesById (params) {
    // 根据ID找答案
    return Post('/notices/getnoticesById',params)
  },
  getUserFriendById (params) {
    // 某个用户的所有好友
    return Post('/userFriend/getUserFriendById',params)
  },
  addAdvice (params) {
    // 问题反馈
    return Post('/advice/addAdvice',params)
  },
  getByUid (params) {
    // 获取两个人的聊天记录
    return Post('/userchat/getByUid', params)
  },
  adduserchat (params) {
    // 发布聊天
    return Post('/userchat/adduserchat',params)
  },
  getUserFriendBytId (params) {
    // 展示好友亲密任务
    return Post('/userFriend/getUserFriendBytId',params)
  },
  addTaskFriend (params) {
    // 发布任务内容
    return Post('/userFriend/addTaskFriend',params)
  },
  getByPlid (params) {
    // 根据板块id查找颜络社
    return Post('/plate/getByPlid',params)
  },
  getAll () {
    // 获取所有店铺
    return Post('/stores/getAll')
  },
  CouponById (params) {
    // 获取五折或一折优惠券
    return Post('/couponInfo/CouponById', params)
  },
  receiveCoupon (params) {
    // 领取优惠券
    return Post('/couponInfo/receiveCoupon', params)
  },
  useCoupon (params) {
    // 去使用优惠券
    return Post('/couponInfo/useCoupon', params)
  }
}
export { uId }
