$(document).ready(function() {
  if (window.location.pathname === "/dashboard"){
    existingPosts()
    showUser()
  }
});

function existingPosts() {
  return firebase.database().ref("writing").once('value').then(function(snapshot) {
    var posts = snapshot.val();

    for (var postKey in posts) {
        var post = posts[postKey];
        $("#existingPosts").append(`<li>${post.title}</li>`)
      }
})
}

function showUser() {
  $("#currentUser").text(currentUser) 
}

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

function sendToDashboard(user) {
  var url= "/dashboard"; 
  window.location.pathname = url; 
}



function handleEmailLogin() {
  var email = document.querySelector('.email').value 
  var password = document.querySelector('.password').value
 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => alert(`An error ocurred while signing in -- ${error.message} (Error code: ${error.code})`))
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      sendToDashboard(user)
      console.log(`${user.email} logging in w/ password`)
      return currentUser = user
    } else {
      console.log(error)
    }
})
}


function uploadWriting(postTitle, postBody) {
    
    var postData = {
      title: postTitle,
      body: postBody
    }

    function popup(){
      alert("Post successful!")
    }

    var database = firebase.database().ref("writing")
    var newPostRef = database.push();
    newPostRef.set(postData, function(error) {
      if (error) {
        console.error(error);
        alert("Something went wrong. See dev console for additional detail on error.")
      } else {
        var successMsg = `<p>Successfully uploaded <b>${postTitle}</b> to <a target='blank' onclick='window.location.reload()' href='../writing.html'>writing</a> page.</p>`
        popup()
        $("#uploadMsg").append(successMsg)
        $("#existingPosts").append(`<li>${postTitle}</li>`)
        $("#uploadForm").trigger("reset")
      }
  })
}

function handleWritingSubmission() {
  var postTitle = $("#post-title").val()
  var postBody = $("#post-body").val()
  if (postTitle != null && postTitle != "" && postBody != null && postBody != "") {
    uploadWriting(postTitle, postBody)
  } else {
    alert("You left something blank.")
  }
}