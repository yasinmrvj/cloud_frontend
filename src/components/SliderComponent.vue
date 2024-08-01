<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Autoplay} from "swiper/modules";
import {EffectFade} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
</script>

<template>
  <div class="w-full h-full">
    <Swiper :pagination="true" :autoplay="{delay:10000,disableOnInteraction:true}" :loop="true"
            :modules="[Pagination,Autoplay,EffectFade]" :effect="'fade'"
            class="h-full mb-4">
      <SwiperSlide class="flex flex-col items-center justify-center bg-sky-400 ">
        <div class="w-[390px] h-[400px] flex justify-center items-center animate-[float_10s_ease-in-out_infinite] ">
          <img src="/os.png" class="w-full "
               alt="">
        </div>
        <img src="/emoji1.png"
             class="absolute top-[440px] right-[51px] animate-[float1_8s_ease-in-out_infinite]" alt="">
        <img src="/emoji2.png"
             class="absolute top-[160px] left-[51px] rotate-[15deg] animate-[float2_8s_ease-in-out_infinite] opacity-90"
             alt="">
        <p class="font-[700] text-white/90">انتخاب سیستم عامل دلخواه</p>
      </SwiperSlide>
      <SwiperSlide class="flex flex-col items-center justify-center bg-red-500">
        <div class="w-[390px] h-[400px] flex justify-center items-center  ">
          <img src="/other.png" class="w-[180px] ml-4 animate-[float3_10s_ease-in-out_infinite]"
               alt="">
          <img src="/graphic.png" class="w-[180px] animate-[float4_10s_ease-in-out_infinite]"
               alt="">
        </div>
        <p class="font-[700] text-white/90">اپلیکیشن های دلخواه</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  @apply w-[10px] h-[10px] bg-white rounded-full
}

.swiper-pagination-bullet-active {
  @apply w-[18px]
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes float1 {
  0% {
    transform: translate(0, 0) rotate(15deg);
  }
  50% {
    transform: translate(-15px, -10px) rotate(15deg);
  }
  100% {
    transform: translate(0, 0) rotate(15deg);
  }
}

@keyframes float2 {
  0% {
    transform: translate(0, 0) rotate(-15deg);
  }
  50% {
    transform: translate(10px, 20px) rotate(-15deg);
  }
  100% {
    transform: translate(0, 0) rotate(-15deg);
  }
}

@keyframes float3 {
  0% {
    transform: translate(0, 0) rotate(10deg);
  }
  50% {
    transform: translate(-5px, 20px) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(10deg);
  }
}

@keyframes float4 {
  0% {
    transform: translate(0, 5px) rotate(10deg);
  }
  50% {
    transform: translate(10px, -35px) rotate(10deg);
  }
  100% {
    transform: translate(0, 5px) rotate(10deg);
  }
}
</style>