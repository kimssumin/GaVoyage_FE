<template>
  <div class="hello">
    <!-- #f5f9fc -->
    <div class="selectAll" data-aos="fade-up">
      <div class="row">
        <div class="mt-5">
          <div class="">
            <h2 class="text-center fw-bold">🚗나의 여행 계획🚗</h2>
            <p class="text-center fst-normal">나만의 여행길을 그려보세요!</p>
            <div class="d-flex justify-content-center mt-5">
              <input id="title" placeholder=" 여행 계획에 이름을 붙여주세요" value=" 제목테스트" />
            </div>
            <div class="d-flex justify-content-center mt-3 align-items-center">
              <label class="me-2" style="font-weight: bold; font-size: 16px">출발일</label
              ><input type="date" id="startDate" value="2023-05-03" data-placeholder="날짜 선택" />
              <div><i class="fa fa-exchange" aria-hidden="true"></i></div>
              <label class="me-2" style="font-weight: bold; font-size: 16px">도착일</label
              ><input type="date" id="endDate" value="2023-05-04" data-placeholder="날짜 선택" />
              <button type="button" class="btn-get-started" id="dateBtn" @click="planDate">
                확인
              </button>
            </div>
            <div>
              <div class="selectDate select-box mt-3" style="display: none">
                <h6>작성할 계획일자를 선택하고 장소를 추가하세요</h6>
                <div class="planDate options-container">
                  <div class="option">
                    <input type="radio" class="radio" name="category" value="0" />
                    <label for="">Select Date</label>
                  </div>
                </div>
                <div class="selected" id="selectedContent" v-on:click="selectDate">Select Date</div>
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
import { addPlan, planDate, selectDate, submitResult } from "@/assets/js/plan/planCreate.js";
import TopButton from "@/components/button/TopButton.vue";
import SelectBox from "../button/SelectBox.vue";
import getAttractionInfo from "../map/getAttractionInfo.vue";
import getMap from "../map/getMap.vue";

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
    selectDate,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  width: 400px;
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.125rem;
  padding: 0.25rem 0;
}

#title:focus,
#title:valid {
  outline: 0;
  border-bottom-color: var(--color-blue);
}

#title:valid + .input-label {
  color: var(--color-blue);
  transform: translateY(-1.5rem);
}
#startDate,
#endDate,
.fa-exchange {
  border: none;
  padding: 8px 15px;
  margin-right: 15px;
  border-radius: 5px;
  text-align: center;
}
.hello {
  background: var(--color-background);
  margin-top: 3px;
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

.select-box {
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: auto;
}

.select-box .options-container {
  background: var(--color-lightgray);
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
}

.selected {
  /* main 에 보이는 select box */
  background-color: var(--color-white);
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  border: 1px solid #eee;
  /* border: 2px solid var(--color-darkgray); */
  border-radius: 8px;
  /* margin-bottom: 8px; */
  color: var(--color-black);
  font-weight: bold;
  position: relative;
  order: 0;
}

.selected::after {
  content: "";
  /* background: url("@/assets/img/arrow-down.svg"); */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>');
  background-repeat: no-repeat;
  opacity: 20%;
  position: absolute;
  top: 17px;
  height: 30%;
  width: 32px;
  right: 10px;
  background-position: center;
  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: var(--color-lightgray);
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: var(--color-semigray);
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  padding: 12px 24px;
  cursor: pointer;
}

.select-box .option:hover {
  background: var(--color-semigray);
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}
</style>
