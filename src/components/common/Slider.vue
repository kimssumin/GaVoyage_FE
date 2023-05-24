<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="inner">
    <agile
      :nav-buttons="false"
      :autoplay-speed="4000"
      :speed="4000"
      fade="fade"
      pause-on-hover="pause-on-hover"
      pause-on-dots-hover="pause-on-dots-hover"
      autoplay="autoplay"
    >
      <!-- Slide 1 -->
      <div
        class="slide1 d-flex justify-content-center"
        style="
                  <!--background-image : linear-gradient(to right bottom, #35EBDF, #BA8FFB);-->
                  <!--background-image: url('https://www.agoda.com/wp-content/uploads/2018/10/Experience-Seoul_attractions_Gyeongbokgung-Palace.jpg');-->
                "
      >
        <div class="container align-self-center">
          <h2 class="">GaVoyage를 방문해주셔서 감사합니다!</h2>
          <p class="">
            여행을 떠나고 싶으신가요? <br />
            당신에게 맞는 여행지를 발견해보세요.
          </p>
          <a href="#searchAbout" class="btn-get-started">여행지 구경 가기</a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div
        class="slide2 d-flex justify-content-center"
        style="
                <!--background-image : linear-gradient(to right bottom, #FF709C, #859BFF);-->
                  <!--background-image: url('https://t1.daumcdn.net/cfile/tistory/252FA9345225669928');-->
                "
      >
        <div class="container align-self-center">
          <h2 class="InDown">인기있는 여행지를 만나보세요</h2>
          <p class="InUp">생각지도 못한 곳을 발견할 수도 있어요.</p>
          <a href="#/review/list" class="btn-get-started">금주의 인기 여행기 보기</a>
        </div>
      </div>

      <!-- Slide 3 -->
      <div
        class="slide3 d-flex justify-content-center"
        style="
                <!--background-image : linear-gradient(to right bottom, #CFFFEF, #FFC3BF);-->
                  <!--background-image: url('https://www.lottehotel.com/content/dam/lotte-hotel/signiel/seoul/overview/local-guide/180708-7-2000-ove-seoul-signiel.jpg.thumb.768.768.jpg');-->
                "
      >
        <div class="container align-self-center">
          <h2 class="InDown">여행 떠날 준비, 되셨나요 ?</h2>
          <p class="InUp">당신의 여행에 시작을 함께하고싶어요</p>
          <a href="#/plan/create" class="btn-get-started">여행 계획 세우기</a>
        </div>
      </div>
    </agile>
  </div>
</template>
<script>
import Vue from "vue";
import VueAgile from "vue-agile";

Vue.use(VueAgile);
export default {
  name: "InitMain",
  props: {
    msg: String,
  },
  component: {
    agile: VueAgile,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.btn-get-started {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  line-height: 1;
  color: rgb(255, 255, 255);
  animation-delay: 0.8s;
  padding: 12px 32px;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  margin: 10px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  background: var(--color-blue);
}

.slide1 {
  width: 150%;
  background-position: center;
  background: url(https://img.freepik.com/free-vector/isometric-coastal-line-composition_1284-19887.jpg?w=1060&t=st=1684903640~exp=1684904240~hmac=c3be151990f083a123594327701e2428952d66b48abbc216e5c940e747bfabc4);
  /* background-size: cover; */
}
.slide2 {
  width: 100%;
  background-position: center;
  background: url(https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?w=1380&t=st=1683301728~exp=1683302328~hmac=f35d04d0d74823d97cf3c1bbde24a8523600c3be10fcfa331be48d8a0ce968e7);
  background-size: cover;
}
.slide3 {
  width: 100%;
  background-position: center;
  background: url(https://img.freepik.com/free-photo/crumpled-white-paperboard_95678-119.jpg?w=1380&t=st=1683301032~exp=1683301632~hmac=f4f337315f1d37c52110c1123be314aab47e4c80015021f02cbc559d59d0097f);
}

/* .slide1::before, */
.slide2::before {
  content: "";
  opacity: 0.65;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #000;
}

/* .slide1 *, */
.slide2 * {
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 100;
}
</style>
