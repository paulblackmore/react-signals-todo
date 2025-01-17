import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders completed todo count', () => {
    const completedTodoCount = 3;
    const { getByText } = render(
      <Header completedTodoCount={completedTodoCount} />,
    );
    expect(getByText(`Completed Todos (${completedTodoCount})`)).toBeDefined();
  });

  it('renders links', () => {
    const { getAllByRole } = render(<Header completedTodoCount={0} />);
    const links = getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveProperty('href', `${process.env.VITE_BASE_URL}#!`);
    expect(links[1]).toHaveProperty('href', `${process.env.VITE_BASE_URL}#!`);
  });
});
