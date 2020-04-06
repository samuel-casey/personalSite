// to do: 
  // handleProjectSubmission()
  

$(document).ready(function() {  
  if (window.location.pathname === "/dashboard"){
    firebase.auth().onAuthStateChanged(function(user) {
      const cUser = firebase.auth().currentUser
      if (user) {
        showUser(cUser)
      } else {
        console.log(error)
      }
  })
    existingPosts()
    existingProjects()
  }
});

function logOutUser() {
  firebase.auth().signOut().then(function(){
    var url= "/login"; 
  window.location.pathname = url;
  }).catch(error => console.log(error))
}

function existingPosts() {
  return firebase.database().ref("writing").once('value').then(function(snapshot) {
    var posts = snapshot.val();

    for (var postKey in posts) {
        var post = posts[postKey];
        $("#existingPosts").append(`<li>${post.title}</li>`)
      }
})
}

function existingProjects() {
  return firebase.database().ref("projects").once('value').then(function(snapshot) {
    var posts = snapshot.val();

    for (var postKey in posts) {
        var post = posts[postKey];
        $("#existingProjects").append(`<li>${post.title}</li>`)
      }
})
}

function showUser(user) {

    if (user) {
      $("#currentUser").text(user.email)
    } else {
      $("#currentUser").text("N/A")
    }
  };


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
  
  firebase.auth().onAuthStateChanged(function(user, error) {
    if (user) {
      sendToDashboard(user)
      console.log(`${user.email} logging in w/ password`)
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

    var database = firebase.database().ref("writing")
    var newPostRef = database.push();
    newPostRef.set(postData, function(error) {
      if (error) {
        console.error(error);
        alert("Something went wrong. See dev console for additional detail on error.")
      } else {
        var successMsg = `<p>Successfully uploaded <b>${postTitle}</b> to <a target='blank' onclick='window.location.reload()' href='../writing.html'>writing</a> page.</p>`
        $("#wUploadMsg").append(successMsg)
        $("#existingPosts").append(`<li>${postTitle}</li>`)
        $("#writingForm").trigger("reset")
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

////////////// projects ////////////////////////////////////

function addProject(pTitle, pImg, pDescription, pStatus, pLink, pPreview, pCode){
    
  var projectData = {
      title: pTitle, // Tic-Tac-Bananas
      desktopImg: pImg, // public/images/ticTacBananas.png
      projectDescription: pDescription, // Tic-Tac-Toe but with Bananas
      status: pStatus, // "Status: In Progress"
      link: pLink, // ""
      preview: pPreview, // ""
      code: pCode // ""
  }

  var database = firebase.database().ref("projects")
  var newPostRef = database.push();
  newPostRef.set(projectData, function(error) {
    if (error) {
      console.error(error);
      alert("Something went wrong. Make sure you're signed in and see dev console for additional detail on error.")
    } else {
      var successMsg = `<p>Successfully uploaded <b>${pTitle}</b> to <a target='blank' onclick='window.location.reload()' href='../softwareprojects.html'>software projects</a> page.</p>`
      $("#pUploadMsg").append(successMsg)
      $("#existingProjects").append(`<li>${pTitle}</li>`)
      $("#projectForm").trigger("reset")
    }
  });
}

function handleProjectSubmission() {
  var pTitle = $("#project-title").val()
  var pImg = $("#project-img-path").val()
  var pDescription = $("#project-description").val()
  var pLink = $("#project-link").val()
  var pCode = $("#project-code").val()
  var pPreview = $("#project-preview").val()
  var pStatus = $("#project-status-select").children("option:selected").val()

  if (
  pTitle != null && pTitle != "" && 
  pStatus != null && pStatus != "" && 
  pDescription != null && pDescription != "" && 
  pLink != null && 
  pImg != null && 
  pCode != null && 
  pPreview != null
  ) 
  {
    addProject(pTitle, pImg, pDescription, pStatus, pLink, pPreview, pCode)
  } else {
    alert("You left something blank.")
  }
}