import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCards from './RecipeCards';

describe('RecipeCards', () => {
  const searchResult = {
    recipeName: 'Spaghetti Bolognese',
    cuisine: 'Italian',
    diet: 'Vegetarian',
  };

  it('renders the recipe name', () => {
    render(<RecipeCards searchResult={searchResult} />);
    expect(screen.getByText(/Spaghetti Bolognese/i)).toBeInTheDocument();
  });

  it('toggles the recipe details on click', () => {
    render(<RecipeCards searchResult={searchResult} />);
    const button = screen.getByRole('button', { name: /View Recipe/i });
    fireEvent.click(button);
    expect(screen.getByText(/Ingredients/i)).toBeInTheDocument();
  });

  it('displays the cuisine and diet when details are closed', () => {
    render(<RecipeCards searchResult={searchResult} />);
    expect(screen.getByText(/cuisine:/i)).toBeInTheDocument();
    expect(screen.getByText(/Vegetarian/i)).toBeInTheDocument();
  });
});