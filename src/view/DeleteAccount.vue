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
      <button @click="goBack">No Jk</button>
      <button @click="deleteAccount">Yes Pls</button>
    </div>
    <p v-if="del_alert_display">{{ del_alert_msg }}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/UserStore";
import { ref } from "vue";
export default {
  name: "DeleteAccount",
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const goBack = () => {
      router.go(-1);
    };

    const del_alert_msg = ref("deleting...");
    const del_in_submission = ref(false);
    const del_alert_display = ref(false);
    const deleteAccount = async () => {
      del_in_submission.value = true;
      del_alert_display.value = true;
      try {
        await userStore.deleteAccount();
      } catch (error) {
        console.log(error);
        del_alert_msg.value = "no can delete : ,)";
        return;
      }
      del_in_submission.value = false;
      del_alert_msg.value = "account deleted : ,(";
      router.push({ name: "Home" });
    };
    return {
      userStore,
      goBack,
      del_alert_msg,
      del_in_submission,
      del_alert_display,
      deleteAccount,
    };
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
