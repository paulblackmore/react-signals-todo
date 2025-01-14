import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
        className="border border-slate-300 p-2 mr-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-8 py-2 :hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
