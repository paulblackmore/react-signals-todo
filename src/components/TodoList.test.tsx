// src/components/TodoList.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../types';

describe('TodoList component', () => {
  it('renders todo list', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];

    const { getByText } = render(<TodoList todos={todos} />);
    expect(getByText('Todo 1')).toBeDefined();
    expect(getByText('Todo 2')).toBeDefined();
  });

  it('renders empty list when no todos are provided', () => {
    const { queryByText } = render(<TodoList todos={[]} />);
    expect(queryByText('Todo 1')).not.toBeInTheDocument();
  });

  it('renders todo items with correct key', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];

    const { getAllByRole } = render(<TodoList todos={todos} />);
    const todoItems = getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
    expect(todoItems[0]).toHaveTextContent('Todo 1');
    expect(todoItems[1]).toHaveTextContent('Todo 2');
  });
});
