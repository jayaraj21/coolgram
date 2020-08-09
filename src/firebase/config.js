import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBs4UzOhdswU5aXHRl1R8iz-Oq4Hne0ZRc",
    authDomain: "coolgram-9cea0.firebaseapp.com",
    databaseURL: "https://coolgram-9cea0.firebaseio.com",
    projectId: "coolgram-9cea0",
    storageBucket: "coolgram-9cea0.appspot.com",
    messagingSenderId: "11989862068",
    appId: "1:11989862068:web:386f0c1eed25d76009b9e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};