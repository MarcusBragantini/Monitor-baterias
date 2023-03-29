import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCxi3PqG8YlnPws_su1rbQR3zTeuWnrx50",
  authDomain: "my-bat-a8f11.firebaseapp.com",
  databaseURL: "https://my-bat-a8f11-default-rtdb.firebaseio.com",
  projectId: "my-bat-a8f11",
  storageBucket: "my-bat-a8f11.appspot.com",
  messagingSenderId: "546403526177",
  appId: "1:546403526177:web:e73f5ddd649442f972e560",
  measurementId: "G-F81ZX1ZRGC",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
