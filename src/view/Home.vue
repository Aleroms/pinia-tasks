<template>
  <div class="banner"></div>
  <div class="authentication">
    <h2 class="auth-title">{{ formStore.name }}</h2>
    <!-- <button @click="formStore.toggleForm">toggle</button> -->
    <LoginForm v-if="formStore.name === 'Login'" />
    <RegisterForm v-else />
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import { useFormStore } from "../stores/FormStore";

export default {
  name: "HomePage",
  components: { LoginForm, RegisterForm },
  setup() {
    const formStore = useFormStore();

    return { formStore };
  },
};
</script>

<style scoped>
.banner {
  background-color: #e7e7e7;
  height: 84px;
}
</style>
