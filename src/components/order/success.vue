<template>
  <div class="wrapper">
    <div class="success">
      <div class="success-box">
        <p class="mb">
          <router-link to="/index">
            <el-button class="success-btn" round>返回首页</el-button>
          </router-link>
        </p>
        <p>
          <router-link to="/order" replace>
            <el-button round>查看订单</el-button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.success {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: url('../../assets/images/success-bg.png') no-repeat;
  background-size: contain;
}
.success-box {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  margin-left: -2rem;
  p {
    width: 4rem;
    button {
      width: 100%;
    }
    .success-btn {
      background-color: #61bba0;
      color: #fff;
    }
  }
  .mb {
    margin-bottom: .8rem;
  }
}
</style>
