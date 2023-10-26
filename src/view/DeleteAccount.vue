<template>
  <div class="delete-acct-container">
    <img
      src="/dont-delete-acct-pls.png"
      alt="dont delete account pls"
      aria-hidden="true"
      class="delete-img"
    />
    <h2>are you sure you want to delete your account?</h2>
    <div class="delete-btn-container">
      <button>No Jk</button>
      <button>Yes Pls</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/UserStore";
export default {
  name: "DeleteAccount",
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    return { userStore };
  },
};
</script>

<style scoped>
.delete-img {
  max-width: 100px;
  max-height: 100px;
  margin: 1rem;
}
.delete-acct-container {
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
  margin: 10px auto;
}
.delete-btn-container :first-child {
  margin-right: 15px;
}
</style>
