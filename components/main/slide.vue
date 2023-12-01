<script setup lang="ts">

</script>

<template>
  <div class="relative z-10 mt-10 2xl:px-0 px-5">
    <!-- <swiper
      :modules="[SwiperAutoplay]"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :speed="1500"
      :loop="true"
      :spaceBetween="30"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="~/assets/img/home/visual03.jpg" />
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
    </swiper> -->

    <Swiper
      :height="300"
      :modules="SwiperAutoplay"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide>
        응???
      </SwiperSlide>
      <SwiperSlide>
        안녕
      </SwiperSlide>
      <SwiperSlide>
        하하
      </SwiperSlide>
    </Swiper>
  </div>
</template>



<style lang="scss" scoped>

.swiper-slide {

}

.swiper-slide img {
 
}
</style>
