import { taskService } from '../Services/TasksService.js'
import { ProxyState } from '../AppState.js'


// TODO figure out why completed / total tasks isnt working

// function _draw() {

//     document.getElementById('total-tasks').innerHTML = `
//     <h4 class="text-center">
//     ${ProxyState.tasks.map(t => t.completion == true).length} / ${ProxyState.tasks.filter(t => t).length} Completed
//     </h4>
//     `
// }

export default class TasksController {

    constructor() {
        // _draw()
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