<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="container">
      <div class="available-list">
        <ul>
          <li v-for="(item, index) in availableList" :key="index" class="mb">
            <div class="list-top mb flex-between">
              <div class="flex-between">
                <div class="img-box">
                  <img :src="item.img" alt="">
                </div>
                <div class="name-box ml">
                  <p class="mb title">{{item.name}}</p>
                  <span>{{item.time}}</span>
                </div>
              </div>
              <i class="icon icon-close"></i>
            </div>
            <div class="list-content">
              <img :src="item.pic" alt="">
            </div>
            <div class="button"><p>一键领取，加为好友</p></div>
          </li>
        </ul>
      </div>
    </div>
    <scrollTop></scrollTop>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/group';
.available-list {
  ul {
    li {
      padding: .2rem;
      background-color: #fff;
      .list-content {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
<script>
import Header from '../base/header-back'
import scrollTop from '../base/scrollTop'
export default {
  data () {
    return {
      tabname: '可领招待',
      availableList: [
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '这里是发布人的名字',
          time: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '这里是发布人的名字',
          time: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '这里是发布人的名字',
          time: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '这里是发布人的名字',
          time: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
          name: '这里是发布人的名字',
          time: '发布的时间',
          pic: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658'
        }
      ]
    }
  },
  components: {
    Header,
    scrollTop
  }
}
</script>
