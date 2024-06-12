export const ADD_TODO = 'Add TODO';
export const TOGGLE_TODO = 'Toggle TODO';
export const DELETE_TODO = 'Delete TODO';
export const EDIT_TODO = 'Edit TODO';

export const addToDo = (text) => ({ type: ADD_TODO, text });
export const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });
export const deleteToDo = (index) => ({ type: DELETE_TODO, index });
export const editToDo = (index, text) => ({ type: EDIT_TODO, index, text });
