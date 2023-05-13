<template>
  <div id="box">
    <img class="img" src="@/assets/img/blue-sky-g64217e8e3_1920.jpg" alt="" />
    <!--"../assets/img/korea-geab21995b_1920.jpg"-->
    <div class="heading">
      <h6><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Seoul</h6>
      <h4>Title</h4>
      <div id="likeAndBookmark">
        <Like></Like>
        <BookMark></BookMark>
      </div>
    </div>

    <div class="data">
      <span class="writeDate">2023-05-06</span>
      <span class="user-id">김싸피 님의 여행</span>
    </div>
    <p class="texts">여기엔 뭘 넣으면 좋지 넣을까뺼까, 간단 본문내용..</p>
  </div>
</template>
<script>
import BookMark from '../button/BookMark.vue';
import Like from '../button/Like.vue';

export default {
  name: 'ReviewBoard',
  props: {
    msg: String,
  },
  components: {
    Like,
    BookMark,
  },
};
</script>
<style>
#box {
  width: 270px;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px auto 10px 0px;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  background: var(--color-white);
}

#box:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform: translateY(-10px);
}

#box * {
  text-align: left;
}

#box .img {
  display: block;
  width: 100%;
  padding: 0;
  height: 180px;
}

#box .heading {
  padding: 15px 0px 0px 10px;
  font-size: 28px;
}

#box .data {
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px 10px;
  font-size: 12px;
  color: #666;
}

#box .data span {
  padding: 0;
}

#box .data .date {
  margin-bottom: 1px;
}

#box .data .user-id {
  font-size: 16px;
  color: #000;
  font-weight: 600;
}

#box .texts {
  padding: 15px 0px 0px 10px;
  font-size: 14px;
  line-height: 18px;
}

#likeAndBookmark {
  display: flex;
  justify-content: flex-end;
  margin-top: -80px;
  padding-bottom: 30px;
}
</style>
