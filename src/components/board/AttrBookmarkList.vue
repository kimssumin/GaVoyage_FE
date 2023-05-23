<template>
  <div id="attrBookmark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <p>총 {{ Object.keys(bookmark).length }}개의 검색결과가 있습니다</p>
    <div class="carousel-inner">
      <div
        class="carousel-item bookmark-item"
        data-bs-interval="6000"
        v-for="bm in bookmark"
        :key="bm['content_id']"
      >
        <div class="row mt-2" style="border: 1px; display: flex">
          <div style="text-align: center">
            <h4 style="font-weight: bold">관광지 정보📝</h4>
            <div>
              <ul id="my-list">
                <div class="m1">
                  <hr />
                  <h5 id="data-title" style="font-weight: bold">{{ bm.title }}</h5>
                  <span id="data-id" style="display: none">{{ bm.content_id }}</span>
                  <hr />
                  <div style="margin: 10px">
                    <img
                      class="dataImg mb-4"
                      :src="bm.first_image"
                      onerror="this.src='https://cdn-icons-png.flaticon.com/512/4944/4944051.png'"
                    />
                    <br />
                    <span style="font-size: 14px; font-weight: bold">주소 : {{ bm.addr1 }}</span>
                    <br />
                  </div>

                  <button class="btn-search">
                    <a
                      v-bind:href="`https://search.naver.com/search.naver?where=nexearchie=utf8&query=${bm.title}`"
                      target="_blank"
                      >더 알아보기 &nbsp; <i class="far fa-search-location"></i
                    ></a>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#attrBookmark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#attrBookmark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import getAttractionInfo from "@/components/map/getAttractionInfo.vue";
import api from "@/assets/js/util/axios.js";
export default {
  components: {},
  data() {
    return {
      bookmark: [],
    };
  },
  async created() {
    let bookmarkUrl = "/scraps/users";
    try {
      const res = await api.get(bookmarkUrl);
      const bookmark = await res.data;
      console.log(bookmark);
      this.bookmark = bookmark;
    } catch (e) {
      console.log(e);
    }
  },

  updated() {
    const carouselitem = document.querySelector(".bookmark-item");
    console.log(carouselitem);
    carouselitem.classList.add("active");
  },
};
</script>
<style scoped>
#attrBookmark {
  margin: auto;
  width: 80%;
}

.carousel-item {
  text-align: center;
  min-height: 300px; /* Prevent carousel from being distorted if for some reason image doesn't load */
}

#attrBookmark #box {
  width: 270px;
  height: 400px;
  border-radius: 8px;
  margin: auto;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  background: var(--color-white);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

#attrBookmark .dataImg {
  width: 300px;
}
</style>
