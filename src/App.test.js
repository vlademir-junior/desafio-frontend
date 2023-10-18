import { render, screen } from '@testing-library/react';
import App from './App';


test('Renderiza o App', () => {
  render(<App />);
  expect(screen.getByText('Útimas Notícias')).toBeInTheDocument();
})