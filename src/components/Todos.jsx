// src/components/Todos.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Your Tasks</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-700 border border-gray-600 rounded-lg hover:shadow transition-shadow duration-200"
          >
            <span className="text-lg font-medium text-gray-200">
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-600 text-white font-semibold py-1 px-3 rounded transition-colors duration-200 hover:bg-green-600"
            >
              <span className="material-icons">Done</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
