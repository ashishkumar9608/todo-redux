import { createStore } from 'redux';


const ADD_TODO = 'Add TODO';
const TOGGLE_TODO = 'Toggle TODO';
const DELETE_TODO = 'Delete TODO';
const EDIT_TODO = 'Edit TODO';


export const addToDo = (text) => ({ type: ADD_TODO, text });
export const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });
export const deleteToDo = (index) => ({ type: DELETE_TODO, index });
export const editToDo = (index, text) => ({ type: EDIT_TODO, index, text });


const initialState = {
    todos: []
};


function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === action.index ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== action.index)
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === action.index ? { ...todo, text: action.text } : todo
                )
            };
        default:
            return state;
    }
}


export const store = createStore(todoReducer);


