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
    <!-- 
    <Swiper></Swiper> -->

    <!-- ======= 여기 어때  ======= -->
    <section id="aboutReview" class="about">
      <div class="section-title d-flex align-items-center">
        <h2 class="align-self-center">여기 어때 ?</h2>
        <button class="btn-get-started">
          <router-link to="/review/list">더 살펴보기</router-link>
        </button>
      </div>

      <p class="section-title d-flex">최근 한 달간 사랑받은 여행후기들을 만나보세요</p>

      <div id="hotplaceArea">
        <span v-for="review in reviews" :key="review['reviewIdx']">
          <ReviewBoard
            :review="review"
            @click.native="reviewDetail(review.reviewIdx, $event)"
          ></ReviewBoard>
        </span>
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
import api from "@/assets/js/util/axios.js";
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
  data() {
    return {
      reviews: [],
      limit: 5,
    };
  },
  components: {
    TopButton,
    Slider,
    ReviewBoard,
    SelectBox,
    getAttractionInfo,
    getMap,
  },
  created() {
    let reviewUrl = "/reviews";
    try {
      // const res = await api.get(reviewUrl);
      // const review = await res.data;
      // console.log("review", review);
      // this.reviews = review.slice(0, 5);
      // this.reviews.forEach(async (review) => {
      //   review["place"] = "GaVoyage";
      //   const likeUrl = "/likes/" + review.reviewIdx;
      //   const res2 = await api.get(likeUrl);
      //   console.log("res2", res2);
      //   const data = await res2.data;
      //   this.reviews.isLiked = data;
      // });

      api.get(reviewUrl).then(({ data }) => {
        console.log("review arrived", data);
        this.reviews = data;
      });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    reviewDetail: async function (idx, event) {
      console.log("click", event);
      let reviewDetailUrl = "/reviews/" + idx;
      let reviewDet = {};
      try {
        const res = await api.get(reviewDetailUrl);
        const detail = await res.data;

        console.log(">> detail : ", detail);
        reviewDet = detail;
      } catch (e) {
        console.log(e);
      }

      this.$store.dispatch("reviewStore/nowReviewDetail", reviewDet, { root: true });
      console.log("Vuex 에 저장 성공! - 리뷰조회");
      console.log(this.$store.state.reviewStore.ReviewDetail);
      this.$router.push("/review/detail");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-get-started a {
  text-decoration: none;
  color: white;
}
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
  margin: 0 10px;
}
a {
  color: var(--color-blue);
  text-decoration: none;
}

#aboutReview,
#searchAbout {
  margin-top: 150px;
}

.sectionSearch {
  width: 80%;
  margin: auto;
}

.section-title {
  margin-left: 200px;
  text-align: left;
}

#hotplaceArea {
  margin-left: 180px;
  margin-right: 100px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: flex-start;
}

.dataImg {
  width: 400px !important;
}

#hero {
  position: relative;
  top: -15px;
}
</style>
