<template>
  <div>
    <div class="planListTitle">
      <h1>내가 세운 여행 계획들을 확인해보세요</h1>
    </div>
    <div class="switch">
      <div class="switch-holder">
        <div class="switch-label">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i
          ><span>리뷰를 작성한 계획만 보기</span>
        </div>
        <div class="switch-toggle">
          <input type="checkbox" id="onReview" v-model="onReviewModel" />
          <label for="onReview"></label>
        </div>
      </div>
    </div>

    <div class="container1" v-if="!onReviewModel">
      <div v-for="plan in plans" :key="plan['plan'].planIdx">
        <PlanEach :plan="plan" id="testBtn" v-if="plan.hasReview == 0"></PlanEach>
        <!-- <PlanDetail :plan2="plan"></PlanDetail> -->
      </div>
    </div>
    <div class="container1" v-else-if="onReviewModel">
      <div v-for="plan in plans" :key="plan['plan'].planIdx">
        <PlanEach :plan="plan" id="testBtn" v-if="plan.hasReview == 1"></PlanEach>
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
  margin: 40px auto 100px auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.planListTitle {
  position: relative;
  width: 80%;
  margin: 80px auto 0;
}

/* switch */
.switch {
  display: flex;
  margin-left: 10%;
  margin-top: 80px;
}

.switch-holder {
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: -2px -2px 20px rgba(255, 255, 255, 0.1), 2px 2px 2px rgba(0, 0, 0, 0.3),
    inset 2px 2px 20px rgba(255, 255, 255, 0.1), inset 2px 2px 10px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  align-items: center;
}

.switch-label {
  width: 300px;
  text-align: left;
}

.switch-label i {
  margin-right: 5px;
}

.switch-toggle {
  height: 40px;
}

.switch-toggle input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  z-index: -2;
}

.switch-toggle input[type='checkbox'] + label {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  margin: 0;
  cursor: pointer;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.25);
}

.switch-toggle input[type='checkbox'] + label::before {
  position: absolute;
  content: 'OFF';
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  top: 8px;
  left: 8px;
  width: 45px;
  height: 25px;
  border-radius: 20px;
  background-color: var(--color-background);
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease-in-out;
}

.switch-toggle input[type='checkbox']:checked + label::before {
  left: 50%;
  content: 'ON';
  color: #fff;
  background-color: var(--color-blue);
}
</style>
<script>
import api from '@/assets/js/util/axios.js';
import PlanEach from './PlanEach.vue';

export default {
  name: 'PlanList',
  data() {
    return {
      plans: [],
      isModalAct: false,
      onReviewModel: false,
    };
  },
  components: {
    PlanEach,
    // PlanDetail,
  },
  async created() {
    let planUrl = '/plans';
    try {
      const res = await api.get(planUrl);
      const plan = await res.data;
      console.log(plan);
      plan.forEach((p) => {
        if (p['plan'].title.length > 7) {
          p['plan'].title = p['plan'].title.substr(0, 8) + '..';
        }
        p['plan'].userName = this.$cookies.get('accesstoken').nickname;
      });
      this.plans = plan;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
