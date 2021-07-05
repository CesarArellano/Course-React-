import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Testing TodoAdd Component', () => {

  const handleAddTodo = jest.fn();
  const wrapper = shallow(
    <TodoAdd 
      handleAddTodo={ handleAddTodo }
    />
  );

  test('Should must correclty', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test("Shouldn't call handleAddTodo", () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Should call handleAddTodo function', () => {
    const value = 'Learn React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    // expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  
  });
  
})
