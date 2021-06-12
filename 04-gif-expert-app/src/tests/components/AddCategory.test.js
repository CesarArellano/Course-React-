import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Testing AddCategory Component', () => {
  const setCategories = () => {};  
  const wrapper = shallow(<AddCategory setCategories={ setCategories } />);
  test('Must display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
