<template>
  <div class="relative z-10 mt-10 2xl:px-0 px-5">
    <swiper
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :speed="1500"
      :loop="true"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="false"
      :modules="[Autoplay, Pagination]"
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
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css'

</script>

<style lang="scss" scoped>

.swiper-slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 1440px;
  border-radius: 16px;
  z-index:10;
}

.swiper-slide img {
  display: block;
  width: 100%;
  max-width: 1440px;
}
</style>
