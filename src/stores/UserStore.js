import { defineStore } from "pinia";
import { collection, addDoc } from "firebase/firestore";
import {
  auth,
  fb,
  git,
  db,
  google,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "@/plugins/firebase.js";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      //register
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      //create collection tasks w/ default vals
      const docRef = await addDoc(collection(db, "tasks"), {
        tasks: [
          { id: 1, title: "buy some milk", isFav: false },
          { id: 2, title: "play game", isFav: true },
        ],
      });
      console.log("Document written ID:", docRef.id);

      this.userLoggedIn = true;
    },
    async login(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      this.userLoggedIn = true;
    },
    async logout() {
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
      }

      this.userLoggedIn = false;
    },
    async signInWithFacebook() {
      await signInWithPopup(auth, fb);
      this.userLoggedIn = true;
    },
    async signInWithGitHub() {
      await signInWithPopup(auth, git);
      this.userLoggedIn = true;
    },
    async signInWithGoogle() {
      await signInWithPopup(auth, google);
      this.userLoggedIn = true;
    },
    async deleteAccount() {
      if (this.userLoggedIn) {
        const user = auth.currentUser;
        await deleteUser(user);
        this.userLoggedIn = false;
      }
    },
  },
});
