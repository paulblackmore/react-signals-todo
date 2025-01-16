import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
