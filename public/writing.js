$(document).ready(() => {
    var loader = "<div id='loadBox'><div class='loader'></div><br><p>loading writing...</p></div>"
    $("#base").append(loader)
})

let postContent = {
    title : "title",
    body : "body"
}

// $(document).on('load', loadWriting())

function loadWriting() {
    console.log(`${postContent}`)
}

function getPosts() {
    return firebase.database().ref("posts").once('value').then(function(snapshot) {
        var posts = snapshot.val();
        console.log(posts)
    
        var counter = 1
        for (var postKey in posts) {
          var post = posts[postKey];
          $("#post-listing").append(`<div>Post number:${counter}| Post title:${post.title} | Post body:${post.body}</div>`)
          counter += 1 
        }
      });  
}