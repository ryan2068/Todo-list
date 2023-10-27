const contentDiv = document.querySelector("#content")
const projectsContainer = document.createElement("div") 


const addProject = function () {
    const projectHeader = document.createElement("div")
    const projectForm = document.createElement("form")
    const projectInput = document.createElement("input")
    const projectSubmitBtn = document.createElement("button")

    projectSubmitBtn.setAttribute("type", "submit")

    projectsContainer.appendChild(projectForm)
    projectsContainer.appendChild(projectInput)
    projectsContainer.appendChild(projectSubmitBtn)


    

} 

export {addProject}