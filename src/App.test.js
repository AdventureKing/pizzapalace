import { render, screen } from '@testing-library/react';
import App from './App';

import {useToken} from './context/useToken';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Please Log In/ig);
  expect(linkElement).toBeInTheDocument();
});
