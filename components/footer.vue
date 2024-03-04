<template>
  <div class="border-t pt-10 pb-[100px]">
    <div class="max-w-[1440px] mx-auto flex justify-between lg:flex-row flex-col">
      <div class="lg:p-0 px-5 lg:mb-0 mb-5 flex items-center gap-3">
        <img src="~/assets/img/logo_2024.png" class="md:h-[46px] h-[30px] grayscale-[100%] opacity-70">
        <span class="text-xl font-semibold text-neutral-400">PAYOT</span>
      </div>
      <div class="flex gap-3 flex-nowrap font-semibold overflow-x-auto btns px-5 xl:px-0 whitespace-nowrap md:text-sm text-xs">
        <button class="bg-neutral-100 rounded-full px-5 h-8">서비스 이용약관</button>
        <button class="bg-neutral-100 rounded-full px-5 h-8">개인정보 취급방침</button>
        <button class="bg-neutral-100 rounded-full px-5 h-8" @click="$router.push('partner')">가맹점안내</button>

      </div>
    </div>
    
    <div class="inner">
      <ul class="flex xl:flex-row flex-col flex-wrap xl:gap-6 gap-1 mt-10 ">
        <li class="flex flex-row xl:flex-col xl:border-r pr-6 last:border-r-0 gap-3 xl:gap-0" v-for="item in company" :key="item.label">
          <span class="text-neutral-4000 md:text-sm text-xs mb-1">{{item.label}}</span>
          <strong class="text-neutral-900 md:text-sm text-xs">{{ item.text }}</strong>
        </li>
      </ul>
      <div class=" text-neutral-400 mt-10 md:text-sm text-xs">COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED</div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>

const company = ref([
  {
    label:'회사명',
    text:'(주)페이오티'
  },
  {
    label:'대표',
    text:'차경진'
  },
  {
    label:'사업자등록번호',
    text:'599-81-00659'
  },
  {
    label:'통신판매업 신고번호',
    text:'2021-부산강서구-0877'
  },
  {
    label:'소재지',
    text:'부산광역시 강서구 체육공원로 26번길 148'
  },
  {
    label:'전화번호(TEL)',
    text:'070-7807-6857'
  },
  {
    label:'팩스(FAX)',
    text:'0504-433-6857'
  }

])

</script>

<style lang="scss" scoped>
.btns::-webkit-scrollbar{
  display:none
}
</style>