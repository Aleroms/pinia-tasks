import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import MyTasks from "@/view/MyTasks.vue";
import PrivacyPolicy from "@/view/PrivacyPolicy.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    alias: "/home",
    component: Home,
  },
  {
    name: "Tasks",
    path: "/mytasks",
    component: MyTasks,
  },
  {
    name: "PrivacyPolicy",
    path: "/privacypolicy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
