import { defineStore } from "pinia";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@/plugins/firebase.js";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      console.log(values);
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      this.userLoggedIn = true;
    },
    async login(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      this.userLoggedIn = true;
    },
  },
});
