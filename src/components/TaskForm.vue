<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
//9:43
import { useTaskStore } from "@/stores/taskStore";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();
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

    return { handleSubmit, newTask };
  },
};
</script>
