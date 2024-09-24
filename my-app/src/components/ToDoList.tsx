import { RootState } from '@/state/store';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../state/todoList/todoListSlice';

const TodoList: React.FC = () => {
  const [input, setInput] = useState('');

  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();


  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          className='border border-gray-300 p-2'
          onChange={(e) => setInput(e.target.value as string)}
        />
        <button className='ml-2' onClick={() => dispatch(addTodo(input))}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo}
            <span onClick={() => dispatch(removeTodo(todo))} className="ml-2 cursor-pointer">x</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;