import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: import("@/views/notFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
