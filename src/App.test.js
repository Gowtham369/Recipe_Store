//Write tests for the app here
import React from 'react';

import { render,screen } from '@testing-library/react';
import App from './App';

test('Add Ingredients and Search', () => {
 render(<App />);
 const linkElement = screen.getByPlaceholderText(/Add Ingredients and Search/i);
 expect(linkElement).toBeInTheDocument();
});
