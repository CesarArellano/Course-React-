import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Tests with CounterApp Component', () => {
  test('Must show <CounterApp /> correctly', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Must show the counter sent by props', () => {
    const counter = 100;
    const wrapper = shallow(
      <CounterApp
        value={ counter }
      />
    );

    const counterText = wrapper.find('h2').text();
    expect(counterText).toBe(counter.toString());
  });
  
})
