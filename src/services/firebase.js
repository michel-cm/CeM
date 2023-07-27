import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_rBlkE3-NyvV6eAVNdZSZG0DVJAJtAik",
  authDomain: "cem-pf.firebaseapp.com",
  projectId: "cem-pf",
  storageBucket: "cem-pf.appspot.com",
  messagingSenderId: "542989251560",
  appId: "1:542989251560:web:1801382a633abd8f85ea5d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
