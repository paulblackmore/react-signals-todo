import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('loads App component', () => {
    render(<App />);
  });

  // it('false to be false', () => {
  //   expect(false).toBe(false);
  // });
});
