import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm--_-QuMY4-iHyeYr9IjIyZ5E3xn-kz8",
  authDomain: "vanwowas-f6f3b.firebaseapp.com",
  projectId: "vanwowas-f6f3b",
  storageBucket: "vanwowas-f6f3b.appspot.com",
  appId: "1:118678565121:web:8dccdb2ca56a10fce52b00"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
