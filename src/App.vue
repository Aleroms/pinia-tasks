<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/Pinialogo.svg" alt="pinia" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list  -->
    <div class="task-list" v-for="task in taskStore.tasks">
      <TaskDetails :task="task" />
    </div>
  </main>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import { useTaskStore } from "@/stores/taskStore.js";
export default {
  components: { TaskDetails },
  setup() {
    //returns stores
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
