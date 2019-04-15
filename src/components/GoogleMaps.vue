<template>
  <GmapMap
    :center="center"
    :zoom="zoom"
    style="width: 500px; height: 300px"
    ref="mapRef">
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        :draggable="true"
        @click="center=marker.position"
      />
  </GmapMap>
</template>
<script>
export default {
  props: ['center','zoom'],
  data() {
    return {
      markers: this.center
    }
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ ...this.center })
    })
  }
}
</script>
