<!-- eslint-disable vue/multi-word-component-names -->
<!-- <router-link to="/">Home</router-link>
<router-link to="/about">About</router-link> -->

<template>
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <div class="logo me-auto">
        <router-link to="/"><h2 id="logoTitle">Ga Voyage</h2></router-link>
        <!-- <i class="fa fa-car me-3" aria-hidden="true"></i> -->
      </div>
      <nav id="navbar" class="navbar d-flex">
        <div id="navbarul" class="align-self-center">
          <div>
            <router-link to="/plan/create"
              ><a class="nav-link scrollto active">여행 계획 짜기</a></router-link
            >
          </div>
          <div>
            <router-link to="/plan/list"
              ><a class="nav-link scrollto active">나의 여행기</a></router-link
            >
          </div>
          <div>
            <router-link to="/review/list"
              ><a class="nav-link scrollto active">여행기 게시판</a></router-link
            >
          </div>

          <div id="loginnav">
            <a class="nav-link scrollto" data-bs-toggle="modal" data-bs-target="#loginModal"
              >로그인</a
            >
          </div>
          <div id="joinnav">
            <a class="nav-link scrollto" data-bs-toggle="modal" data-bs-target="#registerModal"
              >회원가입</a
            >
          </div>
          <div id="profilenav" @click="toggle" style="display: none">
            <i class="fas fa-user me-2"></i><span class="profile">김싸피님</span>
            <ul class="list" style="display: none">
              <router-link to="/mypage"
                ><li>
                  <i class="me-2 fa fa-address-card-o" aria-hidden="true"></i>마이페이지
                </li></router-link
              >

              <router-link to="/mypage"
                ><li>
                  <i class="me-2 fa fa-pencil-square-o" aria-hidden="true"></i>회원정보 수정
                </li></router-link
              >
              <li id="logout" @click="onLogout">
                <i class="me-2 fa fa-sign-out" aria-hidden="true"></i>로그아웃
              </li>
            </ul>
          </div>
          <!--
          <div>
            <a class="nav-link scrollto" href="./memberdetail"><b>[${login.nickname}]님</b></a>
          </div>

          <div>
            <a class="nav-link scrollto" href="./logout">로그아웃</a>
          </div>
          <div>
            <a class="nav-link scrollto" href="./userlist">회원관리</a>
          </div> -->
        </div>
        <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>

<script>
import { changeHeader, onLogout } from '@/assets/js/member/login.js';
import { $ } from '@/assets/js/util/elementTool';
export default {
  methods: {
    changeHeader: changeHeader,
    toggle() {
      if ($('.list').style.display == 'none') {
        $('.list').style.display = 'block';
      } else {
        $('.list').style.display = 'none';
      }
    },
    onLogout: onLogout,
  },
  mounted() {
    this.changeHeader();
  },
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap"); */
@import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Shrikhand&display=swap');
header {
  padding: 10px 0px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.07);
  z-index: 1;
}

#navbarul div {
  float: left;
  margin-left: 30px;
}

#navbarul {
  margin: 0;
  display: flex;
  align-items: center;
}

.nav-link:hover,
.profile:hover {
  color: var(--color-blue);
  font-weight: bold;
  cursor: pointer;
}
nav a.router-link-exact-active,
nav .menus.router-link-exact-active {
  color: var(--color-blue);
}

*,
:before,
:after {
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 1;
}

.menu {
  background: rgba(255, 255, 255, 0.733);
  height: 30px;
  width: 100px;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
}
/* .menu {
  content: url('<svg xmlns="http://www.w3.org/2000/svg" viewBox="00496512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M2488C111801190256s111248248248248-111248-248S38582488zm096c48.608839.48888s-39.488-8888-88-39.4-88-8839.4-8888-88zm0344c-58.70-111.3-26.6-146.5-68.218.8-35.455.6-59.898.5-59.82.404.8.47.11.1134.226.66.940.96.914.3028-2.740.9-6.92.3-0.74.7-1.17.1-1.142.9079.724.498.559.8C359.3421.4306.7448248448z"/></svg>");
  align-content: center;
} */

ul {
  background: white;
  padding: 0.5em 0.5em;
  margin: 0;
  margin-top: 1em;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100%;
  white-space: nowrap;
  cursor: default;
  text-align: left;
}
ul.hidden {
  margin-top: 0.7em;
  visibility: hidden;
}
ul:before {
  content: '';
  width: 0.75em;
  height: 0.75em;
  background: inherit;
  /* position: absolute;
  top: -0.375em;
  left: calc(56px / 2 - 0.375em); */
  transform: rotate(45deg);
}

li {
  list-style: none;
  padding: 0.5em 1em;
  margin: 0;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
}

li:hover {
  background: var(--color-semigray);
}

.profile {
  font-weight: bold;
}
</style>
