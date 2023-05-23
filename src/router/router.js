import Vue from "vue";
import VueRouter from "vue-router";
import ReviewCreate from "../components/board/ReviewCreate.vue";
import ReviewDetail from "../components/board/ReviewDetail.vue";
import ReviewList from "../components/board/ReviewList.vue";
import PlanCreate from "../components/plan/PlanCreate.vue";
import PlanList from "../components/plan/PlanList.vue";
import MyPageInfo from "../components/member/MyPageInfo.vue";
import Main from "../views/Main.vue";
import PlanView from "../views/PlanView.vue";
import ReviewView from "../views/ReviewView.vue";
import MyPage from "../views/MyPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/MyPage.vue"),
  },
  {
    path: "/plan",
    name: "plan",
    component: PlanView,
    redirect: "/plan/create",
    children: [
      {
        path: "create",
        name: "plan-create",
        component: PlanCreate,
      },
      {
        path: "list",
        name: "plan-list",
        component: PlanList,
      },
    ],
  },
  {
    path: "/review",
    name: "review",
    component: ReviewView,
    children: [
      {
        path: "create",
        name: "review-create",
        component: ReviewCreate,
      },
      {
        path: "list",
        name: "review-list",
        component: ReviewList,
      },
      {
        path: "detail",
        name: "review-detail",
        component: ReviewDetail,
      },
    ],
  },

  {
    path: "/mypage",
    name: "mypage",
    component: MyPage,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
