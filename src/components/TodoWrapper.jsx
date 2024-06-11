import React from 'react';
import { Todolist } from './Todolist';
import { TodoAdd } from './TodoAdd';

export const TodoWrapper = () => {
 

  return (
    <div className="min-h-screen min-w-full bg-black text-white flex justify-center items-center">
      <div className='border-white rounded-lg border-2 m-10'>
        <div className='flex justify-center items-center mt-5 text-3xl font-bold'>TODO APP</div>

        <TodoAdd />

        <Todolist />
      </div>

    </div>
  );
};
