import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDK-sMbeIY-vT19X_tM8vhDZiU6bHvZjdU",
  authDomain: "crwn-db-361df.firebaseapp.com",
  databaseURL: "https://crwn-db-361df.firebaseio.com",
  projectId: "crwn-db-361df",
  storageBucket: "crwn-db-361df.appspot.com",
  messagingSenderId: "963555678710",
  appId: "1:963555678710:web:0ef48a3622474d7dddcfd7",
  measurementId: "G-LGVLF0VGPY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
