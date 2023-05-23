<template>
  <div class="row mt-5" style="border: 1px; display: flex">
    <div style="width: 100%; text-align: center">
      <h4 style="font-weight: bold">관광지 정보📝</h4>
      <div>
        <ul id="my-list"></ul>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
#my-list {
  list-style: none;
  margin: auto;
  width: 80%;
  padding: 0;
}

.review-desc {
  margin-top: 0.5rem !important;
  max-height: 150px;
  overflow: hidden;
}

.desc-info-btn {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
</style>
