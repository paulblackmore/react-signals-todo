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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
