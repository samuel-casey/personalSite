// page elements
const projectName = document.querySelector('#projectName ')
const moveRtButton = document.getElementById('moveRt ')
const moveLtButton = document.getElementById('moveLt ')

const projectImg = document.getElementById('projectDesktopImg ')
const projectDescriptionId = document.querySelector('.projectDescription ')
const projectStatus = document.querySelector('.projectStatus ')

const codeLink = document.querySelector('.codeLink')
const previewLink = document.querySelector('.previewLink')
const linkLink = document.querySelector('.linkLink')

const btnGrid = document.querySelector('.btnGrid')

/////////////////////////////// project objects
const sampleProject = {
    title: "Sample Project",
    desktopImg: "images/sampleProjectDesktopImg.png",
    projectDescription: "This is a sample project description that I populated using JS",
    status: "Status: Complete",
    link: "",
    preview: "",
    code: "https://github.com/samuel-casey/"
}

const projectOne = {
    title: "Tides Visualizer", 
    desktopImg: "images/tidesVisDesktopImg.png",
    projectDescription: "The tides visualizer is an app to help people feel like they're at their favorite beach on days that they can't be there. It uses data from the National Oceanographic and Astrological Association to simulate the tide rolling in and out over the course of the day.",
    status: "Status: In Progress",
    link: "",
    preview: "",
    code: "https://github.com/samuel-casey/Tides"

}

const projectTwo = {
    title: "Tides 2", 
    desktopImg: "images/tidesVisDesktopImg.png",
    projectDescription: "The tides visualizer is an app to help people feel like they're at their favorite beach on days that they can't be there. It uses data from the National Oceanographic and Astrological Association to simulate the tide rolling in and out over the course of the day.",
    status: "Status: Complete",
    link: "",
    preview: "",
    code: ""

}

/////////////////////////////////////////////////////////////////////////

const projectList = [sampleProject, projectOne, projectTwo]

// lists of object properties
const projectNamesList = [sampleProject.title, projectOne.title, projectTwo.title]
const projectDesktopImagesList = [sampleProject.desktopImg, projectOne.desktopImg, projectTwo.desktopImg]
const projectDescriptionList = [sampleProject.projectDescription, projectOne.projectDescription]
const projectStatusList = [sampleProject.status, projectOne.status]

// list of button object properties
const projectLinkList = [sampleProject.link, projectOne.link]
const projectPreviewList = [sampleProject.preview, projectOne.preview]
const projectCodeList = [sampleProject.code, projectOne.code]

// helper functions for page events
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let index = 0
let proj = projectList[index]
let clickCounter = 0

function moveRt() {

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
    
    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }

    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
    console.log(index)
    proj = projectList[index]
    clickCounter += 1
    if (clickCounter == index) {
        buttonAlerts(proj)
    }
    return proj
}


function moveLt() {

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
    clickCounter += 1
    if (clickCounter == index) {
        buttonAlerts(proj)
    }
    return proj
}


function buttonAlerts(project) {
   
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
            alert("No public repository available for this project yet. Check back in a few weeks!");
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
    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }
    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
}

// // JS to make page more responsive
// jQuery(document).ready(function($) {
//         var alterClass = function() {
//             var ww = document.body.clientWidth;
//             if (ww < 450) {
    
//                 $('.projectWindow').removeClass('col-10');
//                 $('.projectWindow').removeClass('col-9');
//                 $('.projectWindow').addClass('col-11');
    
//             } else if (ww >= 451 && ww < 700) {
    
//                 $('.projectWindow').removeClass('col-9');
//                 $('.projectWindow').removeClass('col-11');
//                 $('.projectWindow').addClass('col-10');
//             } else if (ww >= 701) {
    
//                 $('.projectWindow').removeClass('col-10');
//                 $('.projectWindow').removeClass('col-11');
//                 $('.projectWindow').addClass('col-9');
//             };
//         };
//         $(window).resize(function() {
//             alterClass();
//         });
//         //Fire it when the page first loads:
//         alterClass();
//     });

// add event listeners to page
// document.addEventListener('DOMContentLoaded', projectStatusColor);
document.addEventListener('DOMContentLoaded', initialProjectStatusColor)
document.addEventListener('DOMContentLoaded', buttonAlerts(proj))
moveRtButton.addEventListener('click', moveRt);
moveLtButton.addEventListener('click', moveLt);
