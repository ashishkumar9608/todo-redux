import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, toggleToDo } from '../redux/actions/ActionsTodo';
import { useState } from 'react';

export const TodoAdd = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addToDo(inputValue));
      setInputValue('');
    }
  };
  return (
    <div className='m-10 flex justify-center items-center'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="bg-transparent border font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-1 text-white"
      />



      <button type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
        onClick={handleAddTodo}>Add Task</button>
    </div>
  )
}
