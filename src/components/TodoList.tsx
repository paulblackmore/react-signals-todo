import TodoItem from './TodoItem';
import { todos } from '../signals/todos-signal';
import { Todo } from '../types';

const TodoList = () => {
  return (
    <ul>
      {todos.value.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
