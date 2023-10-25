<template>
  <div class="login-social">
    <button @click.prevent="login" class="facebook-btn btn">
      Login with Facebook
    </button>
    <button @click.prevent="login" class="google-btn btn">
      Login with Google
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginSocialForm",
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
.login-social {
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
