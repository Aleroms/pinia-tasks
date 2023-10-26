<template>
  <div class="reg-alert" v-if="reg_alert_display">{{ reg_alert_msg }}</div>
  <VeeForm
    class="form-container"
    :validation-schema="registerSchema"
    @submit="register"
  >
    <VeeField name="email" type="email" placeholder="Email" class="v-input" />
    <ErrorMessage name="email" class="error-message" />
    <VeeField
      name="password"
      type="password"
      placeholder="Create Password"
      class="v-input"
    />
    <ErrorMessage name="password" class="error-message" />
    <VeeField
      name="confirmed"
      type="password"
      placeholder="Confirm Password"
      class="v-input"
    />
    <ErrorMessage name="confirmed" class="error-message" />
    <button type="submit" class="login-btn" :disabled="reg_in_submission">
      Register
    </button>
  </VeeForm>
  <p>
    Already have an account? <span @click="formStore.toggleForm">Log In</span>
  </p>
  <hr class="hr-text" data-content="or" />
  <LoginSocialForm />
</template>

<script>
import { useFormStore } from "../stores/FormStore";
import { useUserStore } from "../stores/UserStore";

import { useRouter } from "vue-router";
import { ref } from "vue";

import { ErrorMessage } from "vee-validate";
import LoginSocialForm from "./LoginSocialForm.vue";

export default {
  name: "RegisterForm",
  components: { LoginSocialForm },
  setup() {
    //pinia
    const formStore = useFormStore();
    const userStore = useUserStore();

    //router
    const router = useRouter();

    //validation
    const registerSchema = {
      email: "required|min:3|max:100|email",
      password: "required|min:6|max:100",
      confirmed: "confirmed:@password",
    };

    //register
    const reg_alert_display = ref(false);
    const reg_alert_msg = ref("registering...");
    const reg_in_submission = ref(false);

    const register = async (values) => {
      reg_alert_display.value = true;
      reg_alert_msg.value = "Please wait, your account is being created...";
      reg_in_submission.value = true;

      try {
        await userStore.register(values);
      } catch (error) {
        //Handling Firebase errors
        if (error.code === "auth/email-already-in-use") {
          reg_alert_msg.value = "Email already in use.";
        } else {
          reg_alert_msg.value = "Error has occurred...";
        }
        console.log(error);
        reg_in_submission.value = false;
        return;
      }

      reg_alert_msg.value = "Successfully Signed Up! Logging In...";
      reg_in_submission.value = false;
      router.push("/mytasks");
    };

    return {
      formStore,
      register,
      registerSchema,
      reg_alert_display,
      reg_alert_msg,
      reg_in_submission,
    };
  },
  components: { ErrorMessage, LoginSocialForm },
};
</script>

<style scoped></style>
