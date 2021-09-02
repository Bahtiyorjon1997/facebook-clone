import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk1APnJBLZap7mMVakRtK4EmerXIOKDf8",
  authDomain: "fb-clone-7d56d.firebaseapp.com",
  projectId: "fb-clone-7d56d",
  storageBucket: "fb-clone-7d56d.appspot.com",
  messagingSenderId: "997481480019",
  appId: "1:997481480019:web:959bcec5b2edd52e50eba6",
  measurementId: "G-6C9TTYHQJV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
