<template>
  <div class="login-alert" v-if="login_alert_display">
    {{ login_alert_msg }}
  </div>
  <VeeForm
    class="form-container"
    :validation-schema="loginSchema"
    @submit="login"
  >
    <VeeField name="email" type="email" placeholder="Email" class="v-input" />
    <ErrorMessage name="email" class="error-message" />
    <VeeField
      name="password"
      type="password"
      placeholder="Password"
      class="v-input"
    />
    <ErrorMessage name="password" class="error-message" />
    <button type="submit" class="login-btn">Login</button>
  </VeeForm>

  <p>
    Don't have an account? <span @click="formStore.toggleForm">Sign Up</span>
  </p>
  <hr class="hr-text" data-content="or" />
  <LoginSocialForm />
</template>

<script>
import { useFormStore } from "@/stores/FormStore.js";
import { useUserStore } from "../stores/UserStore";
import { ref } from "vue";
import LoginSocialForm from "./LoginSocialForm.vue";
export default {
  name: "LoginForm",
  components: { LoginSocialForm },
  setup() {
    //pinia
    const formStore = useFormStore();
    const userStore = useUserStore();

    //validation
    const loginSchema = {
      email: "required|min:3|max:100|email",
      password: "required|min:6|max:100",
    };

    //login
    const login_alert_display = ref(false);
    const login_alert_msg = ref("logging in...");
    const login_in_submission = ref(false);
    const login = (values) => {
      console.log(values);
      login_alert_msg.value = "Please wait, you are being logged in...";
      login_alert_display.value = true;
      login_in_submission.value = true;

      try {
        userStore.login(values);
      } catch (error) {
        login_alert_msg.value = "Error has occured...";
        console.log(error);
        return
      }
      login_alert_msg.value = "Logging In..."
      //move route path here
    };

    return {
      login,
      loginSchema,
      login_alert_display,
      login_alert_msg,
      formStore,
    };
  },
};
</script>

<style scoped></style>
