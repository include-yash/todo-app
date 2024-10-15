import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center justify-center mt-8 gap-8">
      <input
        type="text"
        className="bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-lg py-2 px-4 w-full max-w-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add</span>
      </button>
    </form>
  );
}

export default AddTodo;
