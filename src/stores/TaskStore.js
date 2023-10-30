import { defineStore } from "pinia";
import { updateUserTask } from "@/plugins/firebase.js";
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      //reduce returns a value
      return this.tasks.reduce((prev, cur) => {
        return cur.isFav ? prev + 1 : prev;
      }, 0);
      //0 is initial value for p
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async addTask(task) {
      this.tasks.push(task);
      //this is where we gotta do firebase stuff right here
      try {
        await updateUserTask(this.tasks);
      } catch (error) {
        console.log(error, "could not addTask");
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      try {
        await updateUserTask(this.tasks);
      } catch (error) {
        console.log(error, "could not update tasks");
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
      try {
        await updateUserTask(this.tasks);
      } catch (error) {
        console.log(error, "could not toggle favorite");
      }
    },
  },
});
//getters can manipulate data before returning the values
//returns new values and does not manipulate state

//actions update the data
