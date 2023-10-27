<template>
  <div class="no-page-container">
    <h3>404</h3>
    <h2>Page Not Found</h2>
    <button @click="goHome">Home</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "PageNotFound",
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push({ name: "Home" });
    };

    return { goHome };
  },
};
</script>

<style scoped>
.no-page-container {
  margin: 10px auto;
  text-align: center;
}
.no-page-container h3 {
  font-size: 48px;
}
</style>
