<template>
  <div id="likeCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item active"
        data-bs-interval="6000"
        v-for="review in reviews"
        :key="review['reviewIdx']"
      >
        <ReviewBoard
          :review="review"
          @click.native="reviewDetail(review.reviewIdx, $event)"
        ></ReviewBoard>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#likeCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#likeCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import ReviewBoard from "@/components/board/ReviewBoard.vue";
import api from "@/assets/js/util/axios.js";
export default {
  components: {
    ReviewBoard,
  },
  data() {
    return {
      reviews: [
        {
          reviewIdx: 2,
          writerName: "김싸피",
          title: "리뷰 제목입니다~",
          contents: "",
          hit: 0,
          isLiked: 1,
          createdAt: "2023-05-23",
          recommendsAttractionInfo: [
            {
              content_id: 130290,
              content_type_id: 14,
              title: "계양문화회관",
              addr1: "인천광역시 계양구 계양산로35번길 11",
              addr2: "(계산동)",
              zipcode: "21042",
              tel: "",
              first_image: "http://tong.visitkorea.or.kr/cms/resource/09/1577309_image2_1.jpg",
              first_image2: "http://tong.visitkorea.or.kr/cms/resource/09/1577309_image3_1.jpg",
              readcount: 21485,
              latitude: 37.54604921,
              longitude: 126.7181287,
              mlevel: "6",
              sido_code: 2,
              gugun_code: 2,
              isScrab: 0,
            },
          ],
          unrecommendsAttractionInfo: [
            {
              content_id: 130787,
              content_type_id: 14,
              title: "인천 계양도서관",
              addr1: "인천광역시 계양구 계양산로134번길 18",
              addr2: "(계산동)",
              zipcode: "21030",
              tel: "",
              first_image: "http://tong.visitkorea.or.kr/cms/resource/51/1860351_image2_1.jpg",
              first_image2: "http://tong.visitkorea.or.kr/cms/resource/51/1860351_image3_1.jpg",
              readcount: 30753,
              latitude: 37.54604386,
              longitude: 126.7301609,
              mlevel: "6",
              sido_code: 2,
              gugun_code: 2,
              isScrab: 0,
            },
          ],
        },
        {
          reviewIdx: 3,
          writerName: "김싸피",
          title: "리뷰 제목입니다~",
          contents: "",
          hit: 0,
          isLiked: 0,
          createdAt: "2023-05-23",
          recommendsAttractionInfo: [
            {
              content_id: 125468,
              content_type_id: 12,
              title: "마니산(강화)",
              addr1: "인천광역시 강화군 화도면 마니산로675번길 18",
              addr2: "",
              zipcode: "23060",
              tel: "",
              first_image: "http://tong.visitkorea.or.kr/cms/resource/74/1659674_image2_1.jpg",
              first_image2: "http://tong.visitkorea.or.kr/cms/resource/74/1659674_image3_1.jpg",
              readcount: 114012,
              latitude: 37.63246729,
              longitude: 126.4237865,
              mlevel: "6",
              sido_code: 2,
              gugun_code: 1,
              isScrab: 0,
            },
          ],
          unrecommendsAttractionInfo: [],
        },
      ],
    };
  },
  async created() {
    // let reviewUrl = "/reviews";
    // try {
    //   const res = await api.get(reviewUrl);
    //   const review = await res.data;
    //   console.log(review);
    //   this.reviews = review;
    // } catch (e) {
    //   console.log(e);
    // }
  },
};
</script>
<style scoped>
#likeCarousel {
  margin: auto;
  width: 80%;
}

.carousel-item {
  text-align: center;
  min-height: 300px; /* Prevent carousel from being distorted if for some reason image doesn't load */
}

#likeCarousel #box {
  width: 270px;
  height: 400px;
  border-radius: 8px;
  margin: auto;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  background: var(--color-white);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
