

$(document).ready(() => {
    var loader = "<div id='loadBox'><div class='loader'></div><br><p>loading writing...</p></div>"
    $("#base").append(loader)
})

$(document).on('load', getWriting().then(displayWriting))

function displayWriting() {


    

    $("#base").detach()
    // loop to attach new containers for length of post list
    for (var i = 0; i < postList.length; i++) {

        var postContent = {
            title : postList[i].title,
            body : postList[i].body
        }

        var newPost = `<div class="container onePost">
        <h1 class="postTitle">${postContent.title}</h1>
        <div class="cotainer-fluid postBG"> 
            <p class="postBody" id="${i}">${postContent.body}</p> 
        </div>
    </div>`

        $("#allPosts").append(newPost)
    }
    
    
}

var postList = []

function getWriting() {
    return firebase.database().ref("writing").once('value').then(function(snapshot) {
        var posts = snapshot.val();
        console.log(posts)

        for (var postKey in posts) {
            var post = posts[postKey];
            postList.push(post)
          }
        console.log(postList)
      });  

      
   
}