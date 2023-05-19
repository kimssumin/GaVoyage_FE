<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- ===== Login modal start ===== -->
  <div
    class="modal fade"
    id="loginModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            <label class="fw-bold border-bottom border-primary border-5"> 로그인</label>
          </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body loginbody">
          <div class="mb-3 ms-2 me-2">
            <label for="loginid" class="form-label">아이디:</label>
            <input
              type="text"
              class="form-control"
              id="loginid"
              placeholder="아이디..."
              name="member_id"
            />
          </div>
          <div class="mb-3 ms-2 me-2">
            <label for="loginpw" class="form-label">비밀번호:</label>
            <input
              type="password"
              class="form-control"
              id="loginpw"
              placeholder="비밀번호..."
              name="member_password"
            />
          </div>
          <div class="socialLogin">
            <!-- <a href=""
              ><div id="kakao-box">
                <img id="icon-img" src="@/assets/img/kakao_logo.png" />카카오톡으로 로그인
              </div></a
            > -->
            <div id="kakao-box" @click="kakaoLogin">
              <img id="icon-img" src="@/assets/img/kakao_logo.png" />카카오톡으로 로그인
            </div>
            <div id="naver-box">
              <img id="icon-img" src="@/assets/img/naver_logo.png" />네이버로 로그인
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            @click="onLogin"
            type="button"
            id="btn-login"
            class="btn btn-outline-primary btn-sm"
          >
            로그인
          </button>
          <button
            type="button"
            id="btn-find-id"
            class="btn btn-outline-success btn-sm"
            onClick="location.href='${root}/findid'"
          >
            아이디찾기
          </button>
          <button
            type="button"
            id="btn-find-password"
            class="btn btn-outline-dark btn-sm"
            onClick="location.href='${root}/findpw'"
          >
            비밀번호찾기
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Login modal end -->
</template>

<script>
import { onLogin } from "@/assets/js/member/login.js";
export default {
  methods: {
    onLogin: onLogin,
    kakaoLogin() {
      const kakaoAuthUrl = "/oauth2/authorization/kakao";
      window.location.href = kakaoAuthUrl;
      console.log(window.location.href);
    },
  },
};
</script>

<style scoped>
.form-label {
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.socialLogin {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
}

.socialLogin a {
  width: 80%;
}

.loginbody {
  text-align: left;
}

#kakao-box {
  width: 100%;
  height: 44px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  color: #000000cb;
  background-color: #fee500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#naver-box {
  width: 100%;
  height: 44px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: #03c75a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#icon-img {
  margin-right: 2%;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 40px;
}
</style>
