
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