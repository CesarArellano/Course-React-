import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing TodoListItem Component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem 
      todo={ demoTodos[0] }
      i={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  );
  
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should call handleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should show text correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('should have the complete class', () => {
    const todo = demoTodos[0];
    todo.done = true;
    
    const wrapper = shallow(
      <TodoListItem 
        todo={ todo }
        i={ 0 }
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }
      />
    );

    const p = wrapper.find('p');
    expect(p.hasClass('complete')).toBe(true);
  });
  
})
