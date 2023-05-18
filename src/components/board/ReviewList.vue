<template>
  <div>
    <div class="reviewListTitle">
      <h1>요즘 인기있는 여행지와 여행기를 만나보아요</h1>
    </div>
    <div class="reviewContainer">
      <ReviewBoard></ReviewBoard>
      <ReviewBoard></ReviewBoard>
      <ReviewBoard></ReviewBoard>
      <ReviewBoard></ReviewBoard>
      <ReviewBoard></ReviewBoard>
      <ReviewBoard></ReviewBoard>
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
}
</style>
<script>
import api from "@/assets/js/util/axios.js";
import ReviewBoard from "./ReviewBoard.vue";

export default {
  name: "ReviewList",
  data() {
    return {};
  },
  components: {
    ReviewBoard,
  },

  async created() {
    let planUrl = "/plans";
    try {
      const res = await api.get(planUrl);
      const plan = await res.data;
      console.log(plan);
      plan.forEach((p) => {
        if (p["plan"].title.length > 7) {
          p["plan"].title = p["plan"].title.substr(0, 8) + "..";
        }
        p["plan"].userName = this.$cookies.get("accesstoken").nickname;
      });
      this.plans = plan;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {},
};
</script>
