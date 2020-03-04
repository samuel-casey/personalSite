// initial page elements
const projectName = document.getElementById('projectName ')
const moveRtBtn = document.getElementById('moveRt ')
const moveLtBtn = document.getElementById('moveLt ')
const projectDesktopImg = document.getElementById('projectDesktopImg ')
const projectDescriptionId = document.getElementById('projectDescription ')
const projectStatus = document.getElementById('projectStatus ')

const sampleProject = {
    title: "Sample Project",
    desktopImg: "sampleProjectDesktopImg.png",
    projectDescription: "This is a sample project description that I populated using JS",
    projectStatus: "Status: Complete"
}

const projectOne = {
    title: "Tides Visualizer",
    desktopImg: "tidesVisDesktopImg.png",
    projectDescription: "The tides visualizer is an app to help people feel like they're at their favorite beach on days that they can't be there. It uses data from the National Oceanographic and Astrological Association to simulate the tide rolling in and out over the course of the day.",
    projectStatus: "Status: In Progress"
}

// list of project names
const projectNamesList = [sampleProject.title, projectOne.title]
const projectDesktopImagesList = [sampleProject.desktopImg, projectOne.desktopImg]
const projectDescriptionList = [sampleProject.projectDescription, projectOne.projectDescription]
const projectStatusList = [sampleProject.projectStatus, projectOne.projectStatus]

// helper functions for move buttons
let index = 0

function moveRt() {
    if (index == projectNamesList.length - 1) {
        index = 0
    } else {
        index += 1
    }
    projectName.innerText = projectNamesList[index]
    projectDesktopImg.src = projectDesktopImagesList[index]
    projectDescriptionId.innerText = projectDescriptionList[index]
    projectStatus.innerText = projectStatusList[index]
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
    projectStatus.innerText = projectStatusList[index]
    console.log(index)
}

moveRtBtn.addEventListener('click', moveRt);
moveLtBtn.addEventListener('click', moveLt);