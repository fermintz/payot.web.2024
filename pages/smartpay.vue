<script lang="ts" setup>
const { scrollEvent } = useScroll()

onMounted(()=>{
  scrollEvent()
})

</script>


<template>
  <div class="overflow-hidden"> 
    <section class="relative mt-[60px]">
      <div class="inner relative">
        <div class="flex flex-col justify-between z-10 w-full h-full">
          <div class="flex flex-col text-[#292929]">
            <span class="text-2xl leading-[0.9] font-semibold">무인세탁장비 QR코드 직결시스템</span>
            <span class="font-[900]  lg:text-[90px] text-[70px] lg:leading-[1] leading-[1] mt-3">SMART PAY</span>
            <p class="mt-6 text-xl text-neutral-500 max-w-[500px] font-semibold">
              QR코드를 스캔만 하면 휴대폰이 작은 키오스크가 되어<br/>쉽고 간편하게 세탁장비를 결제할 수 있습니다.
            </p>
          </div>

          <div class="relative mt-[70px] w-full ">
            <img src="~/assets/img/smartpay/smart01.png" class="absolute lg:max-h-[600px] max-h-[400px] -right-10 bottom-0 z-20 animation slideup first">
            <img src="~/assets/img/smartpay/smart02.png" class="absolute max-h-[360px] lg:left-1/2 left-0  bottom-[60px] drop-shadow-2xl border border-black rounded-xl z-10 animation slideup first">
            <img src="~/assets/img/common-bg.jpg" class="h-[400px] w-full rounded-3xl object-cover  object-center">
          </div>
        </div>
      </div>
    </section>

    <div class="h-[200px] bg-white relative z-20">

    </div>

    <section class="pb-[200px]">
      <div class="inner flex flex-col gap-[100px] ">
        <div class="flex lg:flex-row flex-col items-center lg:gap-[100px]  gap-[50px]">
          <div class="flex items-center flex-1">
            <div class="max-w-[390px]">
              <h2 class="text-4xl font-bold leading-[1.3]">깜박있고 지갑을 들고오지 않으셨나요?</h2>
              <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">한번씩 세탁을 하로 왔을때 지갑을 들고오지 않아 고민해보신적은 없으신가요? 이제 그 고민 페이오티가 해결해 드리겠습니다.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden flex-1 bg-[#e0ebf8]">
            <img src="~/assets/img/smartpay/why01.png" class="block animation slideup">
          </div>   
        </div>

        <div class="flex lg:flex-row flex-col-reverse items-center lg:gap-[100px] gap-[50px]">
          <div class="rounded-3xl overflow-hidden flex-1 animation slideup">
            <img src="~/assets/img/smartpay/why02.png">
          </div>  
          <div class="flex flex-col lg:items-center  flex-1">
            <div class="max-w-[390px]">
              <h2 class="text-4xl font-bold leading-[1.3]">괜찮아요! 여기는 스마트페이 매장입니다.</h2>
              <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">페이오티의 특별한 결제방식을 채용한 특별한 매장입니다. 스마트폰만 있다면, QR코드로 빠르게 결제할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-[100px]">
      <div class="inner">
        <div class="flex flex-col items-center lg:text-center text-left">
          <h2 class="text-4xl font-bold leading-[1.3] max-w-[640px]">스마트폰으로 QR코드를 스캔하면 간편하게 세탁장비를 결제할 수 있습니다</h2>
        </div>
       
        <video autoplay muted loop class="h-[560px] w-full object-cover rounded-3xl brightness-[.7] mt-[70px]" >
          <source src="~/assets/video/smartpay.mp4" type="video/mp4">
        </video>
  
      </div>
    </section>

    <section class="bg-blue-600 text-white text-center lg:p-[60px] px-[30px] py-[80px] text-4xl font-bold my-[140px]">
      우리매장에도 편리한 결제 스마트페이 어떠신가요?
    </section>

    <section class="py-[100px]">
      <div class="inner">
        <div class="flex flex-col items-start text-left">
          <h2 class="text-4xl font-bold leading-[1.3]">페이오티 키오스크를 설치하셨다면,<br/>바로 적용할 수 있습니다!</h2>
          <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold text-neutral-500">페이오티 키오스크 이용중이시라면, 간단한 몇가지 설정 변경 및 QR코드 부착으로 
