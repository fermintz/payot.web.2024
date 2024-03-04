<script setup lang="ts">

</script>

<template>
  <div class="relative z-10 lg:mt-[10px] mt-[80px] lg:px-0 px-5">
    <swiper
      :modules="[SwiperAutoplay]"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :speed="1500"
      :loop="true"
      
      :spaceBetween="20"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="~/assets/img/home/visual03.jpg" class=""/>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/img/home/visual01.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/img/home/visual02.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/img/home/visual04.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>



<style lang="scss" scoped>
.swiper-slide {
  display:flex;
  align-items: center;
  justify-content: center;
  max-width:1620px;
  border-radius:24px;
  overflow:hidden;
}

.swiper-slide img {
  width:100%;
}
</style>
