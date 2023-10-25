import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    name: "Login",
  }),
  actions: {
    toggleForm() {
      this.name = this.name === "Login" ? "Register" : "Login";
    },
  },
});
