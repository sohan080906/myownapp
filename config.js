import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCmXalEkrFMfZCaSvkcHLw40D9nZfIRXvQ",
    authDomain: "my-own-app-a61c4.firebaseapp.com",
    databaseURL: "https://my-own-app-a61c4.firebaseio.com",
    projectId: "my-own-app-a61c4",
    storageBucket: "my-own-app-a61c4.appspot.com",
    messagingSenderId: "204358187896",
    appId: "1:204358187896:web:74dc3e722e526798a1a68d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
