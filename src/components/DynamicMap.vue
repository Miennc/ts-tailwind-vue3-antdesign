<template>
  <div id="map" style="width: 400px; height: 400px"></div>
  <button @click="console.log(coordinates)">check current coord!</button>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref, reactive } from "vue";
const coordinates: { y: number; x: number } = reactive({
  y: 37.5653559,
  x: 126.9771423,
});

onMounted(() => {
  /**
   * Naver Maps API Instance
   */
  // @ts-ignore
  const naver = window.naver;

  /** Maps default location (Seoul, CityHall Station Line1) */
  const defaultPosition = new naver.maps.LatLng(coordinates.y, coordinates.x);

  /** Naver Map Instance */
  const mapObject = new naver.maps.Map("map", {
    center: defaultPosition,
    zoomControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_RIGHT,
    },
  });

  /** Naver MapMarker Instance */
  const mapMarker = new naver.maps.Marker({
    map: mapObject,
    position: mapObject.getCenter(),
  });

  /** Naver Map Click Event Listener */
  naver.maps.Event.addListener(
    mapObject,
    "click",
    (e: { coord: { y: number; x: number } }) => {
      mapMarker.setPosition(e?.coord);
      const { y, x } = e?.coord;
      coordinates.y = y;
      coordinates.x = x;

      /** Naver MapMarkers Info Window Instance */
      const markerInfo = new naver.maps.InfoWindow({
        content:
          `
          <div style="width: fit-content; text-align: center; padding: 10px;">
            <b>(Y: ${coordinates.y}, X: ${coordinates.x})</b>
          </div>
          `
      });
      markerInfo.open(mapObject, mapMarker);
    }
  );
});
</script>

<style scoped lang="scss"></style>
