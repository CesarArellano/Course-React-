import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Testing AddCategory Component', () => {
  const setCategories = () => {};  
  const wrapper = shallow(<AddCategory setCategories={ setCategories } />);
  
  test('Must display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value)
  });
  
});
