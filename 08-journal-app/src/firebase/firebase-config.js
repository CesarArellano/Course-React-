import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACIC19Ibdj1A-yq_4fxlC_BU6dG4zwgOY",
  authDomain: "react-app-cursos-eb1a3.firebaseapp.com",
  projectId: "react-app-cursos-eb1a3",
  storageBucket: "react-app-cursos-eb1a3.appspot.com",
  messagingSenderId: "555392882435",
  appId: "1:555392882435:web:03d75d642de24e425afb36",
  measurementId: "G-HMFZEMSLHV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}