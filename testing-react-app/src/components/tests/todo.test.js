import { render, screen, cleanup } from '@testing-library/react';
import Todo from "../todo";

test('should render non-completed todo component', () => {
  const todo = { id: 1, title: 'Wash Dishes', completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Wash Dishes');
})

test('should render non-completed todo component', () => {
  const todo = { id: 2, title: 'Wash car', completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Wash car');
})