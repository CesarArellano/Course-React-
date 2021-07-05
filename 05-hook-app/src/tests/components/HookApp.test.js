import { shallow } from "enzyme";
import { HookApp } from "../../HookApp";

describe('Testing HookApp Component', () => {
  const wrapper = shallow(<HookApp />);
  
  test('Must show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})
