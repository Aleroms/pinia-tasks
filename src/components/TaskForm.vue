<template>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit" class="filter-form">
      <input type="text" placeholder="I need to..." v-model="newTask" />
      <button>Add</button>
    </form>
    <button class="logout" @click="logout">Logout</button>
    <button class="delete-account logout" @click="deleteAcct">
      Delete Account
    </button>
  </div>
</template>

<script>
//9:43
import { useTaskStore } from "@/stores/TaskStore";
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();
    const userStore = useUserStore();
    const router = useRouter();

    const logout = () => {
      userStore.logout();
      router.push({ name: "Home" });
    };

    const deleteAcct = () => {
      router.push({ name: "DeleteAccount" });
    };

    const newTask = ref("");
    const handleSubmit = () => {
      //value is required to use var
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
      }
      //reset newTask to empty string
      newTask.value = "";
    };

    return { handleSubmit, newTask, logout, deleteAcct };
  },
};
</script>
