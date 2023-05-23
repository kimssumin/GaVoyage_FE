<template>
  <div class="hello">
    <MyPageInfo></MyPageInfo>
    <div class="mylist row mt-5">
      <div class="col-md-5 leftBox">
        <h1>Like<i class="ms-2 far fa-thumbs-up"></i></h1>
        <LikeReviewList></LikeReviewList>
      </div>
      <div class="col-md-5 rightBox">
        <h1>BookMark<i class="ms-2 far fa-bookmark"></i></h1>
        <AttrBookmarkList></AttrBookmarkList>
      </div>
    </div>

    <div>
      <router-link to="/"
        ><button class="btn-get-started color-3">메인으로 돌아가기</button></router-link
      >
    </div>
  </div>
</template>
<script>
import api from "@/assets/js/util/axios.js";

import LikeReviewList from "@/components/board/LikeReviewList.vue";
import AttrBookmarkList from "@/components/board/AttrBookmarkList.vue";
import MyPageInfo from "@/components/member/MyPageInfo.vue";
export default {
  name: "MyPage",
  components: {
    MyPageInfo,
    AttrBookmarkList,
    LikeReviewList,
  },
};
</script>
<style scoped>
.mylist {
  margin: 40px 0px;
  padding-bottom: 30px;
}

.mylist h1 {
  margin-left: 30px;
}

.mylist .leftBox,
.mylist .rightBox {
  background-color: rgba(255, 255, 255, 0.46);

  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.1);
}
</style>
