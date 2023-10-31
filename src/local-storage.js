import { createTask } from "./create-task"

const contentDiv = document.querySelector("#content")
const formListContainer = document.querySelector(".form-list-container")

const getLocalStorageTasks = () => {
    
    const storedTasks = JSON.parse(localStorage.getItem("task"))
    for (let i = 0; i < storedTasks.length; i++) {
        const oldTask = new createTask(storedTasks[i].title, storedTasks[i].description, storedTasks[i].dueDate)
        
        //creating divs to append task to.
        const listLeft = document.createElement("div")
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const taskTitle = document.createElement("div")
        const taskDescription = document.createElement("div")
        const taskDueDate = document.createElement("div")
        taskTitle.textContent = oldTask.title
        taskDescription.textContent = oldTask.description
        taskDueDate.textContent = oldTask.dueDate

        
        listLeft.classList.add("list-left")
        li.classList.add("todo-list")

        listLeft.appendChild(taskTitle)
        listLeft.appendChild(taskDescription)
        li.appendChild(listLeft)

        ul.appendChild(li)
        formListContainer.appendChild(ul)
        contentDiv.appendChild(formListContainer)

        
        

    }
}


// const getLocalStorageToDo = () => {
    
// }

// const appendStoredTasks = () => {

// }



export { getLocalStorageTasks }