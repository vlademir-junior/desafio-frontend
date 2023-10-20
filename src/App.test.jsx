import { render, screen } from '@testing-library/react';
import App from './App';
import Home from '../src/components/Home';
import List from './components/List';
import Favorites from './components/Favorites';

test('Renderiza o App', () => {
  render(<App />);
  expect(screen.getByText('Bem-vindo ao Hub de notícias do IBGE')).toBeInTheDocument();
});

test('Renderiza o componente Header e Footer dentro do App', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument(); 
})

test('Renderiza o componente Home', () => {
  render(<Home />);
});

test('Renderiza os destaques no carrossel', () => {
  render(<Home />);
  const carouselHighlights = screen.getByText('Destaques da página:');
  expect(carouselHighlights).toBeInTheDocument();
});

test('Renderiza as últimas Notícias', () => {
  render(<Home />);
  const recentNews = screen.getByText('Últimas notícias:');
  expect(recentNews).toBeInTheDocument();
});

test('Renderiza o componente de paginação', () => {
  render(<Home />);
  const pagination = screen.getByTestId('pagination');
  expect(pagination).toBeInTheDocument();
});

test('Renderiza a o componente List', () => {
  render(<List />);
  const list = screen.getByTestId('list');
  expect(list).toBeInTheDocument();
})

test('Renderiza o componente Favorites', () => {
  render(<Favorites />);
  const favorites = screen.getByTestId('favorites');
  expect(favorites).toBeInTheDocument();
})
