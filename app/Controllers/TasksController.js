import { taskService } from '../Services/TasksService.js'


export default class TasksController {
    constructor() {

    }

    addTask(event, listId) {
        event.preventDefault();
        let form = event.target
        let newTask = {
            description: form.description.value,
            listId: listId
        }
        taskService.addTask(newTask)
    }

    deleteTask(taskId) {
        taskService.deleteTask(taskId)
    }

    changeCompletion(taskId) {
        taskService.changeCompletion(taskId)
    }

}