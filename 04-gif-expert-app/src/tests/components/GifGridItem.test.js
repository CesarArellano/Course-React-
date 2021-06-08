import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem.js';

describe('Tests with GifGridItem Component', () => {  
  test('Must show <GifGridItem /> correctly', () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});

