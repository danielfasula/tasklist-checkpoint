import { generateId } from '../Utils/GenerateId.js'
import { ProxyState } from '../AppState.js'
export default class List {

    constructor({ title, id = generateId(), color }) {
        this.title = title
        this.id = id
        this.color = color
    }
    // TODO create template for html
    get Template() {
        return /* html */ `

                <div class="col-4 my-2">
                <div class="card" style="background-color: ${this.color};" >
                    <h1 class="text-center my-2">${this.title}<button class="close mt-3 mr-3"
                    onclick="app.listsController.deleteList('${this.id}')"><span >&times;</span></button> </h1>
                    <form class="text-center mt-2" onsubmit="app.tasksController.addTask(event, '${this.id}')">
                    <div class="form-group">
                    <input type="text" name="description" placeholder="Enter A New Task" minlength="3" maxlength="50">
                    <button type="submit">Add Task</button>
                    <h3 class="mt-3">Tasks</h3>
                        <h4>${ProxyState.tasks.filter(t => t.completion == true && t.listId == this.id).length} / ${ProxyState.tasks.filter(t => t.listId == this.id).length} Completed</h4>
                            <div class="row">
                                ${this.Tasks}
                            </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
        `
    }
    get Tasks() {
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}