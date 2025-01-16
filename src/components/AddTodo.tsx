import { useState } from 'react';
import { z } from 'zod';
import { todos } from '../signals/todos-signal';

const todoTextSchema = z.string().min(1, 'Todo text is required');

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const addTodo = (text: string) => {
    todos.value = [...todos.value, { id: Date.now(), text, completed: false }];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = todoTextSchema.parse(inputValue.trim());
      addTodo(result);
      setInputValue('');
      setError(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.issues[0].message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
        <div className="flex w-full">
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
            className={`border ${error ? 'border-red-500' : 'border-slate-300'} p-2 mr-2 w-full`}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-8 py-2 :hover:bg-green-600"
        >
          Add
        </button>
      </form>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

export default AddTodo;
