<template>
  <div class="wrapper">
    <Header :tabname="tabname"></Header>
    <div class="lable container">
      <p class="mt">仅能选择5个</p>
      <ul class="flex-align-center flex-wrap">
        <li :style="{color:item?('rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'):'#ccc'}" v-for="(item,index) in lableList" :key="index">
          <span>{{item}}</span>
        </li>
      </ul>
      <div class="button">
        <el-button type="danger" round style="width: 100%">确认</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.lable {
  p {
    text-align: center;
  }
}
ul {
  padding: .2rem;
  li {
    padding: .2rem;
    text-align: center;
  }
}
.button {
  margin: 0 auto;
  width: 60%;
}
</style>
<script>
import Header from '../base/header-back'
export default {
  data () {
    return {
      tabname: '选择形象标签',
      lableList: ['日剧fans', '铲屎官', '吉他', '摇滚', 'K歌', '大叔', '只爱美剧', '烘焙', '绘画', '民谣',
        '陶艺', '手工', '流行', '仙气十足', '衬衫控', '穷游党', '汪星人', '男神', '萌萌哒', '篮球', '黑长直',
        '长腿欧巴', '韩剧fans', '轻音乐', '美妆达人', '话痨', 'IT民工', '逗比', '翻山越岭只为吃', '吃饱才有力气减肥',
        '正太', '懒癌患者', '高富帅', '桌游', '晚睡强迫症', '软妹子', '背包客', '天然呆', '萝莉', '小清新', '宇宙第一帅',
        '钢琴', '女神', '逛街', '聚会', '品茶', '喵星人', '眼镜男', '情感专家', '小鸟依人', '妩媚性感', '小蛮腰', '开心的吃货']
    }
  },
  components: {
    Header
  }
}
</script>
