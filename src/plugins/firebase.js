import { initializeApp } from "firebase/app";
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

export {
  auth,
  git,
  fb,
  google,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  deleteUser,
};
