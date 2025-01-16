import TodoItem from './TodoItem';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
