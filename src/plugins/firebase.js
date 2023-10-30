import { initializeApp } from "firebase/app";
import { useUserStore } from "../stores/UserStore";
import { useTaskStore } from "../stores/TaskStore";
import {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  deleteUser,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDdzh0jZQwMF6PkoX3MwhfXjX_c-3zymg",
  authDomain: "todo-tasks-adf3b.firebaseapp.com",
  projectId: "todo-tasks-adf3b",
  storageBucket: "todo-tasks-adf3b.appspot.com",
  messagingSenderId: "987590738935",
  appId: "1:987590738935:web:c91d3bd3492f67949c24f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fb = new FacebookAuthProvider();
const git = new GithubAuthProvider();
const google = new GoogleAuthProvider();
const db = getFirestore(app);

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
//deletes authenticated user's data before removing account
const deleteUserAccount = async () => {
  const userStore = useUserStore();
  if (userStore.userLoggedIn) {
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
  }
};

const signInWithProvider = async (provider) => {
  let currProvider = "";
  switch (provider) {
    case "Google":
      currProvider = google;
      break;
    case "GitHub":
      currProvider = git;
      break;
    default:
      currProvider = null;
      break;
  }

  await signInWithPopup(auth, currProvider);
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
};

const signInUserWithEmailAndPassword = async (values) => {
  await signInWithEmailAndPassword(auth, values.email, values.password);

  //querying for current user's data
  const taskStore = useTaskStore();
  const q = query(
    collection(db, "tasks"),
    where("userID", "==", auth.currentUser.uid)
  );

  //assigning valid query to tasks
  const querySnapshot = await getDocs(q);
  taskStore.tasks = querySnapshot.docs[0].data().tasks;
};

const registerUser = async (values) => {
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
};
export {
  auth,
  git,
  fb,
  google,
  db,
  deleteUserAccount,
  signInWithProvider,
  logoutUser,
  signInUserWithEmailAndPassword,
  registerUser,
};
