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

const firebaseConfigTesting = {
  apiKey: "AIzaSyBVe0OMJ_Z6B5yE0mc0RI8SX8oQGWQ049g",
  authDomain: "flutter-varios-1f0b2.firebaseapp.com",
  databaseURL: "https://flutter-varios-1f0b2-default-rtdb.firebaseio.com",
  projectId: "flutter-varios-1f0b2",
  storageBucket: "flutter-varios-1f0b2.appspot.com",
  messagingSenderId: "482875858274",
  appId: "1:482875858274:web:1c107aa35b5b55fa29a03b",
  measurementId: "G-02E0L9PEYV"
};

if(process.env.NODE_ENV === 'test' ) {
  // testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}