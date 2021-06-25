import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI2Qp2BbTJJH6OT01iuxmkwXf-jX4wb-c",
  authDomain: "whatsapp-2-e9bdf.firebaseapp.com",
  projectId: "whatsapp-2-e9bdf",
  storageBucket: "whatsapp-2-e9bdf.appspot.com",
  messagingSenderId: "464641837333",
  appId: "1:464641837333:web:4a3f4449138590d0c6411c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
