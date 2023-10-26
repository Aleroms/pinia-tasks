<template>
  <!-- heading -->
  <header>
    <img src="./assets/Pinialogo.svg" alt="pinia" @click="goHome" />
    <h1 @click="goHome">Pinia Tasks</h1>
  </header>
  <RouterView></RouterView>
</template>

<script>
import router from "./router";
import { useUserStore } from "./stores/UserStore";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const goHome = () => {
      if (userStore.userLoggedIn) {
        userStore.logout();
      }
      router.push({ name: "Home" });
    };

    return { goHome };
  },
};
</script>
