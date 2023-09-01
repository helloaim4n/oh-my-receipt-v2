import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3xtbCczmeDvErZfkvWwyuI_GuFl3TC4U",
  authDomain: "oh-my-receipt-75edb.firebaseapp.com",
  projectId: "oh-my-receipt-75edb",
  storageBucket: "oh-my-receipt-75edb.appspot.com",
  messagingSenderId: "281427518131",
  appId: "1:281427518131:web:55e0e2791cb250a50ec6c6",
  measurementId: "G-M4733BZ507",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
