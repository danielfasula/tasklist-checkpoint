import { generateId } from '../Utils/GenerateId.js'
export default class Task {

    constructor({ description, listId, completion }) {
        this.description = description
        this.completion = completion || false
        this.listId = listId
        this.id = generateId()
    }
    get Template() {
        return /*html*/ `
            <div class="col-12 mt-3">
                <div class="mb-3 d-flex justify-content-between">
                    <input class="form-check-input ml-3 mt-2" type="checkbox" ${this.completion ? "checked" : ""} aria-label="Checkbox for following text input" onclick="app.tasksController.changeCompletion('${this.id}')">
                    <h5 class="ml-5">${this.description}</h5>
                    <button class="close mb-3 mr-3"
                    onclick="app.tasksController.deleteTask('${this.id}')"><span >&times;</span></button>

                </div>
            </div>
        `
    }
}