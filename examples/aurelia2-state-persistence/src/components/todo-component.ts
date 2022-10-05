import { IStore } from '@aurelia/state';

export class TodoComponent {
    private todoText = '';

    constructor(@IStore readonly store: IStore<TodoComponent>) {

    }

    // Code is handled inside of the state-actions.ts file
    newTodo(event) {
        if (event.which === 13) {
            this.store.dispatch('newTodo', this.todoText);
            this.todoText = '';
        }

        return true;
    }

    // Code is handled inside of the state-actions.ts file
    deleteTodo(index) {
        this.store.dispatch('deleteTodo', index);
    }
}