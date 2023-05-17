<template>
  <div>
    <div class="planListTitle">
      <h1>내가 세운 여행 계획들을 확인해보세요</h1>
    </div>
    <div class="container1">
      <div v-for="plan in plans" :key="plan.planIdx" id="testBtn">
        <PlanEach :plan="plan"></PlanEach>
      </div>

      <div
        class="modal fade"
        id="testModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">모달테스트</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div class="modal-body">내용 입력 !!</div>
            <div class="modal-footer">
              <a class="btn" id="modalY" href="#">예</a>
              <button class="btn" type="button" data-dismiss="modal">아니요</button>
            </div>
          </div>
        </div>
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
import api from "@/assets/js/util/axios.js";
import PlanEach from "./PlanEach.vue";
export default {
  name: "PlanList",
  data() {
    return {
      plans: [
        {
          status: "Y",
          createdAt: "2023-05-15",
          modifiedAt: "2023-05-15",
          planIdx: 3,
          userIdx: 1,
          title: "김포 여행",
          startDate: "2023-03-02",
          endDate: "2023-03-05",
        },
        {
          status: "Y",
          createdAt: "2023-05-15",
          modifiedAt: "2023-05-15",
          planIdx: 4,
          userIdx: 1,
          title: "김포 여행",
          startDate: "2023-03-02",
          endDate: "2023-03-05",
        },
        {
          status: "Y",
          createdAt: "2023-05-15",
          modifiedAt: "2023-05-15",
          planIdx: 9,
          userIdx: 1,
          title: " 제목테스트",
          startDate: "2023-05-03",
          endDate: "2023-05-04",
        },
      ],
    };
  },
  components: {
    PlanEach,
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
};
</script>
