<script lang="ts" setup>
import faq from '~/assets/docs/faq.json'

const { scrollEvent } = useScroll()

onMounted(()=>{
  scrollEvent()
})

const faqList = ref(faq)
const products = ref([
  {
    img:'kiosk32',
    name:'키오스크32',
    description:'32인치의 큰 화면을 가진 키오스크로 매장이 넓은 곳에 추천드립니다.',
    price:'450만원',
    service:'월 33,000원',
    setting:'무료',
    guarantee:'1년',
  },
  {
    img:'kiosk24',
    name:'키오스크24',
    description:'24인치의 작은 화면을 가진 키오스크로 매장이 다소 협소한 곳에 추천드립니다.',
    price:'380만원',
    service:'월 33,000원',
    setting:'무료',
    guarantee:'1년',
  },
  {
    img:'kiosk10',
    name:'키오스크10 + 스마트페이',
    description:'10.1인치 크기의 태블릿 키오스크와 QR코드 직결시스템이 함께 제공됩니다.',
    price:'145만원',
    service:'월 33,000원',
    setting:'무료',
    guarantee:'1년',
  }
])
</script>

<template>
  <div class="overflow-hidden">
    
    <section class="relative mt-[60px]">
      <div class="inner relative">
        <div class="flex flex-col justify-between z-10 w-full h-full">
          <div class="flex flex-col text-[#292929]">
            <span class="text-2xl leading-[0.9] font-semibold">무인세탁매장의 든든한 파트너, 페이오티 키오스크</span>
            <span class="font-[900]  lg:text-[90px] text-[70px] lg:leading-[1] leading-[1] mt-3">PAYOT KIOSK</span>
            <p class="mt-6 text-xl text-neutral-500 max-w-[500px] font-semibold">
              무인세탁매장의 운영에 꼭 필요한 다양한 기능 제공하여, 점주님들이 편안하게 매장을 운영할 있도록 도와드립니다.
            </p>
          </div>

          <div class="relative mt-[70px] w-full ">
            <img src="~/assets/img/home/product01.png" class="absolute max-h-[600px] right-0 bottom-0 z-10  animation slideup on">
            <!-- <div class="w-full h-[400px] rounded-3xl bg-blue-600"></div> -->
            <img src="~/assets/img/common-bg.jpg" class="h-[400px] w-full rounded-3xl object-cover  object-center ">
          </div>
        </div>
      </div>
    </section>
    <div class="h-[240px] bg-white relative z-20">

    </div>

    <section class="relative">
      <div class="inner">
        <div class="mb-[70px] text-center flex items-center flex-col">
          <h2 class="lg:text-4xl text-3xl font-bold leading-[1.3]">
            페이오티의 다양한 키오스크를 확인해보세요
          </h2>
          <p class="mt-8 text-xl leading-[1.6] font-semibold text-neutral-500 max-w-[600px]">
            매장 규모·환경·예산에 맞게 도입할 수 있는 다양한 유형의 제품을 합리적인 가격으로 제공합니다.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-14 z-10 relative ">
          <div 
            class="bg-white rounded-3xl lg:p-10 p-5 border border-neutral-300 animation slideup"
            v-for="(item, index) in products" :key="index"
            :class="{'delay-1':index === 1, 'delay-2': index === 2}"
          >
            <figure class="overflow-hidden">
              <img :src="`_nuxt/assets/img/kiosk/${item.img}.png`" class="w-full">
            </figure>
            <div class="flex flex-col mt-8">
              <strong class="text-2xl font-bold">{{ item.name }}</strong>
              <span class="text-neutral-500 mt-3 max-w-[360px]">
                {{ item.description }}
              </span>
              <span class="text-right text-3xl font-bold mt-5 text-blue-600">{{ item.price }}</span>
            </div>
            <div class="h-px bg-neutral-800 my-5 opacity-30"></div>
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">서비스이용료</span>
                <span class="font-bold">월 33,000원</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">설치비</span>
                <span class="font-bold">무료</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-neutral-500">보증기간</span>
                <span class="font-bold">1년</span>
              </div>
            </div>
            <div class="flex justify-end text-sm mt-5 text-neutral-500">
              <span>* 부가세별도</span>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[400px] w-full absolute bottom-0 left-0 z-0 bg-[#F4F6F9]">
  
      </div>
    </section>

    <section class="bg-[#F4F6F9] py-[140px] mb-[140px]">
      <div class="inner">
        <h2 class="text-4xl font-bold mb-10 text-center">제품제원</h2>

        <div class="flex overflow-y-auto">
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <td></td>
              <td class="text-center">키오스크32</td>
              <td class="text-center">키오스크24</td>
              <td class="text-center">키오스크10</td>
            </tr>
            <tr>
              <td>화면</td>
              <td>32인치 터치모니터</td>
              <td>24인치 터치모니터</td>
              <td>10.1인치 LCD</td>
            </tr>
            <tr>
              <td>사이즈(mm)</td>
              <td>W480 x H1074 x D172</td>
              <td>W445 x H800 x D125</td>
              <td>W280 x H165</td>
            </tr>
            <tr>
              <td>운영체제</td>
              <td colspan="2">윈도우10 (64bit)</td>
              <td>안드로이드11</td>
            </tr>
            <tr>
              <td>CPU</td>
              <td colspan="2">인텔/셀로론 - J3160/4500C/N5105</td>
              <td>쿼드코어 칩셋</td>
            </tr>
            <tr>
              <td>메모리</td>
              <td colspan="2">8GB</td>
              <td>-</td>
            </tr>
            <tr>
              <td>무선</td>
              <td colspan="3">WIFI 무선통신 / 블루투스</td>
            </tr>
            <tr>
              <td>결제방식</td>
              <td colspan="2">카드, 현금</td>
              <td>카드</td>
            </tr>
            <tr>
              <td>설치방식</td>
              <td colspan="2">매립</td>
              <td>벽면부착 설치</td>
            </tr>
            <tr>
              <td>설치조건</td>
              <td colspan="3">설치 위치 근처 220V 전원 콘센트 필요</td>
            </tr>
          </table>
        </div>
       
      </div>
    </section>

    <section class="py-[140px]">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <span class="mb-3 text-[#0077ff] text-xl font-semibold">키오스크 UI·UX</span>
          <h2 class="lg:text-4xl text-3xl font-bold leading-[1.3]">고객의 만족도를 높이는 깔끔한 UI 디자인</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold text-neutral-500">남녀노소 누구나 쉬운 접근이 가능하도록 설계된 디자인으로 어느 누구라도 편리하게 사용할 수 있습니다.</p>
        </div>

        <div class="overflow-hidden mt-[70px] rounded-3xl">
          <img src="~/assets/img/home/mockup.gif" class="h-[500px] object-cover w-full">
        </div>
      </div>
    </section>

    <section class="py-[140px]">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <span class="mb-3 text-[#0077ff] text-xl font-semibold">장비 원격제어</span>
          <h2 class="lg:text-4xl text-3xl font-bold leading-[1.3]">업계 최초 원격제어를 통한 금액투입</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold text-neutral-500">결제에 문제가 발생하여도, 고객클레임 처리를 위한 완벽한 수단, 관리자웹, 모바일을 통해서 문제가 발생한 세탁장비에 직접 간편하게 금액을 투입해 줄 수 있습니다.</p>
        </div>
        <div class="lg:mt-[120px] mt-[70px] h-[500px] rounded-3xl bg-[#e0ebff] flex justify-center relative lg:p-20 p-5 lg:overflow-visible overflow-hidden">
          <div class="absolute lg:top-[50px] top-0 z-20 max-w-[400px] w-full bg-white rounded-2xl drop-shadow-2xl animation slideup">
            <div class="flex items-center justify-between py-4 px-5 border-b">
              <span class="text-lg font-bold">장비원격투입</span>
              <Icon name="mdi:close" size="24"></Icon>
            </div>
            <div class="flex flex-col items-center py-6 px-5">
              <span class="text-xl font-semibold text-[#0066ff]">A01 세탁기에 5,000원</span>
              <span class="text-xl font-semibold">금액투입이 완료되었습니다.</span>
              <button class="px-5 max-w-[150px] w-full h-10 rounded-full text-white mt-5 bg-[#0066ff]">확인</button>
            </div>
          </div>
          <img src="~/assets/img/kiosk/remote.png" class="absolute left-0 bottom-0 max-w-[540px] w-full z-20 rounded-3xl">
          <img src="~/assets/img/home/waching.png" class="absolute right-[100px] scale-[0.8]">
        </div>
      </div>
    </section>

    <section class="py-[140px]" v-show="true">
      <div class="inner">
        <div class="grid grid-cols-2 items-center gap-[100px]">
          <div class="flex flex-col items-start text-left max-w-[420px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">멤버십 서비스</span>
            <h2 class="text-4xl font-bold leading-[1.3]">충성고객을 만들자!<br/>강력한 멤버십 서비스</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold text-neutral-500">결제한 금액의 포인트 보상을 통해 매장을 
                이용하는 고객의 충성도를 높이고, 등록된 회원을 대상으로 마케팅을 통해 재방문을 유도할 수 있습니다.</p>
          </div>
          <div class="bg-[#d7f3ff] rounded-3xl overflow-hidden">
            <img src="~/assets/img/kiosk/func01.png" class="rounded-3xl animation slideup">
          </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-[100px] mt-[140px] ">
          <div class="bg-[#e0ebff] rounded-3xl max-h-[500px] flex items-end pb-0 overflow-hidden">
            <img src="~/assets/img/kiosk/func04.png" class="animation slideup">
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="max-w-[500px] w-full flex flex-col">
              <span class="mb-3 text-[#0077ff] text-xl font-semibold">적립이벤트</span>
              <h2 class="text-4xl font-bold leading-[1.3]">직접 조절하는 적립이벤트</h2>
              <p class="mt-8 text-xl leading-[1.6] font-semibold text-neutral-500">매출이 적은 요일 및 시간대를 선택하여, 적립률을 다르게 적용할 수 있습니다. 
                매장을 다양한 시간대에 이용할 수 있도록 유도합니다.</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-[100px] mt-[140px] ">
          <div class="flex flex-col items-start text-left max-w-[420px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">경고방송</span>
            <h2 class="text-4xl font-bold leading-[1.3]">매장을 이용하지 않는 고객에게 경고를 내리세요</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold text-neutral-500">매장을 이용하지 않는 고객에게 경고방송을 송출 할 수 있습니다. 다양한 메세지를 키오스크를 통해 내보내 경고를 내릴 수 있습니다.</p>
          </div>
          <div class="bg-[#F1EEE8] rounded-3xl overflow-hidden">
            <img src="~/assets/img/kiosk/func05.png" class="rounded-3xl animation slideup">
          </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-[100px] mt-[140px] ">
          <div class="bg-[#e0ebff] rounded-3xl max-h-[500px] flex items-end pb-0 overflow-hidden">
            <img src="~/assets/img/kiosk/func03.png" class="animation slideup">
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="max-w-[500px] w-full flex flex-col">
              <span class="mb-3 text-[#0077ff] text-xl font-semibold">선충전 결제시스템</span>
              <h2 class="text-4xl font-bold leading-[1.3]">키오스크에 미리 포인트로 충전해두고 사용할 수 있어요!</h2>
              <p class="mt-8 text-xl leading-[1.6] font-semibold text-neutral-500">회원은 가입된 전화번호를 통해 미리 포인트를 충전해두고 사용할 수 있습니다. 
                미리 충전하는 회원에게는 포인트를 추가지급할 수 있습니다.</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 items-center gap-[100px] mt-[140px] ">
          <div class="flex flex-col items-start text-left max-w-[420px]">
            <span class="mb-3 text-[#0077ff] text-xl font-semibold">카카오톡 알림</span>
            <h2 class="text-4xl font-bold leading-[1.3]">방치되는 세탁물을 없애자!<br/>카카오톡 알림발송</h2>
            <p class="mt-8 text-xl max-w-[500px] leading-[1.6] font-semibold text-neutral-500">카카오톡 알림을 통해 방치되는 세탁물이 없도록 합니다, 세탁이 완료되면 고객에게 
                카카오톡을 통해 알림을 발송합니다.</p>
          </div>
          <div class="bg-[#fde047] rounded-3xl overflow-hidden">
            <img src="~/assets/img/kiosk/func06.png" class="rounded-3xl animation slideup">
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-[140px] bg-[#f5f5f7]">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <h2 class="text-4xl font-bold leading-[1.3">세탁장비 실시간 동작뷰어 웹페이지 제공</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold text-neutral-500">웹페이지에서 장비의 남은 동작 
시간을 확인 할 수 있습니다. <br/>고객은 남은 시간을 미리 파악 후, 매장을 방문할 수 있습니다.</p>
        </div>
        <div class="mt-[140px] relative rounded-3xl  bg-white">
          <div class="max-w-[1100px] relative mx-auto min-h-[500px] flex items-center justify-center  ">
            <div class="absolute left-0 -top-[40px] w-full z-20">
              <div class="p-7 bg-white z-20 drop-shadow-2xl rounded-3xl max-w-[420px]  animation slideup on">
                <div class="flex items-center justify-between mb-5">
                  <span class="bg-[#0066ff] rounded-full px-4 h-8 flex items-center text-white text-sm">동작중</span>
                  <span class="text-xl font-bold text-[#0066ff]">13분남음</span>
                </div>
                <div class="flex items-center gap-[30px]">
                  <div class="bg-gray-100 p-3 rounded-xl">
                    <img src="~/assets/img/kiosk/wash_machine.gif" class="h-[90px]">
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xl font-bold">1번 대형세탁기</span>
                    <span class="mt-2 text-gray-500">세탁기 | 24Kg</span>
                  </div>
                </div>
              </div>

              <div class="p-7 bg-white z-20 drop-shadow-2xl rounded-3xl mt-5 max-w-[420px] ml-[50px] animation slideup on">
                <div class="flex items-center justify-between mb-5">
                  <span class="bg-[#0066ff] rounded-full px-4 h-8 flex items-center text-white text-sm">동작중</span>
                  <span class="text-xl font-bold text-[#0066ff]">7분남음</span>
                </div>
                <div class="flex items-center gap-[30px]">
                  <div class="bg-gray-100 p-3 rounded-xl">
                    <img src="~/assets/img/kiosk/dry_machine.gif" class="h-[90px]">
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xl font-bold">3번 건조기</span>
                    <span class="mt-2 text-gray-500">건조기 | 20Kg</span>
                  </div>
                </div>
              </div>
            </div>
            
            <img src="~/assets/img/kiosk/time01.png" class="h-[450px] absolute bottom-0 right-0">
            
          </div>
        </div>
      </div>
    </section>

    <section class="py-[140px] overflow-hidden">
      <div class="inner">
        <div class="lg:h-[500px] h-[700px] bg-neutral-800 relative rounded-3xl grid grid-cols-2 items-end">
          <div class="max-w-[390px] h-full z-10 flex items-center ml-[90px]">
            <div class="flex flex-col">
              <span class="text-green-200 font-[800] text-xl mb-4">Manager Web</span>
              <h4 class="text-4xl font-semibold text-white  leading-[1.3]">실시간으로 매출을 확인!<br/>관리자웹(Web)</h4>
              <p class="mt-5 text-neutral-400 text-xl">매출현황 및 통계, 키오스크 제어 위한 관리자 웹페이지를 제공해드립니다.</p>
              <button class="flex justify-center self-start h-10 items-center border-2 border-white text-white rounded-full px-10 mt-10">상세보기</button>
            </div>
          </div>
          <div class="relative flex items-center justify-cneter">
            <div class="absolute bottom-0">
              <img src="~/assets/img/home/admin.png" class="max-h-[560px] object-cover h-full z-10">
            </div>
          </div>
        </div>
        
        <div class="lg:h-[500px] h-[700px] relative overflow-hidden rounded-3xl mt-10">
          <div class="max-w-[390px] absolute h-full z-10 flex items-center left-[90px]">
            <div class="flex flex-col ">
              <span class="text-violet-300 font-[800] text-xl mb-4">Smart Pay</span>
              <h4 class="text-4xl font-semibold text-white  leading-[1.3]">QR코드로 간편결제<br/>스마트페이</h4>
              <p class="mt-5 text-neutral-300 text-xl">휴대폰만 있다면, QR코드를 스캔하여<br/>세탁장비들을 간편하게 결제할 수 있습니다.</p>
              <button class="flex justify-center self-start h-10 items-center border-2 border-white text-white rounded-full px-10 mt-10">상세보기</button>
            </div>
          </div>
          <div class="absolute top-0 left-0 w-full h-full z-0">
            <img src="~/assets/img/home/smartpay.gif" class="h-full object-cover w-full brightness-[0.3]">
          </div>    
        </div>
      </div>
    </section>

 

    <section class="py-[140px]">
      <div class="inner">
        <div class="flex flex-col items-center text-center">
          <span class="h-10 rounded-full text-lg font-bold border-2 mb-6 border-blue-600 px-6 flex items-center justify-center text-blue-600">FAQ</span>
          <h2 class="text-4xl font-bold leading-[1.3]">자주 묻는 질문, 꼭 확인해보세요.</h2>
        </div>

        <div class="mt-[70px] flex flex-col">
          <dl class="border-b border-neutral-300" v-for="item in faqList" :key="item.title">
            <dt class="flex items-center justify-between px-3 py-6 cursor-pointer" @click="item.active = !item.active">
              <div class="flex items-center gap-3">
                <span class="text-xl font-bold text-blue-600">Q</span>
                <span class="text-xl font-bold">{{ item.title }}</span>
              </div>
              
              <Icon name="mdi:chevron-up" size="24"  v-if="item.active"></Icon>
              <Icon name="mdi:chevron-down" size="24" v-else></Icon>
            </dt>
            <dd class="flex flex-col p-3 border-t border-neutral-300" v-show="item.active">
              <span class="text-lg text-neutral-500 bg-gray-200 p-6 px-6 rounded-lg">
                {{ item.description }}
              </span>
            </dd>
          </dl>

        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
table{
  border-top:1px solid #292929;
  tr{border-bottom:1px solid #e2e2e2;}
  tr:first-child{
    td{
      font-size:20px;
      font-weight:bold;
  
    }
  }

  td{
    border-right:1px solid #e2e2e2;
    padding:16px;
  }
  td:first-child{
    color:#898989;
  }
  td:last-child{
    border-right:0px;
  }
}

.scrollbar::-webkit-scrollbar{
  display:none
}
</style>