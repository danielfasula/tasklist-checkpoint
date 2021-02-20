import { ProxyState } from '../AppState.js';
import Task from '../Models/Task.js'
import { saveState } from '../Utils/LocalStorage.js';



class TasksService {
    constructor() {

        ProxyState.on('tasks', saveState)
    }
    addTask(newTask) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
        swal({
            icon: 'success',
            text: 'You created a new task!'
        })
    }
    deleteTask(taskId) {

        // let r = confirm('You sure you wanna delete that?')
        // if (r) {
        //     ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
        // }

        swal({
            title: "Are you sure you want to delete that??",
            text: "Once deleted, it'll be gone forever!",
            // icon: "warning",
            buttons: ['Nvm, Still Need That', 'Get Rid of It!'],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
                    swal({
                        text: 'SEE YA!',
                        icon: 'success'
                    })

                } else {
                    swal("KEEP THE TASK!");
                }
            });
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