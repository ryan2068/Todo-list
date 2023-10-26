import { createTask } from "./create-task"

const contentDiv = document.querySelector("#content")
const form = document.createElement("form")

const addTaskInputsToDom = () => {

    //Title input
    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "title")
    titleInput.setAttribute("placeholder", "Title of Task...")
    //Description input
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("id", "description")
    descriptionInput.setAttribute("placeholder", "Description of Task...")
    //DueDate input
    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("id", "dueDate")
    dueDateInput.setAttribute("placeholder", "DueDate")
    //Priority input
    const priorityInput = document.createElement("input")
    priorityInput.setAttribute("id", "priority")
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

const addATask = (title, description, dueDate, priority) => {
    form.addEventListener('click', (e) => {
        e.preventDefault()
        const title = document.querySelector("#title").value
        const description = document.querySelector("#description").value
        const dueDate = document.querySelector("#dueDate").value
        const priority = document.querySelector("#priority").value
        const task = new createTask (title, description, dueDate, priority)
        console.log(task)

        const ul = document.createElement("ul");
        const li = document.createElement("li");
        ul.appendChild(li)


    })
    
}










export {addTaskInputsToDom, addATask}