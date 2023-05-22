import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import MyPageView from "../views/MyPageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hotplace",
    name: "hotplace",
    component: () =>
      import(/* webpackChunkName: "hotplace" */ "@/views/HotplaceView"),
    redirect: "/hotplace/list",
    children: [
      {
        path: "list",
        name: "hotplacelist",
        component: () =>
          import(
            /* webpackChunkName: "hotplace" */ "@/components/hotplace/HotplaceList"
          ),
      },
      {
        path: "write",
        name: "hotplacewrite",
        component: () =>
          import(
            /* webpackChunkName: "hotplace" */ "@/components/hotplace/HotplaceWrite"
          ),
      },
      {
        path: "view/:hotplaceId",
        name: "hotplaceview",
        component: () =>
          import(
            /* webpackChunkName: "hotplace" */ "@/components/hotplace/HotplaceView"
          ),
      },
      {
        path: "modify",
        name: "hotplacemodify",
        component: () =>
          import(
            /* webpackChunkName: "hotplace" */ "@/components/hotplace/HotplaceModify"
          ),
      },
      {
        path: "delete",
        name: "hotplacedelete",
        component: () =>
          import(
            /* webpackChunkName: "hotplace" */ "@/components/hotplace/HotplaceDelete"
          ),
      },
    ],
  },
  {
    path: "/attraction",
    name: "attraction",
    component: () =>
      import(/* webpackChunkName: "attraction" */ "@/views/AttractionView"),
    redirect: "/attraction/list",
    children: [
      {
        path: "list",
        name: "attractionlist",
        component: () =>
          import(
            /* webpackChunkName: "attraction" */ "@/components/attraction/AttractionList"
          ),
      },
      {
        path: "view/:attractionId",
        name: "attractionview",
        component: () =>
          import(
            /* webpackChunkName: "attraction" */ "@/components/attraction/AttractionView"
          ),
      },
    ],
  },
  {
    path: "/plan",
    name: "plan",
    component: () => import(/* webpackChunkName: "plan" */ "@/views/PlanView"),
    redirect: "/plan/list",
    children: [
      {
        path: "list",
        name: "planlist",
        component: () =>
          import(/* webpackChunkName: "plan" */ "@/components/plan/PlanList"),
      },
      {
        path: "view",
        name: "planview",
        component: () =>
          import(/* webpackChunkName: "plan" */ "@/components/plan/PlanView"),
      },
      {
        path: "write",
        name: "planwrite",
        component: () =>
          import(/* webpackChunkName: "plan" */ "@/components/plan/PlanWrite"),
        redirect: "/plan/write/map",
        children: [
          {
            path: "map",
            name: "planwritemap",
            component: () =>
              import(
                /* webpackChunkName: "planwrite" */ "@/components/plan/write/PlanWriteMap"
              ),
          },
          {
            path: "memo",
            name: "planwritememo",
            component: () =>
              import(
                /* webpackChunkName: "planwrite" */ "@/components/plan/write/PlanWriteMemo"
              ),
          },
          {
            path: "member",
            name: "planwritemember",
            component: () =>
              import(
                /* webpackChunkName: "planwrite" */ "@/components/plan/write/PlanWriteMember"
              ),
          },
        ],
      },
      {
        // write와 같은 포멧을 사용하기 때문에..
        // 교수님 것처럼 같은 포멧으로 연결되게 수정 필요;;
        path: "modify",
        name: "planmodify",
        component: () =>
          import(/* webpackChunkName: "plan" */ "@/components/plan/PlanModify"),
      },
      {
        path: "delete",
        name: "plandelete",
        component: () =>
          import(/* webpackChunkName: "plan" */ "@/components/plan/PlanDelete"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPageView,
  },
  //
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
