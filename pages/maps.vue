<template>
  <div class="h-[840px] flex relative">
    <div class="max-w-[390px] w-full border-r flex flex-col">
      <div class="p-5 py-7 bg-gray-100">
        <h4 class="text-[24px] font-[600] leading-[1.3] mb-5">우리지역 매장을<br/>검색해보세요</h4>
        <div class="relative">
          <input type="text" placeholder="검색" class="w-full h-12 border rounded-full pr-12 pl-5" v-model="searchKey" @keypress.enter="searchDatas(searchKey)">
          <button class="absolute right-0 top-0 flex items-center justify-center w-12 h-12" @click="searchDatas(searchKey)">
            <Icon name="mdi:search"></Icon>
          </button>
        </div>
      </div>
      <div class="overflow-y-scroll h-full relative">
        <div class="px-5 h-14 flex items-center border-b border-t sticky top-0 w-full bg-white">
          <div>
            <span class="font-bold text-blue-600">{{ searchList.length}}</span>개의 매장이 검색되었습니다
          </div>
        </div>
        <div class="flex flex-col ">
          <div 
            class="flex flex-col gap-1 px-5 border-b py-5 last:boder-0 cursor-pointer hover:bg-gray-50" 
            v-for="item in searchList" :key="item"
            @click="shopDetail(item)"
          >
            <span>{{ item.name }}</span>
            <span class="text-sm text-gray-500">{{ item.address }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="p-[30px] flex-1 bg-gray-600 relative">
      <ShopDetail v-model="visible"/>
      <div id="map" ref="mapBody" class="h-full relative rounded-2xl"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import geopoint from '~/assets/docs/geopoint.json'

definePageMeta({
  middleware: ['map-load-middleware']
})

const datas = geopoint
const visible = ref(false)
const searchKey = ref('')

const mapBody = ref<HTMLDivElement>();
const customOverlay = new kakao.maps.CustomOverlay({})
const maps = ref()
const searchList = ref([])

const overlayContent = (data:any)=>{
  const content = `
      <div class="bg-gray-800 p-[3px] rounded-md mb-[180px] max-w-[300px] min-w-[240px] relative ">
        <div class="p-3 rounded bg-white relative z-20">
          <div class="font-semibold">${data.name}</div>
          <div class="text-sm text-gray-500 mt-[2px] whitespace-normal">${data.address}</div>
        </div>  
        <div class="w-4 h-4 rotate-45 rounded bg-gray-800 absolute -bottom-2 left-1/2 mb-[2px] -ml-2 z-10"
      </div>
    `
  return(content)
}


watchOnce(mapBody, (mapContainer) => {
  const map = new kakao.maps.Map(mapContainer, {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 12,
  })
    maps.value = map

  for(let i=0;i < datas.length;i++){
    const position = datas[i].points
    
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position[0], position[1])
    })
    
    displayOverlay(marker, datas[i])

    marker.setMap(map)
  }
})

const searchDatas = (key:string) => {
  const list = new Array()
    

  datas.forEach(item => {
    if(item.address.includes(key) || item.name.includes(key)){
      list.push({...item})

      const position = new kakao.maps.LatLng(list[0].points[0], list[0].points[1])
      const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position[0], position[1])
      })

      maps.value.setCenter(position)
      maps.value.setLevel(6)

      

    }else{
      searchList.value = []

    }
  })

  searchList.value = <[]>list
}

const displayOverlay = (marker:any, data:any)=>{
  const position = new kakao.maps.LatLng(data.points[0], data.points[1])

  kakao.maps.event.addListener(marker, 'click', ()=>{
    customOverlay.setPosition(position)
    customOverlay.setContent(overlayContent(data))    
    customOverlay.setMap(maps.value)
  })
}

const shopDetail = (shop:any) => {
  const position = new kakao.maps.LatLng(shop.points[0], shop.points[1])

  customOverlay.setPosition(position)
  customOverlay.setContent(overlayContent(shop))    
  customOverlay.setMap(maps.value)
  maps.value.setCenter(position)
  maps.value.setLevel(3)
}


</script>

<style lang="scss" scoped>

</style>