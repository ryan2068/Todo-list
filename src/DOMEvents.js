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

const addATask = () => {
    form.addEventListener('click', (e) => {
        e.preventDefault()
        const title = document.querySelector("#title").value
        const description = document.querySelector("#description").value
        const dueDate = document.querySelector("#dueDate").value
        const priority = document.querySelector("#priority").value
        const task = new createTask (title, description, dueDate, priority)
        console.log(task)

        const generateTable = function() {
            const table = document.createElement("table")
            let thead = table.createTHead()
            let row = thead.insertRow()
            for (let key of data) {
                let th = document.createElement("th")
                let text = document.createTextNode(key)
                th.appendChild(text)
                row.appendChild(th)
            }
        }
        let data = Object.keys(task)
        generateTable(domTable, data)
        contentDiv.appendChild(domTable)
    })
}











export {addTaskInputsToDom, addATask}