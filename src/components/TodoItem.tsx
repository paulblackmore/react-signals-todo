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
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
