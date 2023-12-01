<script lang="ts" setup>
definePageMeta({
  layout:'default'
})

</script>

<template>
  <div class="relative overflow-hidden">

    <MainSlide class="md:block hidden"/>
    <!-- <MainSlideMobile class="md:hidden block"/> -->

    <section class="py-[120px] mt-[120px]">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col justify-center">
          <p class="text-center mb-5 lg:text-xl text-lg font-semibold text-orange-600 ">무인세탁매장 운영에 고민이 많으신가요?</p>
          <h2 class="lg:text-4xl text-3xl lg:leading-[1.3] leading-[1.3] font-bold text-center">이런 고민을 하고 계시다면<br/>지금 페이오티 키오스크와 함께해보세요!</h2>
        </div>

        <div class="flex flex-col items-center gap-10 mt-[70px] bg-[#f5f3ee] lg:rounded-3xl lg:py-[100px] py-10 lg:px-0 px-5">
          <div class="flex items-center gap-8 slideup">
            <div class="w-[100px] h-[100px] rounded-full bg-neutral-100 overflow-hidden">
              <img src="~/assets/img/home/profile-01.jpg" class="w-full h-full">
            </div>
            <div class="relative bg-blue-600 rounded-3xl p-6 flex itesm-center flex-1">
              <span class="relative z-10 text-neutral-50 lg:text-xl text-base font-semibold">무인세탁사업을 하려고 하는데 카드결제가 가능한 기기가 필요해요</span>
              <span class="w-6 h-6 bg-blue-600 rotate-45 absolute -left-1  top-1/2 translate-y-[-50%] "></span>
            </div>
          </div>
          <div class="flex items-center gap-8 slideup delay-1">
            <div class="relative bg-green-700 rounded-3xl p-6 flex-1">
              <span class="relative z-10 text-neutral-50 lg:text-xl text-base font-semibold">기존 매장을 운영중인데, 매출도 알수없고, 결제도 현금밖에 안되 불편해요</span>
              <span class="w-6 h-6 bg-green-700 rotate-45 absolute right-0 -mr-1  top-1/2 translate-y-[-50%] "></span>
            </div>
            <div class="w-[100px] h-[100px] rounded-full bg-neutral-100 overflow-hidden">
              <img src="~/assets/img/home/profile-02.jpg" class="w-full h-full">
            </div>
          </div>
          <div class="flex items-center gap-8 slideup delay-2">
            <div class="w-[100px] h-[100px] rounded-full bg-neutral-100 overflow-hidden">
              <img src="~/assets/img/home/profile-03.jpg" class="w-full h-full">
            </div>
            <div class="relative bg-neutral-800 rounded-3xl p-6 flex-1">
              <span class="relative z-10 text-neutral-50 lg:text-xl text-base font-semibold">기존에 설치해둔 키오스크가 매일 말썽이에요 사용하기도 불편하고 시인성도 안좋아요</span>
              <span class="w-6 h-6 bg-neutral-800 rotate-45 absolute top-1/2 translate-y-[-50%] left-0 -ml-1"></span>
            </div>
            
          </div>
        </div>
      </div>
    </section>


    <section class="py-[120px] ">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <h2 class="lg:text-4xl text-3xl font-bold lg:leading-[1.3] leading-[1.3]">페이오티와 함께 매장 관리의 어려움을 해결하세요!</h2>
          <p class="mt-8 text-xl text-neutral-500 lg:leading-[1.6] leading-[1.6] font-semibold max-w-[720px]">페이오티에서 개발한 무선키트를 세탁장비에 설치하여, 키오스크와 장비간 통신으로 다양한 매장 관리 기능들을 제공합니다.</p>
        </div>

 
        <div class="relative flex justify-center overflow-hidden lg:bg-[#f5f5f7] bg-white rounded-3xl mt-[60px] lg:py-0 py-10">
          <img src="~/assets/img/home/intro.gif" class="w-full max-w-[1000px] object-contain relative z-10 lg:scale-[1] scale-[1.2]">
        </div>
  
        <div class="lg:mt-[70px] mt-8 ">
          <!-- <MainGridSwiper /> -->
        </div>      
      </div>
    </section>

    <section class="py-[120px]">
      <div class="inner">
        <div class="flex lg:flex-row flex-col justify-between">
          <div class="flex flex-col">
            <h2 class="lg:text-4xl text-3xl font-bold lg:leading-[1.3] leading-[1.3] max-w-[600px]">이미 많은 매장과 고객님들이 페이오티 키오스크를 사용하고 있습니다.</h2>
            <p class="mb-5 text-xl font-semibold text-neutral-500 mt-5 ">페이오티 키오스크를 이용중인<br/> 무인세탁 브랜드매장들을 확인해보세요</p>
          </div>
          
          <div class="flex items-center justify-end gap-6 lg:gap-[60px] my-12 lg:my-0">
            <dl class="flex-1 lg:flex-none text-center bg-neutral-100 p-5 rounded-2xl lg:bg-white">
              <dt class="mb-3">가입된 회원수</dt>
              <dd class="lg:text-[65px] text-[36px] font-[800] leading-none">82만+</dd>
            </dl>
            <dl class="flex-1 lg:flex-none text-center bg-neutral-100 p-5 rounded-2xl lg:bg-white">
              <dt class="mb-3">설치된 매장수</dt>
              <dd class="lg:text-[65px] text-[36px] font-[800] leading-none">900+</dd>
            </dl>
          </div>
        </div>

        <div class="grid xl:grid-cols-7 md:grid-cols-6 grid-cols-3 gap-5 lg:mt-10 mt-5 rounded-2xl lg:bg-gray-100 overflow-hidden lg:p-10 p-0"
        >
          <div v-for="item in 17" :key="item" class="flex justify-center items-center overflow-hidden">
            <img :src="`_nuxt/assets/img/home/partner${item}.png`" class="mix-blend-multiply">
          </div>
        </div>
      </div>
    </section>

    
    <section class="py-[120px] overflow-hidden">
      <div class="inner relative">
        <div class="relative lg:h-[500px] h-auto bg-neutral-800 rounded-3xl flex lg:flex-row flex-col items-center justify-between">
          <div class="flex-1 lg:translate-x-[100px] p-8">
            <div class="flex flex-col max-w-[390px]">
              <span class="text-green-200 font-[800] text-xl mb-4">Manager Web</span>
              <h4 class="lg:text-4xl text-3xl font-bold text-white lg:leading-[1.3] leading-[1.3]">실시간으로 매출을 확인! 관리자웹(Web)</h4>
              <p class="mt-5 text-neutral-400 text-xl">매출현황 및 통계, 키오스크 제어 위한 관리자 웹페이지를 제공해드립니다.</p>
              <button class="flex justify-center self-start h-10 items-center border-2 border-white text-white rounded-full px-10 mt-10">상세보기</button>
            </div>
          </div>
          <div class="relative flex-1 h-full flex justify-center items-center">
            <div class="lg:absolute bottom-0  relative">
              <img src="~/assets/img/home/admin.png" class="max-h-[560px] object-cover h-full z-10">
            </div>
          </div>
        </div>
        
        <div class="h-[500px] relative overflow-hidden rounded-3xl mt-10 flex lg:flex-row flex-col items-center justify-between">
          <div class="relative z-10 flex-1 lg:translate-x-[100px] p-8">
            <div class="flex flex-col max-w-[390px]">
              <span class="text-violet-300 font-[800] text-xl mb-4">Smart Pay</span>
              <h4 class="lg:text-4xl text-3xl font-bold text-white lg:leading-[1.3] leading-[1.3]">QR코드로 간편결제<br/>스마트페이</h4>
              <p class="mt-5 text-neutral-300 text-xl">휴대폰만 있다면, QR코드를 스캔하여 세탁장비들을 간편하게 결제할 수 있습니다.</p>
              <button class="flex justify-center self-start h-10 items-center border-2 border-white text-white rounded-full px-10 mt-10">상세보기</button>
            </div>
          </div>
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="~/assets/img/home/smartpay.gif" class="h-full object-cover w-full brightness-[0.3]">
          </div>    
        </div>
      </div>
    </section>

    

    <section class="py-[120px] bg-[#f5f5f7]">
      <div class="inner">
        <div class="flex items-center justify-center">
          <h2 class="lg:text-4xl text-3xl font-bold text-center mb-20 max-w-[600px] lg:leading-[1.3] leading-[1.3]">
            높은 퀄리티와 안전성을 제공하는 페이오티와 함께하세요
          </h2>
        </div>
        
        <div class="grid grid-cols-4 gap-8">
          <div class="lg:bg-white lg:p-10 p-0 rounded-2xl col-span-4">
            <ul class="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <li class="flex lg:items-center relative" v-for="item in 5" :key="item">
                <div class="lg:w-[90px] lg:h-[90px] h-[70px] w-[70px] overflow-hidden rounded-xl mr-5 relative z-10 border border-neutral-300">
                  <img :src="`https://picsum.photos/360/64${item}`" class="w-full h-full object-cover ">
                </div>

                <div class="flex flex-col flex-1">
                  <strong class="text-black font-[500] text-lg leading-tight">페이오티 셀프빨래방 키오스크, 빨래방 운영관리에 필수...</strong>
                  <span class="text-neutral-500 text-sm mt-3">2023.02.10</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex justify-between items-center lg:col-span-2 col-span-4 bg-neutral-800 rounded-3xl lg:p-10 p-6 py-10 lg:mt-0 mt-10">
            <div class="flex flex-col text-white">
              <span class="font-semibold text-lg">고객센터</span>
              <strong class="text-4xl font-bold mt-5 mb-3">070-7807-6857</strong>
              <span class="text-neutral-400">평일 10:00 ~ 17:00</span>
              <span class="text-neutral-400">점심 12:30 ~ 13:30</span>
              <span class="text-neutral-400">토,일,공휴일 휴무</span>
            </div>
          </div>

          <div class="lg:col-span-1 col-span-4 flex flex-col h-full bg-white rounded-3xl p-6">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-lg">메뉴얼</h4>
              <button>자세히보기</button>
            </div>
            <div class="flex-1 flex itesm-center justify-center mt-10">
              <img src="~/assets/img/home/guide.png"  class="h-[150px] object-contain">
            </div>
          </div>
       
          <div class="lg:col-span-1 col-span-4 flex flex-col h-full bg-white rounded-3xl p-6">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-lg">카탈로그</h4>
              <button>자세히보기</button>
            </div>
            <div class="flex-1 flex itesm-center justify-center mt-10">
              <img src="~/assets/img/home/catalog.png"  class="h-[150px] object-contain">
            </div>
          </div>
       
        </div>
      </div>
    </section>

    <div class="startLine w-full h-px bg-red-500 fixed top-[20%] z-50"></div>
    <div class="endLine w-full h-px bg-green-500 fixed bottom-[20%] z-50"></div>
  </div>
</template>



<style lang="scss" scoped>
section{
  position: relative;
  z-index:10;
}

.scrollbar::-webkit-scrollbar{
  display:none;
}

</style>