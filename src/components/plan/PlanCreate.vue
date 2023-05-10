<template>
  <div class="hello">
    <!-- #f5f9fc -->
    <div class="selectAll" data-aos="fade-up">
      <div class="row">
        <div class="mt-5">
          <div class="">
            <h2 class="text-center fw-bold">나의 여행 계획🚗</h2>
            <p class="text-center fst-normal">나만의 여행길을 그려보세요!</p>
            <div class="d-flex justify-content-center">
              <input id="title" placeholder="제목을 입력해주세요" value="제목테스트" />
            </div>
            <div class="d-flex justify-content-center mt-3">
              <label>출발일</label><input type="date" id="startDate" value="2023-05-03" />
              <label>도착일</label><input type="date" id="endDate" value="2023-05-04" />
              <button type="button" id="dateBtn" @click="planDate">확인</button>
            </div>
            <div>
              <div class="selectDate mt-3" style="display: none">
                <h4>작성할 계획일자를 선택하고 장소를 추가하세요</h4>
                <select class="planDate">
                  <option value="0" selected>일자</option>
                </select>
              </div>
              <SelectBox></SelectBox>
            </div>
            <!-- sectionSearch  -->
            <div class="row">
              <div class="col-md-8 leftBox"><getMap></getMap></div>
              <div class="col-md-3 rightBox">
                <getAttractionInfo></getAttractionInfo>
                <button class="btn-get-started" type="button" id="addPlanBtn" @click="addPlan">
                  추가
                </button>
              </div>
            </div>
          </div>
          <div>
            <!-- <div style="width: 100%; text-align: center; margin-top: 20px"> -->
            <!-- <div id="my-list"></div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="rowPlans">
      <div id="dailyPlans"></div>
    </div>

    <div style="margin-top: 20px; display: flex; justify-content: center">
      <button
        class="btn-get-started"
        id="resultBtn"
        style="text-align: center"
        @click="submitResult"
      >
        최종 등록
      </button>
    </div>
    <TopButton></TopButton>
  </div>
</template>

<!-- <div class="rightBox">
  <getAttractionInfo></getAttractionInfo>
  <button class="btn-get-started" type="button" @click="addPlan">등록</button>
</div> -->
<script>
import TopButton from "@/components/button/TopButton.vue";
import SelectBox from "../button/SelectBox.vue";
import getAttractionInfo from "../map/getAttractionInfo.vue";
import getMap from "../map/getMap.vue";
import { planDate, addPlan, submitResult } from "@/assets/js/plan/planCreate.js";

export default {
  name: "PlanCreate",
  props: {},
  components: {
    TopButton,
    SelectBox,
    getAttractionInfo,
    getMap,
  },
  methods: {
    planDate,
    addPlan,
    submitResult,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: var(--color-background);
  margin-top: 5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
}

.rightBox {
  background: var(--color-white);
  margin: 0px 10px;
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  border: 1px solid #eee;
}

.mapContent {
  width: 100%;
  margin: 30px auto;
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}

#dailyPlans {
  display: flex;
  flex-wrap: wrap;
}
</style>
