<template>
  <div class="searchBox">
    <!--시도 선택-->
    <div class="select-box">
      <div class="options-container">
        <div class="option">
          <input type="radio" class="radio" id="automobiles" name="category" value="12" />
          <label for="automobiles">관광지</label>
        </div>
        <div class="option">
          <input type="radio" class="radio" id="film" name="category" value="14" />
          <label for="film">문화시설</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="science" name="category" value="15" />
          <label for="science">축제공연행사</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="art" name="category" value="25" />
          <label for="art">여행코스</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="music" name="category" value="28" />
          <label for="music">레포츠</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="travel" name="category" value="32" />
          <label for="travel">숙박</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="sports" name="category" value="38" />
          <label for="sports">쇼핑</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="news" name="category" value="39" />
          <label for="news">음식점</label>
        </div>
      </div>

      <div class="selected" v-on:click="selectClick1">관광지 선택</div>
    </div>

    <!--구/군 선택-->
    <div class="select-box">
      <div class="options-container">
        <div class="option">
          <input type="radio" class="radio" id="automobiles" name="category" value="12" />
          <label for="automobiles">관광지</label>
        </div>
        <div class="option">
          <input type="radio" class="radio" id="film" name="category" value="14" />
          <label for="film">문화시설</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="science" name="category" value="15" />
          <label for="science">축제공연행사</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="art" name="category" value="25" />
          <label for="art">여행코스</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="music" name="category" value="28" />
          <label for="music">레포츠</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="travel" name="category" value="32" />
          <label for="travel">숙박</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="sports" name="category" value="38" />
          <label for="sports">쇼핑</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="news" name="category" value="39" />
          <label for="news">음식점</label>
        </div>
      </div>

      <div class="selected" v-on:click="selectClick2">관광지 선택</div>
    </div>

    <!--관광지 선택-->
    <div class="select-box">
      <div class="options-container">
        <div class="option">
          <input type="radio" class="radio" id="automobiles" name="category" value="12" />
          <label for="automobiles">관광지</label>
        </div>
        <div class="option">
          <input type="radio" class="radio" id="film" name="category" value="14" />
          <label for="film">문화시설</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="science" name="category" value="15" />
          <label for="science">축제공연행사</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="art" name="category" value="25" />
          <label for="art">여행코스</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="music" name="category" value="28" />
          <label for="music">레포츠</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="travel" name="category" value="32" />
          <label for="travel">숙박</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="sports" name="category" value="38" />
          <label for="sports">쇼핑</label>
        </div>

        <div class="option">
          <input type="radio" class="radio" id="news" name="category" value="39" />
          <label for="news">음식점</label>
        </div>
      </div>

      <div class="selected" v-on:click="selectClick">관광지 선택</div>
    </div>

    <!--최종 제출 버튼-->
    <div><button class="btn-get-started">검색</button></div>
  </div>
</template>
<script>
import { selectClick } from '@/assets/js/selectBox.js';
export default {
  methods: {
    selectClick: selectClick,
  },
};
</script>
<style>
.select-box {
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-left: 200px;
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
  margin-bottom: 8px;
  color: whitesmoke;
  position: relative;
  order: 0;
}

.selected::after {
  content: '';
  background: url('@/assets/img/arrow-down.svg');
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
