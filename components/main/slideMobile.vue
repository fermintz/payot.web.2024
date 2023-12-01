<template>
  <div class="relative  bg-neutral-100 h-[100vh]">
    <swiper
      class="h-full"
      :slidesPerView="'auto'"
      :autoplay="{
        delay: 5000,
      }"
      :speed="1500"
      :loop="true"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="false"
      :modules="modules"
    >
      <swiper-slide>
        <img src="https://picsum.photos/1000/1001" class="h-full object-cover"/>
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1000/1002" class="h-full object-cover" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1000/1003" class="h-full object-cover" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css'

const modules = [Pagination, Autoplay];
</script>

<style lang="scss" scoped>


</style>
