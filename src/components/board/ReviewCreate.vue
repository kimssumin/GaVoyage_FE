<template>
  <div class="container">
    <div class="reviewCreateTitle">
      <h1>리뷰 작성</h1>
    </div>
    <div class="row reviewRow">
      <div class="reviewContainer col-md-6">
        <div class="reviewTitle">
          <h3>[Plan Name] {{ getPlan['plan'].title }}</h3>
          <h5>출발일 : {{ getPlan['plan'].startDate }}</h5>
          <h5>도착일 : {{ getPlan['plan'].endDate }}</h5>

          <h4>여행은 어떠셨나요 ?</h4>
          <p>당신의 여행 후기를 기다리고있었어요</p>
        </div>

        <div class="reviewMain">
          <input
            id="title"
            class="px-2"
            placeholder=" 리뷰 제목을 입력해주세요 "
            value="리뷰 제목입니다~"
          />
          <div class="goodplace">
            <h5>당신의 여행 속 좋았던 곳과 아쉬웠던 곳을 선택해주세요</h5>
            <h4>추천합니다 😁</h4>
            <multiselect
              v-model="goodValue"
              :options="goodOptions"
              :multiple="true"
              group-values="libs"
              group-label="day"
              :group-select="true"
              placeholder="여행지를 검색해보세요"
              track-by="title"
              label="title"
              ><span slot="noResult"
                >찾으시는 여행지가 없네요 😥 입력을 다시 확인해주세요</span
              ></multiselect
            >
          </div>

          <div class="badplace">
            <h4>아쉬웠어요 😥</h4>
            <multiselect
              v-model="badValue"
              :options="badOptions"
              :multiple="true"
              group-values="libs"
              group-label="day"
              :group-select="true"
              placeholder="여행지를 검색해보세요"
              track-by="title"
              label="title"
              ><span slot="noResult"
                >찾으시는 여행지가 없네요 😥 입력을 다시 확인해주세요</span
              ></multiselect
            >
          </div>

          <div class="planEvaluation">
            <h4>마지막으로, 여행에 총평을 작성해주세요</h4>
            <textarea id="reviewContents"> </textarea>
          </div>
        </div>
      </div>

      <div class="col-md-4 rightside">
        <section class="todo mt-5">
          <h1>Plan Review</h1>
          <ul>
            <li theLittleDetails="추천하는 여행지 목록입니다">추천합니다 😁</li>
            <ul>
              <span v-for="good in goodValue" :key="good.title">
                <li :theLittleDetails="good.addr1">{{ good.title }}</li>
              </span>
            </ul>
            <li theLittleDetails="비추천하는 여행지 목록입니다">비추천합니다 😥</li>
            <ul>
              <span v-for="bad in badValue" :key="bad.title">
                <li :theLittleDetails="bad.addr1">{{ bad.title }}</li>
              </span>
            </ul>
          </ul>
        </section>
      </div>
    </div>
    <div style="margin-top: 20px; display: flex; justify-content: center">
      <button class="btn-get-started" style="text-align: center" @click="submitReview">
        최종 등록
      </button>
    </div>
  </div>
</template>
<style scoped>
.reviewRow {
  overflow: visible;
}
.reviewCreateTitle {
  position: relative;
  width: 80%;
  margin: 80px 0 0 8%;
}

.reviewContainer {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: column;
}

.reviewTitle,
.reviewMain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.reviewTitle h3,
.reviewTitle #title {
  margin-bottom: 30px;
  padding-bottom: 3px;
  border-bottom: 3px var(--color-blue) solid;
}
.reviewTitle h4 {
  margin-top: 70px;
  font-size: 1.55rem;
  text-align: left;
  font-weight: bold;
}
.reviewTitle h5 {
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
}

.reviewMain h4 {
  font-size: 1.4rem;
  text-align: left;
  font-weight: bold;
}

.reviewMain h5 {
  font-size: 1.2rem;
  text-align: left;
}

