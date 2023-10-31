import { addATask, addTaskInputsToDom} from "./DOMEvents";
import { createTask } from "./create-task";
import { addProjectDOM, addAProject } from "./create-projects"
import { getLocalStorageTasks} from "./local-storage";

addTaskInputsToDom()
addATask()
addProjectDOM()
addAProject()
getLocalStorageTasks()