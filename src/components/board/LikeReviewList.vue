<template>
  <div id="likeCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <p>총 {{ Object.keys(reviews).length }}개의 검색결과가 있습니다</p>
    <div class="carousel-inner">
      <div
        class="carousel-item review-item"
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
import api from '@/assets/js/util/axios.js';
import ReviewBoard from '@/components/board/ReviewBoard.vue';
export default {
  components: {
    ReviewBoard,
  },
  data() {
    return {
      reviews: [],
    };
  },
  async created() {
    let reviewUrl = 'reviews/likes';
    try {
      const res = await api.get(reviewUrl);
      const review = await res.data;

      this.reviews = review;
      this.reviews.forEach((rv) => {
        console.log(rv);
        rv['writerName'] = rv.nickname;
      });
      console.log(this.reviews);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    reviewDetail: async function (idx, event) {
      console.log('click', event);
      let reviewDetailUrl = '/reviews/' + idx;
      let reviewDet = {};
      try {
        const res = await api.get(reviewDetailUrl);
        const detail = await res.data;

        console.log('>> detail : ', detail);
        reviewDet = detail;
      } catch (e) {
        console.log(e);
      }

      this.$store.dispatch('reviewStore/nowReviewDetail', reviewDet, { root: true });
      console.log('Vuex 에 저장 성공! - 리뷰조회');
      console.log(this.$store.state.reviewStore.ReviewDetail);
      this.$router.push('/review/detail');
    },
  },
  updated() {
    const carouselitem = document.querySelector('.review-item');
    console.log(carouselitem);
    carouselitem.classList.add('active');
  },
};
</script>
<style scoped>
#likeCarousel {
  margin: auto;
  width: 80%;
  margin-bottom: 55px;
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
