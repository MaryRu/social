<template>
  <div class="wrapper">
    <div class="success flex-center">
      <div class="success-box">
        <img src="../../assets/images/success.png" alt="">
        <p class="mt">支付成功</p>
        <ul class="flex-between mt">
          <li>
            <router-link to="/">
              返回首页
            </router-link>
          </li>
          <li>
            <router-link to="/order">
              查看订单
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.success {
  margin-top: 1rem;
  text-align: center;
}
.success-box {
  width: 45%;
}
img {
  width: 2rem;
  height: 2rem;
}
ul {
  li {
    border: 1px solid #ccc;
    padding: .1rem;
  }
}
</style>
