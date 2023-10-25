<template>
  <div class="banner"></div>
  <div class="authentication">
    <h2 class="auth-title">{{ form }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomePage",
  setup() {
    const form = ref("Login");

    return { form };
  },
};
</script>

<style scoped>
.banner {
  background-color: #e7e7e7;
  height: 84px;
}
</style>
