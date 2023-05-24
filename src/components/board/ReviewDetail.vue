<template>
  <div class="container">
    <div class="reviewDetailMain">
      <div class="row mt-5">
        <div class="col-md-8 leftBox"><getMap></getMap></div>
        <div class="col-md-3 rightBox">
          <getAttractionInfo></getAttractionInfo>
        </div>
      </div>
      <section class="todo2 mt-5">
        <h1>{{ review["title"] }}</h1>
        <div class="todo2-tot">
          <p class="todo2-info">
            작성 날짜 : {{ review["createdAt"] }}<br />
            작성자 : @{{ review["writerName"] }}
          </p>
          <div class="todo2-btn">
            <Like :reviewInit="reviewLike"></Like>
            <a href="#comments-title"><i class="far fa-comment"></i></a>
          </div>
        </div>

        <ul>
          <li theLittleDetails="추천하는 여행지 목록입니다">추천합니다 😁</li>
          <ul>
            <span v-for="good in goodOptions" :key="good.title">
              <li :theLittleDetails="good.addr1" @click="makeMap(good)">
                {{ good.title }}
                <!-- scrap[good.content_id] -->
              </li>
            </span>
          </ul>
          <li theLittleDetails="비추천하는 여행지 목록입니다">비추천합니다 😥</li>
          <ul>
            <span v-for="bad in badOptions" :key="bad.title">
              <li :theLittleDetails="bad.addr1" @click="makeMap(bad)">
                {{ bad.title }}
              </li>
            </span>
          </ul>
          <li theLittleDetails="여행 전반에 대한 총평입니다">총 평</li>
          <ul>
            <li class="reviewContentTxt">
              <!-- {{ stringToHTML(review['contents']) }} -->
            </li>
          </ul>
        </ul>
      </section>
    </div>

    <CommentBox :reviewIdx="review['reviewIdx']"></CommentBox>
    <div class="reviewBtns">
      <router-link to="/review/list"
        ><button class="btn-get-started">다른 여행기도 궁금하신가요 ?</button></router-link
      >
      <button class="deleteReview" style="display: none" id="deleteBtn" @click="deleteReview">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
import { makeMap } from "@/assets/js/review/showReview";
import api from "@/assets/js/util/axios.js";
import CommentBox from "@/components/comment/CommentBox.vue";
import getAttractionInfo from "@/components/map/getAttractionInfo.vue";
import getMap from "@/components/map/getMap.vue";
import Like from "../button/Like.vue";

export default {
  name: "ReviewDetail",
  components: {
    getMap,
    getAttractionInfo,
    Like,
    CommentBox,
  },
  computed: {
    review() {
      return this.$store.state.reviewStore.ReviewDetail;
    },
  },
  data() {
    return {
      goodOptions: [],
      badOptions: [],
      nowSelect: {},
      reviewLike: {
        id: this.$store.state.reviewStore.ReviewDetail.reviewIdx,
        isLiked: this.$store.state.reviewStore.ReviewDetail.isLiked,
      },
    };
  },

  mounted() {
    this.goodOptions = this.$store.state.reviewStore.ReviewDetail.recommendsAttractionInfo;
    this.badOptions = this.$store.state.reviewStore.ReviewDetail.unrecommendsAttractionInfo;
    this.goodOptions.forEach((good) => {
      const dataObj = { content_id: good.content_id, value: good.isScrab };
      this.$store.dispatch("buttonStore/updateScrap", dataObj, { root: true });
    });
    this.badOptions.forEach((bad) => {
      const dataObj = { content_id: bad.content_id, value: bad.isScrab };
      this.$store.dispatch("buttonStore/updateScrap", dataObj, { root: true });
    });
    document.querySelector(".reviewContentTxt").innerHTML = this.review["contents"];
    if (this.review["writerName"] == this.$cookies.get("accesstoken").nickname) {
      document.querySelector(".deleteReview").style.display = "block";
    }
  },
  methods: {
    makeMap: makeMap,
    async deleteReview() {
      let deleteUrl = "/reviews/" + this.review["reviewIdx"];
      try {
        const res = await api.delete(deleteUrl);
        // const detail = await res.data;
        this.$router.push("/review/list");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
/* .reviewDetailMain {
  margin: 200px auto;
} */
.todo2 {
  width: 95%;
  margin: auto;
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
  content: ">";
  color: #48b;
}
.todo2 ul ul ::marker {
  content: ">>";
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

.todo2-info {
  text-align: left;
  margin: 30px 30px 15px;
}

.todo2-tot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo2-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.reviewBtns {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
}

.scrapBtn i,
.scrapBtn {
  color: var(--color-blue);
  font-weight: 600;
  margin-right: 6px;
}

.fa-comment {
  font-size: 20px;
  color: var(--color-blue);
}

#my-list .btn-search {
  margin-top: 10px;
}
</style>
