import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="flex justify-between items-center w-full my-4">
      <div className="flex gap-2 item-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.text}
        </span>
      </div>
      <button
        className="bg-transparent text-red-700 font-semibold hover:text-red-500 py-1 px-2 border border-red-500 hover:border-red-500 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
