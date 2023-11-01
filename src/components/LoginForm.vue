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
  <LoginSocialForm @login="handleSocialLogin" />
</template>

<script>
import { useFormStore } from "@/stores/FormStore.js";
import { useUserStore } from "../stores/UserStore";
import { useRouter } from "vue-router";
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

    //router
    const router = useRouter();

    //login display variables & methods
    const login_alert_display = ref(false);
    const login_alert_msg = ref("logging in...");
    const login_in_submission = ref(false);

    //login helper function
    const startLogin = () => {
      login_alert_display.value = true;
      login_alert_msg.value = "Please wait, you are being logged in...";
      login_in_submission.value = true;
    };
    const loginSuccess = () => {
      login_alert_msg.value = "Logging In...";
      formStore.resetFormState();
      router.push("/mytasks");
    };
    const handleErrors = (error) => {
      //Handle Firebase errors
      if (error.code === "auth/invalid-login-credentials") {
        login_alert_msg.value = "Invalid login credentials...";
      } else {
        login_alert_msg.value = "An error has occured...";
      }
      console.log(error);
    };

    //login with provider
    const handleSocialLogin = async (provider) => {
      startLogin();

      try {
        if (provider === "Google") {
          await userStore.signInWithGoogle();
        } else if (provider === "GitHub") {
          await userStore.signInWithGitHub();
        }
      } catch (error) {
        handleErrors(error);
        return;
      }
      loginSuccess();
    };

    //log in with email and password
    const login = async (values) => {
      startLogin();

      try {
        await userStore.login(values);
      } catch (error) {
        handleErrors(error);
        return;
      }
      loginSuccess();
    };

    return {
      login,
      loginSchema,
      login_alert_display,
      login_alert_msg,
      formStore,
      handleSocialLogin,
    };
  },
};
</script>

<style scoped></style>
