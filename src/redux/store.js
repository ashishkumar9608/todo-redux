import { createStore } from 'redux';
import todoReducer from './reducer/ReducerTodo.js';

export const store = createStore(todoReducer);