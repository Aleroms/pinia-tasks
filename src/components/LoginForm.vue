<template>
  <VeeForm class="form-container">
    <VeeField name="email" type="email" placeholder="Email" class="v-input" />
    <ErrorMessage name="email" />
    <VeeField
      name="password"
      type="password"
      placeholder="Password"
      class="v-input"
    />
    <ErrorMessage name="password" />
    <button @click.prevent="login" class="login-btn">Login</button>
  </VeeForm>

  <p>
    Don't have an account? <span @click="formStore.toggleForm">Sign Up</span>
  </p>
  <hr class="hr-text" data-content="or" />
  <div class="login-social">
    <button @click.prevent="login" class="login-btn">
      Login with Facebook
    </button>
    <button @click.prevent="login" class="login-btn">Login with Google</button>
  </div>
</template>

<script>
import { useFormStore } from "@/stores/FormStore.js";
export default {
  name: "LoginForm",
  setup() {
    const formStore = useFormStore();
    const login = () => {
      console.log("submitting login form...");
    };
    const switchForm = () => {
      console.log("switching form...");
    };
    return { login, switchForm, formStore };
  },
};
</script>

<style scoped>
.form-container {
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
}
.v-input {
  border: 1px solid #555;
  margin-bottom: 15px;
  width: 96%;
  max-width: 600px;
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
.login-social {
  padding: 1rem;
}
</style>
