import { shallow } from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing MultiCustomHook', () => {
  beforeEach( () => {
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
  });

  test('should show correctly', () => {
    
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show data', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'César',
        quote: 'Hello World!'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-3').text().trim()).toBe('Hello World!');
    expect(wrapper.find('footer').text().trim()).toBe('César');
  });
  
  
})
