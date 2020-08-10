const projectHTML = "<div class='btnGrid container-fluid'><div class='codeBtnLocation text-center '><a class='codeLink' href='https://github.com/samuel-casey ' alt='GITHUB LINK ' target='self'><img src='images/codeBtn.png ' alt='CODE '></a></div><div class='codeImgLocation text-center '><img src='images/githubBtn.png ' alt='GITHUB '></div><div class='previewBtnLocation text-center '><a class='previewLink' href='# ' alt='PROJECT PREVIEW ' target='self'><img src='images/aboutBtn.png ' alt='PREVIEW '></a></div><div class='previewImgLocation text-center '><img src='images/laptop.png ' alt='LAUNCH PREVIEW '></div><div class='linkBtnLocation text-center '><a class='linkLink' href='# ' alt='PROJECT SITE ' target='self'><img src='images/linkBtn.png ' alt='LINK '></a></div><div class='linkImgLocation text-center '><img src='images/internet.png ' alt='SITE LINK '></div></div><div class='container-fluid contentGrid '><div class='outline leftCol'></div><div class='contentCol outline projectsTop'></div><div class='contentCol paper projectName' id='projectName'>Loading projects...</div><div class='contentCol paper projectImg'><img class='laptop' src='' alt='project image ' id='projectDesktopImg '></div><div class='contentCol paper projectDescription'></div><div class='contentCol paper projectStatus'></div><div class='contentCol outline btnRow'><div><img class='moveBtn ' id='moveLt ' src='images/moveLt.png ' alt='moveLt '><img class='moveBtn ' id='moveRt ' src='images/moveRt.png ' alt='moveRt '></div><p>project <span id='projNumerator'>x</span> of <span id='projDenominator'>y</span></p></div><div class='contentCol outline projectsBottom'></div><div class='outline rightCol'></div>"


// page elements
const moveRight = document.getElementById('moveRt ')
const moveLeft = document.getElementById('moveLt ')    
let projectName = document.getElementById('projectName')
let projectImg = document.getElementById('projectDesktopImg ')
let projNumerator = document.getElementById('projNumerator') 
let projDenominator = document.getElementById('projDenominator') 
let projectDescriptionId = document.querySelector('.projectDescription ')
let projectStatus = document.querySelector('.projectStatus ')
let codeLink = document.querySelector('.codeLink')
let previewLink = document.querySelector('.previewLink')
let linkLink = document.querySelector('.linkLink')
let btnGrid = document.querySelector('.btnGrid')
let projectList = []
// lists of object properties
const projectNamesList = []
const projectDesktopImagesList = []
const projectDescriptionList = []
const projectStatusList = []
const projectLinkList = []
const projectPreviewList = []
const projectCodeList = []

let projList = []


function loadProjWindow() {
    $("#root").append(projectHTML)
}

function moveButtons() {
    let moveRight = document.getElementById('moveRt ')
    let moveLeft = document.getElementById('moveLt ')
    sleep(20)
    .then( () => {
        console.log(projNumerator)
        moveRight.addEventListener('click', moveRt) 
        moveLeft.addEventListener('click', moveLt);
    })
    .catch(error => console.log(error))   
}

/////////////////////////////////////////////////////////////////////////

// helper functions for page events
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let index = 0
let proj = projectList[index]
let clickCounter = 0

function moveRt() {
    
    projectName = document.getElementById('projectName')
    projectImg = document.getElementById('projectDesktopImg ')
    projectDescriptionId = document.querySelector('.projectDescription ')
    projectStatus = document.querySelector('.projectStatus ')
    projNumerator = document.getElementById('projNumerator') 
    projDenominator = document.getElementById('projDenominator')


    if (index == projectNamesList.length - 1) {
        index = 0
    } else {
        index += 1
    }
    proj = projectList[index]
    projectName.innerHTML = projectNamesList[index]
    projectImg.src = projectDesktopImagesList[index]
    projectDescriptionId.innerText = projectDescriptionList[index]
    projectStatus.innerHTML = projectStatusList[index]
    // linkLink.href = projectLinkList[index]
    // previewLink.href = projectPreviewList[index]
    // codeLink.href = projectCodeList[index]
    
    if (projectStatus.innerHTML == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }

    if (projectStatus.innerHTML == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
    console.log(index)
    proj = projectList[index]
    projNumerator.innerText = (index + 1)
    clickCounter += 1
    if (clickCounter == index) {
        buttonAlerts(proj)
    }
    return proj
}


function moveLt() {

    // redeclare global variables
    projectName = document.getElementById('projectName')
    projectImg = document.getElementById('projectDesktopImg ')
    projectDescriptionId = document.querySelector('.projectDescription ')
    projectStatus = document.querySelector('.projectStatus ')
    projNumerator = document.getElementById('projNumerator') 
    projDenominator = document.getElementById('projDenominator')

    if (index == 0) {
        index = projectNamesList.length - 1
    } else {
        index -= 1
    }
    
    projectName.innerHTML = projectNamesList[index]
    projectImg.src = projectDesktopImagesList[index]
    projectDescriptionId.innerText = projectDescriptionList[index]
    projectStatus.innerHTML = projectStatusList[index]
    // linkLink.href = projectLinkList[index]
    // previewLink.href = projectPreviewList[index]
    // codeLink.href = projectCodeList[index]

    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }

    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
    console.log(index)
    proj = projectList[index]
    projNumerator.innerText = (index + 1)
    clickCounter += 1
    if (clickCounter == index) {
        buttonAlerts(proj)
    }
    return proj
}


