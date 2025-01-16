import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { todos, completedTodoCount } from './signals/todos-signal';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header completedTodoCount={completedTodoCount.value} />
      <AddTodo />
      <TodoList todos={todos.value} />
    </div>
  );
};

export default App;
