// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5tzMkRDxxN2Jng8uCbWMUnrfIRey9Ak",
    authDomain: "bethlen-garde.firebaseapp.com",
    databaseURL: "https://bethlen-garde-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bethlen-garde",
    storageBucket: "bethlen-garde.appspot.com",
    messagingSenderId: "243205233881",
    appId: "1:243205233881:web:e23d7aa6b5cb07e98db2c8",
    measurementId: "G-S63FNZ35YP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();