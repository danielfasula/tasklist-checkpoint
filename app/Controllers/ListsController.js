import { listService } from '../Services/ListsService.js'
import { ProxyState } from '../AppState.js'

function _draw() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}

export default class ListsController {
    constructor() {
        ProxyState.on('lists', _draw)
        ProxyState.on('tasks', _draw)

        _draw()
    }

    createList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            title: form.title.value,
            color: form.color.value
        }
        listService.createList(newList)
    }
    deleteList(listId) {
        listService.deleteList(listId)
    }
}