function buttonAlerts(project) {

    codeLink = document.querySelector('.codeLink')
    previewLink = document.querySelector('.previewLink')
    linkLink = document.querySelector('.linkLink')
   
    linkLink.addEventListener("click", function linkClick(e) { 
        if (project.link === "" && projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            alert("No link available for this project yet. Check back in a few weeks!");
            e.preventDefault()
            return false
        } else if (projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            linkLink.setAttribute("href", project.link);
            linkLink.setAttribute("target", "blank")
        }
    });
    
    codeLink.addEventListener("click", function codeClick(e) {
        if (project.code === "" && projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            alert("No public repository available for this project yet. Check back in a few weeks!");
            e.preventDefault()
            return false
        } else if (projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            codeLink.setAttribute("href", project.code);
            codeLink.setAttribute("target", "blank")
            
        } 
    });

    previewLink.addEventListener("click", function previewClick(e) {
        if (project.preview === "" && projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            alert("No project preview available for this project yet. Check back in a few weeks!");
            e.preventDefault()
            return false
        } else if (projectName.innerText.toUpperCase() === project.title.toUpperCase()) {
            previewLink.setAttribute("href", project.preview);
            previewLink.setAttribute("target", "blank")
            console.log("changed previewLink")
        }
    });
}

function initialProjectStatusColor() {
    if (projectStatus.innerHTML == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }
    if (projectStatus.innerHTML == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
}

function getProjects() {
    return firebase.database().ref("projects").once('value').then(function(snapshot) {
        var posts = snapshot.val();
        console.log(posts)

        for (var postKey in posts) {
            var post = posts[postKey];
            projList.push(post)
            console.log(projList)
          }
      });     
}

function displayProjects() {

    projectName = document.getElementById('projectName')
    projectImg = document.getElementById('projectDesktopImg ')
    projectDescriptionId = document.querySelector('.projectDescription ')
    projectStatus = document.querySelector('.projectStatus ')
    projNumerator = document.getElementById('projNumerator') 
    projDenominator = document.getElementById('projDenominator')
    codeLink = document.querySelector('.codeLink')
    previewLink = document.querySelector('.previewLink')
    linkLink = document.querySelector('.linkLink')

    var countOfTitles = 0
    var startingTitle = ""
    var startingImg = ""
    var startingDescription = ""
    var startingLink = ""
    var startingCode = ""
    var startingPreview = ""
    var startingStatus = ""
    var firstProj = ""

    for (var i = 0; i < projList.length; i++) {

        var dbProject = {
            code : projList[i].code,
            desktopImg : projList[i].desktopImg,
            link : projList[i].link,
            preview : projList[i].preview,
            projectDescription : projList[i].projectDescription,
            status : projList[i].status,
            title : projList[i].title
        }
        projectNamesList.push(dbProject.title) 
        projectDesktopImagesList.push(dbProject.desktopImg)
        projectDescriptionList.push(dbProject.projectDescription)
        projectStatusList.push(dbProject.status)
        projectLinkList.push(dbProject.link)
        projectPreviewList.push(dbProject.preview)
        projectCodeList.push(dbProject.code)
        projectList.push(dbProject)
        
        if (countOfTitles === 0) {
            startingTitle = dbProject.title,
            startingImg = dbProject.desktopImg,
            startingDescription = dbProject.projectDescription,
            startingLink = dbProject.link,
            startingCode = dbProject.preview,
            startingPreview = dbProject.code,
            startingStatus = dbProject.status
            firstProj = dbProject
        }
        console.log(dbProject)
        countOfTitles += 1
        
        projDenominator.innerText = projList.length
        projNumerator.innerText = 1
    }
    projectName.innerText = startingTitle
    projectImg.src = startingImg
    projectDescriptionId.innerText = startingDescription
    projectStatus.innerText = startingStatus
    linkLink.href = startingLink
    previewLink.href = startingPreview
    codeLink.href = startingCode

    buttonAlerts(firstProj)
    initialProjectStatusColor()
}


$(document).on('ready', getProjects().then(displayProjects).catch(error => console.log(error)))

$(document).on('load', loadProjWindow(), moveButtons())


// $(document).ready(
//     () => {
//     var loader = "<div id='loadBox'><div class='loader'></div><br><p>loading projects...</p></div>"
//     $("#root").append(loader)
// }
// )


// legacy add event listeners to page
// document.addEventListener('DOMContentLoaded', projectStatusColor);
// document.addEventListener('DOMContentLoaded', initialProjectStatusColor)
// document.addEventListener('DOMContentLoaded', buttonAlerts(proj))
// moveRtButton.addEventListener('click', moveRt)
// moveLtButton.addEventListener('click', moveLt)