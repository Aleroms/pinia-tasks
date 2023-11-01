<template>
  <div class="login-social">
    <button @click.prevent="loginWithGitHub" class="github-btn btn">
      <i class="fa-brands fa-github" style="color: #fff"></i> Login with GitHub
    </button>
    <button @click.prevent="loginWithGoogle" class="google-btn btn">
      <img src="/google.svg" alt="google icon" class="google-icon" /> Login with
      Google
    </button>
    <RouterLink to="/privacypolicy">Privacy Policy</RouterLink>
  </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { useFormStore } from "../stores/FormStore";
import { useRouter } from "vue-router";
export default {
  name: "LoginSocialForm",
  emits: ["login"],
  setup(_, { emit }) {
    const userStore = useUserStore();
    const formStore = useFormStore();
    const router = useRouter();

    const loginWithGitHub = async () => {
      // try {
      //   await userStore.signInWithGitHub();
      // } catch (error) {
      //   console.log(error);
      // }
      emit("login", "GitHub");

      formStore.resetFormState();
      router.push({ name: "Tasks" });
    };

    const loginWithGoogle = async () => {
      // try {
      //   await userStore.signInWithGoogle();
      // } catch (error) {
      //   console.log(error);
      // }
      emit("login", "Google");
      formStore.resetFormState();
      router.push({ name: "Tasks" });
    };

    return { loginWithGitHub, loginWithGoogle };
  },
};
</script>

<style scoped>
.google-icon {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.btn {
  width: 100%;
  margin-bottom: 15px;
}
.facebook-btn {
  background-color: #3b5998;
  color: #fff;
}
.google-btn {
  background-color: #fff;
  border: 1px solid #555;

  transition: background-color 0.3s ease;
}
.google-btn:active {
  background-color: #f4f4f4;
}

.github-btn {
  background-color: #2b3034;
  color: #fff;

  transition: background-color 0.3s ease;
}
.github-btn:active {
  background-color: #181b1d;
}
.login-social {
  display: flex;
  margin: 1rem;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-social i {
  margin-right: 10px;
}
</style>
