<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="homePage container">
      <div class="topPage">
        <router-link to="/">
          <img src="../../assets/images/bgImg.png" alt="">
        </router-link>
        <div class="headImg">
          <img src="../../assets/images/login1.png" alt="">
          <i class="icon icon-camera-select"></i>
        </div>
      </div>
      <div class="home-page-info">
        <p>{{info.name}}</p>
        <span>{{info.sign}}</span>
      </div>
      <div class="nav">
        <div class="flex-align-center">
          <i class="icon icon-group mr"></i>
          <p>我的社团</p>
        </div>
        <ul class="flex-align-center flex-wrap mt">
          <li v-for="(item,index) in groupList" :key="index">
            <router-link to="/">
              <img :src="item.src" alt="">
              <p class="text-ellipsis-line">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="flex-align-center">
          <i class="icon icon-friends mr"></i>
          <p>我的好友</p>
        </div>
        <ul class="flex-align-center flex-wrap mt">
          <li v-for="(item,index) in friends" :key="index">
            <router-link to="/otherHome">
              <img :src="item.src" alt="">
              <p class="text-ellipsis-line">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt">
        <!-- 我发布的动态哦 -->
        <Group></Group>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/member/index';
.home-page-info {
  padding-top: .8rem;
  text-align: center;
  background-color: #fff;
  p {
    font-size: .3rem;
  }
}
.nav {
  padding: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}
ul {
  li {
    width: 25%;
    text-align: center;
    overflow: hidden;
    margin-bottom: .1rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
import Group from '../base/group'
export default {
  data () {
    return {
      tabname: '个人主页',
      info: {
        name: '这里是昵称',
        sign: '这里是个性签名'
      },
      groupList: [
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈养老圈养老圈养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '养老圈'
        }
      ],
      friends: [
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        },
        {
          src: 'http://img.hb.aicdn.com/41e12fb9d4e615603ae80a567b2abbf997bc5867119e6-o0pBWK_fw658',
          title: '小明'
        }
      ]
    }
  },
  components: {
    Header,
    Group
  }
}
</script>
