import { render, screen } from '@testing-library/react';
import App from './App';

import { fetchAPI } from "./lib/mocks";


window.fetchAPI = fetchAPI;

test('renders Bruchetta info', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bruchetta/i);
  expect(linkElement).toBeInTheDocument();
});
