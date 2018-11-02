<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo" :events="events">
    </el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
  </div>
</template>

<style>
  .el-vue-amap-container .el-vue-amap{
    height: 300px;
  }
  .amap-demo {
    height: 300px;
  }
</style>

<script>
module.exports = {
  data: function() {
    let self = this;

    return {
      zoom: 12,
      center: [112.537184, 32.993575],
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
          });        
          geocoder.getAddress([lng ,lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });        
        }
      },
      lng: 0,
      lat: 0
    }
  }
};
</script>