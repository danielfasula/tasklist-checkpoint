import { ProxyState } from '../AppState.js';
import List from '../Models/List.js'
import { saveState } from '../Utils/LocalStorage.js';

class ListsService {
    constructor() {
        ProxyState.on('lists', saveState)
    }
    createList(newList) {
        ProxyState.lists = [...ProxyState.lists, new List(newList)]
    }
    deleteList(listId) {

        swal({
            title: "Are you sure you want to delete that??",
            text: "Once deleted, it'll be gone forever!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
                    swal('BYE!')

                } else {
                    swal("THE LIST SHALL STAY!");
                }
            });
    }
}
export const listService = new ListsService();