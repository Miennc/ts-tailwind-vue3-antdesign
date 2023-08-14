<template>
  <div class="naverMapContainer">
    {{ currentCoord }}
    <div id="naverMap" style="width: 400px; height: 400px"></div>
    <div class="mapForm">
      <input type="text" ref="mapAddrInput" @keyup.enter="searchAddressToCoordinate()" />
      <button type="button" @click="searchAddressToCoordinate()">주소 검색</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref, reactive, watch } from "vue";
import {
  DefaultCoordinate,
  type Coordinate,
  type InfoWindow,
  type NaverMap,
} from "@/types/naverMapsType";

/**
 * Naver Maps API Instance
 */
// @ts-ignore
const naverMaps = window.naver.maps;

/** Naver Maps Instance */
const map: Ref<NaverMap | undefined> = ref(undefined);

/** Naver Maps InfoWindow Instance */
const infoWindow: Ref<InfoWindow | undefined> = ref(undefined);
const openInfoWindow = (
  inputAddr: string | undefined,
  addr: string | undefined,
  roadAddr: string | undefined,
  roadAddrEng: string | undefined
) => {
  infoWindow.value?.close();
  infoWindow.value?.setContent([
    `
    <div style="width: fit-content; text-align: center; padding: 10px;">
      <h4>검색 주소: ${inputAddr ?? ""}</h4>
      <p>1. [도로명 주소]: ${addr ?? ""}</p>
      <p>2. [지번 주소]: ${roadAddr ?? ""}</p>
      <p>3. [영문명 도로 주소]: ${roadAddrEng ?? ""}</p>
      <p>4. 위도(Y): ${currentCoord.y}, 경도(X): ${currentCoord.x}</p>
    </div>
    `,
  ]);
  // 윈도우 다시 열어야 하나?
};

/** <code>ref="mapAddrInput"</code> target element */
const mapAddrInput: Ref<HTMLInputElement | undefined> = ref(undefined);

/** Current Selected Coordinate */
const currentCoord: Coordinate = reactive({ y: 0, x: 0 });
const setCurrentCoord = (coord: Coordinate) => {
  currentCoord.y = coord.y ?? DefaultCoordinate.Y;
  currentCoord.x = coord.x ?? DefaultCoordinate.X;
};

/** search Address with Coordinate */
const searchCoordinateToAddress = () => {
  // 2. convert coordinate to address 하고 검색하기
  naverMaps.Service.reverseGeocode(
    {
      coords: currentCoord,
      orders: [naverMaps.Service.OrderType.ADDR, naverMaps.Service.OrderType.ROAD_ADDR].join(","),
    },
    (status: unknown, response: { [key: string]: any }) => {
      if (status === naverMaps.Service.Status.ERROR) {
        alert("네이버 지도 검색에러 발생!"); // Naver Maps Search Exception!!
        return;
      }
      const items: any[] = response.v2.results;
      // const address: string = "";
      // const htmlAddresses: unknown[] = [];
      const addr : string = '';
      const roadAddr: string = '';
      const roadAddrEng: string = '';

      items.forEach((item, index) => {
      //   address = makeAddress(item) || '';
      // addrType = 
      console.log(`${index} 번이에용: `, item);
      const {area1, area2, area3, area4} = item.region;
      console.log(`${area1.name} ${area2.name} ${area3.name} ${area4.name}`);
      
      
      });
      
    }
  );
};

/** search Coordinate with Address */
const searchAddressToCoordinate = () => {
  console.log(mapAddrInput.value?.value);
};

onMounted(() => {
  // 1. initialize Naver Map Instance and Mount Naver Map Instance to  <div id="naverMap">
  map.value = new naverMaps.Map("naverMap", {
    center: { y: DefaultCoordinate.Y, x: DefaultCoordinate.X },
    zoomControl: true,
    zoomControlOptions: {
      position: naverMaps.Position.TOP_RIGHT,
    },
  });

  // 2. initialize Naver Map InfoWindow Instance
  infoWindow.value = new naverMaps.InfoWindow({});

  // 1. 맵 클릭 이벤트리스너 생성 => 좌표로 주소 검색
  // 진1. Map click event listener. set current coordinate to variable ```currentCoord```
  naverMaps.Event.addListener(map.value, "click", (e: { coord: Coordinate }) => {
    setCurrentCoord(e?.coord);
    searchCoordinateToAddress();
  });

  // 4. 이벤트 리스너 모음 아래에 고정 주소값으로 Map의 초기 지점 결정 => 주소로 좌표 검색
  // 굳이? 초기 기본주소는 안넣어도 될듯?
});
</script>

<style scoped lang="scss">
p {
  margin: 0;
}
.naverMapContainer {
  @include ROW_FLEX;
  align-items: start;
  gap: 40px;
  width: fit-content;
  border: 1px solid black;
}
</style>
