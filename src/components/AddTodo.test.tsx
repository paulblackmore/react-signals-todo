// src/components/AddTodo.test.tsx
import {
  render,
  fireEvent,
  waitFor,
  getByPlaceholderText,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AddTodo from './AddTodo';
import { todos } from '../signals/todos-signal';

describe('AddTodo component', () => {
  it('renders add todo form', () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    expect(getByPlaceholderText('Add a new todo')).toBeDefined();
  });

  it('adds todo when form is submitted', async () => {
    const { getByText, getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    await waitFor(() => expect(todos.value).toHaveLength(1));
    expect(todos.value[0].text).toBe('New Todo');
  });

  it('displays error when todo text is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    await waitFor(() =>
      expect(getByText('Todo text is required')).toBeDefined(),
    );
  });

  it('clears input field after adding todo', async () => {
    const { getByText, getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    await waitFor(() => expect(input).toHaveValue(''));
  });
});
