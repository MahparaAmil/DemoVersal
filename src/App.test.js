import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

});

test('switch text when i click on it', () => {
  render(<App />);
 const websiteLink = screen.getByText(/learn EPIECH/i);
 expect(websiteLink).toHaveAttribute('href', 'https://my.epitech.eu/');  
});