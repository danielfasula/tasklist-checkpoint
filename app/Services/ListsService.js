import { ProxyState } from '../AppState.js';
import List from '../Models/List.js'
import { saveState } from '../Utils/LocalStorage.js';


class ListsService {
    constructor() {
        ProxyState.on('lists', saveState)
    }
    createList(newList) {
        ProxyState.lists = [new List(newList), ...ProxyState.lists]
    }
    deleteList(listId) {
        let r = confirm('Are you sure you would like to delete?')
        if (r == true) {
            ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
        }
    }
}
export const listService = new ListsService();