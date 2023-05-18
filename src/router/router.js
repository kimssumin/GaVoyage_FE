import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import PlanView from "../views/PlanView.vue";
import ReviewView from "../views/ReviewView.vue";
import PlanList from "../components/plan/PlanList.vue";
import PlanCreate from "../components/plan/PlanCreate.vue";
import ReviewCreate from "../components/board/ReviewCreate.vue";
import ReviewList from "../components/board/ReviewList.vue";

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
    component: () => import("../views/AboutView.vue"),
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
    ],
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
