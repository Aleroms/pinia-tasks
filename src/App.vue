<template>
  <!-- heading -->
  <header>
    <img src="./assets/Pinialogo.svg" alt="pinia" @click="goHome" />
    <h1 @click="goHome">Pinia Tasks</h1>
  </header>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <footer>Designed by <RouterLink to="/">Santiago Morales</RouterLink></footer>
</template>
<style>
/* route transitions  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
import router from "./router";
import { useUserStore } from "./stores/UserStore";
import { useFormStore } from "./stores/FormStore";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const userStore = useUserStore();
    const formStore = useFormStore();
    const router = useRouter();

    const goHome = () => {
      if (userStore.userLoggedIn) {
        userStore.logout();
      }
      formStore.resetFormState();
      router.push({ name: "Home" });
    };

    return { goHome };
  },
};
</script>
