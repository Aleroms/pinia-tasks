import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    alias: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
