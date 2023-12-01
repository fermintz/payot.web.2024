<template>
  <div>
    <section class="mt-[60px] pb-[60px] relative overflow-hidden ">
      <div class="inner z-10 relative">
        <div class="flex flex-col items-center text-center text-[#292929]">
          <span class="text-2xl leading-[0.9] font-semibold ">키오스크 및 매장관리를 위한 관리자 홈페이지</span>
          <span class="font-[900]  lg:text-[90px] text-[70px] lg:leading-[1] leading-[1] mt-3">MANAGER WEB</span>
          <span class="mt-6 text-xl font-semibold text-neutral-500">페이오티 관리자웹은 복잡하게 신경 쓸필요 없이 쉽게 이용할 수 있습니다.<br/>
PC 및 모바일 버젼 모두 제공합니다.
          </span>
        </div>
        <div class="realtvie z-20 flex items-center justify-center mt-[70px]">
          <img src="~/assets/img/admin/admin-01.png" class="rounded-3xl max-w-[980px] drop-shadow-2xl">
        </div>       
      </div>
      <div class="h-[500px] w-full absolute bottom-0 left-0 z-0">
        <img src="~/assets/img/common-bg.jpg" class="h-full w-full object-cover  object-center">
      </div>
      
    </section>

    <section class="py-[140px]">
      <div class="inner overflow-hidden">
        <div class="flex flex-col items-center text-center">
          <span class="mb-3 text-[#0077ff] text-xl font-semibold">매출캘린더 및 매출내역</span>
          <h2 class="text-4xl font-bold leading-[1.3]">관리자웹에서 매장의 매출을 확인보세요</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">달력에 매출이 표시되어 일일 매출을 쉽게 비교해 볼 수 있습니다. 날짜를 클릭하며, 
더욱 상세한 매출내역을 확인 해볼 수 있습니다.</p>
        </div>
        <div class="mt-[70px] relative">
          <div class="relative z-10 flex items-center px-20">
            <img src="~/assets/img/admin/calenda-01.png" class="-mb-10 border rounded-t-3xl">
            <img src="~/assets/img/admin/calenda-02.png" class="absolute right-20 bottom-0 delay-1 border border-b-0 rounded-t-2xl drop-shadow-2xl">
          </div>
          <div class="h-[450px] rounded-3xl bg-gray-100 flex justify-end absolute bottom-0 w-full z-0">
            
          </div>
        </div>
      </div>
    </section>



    <section class="py-[140px] bg-[#F0F8FF]">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <span class="mb-3 text-[#0077ff] text-xl font-semibold">타 매장 매출비교</span>
          <h2 class="text-4xl font-bold leading-[1.3">다른 매장의 매출은 어느정도일까?</h2>
          <p class="mt-8 text-xl max-w-[600px] leading-[1.6] font-semibold">페이오티 키오스크를 사용중인 타 매장과 나의 매장의 매출을 비교해 볼 수 있습니다. 
나의 매장의 매출이 전국 평균이 어느정도 인지 확인해보세요</p>
        </div>
        <div class="mt-[80px] relative">
          <div class="relative z-10 flex items-center justify-center">
            <img src="~/assets/img/admin/chart-01.png" class="border rounded-3xl drop-shadow-xl">            
          </div>
        </div>
      </div>
    </section>

    <section class="py-[140px] my-[140px]">
      <div class="inner">
        <div class="grid grid-cols-2 items-center gap-[100px]">
          <div class="flex flex-col items-start text-left max-w-[420px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">장비 원격제어</span>
            <h2 class="text-4xl font-bold leading-[1.3]">고객이 세탁장비를 이용시 문제가 발생했나요?</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold">고객이 세탁장비를 이용시 문제가 발생하여, 장비가 정상적으로 동작하지 않았을때 사용해보세요
언제 어디서든 원격제어를 통해 직접 장비에 금액을 투입해 줄 수 있습니다.</p>
          </div>
          <div class="bg-gray-100 rounded-3xl relative min-h-[450px]">
            <div class="w-full h-full bg-black opacity-30 absolute left-0 top-0 rounded-3xl z-10"></div>
            <img src="~/assets/img/admin/remote-01.png" class="absolute z-0 bottom-5 left-10">
            <img src="~/assets/img/admin/remote-02.png" class="absolute bottom-10 right-10 z-20 drop-shadow-2xl">
          </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-[100px] mt-[200px] ">
          <div class="bg-[#d7f3ff] rounded-3xl max-h-[450px] flex items-end justify-center p-10 pb-5">
            <img src="~/assets/img/admin/member-01.png" class="drop-shadow-2xl">
          </div>
          <div class="flex flex-col items-start text-left max-w-[450px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">회원, 포인트관리</span>
            <h2 class="text-4xl font-bold leading-[1.3]">회원들의 포인트를 직접 조정해보세요</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold">필요한 만큼 충전해주거나, 차감해드릴 수 있습니다. 다양한 마케팅 및 CS에 활용해보세요</p>
          </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-[100px] mt-[200px] ">
          <div class="flex flex-col items-start text-left max-w-[450px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">회원 문자메세지 전송</span>
            <h2 class="text-4xl font-bold leading-[1.3]">매출이 부족하다면,<br/>문자메세지 기능을 이용해보세요</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold">등록된 회원을 상대로 마케팅 문자를 전송할 수 있습니다.
포인트 두배 적립, 세탁금액 할인등, 다양한 이벤트 문자를 발송해보세요</p>
          </div>
          <div class="bg-[#e0ebff] rounded-3xl max-h-[450px] flex items-end justify-center p-10 pb-5">
            <img src="~/assets/img/admin/sms-01.png" class=" drop-shadow-2xl">
          </div>
        </div>
      </div>
    </section>

    <section class="py-[140px] bg-gray-100">
      <div class="inner overflow-hidden">
        <div class="flex flex-col items-center text-center">
          <span class="mb-3 text-[#0077ff] text-xl font-semibold">포인트 적립률 설정</span>
          <h2 class="text-4xl font-bold leading-[1.3">상황에 맞춰 내가 직접 설정하는 포인트 적립률!</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">키오스크를 이용시 적립되는 적립률을 요일, 시간에 맞춰 다르게 적립률을 설정해 보세요
매출이 적은 요일, 시간대에 적립률을 높여 이용률이 높일 수 있습니다.</p>
        </div>
        <div class="mt-[200px] relative">
          <div class="relative z-10 flex items-center justify-center border-b border-b-neutral-500">
            <img src="~/assets/img/admin/event-01.png" class="border border-b-0 brightness-[.7] rounded-t-xl">
            <img src="~/assets/img/admin/event-02.png" class="absolute bottom-0 left-1/2 -ml-[100px] border bg-white border-b-0 rounded-t-3xl  drop-shadow-2xl">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>