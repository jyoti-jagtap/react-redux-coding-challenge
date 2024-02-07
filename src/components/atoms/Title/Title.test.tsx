import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Title from './Title';
// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});
describe('Title Component', () => {
  test('Title Rendering', () => {
    render(<Title>{'Home'} </Title>);
    const text = screen.getByTestId('title');
    expect(text).toBeInTheDocument();
  });
});
