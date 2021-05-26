import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Tests in <PrimerApp/>', () => {
  test('Must show the message "Hola, Soy Gokú"', () => {
    const greetings = 'Hola, soy Gokú';
    const { getByText } = render(<PrimeraApp saludo={ greetings } />);
    expect( getByText(greetings) ).toBeInTheDocument();
  })
  
})
