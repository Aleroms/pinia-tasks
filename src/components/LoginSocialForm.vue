<template>
  <div class="login-social">
    <button @click.prevent="loginWithGitHub" class="github-btn btn">
      Login with GitHub
    </button>
    <button @click.prevent="loginWithGoogle" class="google-btn btn">
      Login with Google
    </button>
    <RouterLink to="/privacypolicy">Privacy Policy</RouterLink>
  </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { useRouter } from "vue-router";
export default {
  name: "LoginSocialForm",
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const loginWithFacebook = async () => {
      try {
        await userStore.signInWithFacebook();
      } catch (error) {
        console.log(error);
      }

      router.push("/mytasks");
    };

    const loginWithGitHub = async () => {
      try {
        await userStore.signInWithGitHub();
      } catch (error) {
        console.log(error);
      }

      router.push("/mytasks");
    };

    const loginWithGoogle = async () => {
      try {
        await userStore.signInWithGoogle();
      } catch (error) {
        console.log(error);
      }

      router.push("/mytasks");
    };

    return { loginWithFacebook, loginWithGitHub, loginWithGoogle };
  },
};
</script>

<style scoped>
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
}
.github-btn {
  background-color: #2b3034;
  color: #fff;
}
.login-social {
  display: flex;
  margin: 1rem;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
