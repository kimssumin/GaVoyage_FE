<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide"><ReviewBoard></ReviewBoard></swiper-slide>
    <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 4</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 6</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 7</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 9</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import ReviewBoard from '@/components/board/ReviewBoard.vue';
import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide,
    ReviewBoard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* @import '@/assets/css/base.scss'; */
.swiper {
  height: 100%;
  width: 100%;
  margin: auto;
  align-items: center;
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  background-color: blue;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 80%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>
