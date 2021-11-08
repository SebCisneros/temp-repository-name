import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBo3Q8uwPv6jcb84QKfpxUVrTqWdPrNKGU",
  authDomain: "auth-swecse442.firebaseapp.com",
  projectId: "auth-swecse442",
  storageBucket: "auth-swecse442.appspot.com",
  messagingSenderId: "683556880206",
  appId: "1:683556880206:web:87fe54e8abba53166be81f",
  measurementId: "G-Z4JGNV7PH0"
});

export const auth = app.auth()
export default app