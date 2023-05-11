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
  },
};
</script>

<style scoped>
.loginbody {
  text-align: left;
}
</style>
