import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp  from "../../GifExpertApp";

describe('Testing <GifExpertApp> Component', () => {
  test('Must display correctly this component.', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Must show a categories list', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });  
  
});
