<template>
  <div>
    <div class="reviewCreateTitle">
      <h1>리뷰 작성</h1>
    </div>
    <div class="reviewContainer">
      <select class="select" multiple>
        <optgroup label="Label 1">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </optgroup>
        <optgroup label="Label 2">
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>
<style scoped>
.reviewCreateTitle {
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

export default {
  name: "ReviewCreate",
  data() {
    return {};
  },
  components: {},

  async created() {},
  methods: {},
};
</script>
