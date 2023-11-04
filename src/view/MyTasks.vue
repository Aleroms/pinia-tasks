<template>
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
    <div class="task-list interactable" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <draggable v-model="taskStore.tasks" item-key="id">
        <template #item="{ element: tasks }">
          <TaskDetails :task="tasks" />
        </template>
      </draggable>
    </div>

    <!-- looping over filtered favorites in taskStore() -->
    <!-- does not render if favorite is not selected  -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import { useTaskStore } from "@/stores/TaskStore.js";
import { ref, watch } from "vue";
import draggable from "vuedraggable";
export default {
  name: "MyTasks",
  components: { TaskDetails, TaskForm, draggable },
  setup() {
    //returns stores
    const taskStore = useTaskStore();
    const filter = ref("all");

    watch(
      () => taskStore.tasks,
      () => {
        taskStore.updateTasks();
        console.log("tasks has been changed");
      }
    );

    return { taskStore, filter };
  },
};
</script>

<style scoped>
.interactable {
  cursor: pointer;
}
</style>
