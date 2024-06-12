import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo } from '../redux/actions/ActionsTodo';

const EditTodo = ({ index, currentText, onSave }) => {
  const [editValue, setEditValue] = useState(currentText);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editToDo(index, editValue));
    onSave();
  };

  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        placeholder="Edit task"
        className="bg-transparent  outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center  text-white mr-2"
      />
      <button onClick={handleSave} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center">Update</button>
    </div>
  );
};

export default EditTodo;
