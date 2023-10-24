const addTaskToDom = () => {
    const contentDiv = document.querySelector("#content")
    const form = document.createElement("form")
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
    
    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateInput)
    form.appendChild(priorityInput)
    contentDiv.appendChild(form)  
}

export {addTaskToDom}