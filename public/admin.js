const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCIGp60bXHkC7ssMBFX5sAtBnD6vbIpfWU",
    authDomain: "personalsite-35a38.firebaseapp.com",
    databaseURL: "https://personalsite-35a38.firebaseio.com",
    projectId: "personalsite-35a38",
    storageBucket: "personalsite-35a38.appspot.com",
    messagingSenderId: "933460557734",
    appId: "1:933460557734:web:714421b5ce76c1ad9bd967",
    measurementId: "G-3BHK9Q0JWL"
  };
  
  firebase.initializeApp(config);

  const email = document.querySelector('.email').value
  const password = document.querySelector('.password').value

  email.addEventListener("submit", console.log(email))

  
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(`Error ${errorCode}: ${errorMessage}`)
    // ...
  });