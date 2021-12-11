// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFrBLDVGtwStyLjJZKCnD6QO-gz2l3T00",
  authDomain: "knightbites-auth.firebaseapp.com",
  projectId: "knightbites-auth",
  storageBucket: "knightbites-auth.appspot.com",
  messagingSenderId: "68674244376",
  appId: "1:68674244376:web:365ff8a4bafb747990d86d",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
