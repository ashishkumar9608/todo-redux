import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, toggleToDo, editToDo } from './redux/store';
import EditTodo from './EditTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todolist = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addToDo(inputValue));
      setInputValue('');
    }
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleToDo(index));
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteToDo(index));
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
  };

  return (
    <div>
        {todos.map((todo, index) => (
          <div key={index} className="bg-transparent border font-medium rounded-lg text-xl px-5 py-2.5 text-center ml-10 mr-10 mt-5 mb-5 text-white">
            {editIndex === index ? (
              <EditTodo
                index={index}
                currentText={todo.text}
                onSave={handleSaveEdit}
              />
            ) : (
              <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                <input type="checkbox" onClick={() => handleToggleTodo(index)} className='mr-2 w-4 h-4'/>   
                <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                <FontAwesomeIcon icon={faPenToSquare} className='mr-2' onClick={() => setEditIndex(index)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteTodo(index)} />
                
                    </div>
                
                </div>
            )}
            
          </div>
        ))}
      </div>
  );
};
