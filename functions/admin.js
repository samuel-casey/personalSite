function handleGoogleLogin() {
  console.log('Login w/ Google button pressed.')
  
  var provider = new firebase.auth.GoogleAuthProvider();
  var successMsg = "<br\><h3 style='color: green;'>Login successful</h3><br\>"

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email)
    return user
  })
  .then(sendToDashboard)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}

function sendToDashboard() {
  var url= "/dashboard"; 
  window.location = url; 
}

function handleEmailLogin() {
  var email = document.querySelector('.email').value 
  var password = document.querySelector('.password').value
  console.log('Login w/ Email button pressed.')
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(sendToDashboard)
  .catch((error) => alert(`An error ocurred while signing in -- ${error.message} (Error code: ${error.code})`))
}

function uploadWriting(postTitle, postBody) {
    var postData = {
      title: postTitle,
      body: postBody
    }
    var database = firebase.database().ref("writing")
    var newPostRef = database.push();
    newPostRef.set(postData, function(error) {
      if (error) {
        console.error(error);
        alert("Something went wrong. See dev console for additional detail on error.")
      } else {
        var successMsg = `<h5>Successfully uploaded ${postTitle} to <a target='blank' href='../writing.html'>writing</a> page.</h5>`
        $("#uploadMsg").append(successMsg)
      }
    });
  }

function handleWritingSubmission() {
  var postTitle = $("#post-title").val()
  var postBody = $("#post-body").val()
  uploadWriting(postTitle, postBody)
}