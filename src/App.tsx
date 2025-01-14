import React, { useEffect, useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos') as string)
      : [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col md:flex-row justify-between items-center mb-4 bg-slate-200 p-10 ">
        <h1 className="text-xl font-bold">Completed Todos ({todos.length})</h1>
        <nav className="flex gap-2">
          <a href="#!">Link1</a>
          <a href="#!">Link2</a>
        </nav>
      </header>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
