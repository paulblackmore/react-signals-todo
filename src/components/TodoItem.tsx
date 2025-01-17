import { todos } from '../signals/todos-signal';
import { Todo } from '../types';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const toggleTodo = (id: number) => {
    todos.value = todos.value.map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo: Todo) => todo.id !== id);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="flex justify-between items-center w-full my-4">
      <label>
        <input
          data-testid="completed"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.text}
        </span>
      </label>
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
