import { render, screen } from '@testing-library/react';
import App from './App';

import { fetchAPI } from "./lib/mocks";

// const expectedTimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
window.fetchAPI = fetchAPI;

test('renders Bruchetta info', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bruchetta/i);
  expect(linkElement).toBeInTheDocument();
});
