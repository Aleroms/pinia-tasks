<template>
  <VeeForm class="form-container">
    <VeeField name="email" type="email" placeholder="Email" class="v-input" />
    <ErrorMessage name="email" />
    <VeeField
      name="password"
      type="password"
      placeholder="Create Password"
      class="v-input"
    />
    <ErrorMessage name="password" />
    <VeeField
      name="confirm"
      type="confirm"
      placeholder="Confirm Password"
      class="v-input"
    />
    <ErrorMessage name="confirm" />
    <button @click.prevent="register" class="login-btn">Register</button>
  </VeeForm>
  <p>
    Already have an account? <span @click="formStore.toggleForm">Log In</span>
  </p>
  <hr class="hr-text" data-content="or" />
  <LoginSocialForm />
</template>

<script>
import { useFormStore } from "../stores/FormStore";
import { ErrorMessage } from "vee-validate";
import LoginSocialForm from "./LoginSocialForm.vue";

export default {
  name: "RegisterForm",
  components: { LoginSocialForm },
  setup() {
    const formStore = useFormStore();
    const register = () => {
      console.log("submitting register form...");
    };
    const switchForm = () => {
      console.log("switching form...");
    };
    const login = () => {
      console.log("logging in...");
    };
    return { formStore, register, switchForm, login };
  },
  components: { ErrorMessage, LoginSocialForm },
};
</script>

<style scoped>
.form-container {
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.v-input {
  border: 1px solid #555;
  margin-bottom: 15px;
  width: 96%;
}
.login-btn {
  width: 100%;
  margin-bottom: 15px;
}
span {
  font-weight: 700;
  color: #ffd859;
  cursor: pointer;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  width: 90%;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: "";
    background: gray;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    color: #818078;
    background-color: #fcfcfa;
  }
}
</style>
