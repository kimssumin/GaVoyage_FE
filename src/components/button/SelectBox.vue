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
import { selectArea, selectContent, selectSigungu, searchFin } from "@/assets/js/map/selectBox.js";

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
  align-items: center;
  justify-content: center;
}

#submit {
  margin-left: 40px;
  line-height: unset;
  font-size: 15px;
}
.select-box {
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-left: 80px;
}

.select-box .options-container {
  background: whitesmoke;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;

  order: 1;
}

.selected {
  background-color: #0064ff;
  border-radius: 8px;
  /* margin-bottom: 8px; */
  color: whitesmoke;
  position: relative;
  order: 0;
}

.selected::after {
  content: "";
  background: url("@/assets/img/arrow-down.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 5px;

  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: whitesmoke;
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: rgb(197, 195, 195);
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  padding: 12px 24px;
  cursor: pointer;
}

.select-box .option:hover {
  background: rgb(197, 195, 195);
  color: white;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}
</style>
