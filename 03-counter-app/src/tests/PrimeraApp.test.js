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

  test('Must be show the subtitle sent by props', () => {
    const saludo = 'Hola, soy César';
    const subtitle = 'Soy un subtítulo';
    const wrapper = shallow(
      <PrimeraApp
        saludo={ saludo }
        subtitle={ subtitle } 
      />
    );

    const paragraph = wrapper.find('p').text();
    expect(paragraph).toBe(subtitle);
  });
  
});
