<template>
  <div class="overflow-hidden">
    <section class="py-[100px]">
      <div class="inner">
        <div>
          <h2 class="text-3xl font-bold">가맹점안내</h2>
        </div>

        <div class="mt-10">
          <div class="flex flex-col gap-3" >
            <div class="lg:flex hidden items-center justify-around text-sm text-gray-400 bg-gray-100 rounded-md p-5 gap-5 ">
              <span class="flex-1 font-normal">매장명</span>
              <span class="flex-1 font-normal">매장소재지</span>
              <span class="flex-1 font-normal">사업자등록번호</span>
              <span class="flex-1 font-normal">점주명</span>
              <span class="flex-1 font-normal">연락처</span>
              <span class="flex-1 font-normal">이메일</span>
            </div>
            <div
              class="lg:flex  grid grid-cols-2 itmes-center border rounded-md p-5 lg:gap-5 gap-3"
              v-for="(item) in datas[active]" :key="item.name"
            >
              <div class="flex flex-col gap-1 col-span-2 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">매장명</span>
                <span>{{ item.name }}</span>
              </div>
              <div class="flex flex-col gap-1 col-span-2 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">매장소재지</span>
                <span>{{ item.address }}</span>
              </div>
              <div class="flex flex-col gap-1 bg-gray-100 p-3 lg:bg-white lg:p-0 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">사업자등록번호</span>
                <span>{{ item.number }}</span>
              </div>
              <div class="flex flex-col gap-1 bg-gray-100 p-3 lg:bg-white lg:p-0 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">점주명</span>
                <span>{{ item.owner }}</span>
              </div>
              <div class="flex flex-col gap-1 bg-gray-100 p-3 lg:bg-white lg:p-0 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">연락처</span>
                <span>{{ item.phone }}</span>
              </div>
              <div class="flex flex-col gap-1 bg-gray-100 p-3 lg:bg-white lg:p-0 justify-center">
                <span class="text-sm text-gray-500 lg:hidden block">이메일</span>
                <span>{{ item.email }}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 justify-center py-[50px]">
            <button class="h-8 border px-3 rounded-md border-gray-400" @click="active = 0">
              처음
            </button>
            <button 
              class="w-8 h-8 flex items-center justify-center rounded-md "
              v-for="item,index in datas.length" :key="item"
              :class="[active === index ? 'bg-blue-600 text-white' :'bg-gray-100 text-gray-500']"
              @click="active = index"
            >{{ item }}</button>
            <button class="h-8 border px-3 rounded-md border-gray-400" @click="active = datas.length - 1">
              마지막
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import pgMember from '~/assets/docs/pgMemberList.json'

const page = ref(10)
const active = ref(0)
const datas = useChunk(pgMember, page.value)


</script>

<style lang="scss" scoped>

</style>
