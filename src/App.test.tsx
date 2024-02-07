import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});
test('renders the landing page', async () => {
  render(<App />);
});
