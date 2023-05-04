<template>
  <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="logo me-auto">
          <h1><a href="./">Enjoy Trip</a></h1>
        </div>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="./region-search">지역별여행지</a>
            </li>
            <li><a class="nav-link scrollto" href="./tour-plan">나의여행계획</a></li>
            <li><a class="nav-link scrollto" href="./hot-place">핫플자랑하기</a></li>
            <li><a class="nav-link scrollto" href="./board">여행정보공유</a></li>
            <li>
              <a
                class="nav-link scrollto"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                >회원가입</a
              >
            </li>
            <li>
              <a
                class="nav-link scrollto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                >로그인</a
              >
            </li>
            <li>
              <a class="nav-link scrollto" href = './memberdetail'><b>[${login.nickname}]님</b></a>
            </li>
            <li>
              <a class="nav-link scrollto" href='./logout'>로그아웃</a>
            </li>
            <li>
              <a class="nav-link scrollto" href="./userlist">회원관리</a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
</template>

<script>

export default {}
</script>

<style>

</style>