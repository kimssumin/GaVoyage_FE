<template>
  <div class="ticket airline">
    <div class="top1">
      <div class="big1">
        <p class="from1">GaVoyage</p>
        <p class="to1"><i class="fas fa-arrow-right"></i>{{ plan.title }}</p>
      </div>
      <div class="top--side">
        <i class="fas fa-plane"></i>
      </div>
    </div>
    <div class="bottom1">
      <div class="column1">
        <div class="rows row-1">
          <p class="row--left"><span>출발일</span>{{ plan.startDate }}</p>
          <p class="row--right"><span>도착일</span>{{ plan.endDate }}</p>
        </div>
        <div class="rows row-2">
          <p class="row--left"><span>Created At</span>{{ plan.createdAt }}</p>
          <p class="row--right"><span>ModifiedAt</span>{{ plan.modifiedAt }}</p>
        </div>
        <div class="rows row-4">
          <button
            type="button"
            class="btn-get-started planbtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="detailBtn"
          >
            상세보기
          </button>
          <button type="button" class="btn-get-started planbtn">리뷰쓰기</button>
        </div>
        <div class="rows row-3">
          <p class="row--left"><span>Passenger</span>{{ plan.userName }}</p>
          <p class="planIdx" style="display: none">{{ plan.planIdx }}</p>
        </div>
      </div>
      <div class="bar--code"></div>
    </div>
    <PlanDetail></PlanDetail>
  </div>
</template>

<style>
.fa-close {
  margin-top: 1px;
  color: var(--color-white);
}

.close {
  border: none;
  background: var(--color-blue);
  border-radius: 8px;
}
.airline {
  display: block;
  height: 575px;
  width: 270px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  z-index: 3;
  margin-bottom: 40px;
}
.airline .top1 {
  padding: 0 10px;
  height: 30%;
  background: var(--color-blue);
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}
.airline .top1 h1 {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2;
  text-align: center;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
.airline .bottom1 {
  height: 70%;
  background: var(--color-white);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}

.top1 .big1 {
  position: relative;
  left: 3%;
  top: 30%;
  font-size: 65px;
  font-weight: 700;
  line-height: 0.8;
}
.top1 .big1 .from1 {
  text-align: left;
  color: var(--color-blue);
  font-size: 40px;
  text-shadow: -1px 0 var(--color-white), 0 1px var(--color-white), 1px 0 var(--color-white),
    0 -1px var(--color-white);
}
.top1 .big1 .to1 {
  position: absolute;
  left: 3%;
  font-size: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-white);
}
.top1 .big1 .to1 i {
  margin-top: 5px;
  margin-right: 10px;
  font-size: 15px;
  color: var(--color-white);
}
.top--side {
  position: relative;
  right: 3%;
  top: 6%;
  text-align: right;
}
.top--side i {
  font-size: 25px;
  margin-bottom: 18px;
  color: whitesmoke;
}
.bottom1 p {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 700;
}
.bottom1 p span {
  font-weight: 400;
  font-size: 11px;
  color: #6c6c6c;
}
.bottom1 .column1 {
  margin: 0 auto;
  width: 80%;
  padding: 2rem 0;
}
.bottom1 .rows {
  display: flex;
  justify-content: space-between;
}
.bottom1 .row--right {
  text-align: right;
}

.bottom1 .row--left {
  text-align: left;
}
.bottom1 .row--center {
  text-align: center;
}
.bottom1 .row-2 {
  /* margin: 0 0 0px 0; */
  position: relative;
}

.bottom1 .row-4 {
  margin: 0px 0px 20px 0px;
  display: flex;
  flex-direction: column;
}
.bottom1 .row-2::after {
  content: '';
  position: absolute;
  width: 100%;
  bottom: -120px;
  left: 0;
  background: #000;
  height: 1px;
}

.bottom1 .bar--code {
  height: 50px;
  width: 80%;
  margin: -10px auto 0;
  position: relative;
  top: -5%;
}
.bottom1 .bar--code::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  background: #000;
  top: 0;
  left: 0;
  box-shadow: 10px 0 #000, 30px 0 #000, 40px 0 #000, 67px 0 #000, 90px 0 #000, 100px 0 #000,
    180px 0 #000, 165px 0 #000, 200px 0 #000, 210px 0 #000, 135px 0 #000, 120px 0 #000;
}
.bottom1 .bar--code::before {
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  background: #000;
  top: 0;
  left: 11px;
  box-shadow: 12px 0 #000, -4px 0 #000, 45px 0 #000, 65px 0 #000, 72px 0 #000, 78px 0 #000,
    97px 0 #000, 150px 0 #000, 165px 0 #000, 180px 0 #000, 135px 0 #000, 120px 0 #000;
}
</style>
<script>
import api from '@/assets/js/util/axios.js';
import PlanDetail from './PlanDetail.vue';

export default {
  name: 'PlanEach',
  props: {
    plan: {
      type: Object,
    },
  },
  created() {
    console.log('this.childValue', this.plan);
  },

  components: {
    PlanDetail,
  },

  methods: {
    async detailBtn() {
      //detail data
      let planDetailUrl = '/plans/' + this.plan.planIdx;
      let plans = {};
      let planDays = [];
      try {
        const res = await api.get(planDetailUrl);
        const detail = await res.data;

        if (Object.keys(detail).length != 0) {
          plans = detail;
          planDays = Object.keys(detail);
          planDays.sort();
          console.log('here!!', this.planDays);
        }
      } catch (e) {
        console.log(e);
      }
      this.plan['plans'] = plans;
      this.plan['planDays'] = planDays;

      // if (plans[0][0]['first_image'].length !== 0) {
      //   this.plan['imgsrc'] = plans[0][0]['first_image'];
      // } else {
      //   this.plan['imgsrc'] =
      //     'https://i.pinimg.com/564x/46/ac/60/46ac6067341ded58d7ec67510189e125.jpg';
      // }
      // const planDetail = this.$store.state.planStore.planDetails;
      this.$store.dispatch('planStore/nowPlanDetail', this.plan, { root: true });
      console.log('Vuex 에 저장 성공!');
      console.log(this.$store.state.planStore.planDetails);
    },
  },
};
</script>
