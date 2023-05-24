<template>
  <div class="container">
    <div class="reviewCreateTitle">
      <h1>리뷰 작성</h1>
    </div>
    <div class="row reviewRow2">
      <div class="reviewContainer col-md-6">
        <div class="reviewTitle">
          <h3>[Plan Name] {{ getPlan["plan"].title }}</h3>
          <h5>출발일 : {{ getPlan["plan"].startDate }}</h5>
          <h5>도착일 : {{ getPlan["plan"].endDate }}</h5>

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
            <textarea id="reviewContents"></textarea>
          </div>

          <div class="planEvaluation">
            <h4>잠깐! 첨부하실 사진이 있나요 ?</h4>
            <vue2Dropzone
              id="drop-file"
              :options="dropOption"
              :useCustomSlot="true"
              @vdropzone-file-added="addFile"
              @vdropzone-removed-file="removeFile"
              @vdropzone-complete="afterComplete"
            >
              <!--  @vdropzone-file-added="addFile"
              @vdropzone-removed-file="removeFile" -->
              <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                <div class="subtitle">...or click to select a file from your computer</div>
              </div>
            </vue2Dropzone>
          </div>
        </div>
      </div>

      <div class="col-md-4 rightside2">
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
<style>
#drop-file {
  margin: 20px auto;
}
.dropzone-custom-content {
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: var(--color-blue);
  font-size: 20px;
  font-weight: 500;
}

.dz-message {
  background: var(--color-white);
  padding: 30px;
  margin-bottom: 30px;
}

.subtitle {
  color: #314b5f;
  font-size: 12px;
}

a:dz-remove {
  color: var(--color-blue);
}

.dz-preview {
  margin-bottom: 20px;
}
.dz-success-mark,
.dz-error-mark {
  display: none !important;
}

.reviewRow2 {
  overflow: visible !important;
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
  resize: none;
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

.rightside2 {
  top: 300px;
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
  content: ">";
  color: #48b;
}
.todo ul ul ::marker {
  content: ">>";
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
import vue2Dropzone from "vue2-dropzone";
import api from "@/assets/js/util/axios.js";
import { $ } from "@/assets/js/util/elementTool";
import Multiselect from "vue-multiselect";
import VueCookies from "vue-cookies";

export default {
  name: "ReviewCreate",
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

      uploadimageurl: [], // 업로드한 이미지의 미리보기 기능을 위해 url 저장하는 객체
      dropOption: {
        url: "https://httpbin.org/post",
        method: "post",
        autoProcessQueue: false, //자동으로 보내기 방지
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        maxFiles: 5,
        addRemoveLinks: true,
      },
    };
  },
  components: {
    Multiselect,
    vue2Dropzone: vue2Dropzone,
  },

  mounted() {
    this.goodOptions = [];
    this.badOptions = [];
    let planDays = this.$store.state.reviewStore.planForReview.planDays;
    // console.log("review create - planDays : ", planDays);
    planDays.forEach((day) => {
      let dayCategory = {};
      dayCategory["day"] = day;
      let detailPlan = this.$store.state.reviewStore.planForReview.detailPlan[day];
      console.log("review create : ", detailPlan);
      dayCategory["libs"] = detailPlan;
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
      postReview["title"] = $("#title").value;
      postReview["planIdx"] = this.getPlan.plan.planIdx;
      postReview["recommendAttractions"] = [];
      postReview["unRecommendAttractions"] = [];

      this.goodValue.forEach((attr) => {
        postReview["recommendAttractions"].push(attr.content_id);
      });
      this.badValue.forEach((attr) => {
        postReview["unRecommendAttractions"].push(attr.content_id);
      });
      postReview["contents"] = $("#reviewContents").value;

      let check = true;
      postReview["recommendAttractions"].forEach((id) => {
        if (postReview["unRecommendAttractions"].includes(id)) {
          check = false;
          alert("하나의 여행지가 추천하는 여행지와 비추천하는 여행지 모두에 들어갈 수 없어요 😥");
        }
      });

      if (check) {
        //서버 전송
        try {
          let reviewUrl = "/reviews";
          const res = await api.post(reviewUrl, postReview);
          console.log("postReview >> ", postReview);
          const data = await res.data;
          console.log(data);
          alert("리뷰가 등록되었습니다 😊");
        } catch (e) {
          alert("리뷰 등록에 실패하였습니다.");
          console.log(e);
        }
        //console.log("submit!!!! ", postReview);
        let reviewDetailUrl = "/reviews/find-by-plan?planIdx=" + postReview.planIdx;
        console.log(reviewDetailUrl);
        let reviews = {};
        try {
          const res = await api.get(reviewDetailUrl);
          const detail = await res.data;
          reviews = detail;
        } catch (e) {
          console.log(e);
        }

        this.$store.dispatch("reviewStore/nowReviewDetail", reviews, { root: true });
        console.log(reviews);
        console.log("Vuex 에 저장 성공! - 리뷰저장");
        console.log(this.$store.state.reviewStore.ReviewDetail);
        this.$router.push("/review/detail");
      }
    },

    // 추가된 method
    addFile(file) {
      this.uploadimageurl.push(file);
      this.afterComplete(file);
      console.log(this.uploadimageurl);
    },

    removeFile(file, error, xhr) {
      this.uploadimageurl = this.uploadimageurl.filter((f) => f.upload.fid !== file.upload.fid);
    },

    async afterComplete(upload) {
      // console.log("in!");
      let file = upload;
      const formData = new FormData();
      formData.append("image", file);
      try {
        const token = VueCookies.get("accesstoken").token;

        const res = await api.post("/aws/s3/uploadImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.data;
        console.log("통신완료 !! >> ", data);

        let txtArea = document.getElementById("reviewContents");
        let txtValue = txtArea.value;
        let selectPos = txtArea.selectionStart; // 커서 위치 지정
        let beforeTxt = txtValue.substring(0, selectPos); // 기존텍스트 ~ 커서시작점 까지의 문자
        let afterTxt = txtValue.substring(txtArea.selectionEnd, txtValue.length); // 커서끝지점 ~ 기존텍스트 까지의 문자
        let addTxt = `<br><img src="${data}" style="width: 50%; height:auto;" alt="image"><br>`; // 추가 입력 할 텍스트

        txtArea.value = beforeTxt + addTxt + afterTxt;

        selectPos = selectPos + addTxt.length;
        txtArea.selectionStart = selectPos; // 커서 시작점을 추가 삽입된 텍스트 이후로 지정
        txtArea.selectionEnd = selectPos; // 커서 끝지점을 추가 삽입된 텍스트 이후로 지정
        reviewContents.focus();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
