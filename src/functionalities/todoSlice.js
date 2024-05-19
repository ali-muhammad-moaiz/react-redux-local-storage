import { createSlice, nanoid } from "@reduxjs/toolkit";

const initializeState = () => {
    var todosString = localStorage.getItem('todos');
    if(todosString)
        return JSON.parse(todosString);
    return [];
}

const initialState = {
    todos: initializeState()
}

export const todoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                identifier: nanoid(),
                note: action.payload
            }
            state.todos.push(todo);
            var todosString = localStorage.getItem('todos');
                if(todosString){
                    var todosList = JSON.parse(todosString);
                }else
                    todosList = [];
                todosList.push(todo)
                localStorage.setItem('todos', JSON.stringify(todosList));
        },
        removeTodo: (state, action) => {
            const identifier = action.payload;
            state.todos = state.todos.filter((todo) => todo.identifier !== identifier);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;