import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem.js';

describe('Tests with GifGridItem Component', () => {  
  const title = 'Título de prueba';
  const url = 'https://localhost/ejemplo.png'
  const wrapper = shallow(<GifGridItem 
      title={title}
      url={ url } />);
  
  test('Must show <GifGridItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must display a paragraph with a title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Must display an image equal to the url and alt of the props', () => {
    const img = wrapper.find('img');
    const imgProps = img.props();
    // expect(img.prop('url').src.trim()).toBe(url);
    expect(imgProps.src.trim()).toBe(url);
    expect(imgProps.alt.trim()).toBe(title);
  });

  test('Must have animate__fadeIn', () => {
    const div = wrapper.find('div');
    const classNameDiv = div.prop('className');
    const isIncluded = classNameDiv.includes('animate__fadeIn');
    expect(isIncluded).toBe(true);
    // expect(isIncluded).not.toBe(true);
  });
});

