// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import api from './assets/js/api.js'
// import VueAMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key: 'a9370c4d7e77d628f162b9a59fe0795f',
//   plugin: ['Geocoder', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// })
Vue.prototype.$qs = qs
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
