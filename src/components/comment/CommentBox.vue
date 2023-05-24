<template>
  <div class="container">
    <div class="be-comment-block">
      <h1 class="comments-title" id="comments-title">
        Comments ({{ Object.keys(comments).length }})
      </h1>

      <div class="be-comment" v-for="comment in comments" :key="comment.commentIdx">
        <div class="be-img-comment">
          <a href="blog-detail-2.html">
            <img class="be-ava-comment" v-if="!comment.profile" src="@/assets/img/profile/1.jpg" />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name">@{{ comment.nickname }} </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            {{ comment.createdAt }}
            <button
              class="comment-del"
              v-if="comment.nickname == nowId"
              @click="deleteComment(comment.commentIdx)"
            >
              삭제 <i class="fas fa-trash-alt"></i>
            </button>
          </span>

          <p class="be-comment-text">
            {{ comment.contents }}
          </p>
        </div>
      </div>
      <form class="form-block">
        <div class="row comment-up">
          <div class="col-xs-12">
            <div class="form-group">
              <textarea class="form-input" required="" placeholder="댓글을 입력해보세요"></textarea>
            </div>
          </div>
          <button class="btn btn-get-started pull-right" @click="submitComment">
            댓글 등록하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import api from "@/assets/js/util/axios.js";
import VueCookies from "vue-cookies";
import { $ } from "@/assets/js/util/elementTool";

export default {
  name: "CommentBox",
  props: {
    reviewIdx: {
      type: Number,
    },
  },
  data() {
    return {
      comments: {},
      userCheck: false,
      nowId: "",
    };
  },
  async created() {
    let commentUrl = "/comments/by-reviewIdx/" + this.reviewIdx;
    try {
      const res = await api.get(commentUrl);
      const comment = await res.data;
      console.log(comment);
      this.comments = comment;
    } catch (e) {
      console.log(e);
    }

    this.nowId = this.$cookies.get("accesstoken").nickname;
  },

  methods: {
    async submitComment() {
      const text = $(".form-input").value;
      const postCommentUrl = "/comments";
      const commentUrl = "/comments/by-reviewIdx/" + this.reviewIdx;
      const dataObj = {
        reviewIdx: this.reviewIdx,
        contents: text,
      };
      console.log("dataObj >>", dataObj);
      try {
        const res = await api.post(postCommentUrl, dataObj);
        //post

        //get
        const response = await api.get(commentUrl);
        const comment = await response.data;
        console.log(comment);
        this.comments = comment;
        $(".form-input").value = "";
      } catch (e) {
        console.log(e);
      }
    },

    async deleteComment(cmd) {
      let commentUrl = "/comments/by-reviewIdx/" + this.reviewIdx;
      console.log(cmd);
      let deleteUrl = "/comments/" + cmd;
      try {
        const res = await api.delete(deleteUrl);
        const response = await api.get(commentUrl);
        const comment = await response.data;
        console.log(comment);
        this.comments = comment;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
.be-comment-block {
  margin-bottom: 50px !important;
  border-radius: 2px;
  padding: 50px 20px;
}

.comments-title {
  font-size: 25px;
  color: #262626;
  margin-bottom: 40px;
}

.be-img-comment {
  width: 60px;
  height: 60px;
  float: left;
  margin-bottom: 15px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 80px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}

.be-comment-content a {
  color: #383b43;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-time {
  text-align: right;
}

.be-comment-time {
  font-size: 13px;
  color: #b4b7c1;
}

.be-comment-text {
  font-size: 15px;
  /* line-height: 18px; */
  color: var(--color-black);
  display: block;
  background: var(--color-white);
  padding: 25px 20px;
  border-radius: 10px;
  text-align: left;
}

.form-group.fl_icon .icon {
  top: 1px;
  left: 16px;
  width: 48px;
  height: 48px;
  background: #f6f6f7;
  color: #b5b8c2;
  text-align: center;
  line-height: 50px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-bottomleft: 2px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.form-group .form-input {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-black);
  width: 100%;
  height: 50px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  resize: none;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 150px;
  margin-top: 30px;
}

.pull-right {
  width: max-content;
}

.comment-up {
  justify-content: flex-end !important;
}

.comment-del,
.comment-del i {
  color: rgb(187, 4, 4);
  font-weight: 600;
  border: none;
  background: var(--color-background);
}
</style>
