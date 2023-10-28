const contentDiv = document.querySelector("#content")
const projectsContainer = document.createElement("div") 
projectsContainer.classList.add("projets-container")



const addProject = function () {
    const projectHeader = document.createElement("div")
    const projectForm = document.createElement("form")
    const projectInput = document.createElement("input")
    const projectSubmitBtn = document.createElement("button")


    projectSubmitBtn.setAttribute("type", "submit")

    projectsContainer.appendChild(projectForm)
    projectsContainer.appendChild(projectInput)
    projectsContainer.appendChild(projectSubmitBtn)
    contentDiv.appendChild(projectsContainer)


    

} 

export {addProject}