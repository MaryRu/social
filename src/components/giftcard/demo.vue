<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo" :events="events"></el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
  </div>
  <!-- <div>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
        <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
        <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>
      </el-amap>
    </div>
  </div> -->
</template>
<script>
export default {
  data () {
    let self = this
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      address: '',
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
          })
          geocoder.getAddress([lng ,lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          })
        }
      },
      lng: 0,
      lat: 0
    }
  }
}
</script>
<style lang="less">
.amap-page-container {
  height: 500px;
}
</style>
