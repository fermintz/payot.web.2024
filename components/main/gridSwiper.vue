<script lang="ts" setup>


</script>

<template>
  <div class="grid lg:grid-cols-3 grid-cols-2 gap-8">
    <div class="bg-[#f2f2f2] rounded-3xl flex flex-col justify-between overflow-hidden lg:col-span-1 col-span-2 ">
      <div class="flex flex-col p-[40px]">
        <strong class="text-3xl font-semibold e">다양한 결제채널 지원</strong>
        <span class="text-neutral-500 mt-3 text-lg">현금지폐, 신용카드, 간편결제등 다양한 결제채널로 장비를 결제할 수 있습니다.</span>
        <div class="flex items-center gap-3 mt-7">
          <img src="~/assets/img/home/pay01.png" class="h-[32px] rounded-full">
          <img src="~/assets/img/home/pay02.png" class="h-[32px] rounded-full">
          <img src="~/assets/img/home/pay03.png" class="h-[32px] rounded-full">
          <img src="~/assets/img/home/pay04.png" class="h-[32px] rounded-full">
        </div>
      </div>
      <div class="slideLeft">
        <img src="~/assets/img/home/credit.png" class="mix-blend-multiply rounded-3xl" >
      </div>
    </div>
    <div class="col-span-2  lg:grid-cols-2 grid-cols-1 grid gap-8">
      <div class="bg-[#F2F6FC] rounded-3xl overflow-hidden">
        <Swiper
          :modules="[SwiperAutoplay]"
          :autoplay="{
            delay:5000,
            disableOnInteraction:false,
          }"
          class="custom-swiper"
          :spaceBetween="0"
          :speed="1500"
          :loop="true"
        >  
          <swiper-slide>
            <dl class="grid_item"> 
              <dt>
                원격 금액투입
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_03.png"/>
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                세탁 시간안내
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_07.png" >
              </dd>
            </dl>
          </swiper-slide>

        </swiper>
        
      </div>

      <div class="bg-[#F3F2E7] rounded-3xl overflow-hidden">
        <Swiper
          :modules="[SwiperAutoplay]"
          :autoplay="{
            delay:5000,
            disableOnInteraction:false,
          }"
          class="custom-swiper"
          :spaceBetween="0"
          :speed="1500"
          :loop="true"

        >
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                카카오톡 알림서비스
 
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_04.png" />
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                경고방송 및 음성안내 지원
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_05.png"  />
              </dd>
            </dl>
          </swiper-slide>
        </Swiper>
      </div>

      <div class="bg-[#f2f2f2] rounded-3xl overflow-hidden">
        <Swiper
          :modules="[SwiperAutoplay]"
          :autoplay="{
            delay:5000,
            disableOnInteraction:false,
          }"
          class="custom-swiper"
          :spaceBetween="0"
          :speed="1500"
          :loop="true"

        >
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                실시간 매출 집계
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_01.png"   />
              </dd>
            </dl>
          </swiper-slide>
        </Swiper>
      </div>

      <div class="bg-[#F2E8EC] rounded-3xl overflow-hidden">
        <Swiper
          :modules="[SwiperAutoplay]"
          :autoplay="{
            delay:5000,
            disableOnInteraction:false,
          }"
          class="custom-swiper"
          :spaceBetween="0"
          :speed="1500"
          :loop="true"
        >
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                회원에게 문자메세지 발송
              </dt>
              <dd>
                <img src="~/assets/img/home/grid_08.png"   />
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl class="grid_item">
              <dt>
                포인트 적립률 설정
              </dt>
              <dd>
                
                <img src="~/assets/img/home/grid_06.png" />
              </dd>
            </dl>
          </swiper-slide>
        </Swiper>
      </div>
    </div>

    
  </div>

  
</template>



<style lang="scss" scoped>

.grid_item{
  padding:30px;
  padding-bottom:0px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  dt{
    display:flex;
    flex-direction: column;
    font-size:20px;
    font-weight:700;
  }
  dd{
    margin-top:30px;
  }
}


</style>