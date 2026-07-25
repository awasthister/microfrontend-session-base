import { render, waitFor } from '@testing-library/react';
import AsyncMessage from './AsyncMessage';

test('displays the message after a delay', async () => {
  const { getByText } = render(<AsyncMessage />);
  await waitFor(() => {
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});