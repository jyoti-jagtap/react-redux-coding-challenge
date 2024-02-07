import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SearchForm from './SearchForm';
// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});
describe('SearchForm Component', () => {
  test('SearchForm Rendering', async () => {
    render(<SearchForm />);

    const searchTextBox = screen.getByTestId('inputSearch');
    expect(searchTextBox).toBeInTheDocument();

    const searchBtn = screen.getByRole('button', { name: 'Go' });
    expect(searchBtn).toBeInTheDocument();
  });
});
