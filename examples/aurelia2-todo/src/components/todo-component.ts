export class TodoComponent {
    private todo = '';

    private todos = [
        { completed: false, text: 'Build something with Aurelia 2' },
        { completed: false, text: 'Buy milk' },
        { completed: false, text: 'Joes birthday present for this Saturday' },
        { completed: false, text: 'Take out the garbage' },
        { completed: false, text: 'Build something with Aurelia 2' },
        { completed: false, text: 'Buy milk' },
        { completed: false, text: 'Joes birthday present for this Saturday' },
        { completed: false, text: 'Take out the garbage' }
    ];

    newTodo(event) {
        if (event.which === 13) {
            this.todos.unshift({ completed: false, text: this.todo });
            this.todo = '';
        }

        return true;
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}