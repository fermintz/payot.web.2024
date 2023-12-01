<template>
  <header 
    class="lg:sticky fixed w-full lg:bg-white  flex items-center borde-b-px border-b-neutral-300 z-30 h-[80px] top-0
      2xl:px-0  bg-white
    "
  >
    <div class="max-w-[1440px] w-full mx-auto lg:p-0 pl-5 pr-2">    
      <div class="flex justify-between">
        <div class="flex items-center gap-[70px]">
          <div class="flex items-center cursor-pointer" @click="$router.push({path: '/'})">
            <img src="~/assets/img/logo.png" class="lg:h-[50px] h-[40px]">
            <div class="flex flex-col lg:ml-4 ml-3">
              <span class="text-lg font-bold leading-[1]">페이오티</span>
              <span class="text-[11px] leading-[1] text-neutral-400 mt-1">Pay of Things</span>
            </div>
          </div>
          <ul class="lg:flex items-center gap-[64px] hidden ">
            <li class="relative" v-for="(items, index) in gnb" :key="index">
              <strong
                class="cursor-pointer hover:text-blue-600"
                @click="$router.push(items.routeName)"
              >
                  {{ items.name }}
              </strong>
            </li>
          </ul>
        </div>

        <div class="flex items-center lg:gap-2 gap-3">
          <div class="lg:flex items-center gap-2 hidden">
            <button class="h-10 border border-neutral-300 rounded-full px-5 text-sm" @click="$router.push('map')">매장지도</button>
            <button class="h-10 bg-gray-700 text-white rounded-full px-5 text-sm">매장 관리시스템</button>
            <button class="h-10 bg-yellow-300 rounded-full px-5 text-sm flex items-center gap-1">
              <Icon name="ri:kakao-talk-fill" size="18"></Icon>
              <span>카카오톡 상담</span>
            </button>
          </div>
          
          <button class="lg:hidden block w-14 h-14">
            <Icon name="mdi:menu" size="28"></Icon>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {} from  'tailwindcss'

const gnb = ref([

  {
    name: "키오스크",
    routeName: "kiosk",
  },
  {
    name: "관리자웹",
    routeName: "admin",
  },
  {
    name: "스마트페이",
    routeName: "smartpay",

  },
  {
    name: "고객지원",
    routeName: "#",
  },
]);
</script>

<style lang="scss" scoped>

</style>
