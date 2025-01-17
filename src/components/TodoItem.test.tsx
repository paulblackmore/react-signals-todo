import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoItem from './TodoItem';
import '@testing-library/jest-dom';

const todo = {
  id: 1,
  text: 'Test Todo',
  completed: false,
};
describe('TodoItem component', () => {
  it('renders todo item', () => {
    const { getByText } = render(<TodoItem todo={todo} />);

    expect(getByText(todo.text)).toBeDefined();
  });

  it('toggles todo item completion', async () => {
    render(<TodoItem todo={todo} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.change(checkbox, { target: { checked: true } });
    await waitFor(() => expect(checkbox).toBeChecked());
    expect(checkbox).toBeChecked();

    await waitFor(() => {
      const todoText = screen.getByText(todo.text);
      return todoText.classList.contains('line-through');
    });
    expect(screen.getByText(todo.text).classList.contains('line-through'));
  });

  it('deletes todo item', async () => {
    render(<TodoItem todo={todo} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    await waitFor(() => expect(todo.text).not.toContainEqual(todo));
  });
});
