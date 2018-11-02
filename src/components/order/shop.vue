<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="shop container">
      <ul>
        <li v-for="(item, index) in shopList" :key="index">
          <router-link :to="{path: '/classify/'+item.sId}">
            <p>{{item.sName}}</p>
            <span>{{item.sAddress}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.shop {
  background-color: #fff;
  ul {
    li {
      padding: .2rem;
      border-bottom: 1px solid #f0f0f0;
      span {
        font-size: .22rem;
        color: #666;
      }
    }
  }
}
</style>
<script>
import api from '../../assets/js/api'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '选择店铺',
      shopList: [
        {
          sId: '1',
          sName: '南阳府衙',
          sAddress: '河南省南阳市宛城区南阳府衙小吃街'
        },
        {
          sId: '2',
          sName: '南阳新华',
          sAddress: '河南省南阳市宛城区南阳新华小吃街'
        },
        {
          sId: '13',
          sName: '南阳府衙',
          sAddress: '河南省南阳市宛城区南阳府衙小吃街'
        },
        {
          sId: '4',
          sName: '南阳府衙',
          sAddress: '河南省南阳市宛城区南阳府衙小吃街'
        }
      ]
    }
  },
  components: {
    Header
  },
  created () {
    api.getAll()
      .then((res) => {
        console.log(res)
        this.shopList = res.data.list
      })
  }
}
</script>
