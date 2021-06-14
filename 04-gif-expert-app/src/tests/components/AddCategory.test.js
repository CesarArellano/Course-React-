import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Testing AddCategory Component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories } />);
  });
  
  test('Must display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value)
  });

  test('Must not be to post the info with submit.', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled()
  });

  test('Must call to setCategories and clear the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', { target: { value }});
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
    expect(input.prop('value')).toBe('');

  });
  
  
});
