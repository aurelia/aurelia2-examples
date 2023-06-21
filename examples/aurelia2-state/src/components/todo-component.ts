import { IStore } from '@aurelia/state';
import { TodoAction } from '../state-actions';

export class TodoComponent {
    private todoText = '';
    completed = false;
    text

    constructor(@IStore readonly store: IStore<TodoComponent>) {

    }

    // Code is handled inside of the state-actions.ts file
    newTodo(event) {
        if (event.which === 13) {
            this.store.dispatch(new TodoAction({ type:'newTodo', text: this.todoText}));
            this.todoText = '';
        }

        return true;
    }

    // Code is handled inside of the state-actions.ts file
    deleteTodo(index) {
        this.store.dispatch(new TodoAction({ type:'deleteTodo', index: index}));
    }
}