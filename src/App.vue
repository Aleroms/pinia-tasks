<template>
  <!-- heading -->
  <header>
    <img src="./assets/Pinialogo.svg" alt="pinia" />
    <h1>Pinia Tasks</h1>
  </header>
  <main>
    <!-- new task form  -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">all tasks</button
      ><button @click="filter = 'favs'">favorites tasks</button>
    </nav>

    <!-- task list  -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- looping over filtered favorites in taskStore() -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
  <RouterView></RouterView>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { useTaskStore } from "@/stores/taskStore.js";
import { ref } from "vue";
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    //returns stores
    const taskStore = useTaskStore();
    const filter = ref("all");

    return { taskStore, filter };
  },
};
</script>
