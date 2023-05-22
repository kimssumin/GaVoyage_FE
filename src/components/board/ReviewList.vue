<template>
  <div>
    <div class="reviewListTitle">
      <h1>요즘 인기있는 여행지와 여행기를 만나보아요</h1>
    </div>
    <div class="reviewContainer">
      <span v-for="review in reviews" :key="review['reviewIdx']">
        <ReviewBoard
          :review="review"
          @click.native="reviewDetail(review.reviewIdx, $event)"
        ></ReviewBoard>
        <!-- <PlanDetail :plan2="plan"></PlanDetail> -->
      </span>
    </div>
  </div>
</template>
<style scoped>
.reviewListTitle {
  position: relative;
  width: 80%;
  margin: 80px auto 0;
}

.reviewContainer {
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
<script>
import api from "@/assets/js/util/axios.js";
import ReviewBoard from "./ReviewBoard.vue";

export default {
  name: "ReviewList",
  data() {
    return {
      reviews: [],
    };
  },
  components: {
    ReviewBoard,
  },

  async created() {
    let reviewUrl = "/reviews";
    try {
      const res = await api.get(reviewUrl);
      const review = await res.data;
      console.log(review);
      this.reviews = review;
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
