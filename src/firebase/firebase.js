import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDooEkBcTIBEsXUDoqcxK9bm4YiXqfaPE",
    authDomain: "form-27dd4.firebaseapp.com",
    databaseURL: "https://form-27dd4.firebaseio.com",
    projectId: "form-27dd4",
    storageBucket: "form-27dd4.appspot.com",
    messagingSenderId: "469989864414",
    appId: "1:469989864414:web:1f8a5cbb583120d362a34f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  export default firebaseConfig