// page elements
const projectName = document.getElementById('projectName ')
const moveRtBtn = document.getElementById('moveRt ')
const moveLtBtn = document.getElementById('moveLt ')
const projectDesktopImg = document.getElementById('projectDesktopImg ')
const projectDescriptionId = document.querySelector('.projectDescription ')
const projectStatus = document.querySelector('.projectStatus ')


// project objects
const sampleProject = {
    title: "Sample Project",
    desktopImg: "sampleProjectDesktopImg.png",
    projectDescription: "This is a sample project description that I populated using JS",
    status: "Status: Complete"
}

const projectOne = {
    title: "Tides Visualizer",
    desktopImg: "tidesVisDesktopImg.png",
    projectDescription: "The tides visualizer is an app to help people feel like they're at their favorite beach on days that they can't be there. It uses data from the National Oceanographic and Astrological Association to simulate the tide rolling in and out over the course of the day.",
    status: "Status: In Progress"
}

// lists of object properties
const projectNamesList = [sampleProject.title, projectOne.title]
const projectDesktopImagesList = [sampleProject.desktopImg, projectOne.desktopImg]
const projectDescriptionList = [sampleProject.projectDescription, projectOne.projectDescription]
const projectStatusList = [sampleProject.status, projectOne.status]

// helper functions for page events
let index = 0

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function moveRt() {


    if (index == projectNamesList.length - 1) {
        index = 0
    } else {
        index += 1
    }
    projectName.innerText = projectNamesList[index]
    projectDesktopImg.src = projectDesktopImagesList[index]
    projectDescriptionId.innerText = projectDescriptionList[index]
    projectStatus.innerHTML = projectStatusList[index]

    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }

    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }

    console.log(index)
}

function moveLt() {
    if (index == 0) {
        index = projectNamesList.length - 1
    } else {
        projectName.innerText = projectNamesList[index -= 1]
    }
    projectName.innerText = projectNamesList[index]
    projectDesktopImg.src = projectDesktopImagesList[index]
    projectDescriptionId.innerText = projectDescriptionList[index]
    projectStatus.innerHTML = projectStatusList[index]

    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }

    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }
    console.log(index)
}

function initialProjectStatusColor() {
    if (projectStatus.innerText == "Status: Complete") {
        projectStatus.setAttribute("style", "color: green;")
    }
    if (projectStatus.innerText == "Status: In Progress") {
        projectStatus.setAttribute("style", "color: goldenrod;")
    }

}


// add event listeners to page
// document.addEventListener('DOMContentLoaded', projectStatusColor);
document.addEventListener('DOMContentLoaded', initialProjectStatusColor)
moveRtBtn.addEventListener('click', moveRt);
moveLtBtn.addEventListener('click', moveLt);