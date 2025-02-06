import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: () => import("../views/login/index.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/register/index.vue"),
    },
    {
      path: "/",
      component: () => import("../views/home/index.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("../views/workBench/index.vue"),
        },
        {
          path: "forum",
          children: [
            {
              path: "",
              component: () => import("../views/forum/index.vue"),
            },
            {
              path: "publish",
              component: () =>
                import("../views/forum/components/publishForum.vue"),
            },
            {
              path: "publish/:id",
              component: () =>
                import("../views/forum/components/publishForum.vue"),
            },
            {
              path: ":id",
              component: () =>
                import("../views/forum/components/viewForum.vue"),
            },
          ],
        },
        {
          path: "ai",
          component: () => import("../views/AI/index.vue"),
        },
        {
          path: "message",
          component: () => import("../views/message/index.vue"),
        },
        {
          path: "user",
          component: () => import("../views/user/index.vue"),
        },
      ],
    },
  ],
});

export default router;
