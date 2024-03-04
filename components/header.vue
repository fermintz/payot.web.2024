<template>
  <header class="lg:sticky fixed w-full lg:bg-white  flex items-center borde-b-px border-b-neutral-300 z-30 h-[80px] top-0
      lg:px-5  bg-white">
    <div class="max-w-[1440px] w-full mx-auto lg:p-0 pl-5 pr-2">
      <div class="flex justify-between">
        <div class="flex items-center gap-[70px]">
          <div class="flex items-center cursor-pointer" @click="$router.push({ path: '/' })">
            <img src="~/assets/img/logo_2024.png" class="lg:h-[44px] h-[38px]">
            <div class="flex flex-col lg:ml-4 ml-3">
              <span class="text-xl font-[900] leading-[1]">PAYOT</span>
              <span class="text-[10px] leading-[1] text-neutral-400 mt-[2px]">Pay of Things</span>
            </div>
          </div>
          <ul class="lg:flex items-center gap-[64px] hidden ">
            <li class="relative" v-for="(items, index) in gnb" :key="index">
              <strong class="cursor-pointer hover:text-blue-600" @click="navigateTo({ path: items.path })">
                {{ items.name }}
              </strong>
            </li>
          </ul>
        </div>

        <div class="flex items-center lg:gap-2 gap-3">
          <div class="lg:flex items-center gap-2 hidden">
            <button class="h-10 border border-neutral-300 rounded-full px-5 text-sm"
              @click="$router.push('maps')">매장찾기</button>
            <button class="h-10 bg-gray-700 text-white rounded-full px-5 text-sm">매장 관리시스템</button>
            <button class="h-10 bg-yellow-300 rounded-full px-5 text-sm flex items-center gap-1">
              <Icon name="ri:kakao-talk-fill" size="18"></Icon>
              <span>카카오톡 상담</span>
            </button>
          </div>

          <button class="lg:hidden block w-14 h-14" @click="side = true">
            <Icon name="mdi:menu" size="28"></Icon>
          </button>
        </div>
      </div>
    </div>
  </header>
  <Side v-model="side"></Side>
</template>

<script lang="ts" setup>
const side = ref(false)

const gnb = ref([
  {
    name: "키오스크",
    path: '/kiosk',
    routeName: "kiosk",
  },
  {
    name: "관리자웹",
    path: '/admin',
    routeName: "admin",
  },
  {
    name: "스마트페이",
    routeName: "smartpay",
    path: "/smartpay",

  },
  {
    name: "고객지원",
    routeName: "#",
  },
]);

watch(side, (newData)=>{
  if(newData){
    document.body.style.position = "fixed"
  }else{
    document.body.style.position = "relative"
  }
  
})

const lockScroll = ()=>{

}


</script>

<style lang="scss" scoped></style>
