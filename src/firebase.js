// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBWMyYwLb38cjFd5JgXB2U9jZVNLoNpaOo",
    authDomain: "slack-clone-5406f.firebaseapp.com",
    projectId: "slack-clone-5406f",
    storageBucket: "slack-clone-5406f.appspot.com",
    messagingSenderId: "457533552318",
    appId: "1:457533552318:web:95d7f91d015b7a784050ef",
    measurementId: "G-8WD32ZVKF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};