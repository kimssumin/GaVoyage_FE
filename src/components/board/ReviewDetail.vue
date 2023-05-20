<template>
  <div class="container">
    <div class="reviewDetailMain">
      <section class="todo2 mt-5">
        <h1>{{ review['title'] }}</h1>
        <ul>
          <li theLittleDetails="추천하는 여행지 목록입니다">추천합니다 😁</li>
          <ul>
            <span v-for="good in goodOptions" :key="good.title">
              <li :theLittleDetails="good.addr1">{{ good.title }}</li>
            </span>
          </ul>
          <li theLittleDetails="비추천하는 여행지 목록입니다">비추천합니다 😥</li>
          <ul>
            <span v-for="bad in badOptions" :key="bad.title">
              <li :theLittleDetails="bad.addr1">{{ bad.title }}</li>
            </span>
          </ul>
          <li theLittleDetails="여행 전반에 대한 총평입니다">총 평</li>
          <ul>
            <li>
              {{ review['contents'] }}
            </li>
          </ul>
        </ul>
      </section>
      <router-link to="/review/list"
        ><button class="btn-get-started">다른 여행기도 궁금하신가요 ?</button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReviewDetail',
  computed: {
    review() {
      return this.$store.state.reviewStore.ReviewDetail;
    },
  },
  data() {
    return {
      goodOptions: [],
      badOptions: [],
    };
  },
  mounted() {
    this.goodOptions = this.$store.state.reviewStore.ReviewDetail.recommendsAttractionInfo;
    this.badOptions = this.$store.state.reviewStore.ReviewDetail.unrecommendsAttractionInfo;
    // console.log("review create - planDays : ", planDays);
  },
};
</script>
<style>
.reviewDetailMain {
  margin: 200px auto;
}
.todo2 {
  width: 100%;
  margin: auto;
  /* min-height: 850px; */
  max-width: 420px;
  background-color: var(--color-white);
  padding: 2em;
  box-shadow: 1px 2px 4px #0003;
}

.todo2 h1 {
  margin: 10px;
}

.todo2 ul {
  -webkit-padding-start: 1.5em;
  padding-inline-start: 1.5em;
  font-weight: 400;
  text-align: left;
}
.todo2 ul ::marker {
  content: '>';
  color: #48b;
}
.todo2 ul ul ::marker {
  content: '>>';
}

.todo2 ul li {
  font-weight: 600;
}

.todo2 li {
  position: relative;
  -webkit-padding-start: 0.5em;
  padding-inline-start: 0.5em;
  padding-top: 1.5em;
  border-bottom: 1px solid #48b2;
  cursor: default;
  transition: color 0.4s;
}
.todo2 li::after {
  content: attr(theLittleDetails);
  position: absolute;
  left: 15%;
  bottom: calc(100% - 1.5em);
  background-image: conic-gradient(from 10deg at 1em 100%, #fff 30deg, #fff0 30deg),
    linear-gradient(0deg, #fff0 1.5em, #fff 1.5em);
  color: #246;
  font-weight: 700;
  padding: 1em 2em 2.5em;
  pointer-events: none;
  opacity: 0;
  filter: drop-shadow(1px 2px 4px #0003);
  transition: opacity 0.4s;
}
.todo2 li:hover {
  color: #48b;
}
.todo2 li:hover::marker {
  font-weight: 700;
}
.todo2 li:hover::after {
  opacity: 1;
  transition-delay: 0.2s;
}
</style>
