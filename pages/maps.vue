<template>
  <div class="h-[840px] lg:flex relative hidden">
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
      <div id="map" ref="mapBody" class="h-full relative rounded-2xl"/>
    </div>
  </div>

  <div class="lg:hidden pt-[80px] ">
    <div class="flex items-center border-t border-t-neutral-300">
      <input type="text" class="flex-1 h-12 px-4 outline-none" placeholder="지역명으로 검색" v-model="searchKey" @keypress.enter="searchDatas(searchKey)">
      <button class="w-12 h-12 border-l border-l-neutral-300" @click="searchDatas(searchKey)">
        <Icon name="mdi:search" size="24"></Icon>
      </button>
    </div>
    <div class="px-5 h-10 flex items-center border-b border-t sticky top-0 w-full bg-neutral-100 text-sm">
      <span class="font-bold text-blue-600">{{ searchList.length}}</span>개의 매장이 검색되었습니다
    </div>
    <div class="absolute w-full flex flex-col items-center justify-center gap-3 h-[400px] " v-show="searchList.length === 0">
      <Icon name="ph:list-magnifying-glass-bold" size="50" class="text-neutral-300"></Icon>
      <span>검색된 매장이 없습니다.</span>
    </div>
    <div class="flex flex-col min-h-[80vh] bg-neutral-100">
      <div v-for="item in searchList" :key="item" class="p-5 flex flex-col gap-1 border-b last:border-0 bg-white"
        @click="mapLink(item)"
      >
        <span>{{ item.name }}</span>
        <span class="text-sm text-gray-500">{{ item.address }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import geopoint from '~/assets/docs/geopoint.json'

definePageMeta({
  middleware: ['map-load-middleware']
})

const datas = geopoint
const searchKey = ref('')
const mapBody = ref<HTMLDivElement>();
const customOverlay = new kakao.maps.CustomOverlay({})
const maps = ref()
const searchList = ref([] as any)
const markers = ref([] as any)

const overlayContent = (data:any)=>{
  const content = `
      <div class="bg-gray-800 p-[3px] rounded-md mb-[180px] max-w-[300px] min-w-[240px] relative">
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
    center: new kakao.maps.LatLng(36.52448102010266, 128.025151808476),
    level: 12,
  })
    
  maps.value = map
  searchList.value = datas

  for(let i=0;i < searchList.value.length;i++){
    const position = new kakao.maps.LatLng(datas[i].points[0], datas[i].points[1])

    addMarker(position, datas[i])
  }
})

const addMarker = (position:any, data:any )=>{
  const marker = new kakao.maps.Marker({
    position: position
  })

  kakao.maps.event.addListener(marker, 'click', ()=>{
     setOverlay(position, data)
  })

  markers.value.push(marker)
  marker.setMap(maps.value)
}

const removeMarker = ()=>{
  for(let i=0;i<markers.value.length;i++){
    markers.value[i].setMap(null)
  }
}

const setOverlay = (position:any, data:any)=>{
  customOverlay.setPosition(position)
  customOverlay.setContent(overlayContent(data))    
  customOverlay.setMap(maps.value)
}


const searchDatas = (key:string) => {
  searchList.value = []
  removeMarker()

  datas.forEach(item => {
    if(item.address.includes(key) || item.name.includes(key)){
      searchList.value.push({...item})
    }
  })

  if(searchList.value.length > 0){
    const first = searchList.value[0]
    const firstPosition =  new kakao.maps.LatLng(first.points[0], first.points[1])

    maps.value.setCenter(firstPosition)
    maps.value.setLevel(7)

    for(let i=0; i < searchList.value.length; i++){
      const list = searchList.value[i]
      const position = new kakao.maps.LatLng(list.points[0],list.points[1])
      addMarker(position ,list)
    }
  }else{
    alert('검색된 내역이 없습니다.')
  }
}

const shopDetail = (shop:any) => {
  const position = new kakao.maps.LatLng(shop.points[0], shop.points[1])
  customOverlay.setPosition(position)
  customOverlay.setContent(overlayContent(shop))    
  customOverlay.setMap(maps.value)
  maps.value.setCenter(position)
  maps.value.setLevel(3)
}

const mapLink = (data:any)=>{
  window.open(
    `https://map.kakao.com/link/map/${data.name},${data.points[0]},${data.points[1]}`,
    '_new'
  )
}

</script>

<style lang="scss" scoped>

</style>