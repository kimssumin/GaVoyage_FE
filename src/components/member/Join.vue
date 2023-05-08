<!-- eslint-disable vue/multi-word-component-names -->
<!-- <router-link to="/">Home</router-link>
<router-link to="/about">About</router-link> -->

<template>
  <!-- ===== Register modal start ===== -->
  <div
    class="modal fade"
    id="registerModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <form action="${root}/join" method="post" id="register">
          <!-- enjoytrip -->
          <input type="hidden" id="action" name="action" value="join" />
          <div class="modal-header">
            <h4 class="modal-title">
              <label class="fw-bold border-bottom border-primary border-5"> 회원가입</label>
            </h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body joinbody">
            <div class="mb-4 ms-2 me-2">
              <label for="name" class="form-label">이름:</label>
              <input
                type="text"
                class="form-control"
                id="nickname"
                placeholder="이름..."
                name="nickname"
              />
            </div>
            <div class="mb-4 ms-2 me-2">
              <label for="id" class="form-label">아이디:</label>
              <input
                type="text"
                class="form-control"
                id="id"
                placeholder="아이디..."
                name="member_id"
              />
            </div>
            <div class="mb-4 ms-2 me-2">
              <label for="password" class="form-label">비밀번호:</label>
              <input
                type="password"
                class="form-control"
                id="member_password"
                placeholder="비밀번호..."
                name="member_password"
              />
            </div>
            <div class="mb-4 ms-2 me-2">
              <label for="passwordcheck" class="form-label">비밀번호확인:</label>
              <input
                type="password"
                class="form-control"
                id="passwordcheck"
                placeholder="비밀번호확인..."
                name="passwordcheck"
              />
            </div>
            <div class="mb-4 ms-2 me-2">
              <label for="email" class="form-label">전화번호:</label>
              <input
                type="text"
                class="form-control"
                name="phone_number"
                id="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="mb-4 ms-2 me-2">
              <label for="email" class="form-label">Email:</label>
              <input class="form-control" name="email" id="email" placeholder="Email" required />
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" id="btn-register" class="btn btn-outline-primary btn-sm">
              회원가입
            </button>
            <button
              type="button"
              id="btn-reset"
              class="btn btn-outline-success btn-sm"
              onclick="resetForm()"
            >
              초기화
            </button>
            <button type="button" class="btn btn-outline-dark btn-sm" data-bs-dismiss="modal">
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Register modal end -->
</template>

<script>
export default {};
</script>

<style scoped>
.joinbody {
  text-align: left;
}
</style>
