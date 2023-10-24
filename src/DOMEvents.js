const contentDiv = document.querySelector("#content")
const form = document.createElement("form")

const addTaskInputsToDom = () => {

    //Title input
    const titleInput = document.createElement("input")
    titleInput.setAttribute("name", "title")
    titleInput.setAttribute("placeholder", "Title of Task...")
    //Description input
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("name", "description")
    descriptionInput.setAttribute("placeholder", "Description of Task...")
    //DueDate input
    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("name", "dueDate")
    dueDateInput.setAttribute("placeholder", "DueDate")
    //Priority input
    const priorityInput = document.createElement("input")
    priorityInput.setAttribute("name", "priority")
    priorityInput.setAttribute("placeholder", "Priority of Task...")
    //Submit button 
    const submitBtn = document.createElement("button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.textContent = "Submit"


    
    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateInput)
    form.appendChild(priorityInput)
    form.appendChild(submitBtn)
    contentDiv.appendChild(form)  
}

const addATask = () => {
    form.addEventListner('click', (e) => {
        e.preventDefault()
        console.log("form works")
    })
}









export {addTaskInputsToDom, addATask}