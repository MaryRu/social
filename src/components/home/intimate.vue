<template>
  <div class="wrapper">
    <Header :tabname='tabname'></Header>
    <div class="intimate container">
      <ul>
        <li v-for="(item,index) in myFriends" :key="index" class="flex-align-center flex-between">
            <div class="flex-align-center">
              <router-link :to="{path: '/otherHome/'+item.friendId}">
                <div class="headImg">
                  <img :src="item.pic" alt="">
                </div>
              </router-link>
              <router-link :to="{path: '/chat/'+item.friendId}">
                <div class="contentBox">
                  <p class="name">{{item.uname}}</p>
                  <span>{{item.content}}</span>
                </div>
              </router-link>
            </div>
          <p class="task" v-show="item.status == 1" @click="toTask(item)">
            任务
            <!-- <router-link :to="{path: '/task/'+item.tId}"></router-link> -->
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group/available';
li {
  border-bottom: 1px solid #ccc;
}
.contentBox {
  margin-left: .2rem;
  p {
    font-size: .26rem;
    margin-bottom: .1rem;
  }
  span {
    font-size: .24rem;
    color: #666;
  }
}
.task {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  text-align: center;

}
</style>
<script>
import api, { uId } from '../../assets/js/api'
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '亲密关系',
      myFriends: [
        {
          uId: '26',
          id: '1',
          task: '1',
          headImg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '昵称',
          content: '你好呀~'
        },
        {
          uId: '26',
          id: '2',
          task: '0',
          headImg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '昵称',
          content: '你好呀~'
        },
        {
          uId: '26',
          id: '3',
          task: '0',
          headImg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '昵称',
          content: '你好呀~'
        },
        {
          uId: '26',
          id: '4',
          task: '1',
          headImg: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '昵称',
          content: '你好呀~'
        }
      ]
    }
  },
  components: {
    Header
  },
  created () {
    let form = this.$qs.stringify({
      uId: uId
    })
    api.getUserFriendById(form)
      .then((res) => {
        console.log(res)
        this.myFriends = res.data.list
      })
  },
  methods: {
    toTask (value) {
      console.log(value)
      this.$router.push('/task/'+value.tId)
      sessionStorage.setItem('id', value.id)
    }
  }
}
</script>
