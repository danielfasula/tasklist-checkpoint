import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from '../Models/Task.js'

export function saveState() {
    localStorage.setItem('listoflists', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks

    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('listoflists'))
    if (data) {
        ProxyState.lists = data.lists.map(newList => new List(newList))
        ProxyState.tasks = data.tasks.map(newTask => new Task(newTask))
    }
}