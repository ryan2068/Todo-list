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

    //Submit button 
    const submitBtn = document.createElement("button")
    submitBtn.classList.add("submit")
    submitBtn.setAttribute("type", "submit")
    submitBtn.textContent = "Submit"


    
    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateInput)
    form.appendChild(submitBtn)
    contentDiv.appendChild(form)  
}

const addATask = (title, description, dueDate, priority) => {
    const submitBtn = document.querySelector(".submit")
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const title = document.querySelector("#title").value
        const description = document.querySelector("#description").value
        const dueDate = document.querySelector("#dueDate").value
        const priority = document.querySelector("#priority")
        const task = new createTask (title, description, dueDate, priority)
        console.log(task)

        const ul = document.createElement("ul");
        const li = document.createElement("li");
        
        //creating list details on submit
        const listLeft = document.createElement("div")
        const taskTitle = document.createElement("div")
        const taskDescription = document.createElement("div")
        const taskDueDate = document.createElement("div")
        const DueDatePriorityContainer = document.createElement("div")
        const taskPriority = document.createElement("input")
        taskPriority.setAttribute("id", "priority")
        taskPriority.setAttribute("type", "checkbox")
        //setting list inputs as a ToDo list
        taskTitle.textContent = task.title
        taskDescription.textContent = task.description
        taskDueDate.textContent = task.dueDate
        taskPriority.textContent = task.priority

        listLeft.classList.add("list-left")
        DueDatePriorityContainer.classList.add("DueDatePriorityContainer")

        listLeft.appendChild(taskTitle)
        listLeft.appendChild(taskDescription)
        DueDatePriorityContainer.appendChild(taskDueDate)
        DueDatePriorityContainer.appendChild(taskPriority)
        li.appendChild(listLeft)
        li.appendChild(DueDatePriorityContainer)


        



        ul.appendChild(li)
        contentDiv.appendChild(ul)
    })
    
}










export {addTaskInputsToDom, addATask}