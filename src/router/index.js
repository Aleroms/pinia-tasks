import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/UserStore.js";
import { auth } from "@/plugins/firebase.js";

import Home from "@/view/Home.vue";
import MyTasks from "@/view/MyTasks.vue";
import PrivacyPolicy from "@/view/PrivacyPolicy.vue";
import DeleteAccount from "@/view/DeleteAccount.vue";
import PageNotFound from "@/view/PageNotFound.vue";
import About from "@/view/About.vue";

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
    meta: { requiresAuth: true },
  },
  {
    name: "PrivacyPolicy",
    path: "/privacypolicy",
    component: PrivacyPolicy,
  },
  {
    name: "DeleteAccount",
    path: "/deleteaccount",
    component: DeleteAccount,
    meta: { requiresAuth: true },
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "PageNotFound",
    path: "/:catchAll(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth) {
    const userStore = useUserStore();
    if (!userStore.userLoggedIn) {
      return { name: "Home" };
    }
  }
});
export default router;
