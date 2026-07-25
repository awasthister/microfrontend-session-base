import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

test('increments the counter when the button is clicked', async () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  const counterDisplay = getByText('0');
  await act(async () => {
    fireEvent.click(incrementButton);
  });
  expect(counterDisplay.textContent).toBe('1');
});
