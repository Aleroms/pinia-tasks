<template>
  <div class="authentication">
    <h2 class="auth-title">{{ formStore.name }}</h2>
    <LoginForm v-if="formStore.name === 'Login'" />
    <RegisterForm v-else />
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import { useFormStore } from "../stores/FormStore";
import { useUserStore } from "../stores/UserStore";

export default {
  name: "HomePage",
  components: { LoginForm, RegisterForm },
  setup() {
    const formStore = useFormStore();
    const userStore = useUserStore();

    return { formStore };
  },
};
</script>

<style scoped>

.authentication {
  padding: 0 1rem;
}
</style>
