import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/ActionsTodo.js';


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

export default todoReducer;