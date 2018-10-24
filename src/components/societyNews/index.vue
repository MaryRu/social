<template>
  <div class="wrapper">
    <Header :tabname='tabname'></Header>
    <div class="societyNews container">
      <mt-navbar v-model="selected" class="navbar">
        <mt-tab-item id="1">鲜闻</mt-tab-item>
        <mt-tab-item id="2">微趴</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="news-content">
            <ul>
              <li v-for="(item,index) in news" :key="index">
                <p class="times">{{item.addtime}}</p>
                <div class="artic-box">
                  <div class="article-list" v-for="(artic,index) in item.freshSmellsList" :key="index">
                    <div class="image-box">
                      <img :src="artic.fPic" alt="">
                    </div>
                    <p class="artic-title text-ellipsis">{{artic.fTitle}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="news-content">
            <ul>
              <li v-for="(item,index) in party" :key="index">
                <p class="times">{{item.addtime}}</p>
                <div class="artic-box">
                  <div class="article-list" v-for="(artic,index) in item.list" :key="index">
                    <div class="image-box">
                      <img :src="artic.r1" alt="">
                    </div>
                    <p class="artic-title text-ellipsis">{{artic.aTitle}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <Footer :urlRouter="$route.path" :cartnum='cartLength' ref="footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/societyNews/index';
</style>
<script>
import Header from '../base/header'
import Footer from '../base/footer'
import api from '../../assets/js/api'
export default {
  data () {
    return {
      tabname: '颜粉圈',
      cartLength: 2,
      selected: '1',
      news: [
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        },
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        },
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/ff4107ab24763dda3606faef88139529db3313018147f-i3dfWI_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        }
      ],
      party: [
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        },
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        },
        {
          times: '2018-10-15',
          article: [
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            },
            {
              img: 'http://img.hb.aicdn.com/fa8cdd61944741c29b4c3058da93ef1dd52e225e4c39-3tYG3q_fw658',
              title: '这里是文章标题这里是文章标题这文章标题这里是文章标题这里是文章标题这里是文章标题这里是文章标题'
            }
          ]
        }
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    selected (value) {
      console.log(value)
      if (value === 1) {
        this.newsList()
      } else {
        this.partyList()
      }
    }
  },
  created () {
    this.newsList()
  },
  methods: {
    newsList () {
      api.getAllfreshsmell()
        .then((res) => {
          console.log(res)
          this.news = res.data.list3
        })
    },
    partyList () {
      api.getAllactivity()
        .then((res) => {
          console.log(res)
          this.party = res.data.activitiesList
        })
    }
  }
}
</script>
