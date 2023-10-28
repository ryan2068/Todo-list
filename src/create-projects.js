const contentDiv = document.querySelector("#content")
const projectsContainer = document.createElement("div") 
projectsContainer.classList.add("projects-container")



const addProject = function () {
    //creates project variables
    const projectHeader = document.createElement("div")
    const projectForm = document.createElement("form")
    const projectInput = document.createElement("input")
    const projectSubmitBtn = document.createElement("button")
    const projectHome = document.createElement("button") 
    //dom manipulation
    projectHome.textContent = "Home"
    




    projectSubmitBtn.setAttribute("type", "submit")

    projectsContainer.appendChild(projectForm)
    projectsContainer.appendChild(projectInput)
    projectsContainer.appendChild(projectSubmitBtn)
    projectsContainer.appendChild(projectHome)
    contentDiv.appendChild(projectsContainer)




    

} 

export {addProject}