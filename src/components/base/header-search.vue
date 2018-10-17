<template>
  <header class="head">
    <div class="search-input flex-align-center ">
      <a href="javascript:history.go(-1)" class="left"><i class="el-icon-arrow-left"></i></a>
      <router-link to="search" class="search">
        <div class="inputBox">
          <label class="icon icon-search searchIcon" for="search"></label>
          <input type="text" id='search' placeholder='搜索商品' />
        </div>
      </router-link>
    </div>
  </header>
</template>

<style lang="less" scoped>
@import '../../assets/less/variable';
header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  background-color: @theme_background;
  height: 0.85rem;
  border-bottom: 1px solid #ececec;
}
.left {
  color: #fff;
  margin-right: .2rem;
}
.search {
  width: 85%;
}
.search-input{
  width: 100%;
  padding: .19rem;
  .inputBox{
    border-radius: 0.2rem;
    padding-left: 0.19rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    input{
      border-radius: 0.2rem;
      border: none;
      height: 0.49rem;
      background-color: #fff;
      &:focus{
        outline-offset: 0;
        outline: none;
      }
    }
  }
}
</style>
