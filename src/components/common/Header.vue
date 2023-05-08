<!-- eslint-disable vue/multi-word-component-names -->
<!-- <router-link to="/">Home</router-link>
<router-link to="/about">About</router-link> -->

<template>
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <div class="logo me-auto">
        <router-link to="/"
          ><h2 id="logoTitle">
            <i class="fa fa-car me-3" aria-hidden="true"></i>Ga Voyage
          </h2></router-link
        >
      </div>
      <nav id="navbar" class="navbar d-flex">
        <ul id="navbarul" class="align-self-center">
          <li>
            <a class="nav-link scrollto active" href="./region-search">여행 계획 짜기</a>
          </li>
          <li><a class="nav-link scrollto" href="./tour-plan">나의 여행기</a></li>
          <li><a class="nav-link scrollto" href="./hot-place">여행기 게시판</a></li>
          <li>
            <a class="nav-link scrollto" data-bs-toggle="modal" data-bs-target="#registerModal"
              >회원가입</a
            >
          </li>
          <li>
            <a class="nav-link scrollto" data-bs-toggle="modal" data-bs-target="#loginModal"
              >로그인</a
            >
          </li>
          <li>
            <a class="nav-link scrollto" href="./memberdetail"><b>[${login.nickname}]님</b></a>
          </li>

          <li>
            <a class="nav-link scrollto" href="./logout">로그아웃</a>
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
export default {};
</script>

<style scoped>
header {
  margin-top: 24px;
  padding-bottom: 10px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.07);
}

ul li {
  list-style-type: none;
  float: left;
  margin-left: 30px;
}

#navbarul {
  margin: 0;
}

.nav-link:hover {
  color: var(--color-blue);
  font-weight: bold;
}
</style>
