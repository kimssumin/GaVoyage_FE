<template>
  <div>
    <div class="planListTitle">
      <h1>내가 세운 여행 계획들을 확인해보세요</h1>
    </div>
    <div class="container1">
      <div v-for="plan in plans" :key="plan.planIdx" id="testBtn">
        <PlanEach :plan="plan" id="testBtn"></PlanEach>
        <!-- <PlanDetail :plan2="plan"></PlanDetail> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.container1 {
  background: var(--color-background);
  position: relative;
  width: 80%;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.planListTitle {
  position: relative;
  width: 80%;
  margin: 80px auto 0;
}
</style>
<script>
import { $ } from "@/assets/js/util/elementTool";
import api from "@/assets/js/util/axios.js";
import PlanEach from "./PlanEach.vue";
import PlanDetail from "./PlanDetail.vue";

export default {
  name: "PlanList",
  data() {
    return {
      plans: [],
      isModalAct: false,
    };
  },
  components: {
    PlanEach,
    PlanDetail,
  },

  async created() {
    let planUrl = "/plans";
    try {
      const res = await api.get(planUrl);
      const plan = await res.data;
      console.log(plan);
      plan.forEach((p) => {
        if (p.title.length > 7) {
          p.title = p.title.substr(0, 8) + "..";
        }
        p.userName = this.$cookies.get("accesstoken").nickname;
      });
      this.plans = plan;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    openModal(id) {
      this.isModalAct = true;
    },
    closeModal() {
      this.isModalAct = false;
    },
  },
};
</script>
