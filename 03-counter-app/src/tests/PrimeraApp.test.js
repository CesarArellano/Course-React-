import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe('Tests in <PrimerApp/>', () => {
  // test('Must show the message "Hola, Soy Gokú"', () => {
  //   const greetings = 'Hola, soy Gokú';
  //   const { getByText } = render(<PrimeraApp saludo={ greetings } />);
  //   expect( getByText(greetings) ).toBeInTheDocument();
  // })

  test('Must be show <PrimerApp /> correctly', () => {
    const saludo = 'Hola, soy César';
    const wrapper = shallow(<PrimeraApp saludo={ saludo } />)
    expect(wrapper).toMatchSnapshot();
  });
});
