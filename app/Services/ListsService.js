import { ProxyState } from '../AppState.js';
import List from '../Models/List.js'
import { saveState } from '../Utils/LocalStorage.js';

class ListsService {
    constructor() {
        ProxyState.on('lists', saveState)
    }

    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    // })

    createList(newList) {
        ProxyState.lists = [...ProxyState.lists, new List(newList)]
        swal({
            icon: 'success',
            text: 'You created a list!'
        })
    }
    deleteList(listId) {

        swal({
            title: "Are you sure you want to delete that??",
            text: "Once deleted, it'll be gone forever!",
            // icon: "warning",
            buttons: ["Wait, no", "Delete it!"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
                    swal({
                        text: 'BYE!',
                        icon: "success"
                    })

                } else {
                    swal("THE LIST SHALL STAY!");
                }
            });
    }
}
export const listService = new ListsService();