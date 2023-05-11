import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/router";
import VueCookies from "vue-cookies";

//쿠키를 사용한다.
Vue.use(VueCookies);
//쿠키의 만료일은 7일이다. (글로벌 세팅)
Vue.$cookies.config("7d");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
