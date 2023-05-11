<template>
  <div class="mapBox mt-3">
    <div class="searchBox">
      <!--시도 선택-->
      <div id="search-area" class="select-box">
        <div class="options-container"></div>

        <div class="selected" value="-1" v-on:click="selectArea">지역</div>
      </div>

      <!--구/군 선택-->
      <div id="search-sigungu" class="select-box">
        <div class="options-container"></div>

        <div class="selected" value="-1" v-on:click="selectSigungu">시/군/구</div>
      </div>

      <!--관광지 선택-->
      <div id="search-content-id" class="select-box">
        <div class="options-container">
          <div class="option">
            <input type="radio" class="radio" id="automobiles" name="category" value="12" />
            <label for="">관광지</label>
          </div>
          <div class="option">
            <input type="radio" class="radio" id="film" name="category" value="14" />
            <label>문화시설</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="science" name="category" value="15" />
            <label>축제공연행사</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="art" name="category" value="25" />
            <label>여행코스</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="music" name="category" value="28" />
            <label>레포츠</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="travel" name="category" value="32" />
            <label>숙박</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="sports" name="category" value="38" />
            <label>쇼핑</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="news" name="category" value="39" />
            <label>음식점</label>
          </div>
        </div>

        <div class="selected" id="selectedContent" v-on:click="selectContent">관광지 선택</div>
      </div>

      <!--최종 제출 버튼-->
      <div><button class="btn-get-started" id="submit" v-on:click="searchFin">검색</button></div>
    </div>
  </div>
</template>

<script>
import { searchFin, selectArea, selectContent, selectSigungu } from "@/assets/js/map/selectBox.js";

export default {
  methods: {
    selectArea: selectArea,
    selectSigungu: selectSigungu,
    selectContent: selectContent,
    searchFin: searchFin,
  },
};
</script>
<style>
.searchBox {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
}

#submit {
  line-height: unset;
  font-size: 15px;
}
.select-box {
  display: flex;
  width: 250px;
  flex-direction: column;
  margin: 0px 6px;
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
