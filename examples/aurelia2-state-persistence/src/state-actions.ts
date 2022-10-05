export function todosHandler(currentState, action, todoEventOrTextOrIndex, todoIndex) {
    if ( action === 'newTodo' ) {
        return { ...currentState, todos: [{ completed: false, text: todoEventOrTextOrIndex }, ...currentState.todos] };
    }

    if ( action === 'deleteTodo' ) {
        return { ...currentState, todos: currentState.todos.filter((todo, index) => index !== todoEventOrTextOrIndex) };
    }

    if (action === 'todoCheck') {
        const checked = todoEventOrTextOrIndex.target.checked;

        return { ...currentState, todos: currentState.todos.map((todo, index) => index === todoIndex ? { ...todo, completed: checked } : todo) };
    }

    return currentState;
}