.goodplace,
.badplace,
.planEvaluation {
  margin-top: 40px;
  width: 100%;
}

textarea {
  resize: vertical;
  width: 100%;
  height: 150px;
  border: none;
}

span.multiselect__tag {
  background: var(--color-blue) !important;
}

.multiselect__tag span {
  color: white;
}

.rightside {
  top: 200px;
  position: sticky;
}

/*memo*/
.todo {
  width: 100%;
  /* min-height: 850px; */
  max-width: 420px;
  background-color: var(--color-white);
  padding: 2em;
  box-shadow: 1px 2px 4px #0003;
}

.todo h1 {
  margin: 10px;
}

.todo ul {
  -webkit-padding-start: 1.5em;
  padding-inline-start: 1.5em;
  font-weight: 400;
  text-align: left;
}
.todo ul ::marker {
  content: '>';
  color: #48b;
}
.todo ul ul ::marker {
  content: '>>';
}

.todo ul li {
  font-weight: 600;
}

.todo li {
  position: relative;
  -webkit-padding-start: 0.5em;
  padding-inline-start: 0.5em;
  padding-top: 1.5em;
  border-bottom: 1px solid #48b2;
  cursor: default;
  transition: color 0.4s;
}
.todo li::after {
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
.todo li:hover {
  color: #48b;
}
.todo li:hover::marker {
  font-weight: 700;
}
.todo li:hover::after {
  opacity: 1;
  transition-delay: 0.2s;
}
</style>
<script>
import api from '@/assets/js/util/axios.js';
import { $ } from '@/assets/js/util/elementTool';
import Multiselect from 'vue-multiselect';

export default {
  name: 'ReviewCreate',
  computed: {
    getPlan() {
      return this.$store.state.reviewStore.planForReview;
    },
  },
  data() {
    return {
      goodValue: [],
      goodOptions: [],

      badValue: [],
      badOptions: [],
    };
  },
  components: { Multiselect },

  mounted() {
    this.goodOptions = [];
    this.badOptions = [];
    let planDays = this.$store.state.reviewStore.planForReview.planDays;
    // console.log("review create - planDays : ", planDays);
    planDays.forEach((day) => {
      let dayCategory = {};
      dayCategory['day'] = day;
      let detailPlan = this.$store.state.reviewStore.planForReview.detailPlan[day];
      console.log('review create : ', detailPlan);
      dayCategory['libs'] = detailPlan;
      this.goodOptions.push(dayCategory);
      this.badOptions.push(dayCategory);
    });
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.goodOptions.push(tag);
      this.goodValue.push(tag);
      this.badOptions.push(tag);
      this.badValue.push(tag);
    },

    async submitReview() {
      //console.log("hi");
      const postReview = {};
      postReview['title'] = $('#title').value;
      postReview['planIdx'] = this.getPlan.plan.planIdx;
      postReview['recommendAttractions'] = [];
      postReview['unRecommendAttractions'] = [];

      this.goodValue.forEach((attr) => {
        postReview['recommendAttractions'].push(attr.content_id);
      });
      this.badValue.forEach((attr) => {
        postReview['unRecommendAttractions'].push(attr.content_id);
      });
      postReview['contents'] = $('#reviewContents').value;

      let check = true;
      postReview['recommendAttractions'].forEach((id) => {
        if (postReview['unRecommendAttractions'].includes(id)) {
          check = false;
          alert('하나의 여행지가 추천하는 여행지와 비추천하는 여행지 모두에 들어갈 수 없어요 😥');
        }
      });

      if (check) {
        //서버 전송
        try {
          let reviewUrl = '/reviews';
          const res = await api.post(reviewUrl, postReview);
          const data = await res.data;
          console.log(data);
          alert('리뷰가 등록되었습니다 😊');

          this.$router.push('/review/list');
        } catch (e) {
          alert('리뷰 등록에 실패하였습니다.');
          console.log(e);
        }
        //console.log("submit!!!! ", postReview);
      }
    },
  },
};
</script>
