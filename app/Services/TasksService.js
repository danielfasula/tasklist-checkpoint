import { ProxyState } from '../AppState.js';
import Task from '../Models/Task.js'
import { saveState } from '../Utils/LocalStorage.js';



class TasksService {
    constructor() {

        ProxyState.on('tasks', saveState)
    }
    addTask(newTask) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
    }
    deleteTask(taskId) {

        let r = confirm('Are you sure you would like to delete?')
        if (r == true) {
            ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
        }

    }
    changeCompletion(taskId) {
        let task = ProxyState.tasks.find(t => t.id == taskId)
        if (task.completion == true) {
            task.completion = false
        } else {
            task.completion = true
        }
        ProxyState.tasks = ProxyState.tasks
    }
}

export const taskService = new TasksService();