


const createTask = function(title, description, dueDate, priority) {
    const contentDiv = document.querySelector("#content")
    const form = document.createElement("form")
    const titleInput = document.createElement("input")
    titleInput.setAttribute("name", "title")
    titleInput.setAttribute("placeholder", "Title of Task...")
    contentDiv.appendChild(form)
    form.appendChild(titleInput)

    

    
    
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    return { title, description, dueDate, priority }
}

export {createTask}


