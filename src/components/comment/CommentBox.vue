<template>
  <div class="container">
    <div class="be-comment-block">
      <h1 class="comments-title">Comments (3)</h1>
      <div class="be-comment">
        <div class="be-img-comment">
          <a href="blog-detail-2.html">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              class="be-ava-comment"
            />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name"> 사람1 </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            May 27, 2015 at 3:14am
          </span>

          <p class="be-comment-text">
            Pellentesque gravida tristique ultrices. Sed blandit varius mauris, vel volutpat urna
            hendrerit id. Curabitur rutrum dolor gravida turpis tristique efficitur.
          </p>
        </div>
      </div>
      <div class="be-comment">
        <div class="be-img-comment">
          <a href="blog-detail-2.html">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt=""
              class="be-ava-comment"
            />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name"> 사람2 </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            May 27, 2015 at 3:14am
          </span>
          <p class="be-comment-text">
            Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros
            commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis
            eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in
            turpis tristique blandit.
          </p>
        </div>
      </div>
      <div class="be-comment">
        <div class="be-img-comment">
          <a href="blog-detail-2.html">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              alt=""
              class="be-ava-comment"
            />
          </a>
        </div>
        <div class="be-comment-content">
          <span class="be-comment-name"> 사람3 </span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            May 27, 2015 at 3:14am
          </span>
          <p class="be-comment-text">
            Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem
            non ant
          </p>
        </div>
      </div>
      <form class="form-block">
        <div class="row comment-up">
          <div class="col-xs-12">
            <div class="form-group">
              <textarea class="form-input" required="" placeholder="Your text"></textarea>
            </div>
          </div>
          <a class="btn btn-get-started pull-right">댓글 등록하기</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentBox',
  props: {
    reviewIdx: {
      type: Number,
    },
  },
  data() {
    return {};
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
</style>
