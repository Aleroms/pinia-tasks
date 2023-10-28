import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useTaskStore } from "./TaskStore";
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

      //default values
      const defaultTask = {
        tasks: [
          { id: 1, title: "buy some milk", isFav: false },
          { id: 2, title: "play game", isFav: true },
        ],
        userID: userCred.user.uid,
      };

      //create collection tasks w/ default vals
      const docRef = await addDoc(collection(db, "tasks"), defaultTask);

      //taskStore
      const taskStore = useTaskStore();
      taskStore.tasks = defaultTask.tasks;
      // console.log(taskStore.tasks);

      this.userLoggedIn = true;
    },
    async login(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password);

      const taskStore = useTaskStore();
      const q = query(
        collection(db, "tasks"),
        where("userID", "==", auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      taskStore.tasks = querySnapshot.docs[0].data().tasks;

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

      const taskStore = useTaskStore();
      const q = query(
        collection(db, "tasks"),
        where("userID", "==", auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        taskStore.tasks = querySnapshot.docs[0].data().tasks;
      } else {
        //default values
        const defaultTask = {
          tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 2, title: "play game", isFav: true },
          ],
          userID: auth.currentUser.uid,
        };

        //create collection tasks w/ default vals
        const docRef = await addDoc(collection(db, "tasks"), defaultTask);
        taskStore.tasks = defaultTask.tasks;
      }
      this.userLoggedIn = true;
    },
    async signInWithGoogle() {
      await signInWithPopup(auth, google);

      const taskStore = useTaskStore();
      const q = query(
        collection(db, "tasks"),
        where("userID", "==", auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        taskStore.tasks = querySnapshot.docs[0].data().tasks;
      } else {
        //default values
        const defaultTask = {
          tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 2, title: "play game", isFav: true },
          ],
          userID: auth.currentUser.uid,
        };

        //create collection tasks w/ default vals
        const docRef = await addDoc(collection(db, "tasks"), defaultTask);
        taskStore.tasks = defaultTask.tasks;
      }
      this.userLoggedIn = true;
    },
    async deleteAccount() {
      if (this.userLoggedIn) {
        const user = auth.currentUser;
        const q = query(
          collection(db, "tasks"),
          where("userID", "==", auth.currentUser.uid)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        await deleteUser(user);
        this.userLoggedIn = false;
      }
    },
  },
});
