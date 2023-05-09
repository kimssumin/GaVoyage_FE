<template>
  <div class="hello">
    <section id="hero">
      <div class="hero-container">
        <div id="hero">
          <Slider></Slider>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- ======= 여기 어때  ======= -->
    <section id="aboutReview" class="about">
      <div class="section-title d-flex align-items-center ml-5">
        <h2 class="align-self-center">여기 어때 ?</h2>
        <button class="btn-get-started">더 살펴보기</button>
      </div>

      <p class="section-title d-flex">최근 한 달간 사랑받은 여행후기들을 만나보세요</p>

      <div id="hotplaceArea">
        <ReviewBoard></ReviewBoard>
        <ReviewBoard></ReviewBoard>
        <ReviewBoard></ReviewBoard>
        <ReviewBoard></ReviewBoard>
        <ReviewBoard></ReviewBoard>
      </div>
    </section>
    <!-- End 여기어때 -->

    <!-- 어디든 좋아요======= -->
    <section id="searchAbout" class="portfolio section-bg">
      <div class="searchAbout">
        <div class="section-title">
          <h2>어디든 좋아요 🙋‍♀️</h2>
          <p class="mt-2">클릭하는 그 곳이 당신의 여행지가 될 거에요</p>
        </div>
        <div class="sectionSearch">
          <div class="searchBox">
            <SelectBox></SelectBox>
          </div>
          <getMap></getMap>
          <getAttractionInfo></getAttractionInfo>
        </div>
      </div>
    </section>
    <!-- End Our Portfolio Section -->

    <TopButton></TopButton>
  </div>
</template>

<script>
import TopButton from "@/components/button/TopButton.vue";
import ReviewBoard from "../components/board/ReviewBoard.vue";
import SelectBox from "../components/button/SelectBox.vue";
import Slider from "../components/common/Slider.vue";
import getAttractionInfo from "../components/map/getAttractionInfo.vue";
import getMap from "../components/map/getMap.vue";

export default {
  name: "InitMain",
  props: {
    msg: String,
  },
  components: {
    TopButton,
    Slider,
    ReviewBoard,
    SelectBox,
    getAttractionInfo,
    getMap,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0;
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}

#aboutReview,
#searchAbout {
  margin-top: 150px;
}

.section-title {
  margin-left: 200px;
  text-align: left;
}

#hotplaceArea {
  margin-left: 200px;
  margin-right: 100px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>
