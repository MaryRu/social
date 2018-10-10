<template>
  <header class="head">
    <div class="search-input">
      <router-link to="search">
        <div class="inputBox">
          <label class="icon icon-search searchIcon" for="search"></label>
          <input type="text" id='search' placeholder='搜索商品' />
        </div>
      </router-link>
    </div>
  </header>
</template>

<style lang="less" scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 0.85rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ececec;
    .search-button{
      border: none;
      background: none;
      font-size: .25rem;
      color: #999;
      margin-left: .2rem;
      &:focus{
        border: none;
        outline: -webkit-focus-ring-color auto 0;
      }
    }
  }
  .search-input{
    padding: .19rem;
    width: 80%;
    .inputBox{
      border-radius: 0.2rem;
      padding-left: 0.19rem;
      display: flex;
      align-items: center;
      background-color: #ededed;
      input{
        border-radius: 0.2rem;
        border: none;
        height: 0.49rem;
        // width: 90%;
        background-color: #ededed;
        &:focus{
          outline-offset: 0;
          outline: none;
        }
      }
    }
  }
</style>
