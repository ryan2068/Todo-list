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
    projectHome.classList.add("home-btn")
    projectInput.classList.add("input-submit-btn")
    projectSubmitBtn.classList.add("input-submit-btn", "submit-btn")
    projectSubmitBtn.textContent = ("Submit")
    projectInput.setAttribute("placeholder", "Add New Project?...")
    
    




    projectSubmitBtn.setAttribute("type", "submit")

    projectsContainer.appendChild(projectHome)
    projectForm.appendChild(projectInput)
    projectForm.appendChild(projectSubmitBtn)
    projectsContainer.appendChild(projectForm)
    contentDiv.appendChild(projectsContainer)





    

} 

export {addProject}