스마트페이를 매장에서 사용하실 수 있습니다.</p>
        </div>

        <div class="mt-[70px] relative bg-[#f5f5f7] flex justify-center items-end min-h-[500px] rounded-3xl p-10">
          <img src="~/assets/img/home/intro.gif" class="absolute h-full">
          <img src="~/assets/img/smartpay/pay02.png" class="absolute bottom-0 lg:right-10 right-0 max-h-[550px]  animation slideup">
        </div>
      </div>
    </section>

    <div class="h-[100px] bg-white"></div>


    <section class="py-[100px]">
      <div class="inner flex flex-col gap-[100px]">
        <div class="flex lg:flex-row flex-col lg:gap-[100px] gap-[50px]">
          <div class="flex flex-col items-start justify-center flex-1">
            <div class="max-w-[390px]">
              <h2 class="text-4xl font-bold leading-[1.3]">키오스크가 없어도 단독운용 가능해요!</h2>
              <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">스마트페이는 별도의 키오스크가 필요없어 설치비가 저렴하며, 키오스크 대안으로 단독운용도 가능합니다.</p>
            </div>
          </div>
          <div class="rounded-3xl bg-[#d7f3ff] min-h-[400px] relative lg:px-10 p-5 pb-0 flex-1">
            <img src="~/assets/img/smartpay/pay04.png" class="absolute lg:top-[100px] top-[50px] lg:-left-10 left-auto z-10 slideup animation">
            <img src="~/assets/img/smartpay/pay03.png" class="absolute bottom-0 right-3">
          </div>  
        </div>
        <div class="flex lg:flex-row flex-col-reverse lg:gap-[100px] gap-[50px]">
          <div class="rounded-3xl overflow-hidden flex items-center justify-center  min-h-[450px] bg-[#e0ebff] flex-1">
            <img src="~/assets/img/smartpay/pay05.png" class="slideup animation">
          </div>   
          <div class="flex flex-col items-center justify-center flex-[1]">
            <div class="max-w-[390px]">
              <h2 class="text-4xl font-bold leading-[1.3]">관리할 기계가 없어요~! 우수한 유지보수</h2>
              <p class="mt-8 text-xl max-w-[700px] leading-[1.6] font-semibold">고객이 직접적으로 접촉하는 장치(키오스크)가 없어, 잔고장이 없이 오래도록 운용할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[140px]">
      <div class="inner">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>서비스명</th>
            <td>
              <span> 페이오티 스마트페이 </span>
            </td>
          </tr>
          <tr>
            <th>설치비용</th>
            <td>
              <strong> 132만원 (부가세포함)</strong>
              <span
                >설치비용은 장비 10대 기준이며 초과 시 1대당 13만 2천원이 추가
                부과됩니다</span
              >
            </td>
          </tr>
          <tr>
            <th>월 관리비</th>
            <td>
              <strong>3만 3천원 (부가세포함)</strong>
            </td>
          </tr>
          <tr>
            <th>기타사항</th>
            <td>
              <span>
                1. 페이오티 키오스크를 구매하시면 스마트페이도 함께 적용할 수
                있습니다
              </span>
              <span>
                2. 기존 페이오티 키오스크를 이용중이시라면 스마트페이 서비스를
                무료로 이용할 수 있습니다
              </span>
            </td>
          </tr>
        </table>
      </div>
    </section>
    
  </div>
</template>


<style lang="scss" scoped>
table{
    width:100%;
    border-top:2px solid #292929;

    th,td{
      padding:20px;
      border-bottom:1px solid #e2e2e2;
    }
    th{
      width:140px;
      text-align:left;
      font-weight:500;
    }
    td{
      display:flex;
      flex-direction: column;
      gap:10px;

      
      strong, span{
        display:block;
      }
      strong{
        font-size:18px;
        color:#0011FF;
      }
      span{
        color:#797979;
      }
    }
  }
</style>