import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem.js';

describe('Tests with GifGridItem Component', () => {  
  const title = 'Título de prueba';
  const url = 'https://localhost/ejemplo.png'
  test('Must show <GifGridItem /> correctly', () => {
    const wrapper = shallow(<GifGridItem 
        title={title}
        url={ url } />);
    expect(wrapper).toMatchSnapshot();
  });
});

