import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing with TodoList', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList 
      todos={demoTodos}
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  );
  test('should show correctly', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    // console.log(wrapper.find('TodoListItem').at(0).props());
    // console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  })
  
})
