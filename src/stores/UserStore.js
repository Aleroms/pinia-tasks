import { defineStore } from "pinia";
import {
  deleteUserAccount,
  signInWithProvider,
  logoutUser,
  signInUserWithEmailAndPassword,
  registerUser,
} from "@/plugins/firebase.js";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await registerUser(values);
      this.userLoggedIn = true;
    },
    async login(values) {
      await signInUserWithEmailAndPassword(values);
      this.userLoggedIn = true;
    },
    async logout() {
      await logoutUser();
      this.userLoggedIn = false;
    },
    async signInWithGitHub() {
      await signInWithProvider("GitHub");
      this.userLoggedIn = true;
    },
    async signInWithGoogle() {
      await signInWithProvider("Google");
      this.userLoggedIn = true;
    },
    async deleteAccount() {
      await deleteUserAccount();
      this.userLoggedIn = false;
    },
  },
});
