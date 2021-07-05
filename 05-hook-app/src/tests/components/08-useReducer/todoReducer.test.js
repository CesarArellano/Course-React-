import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing in TodoReducer', () => {
  
  test('Should return default state', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
    console.log(state);
  });

  test('Should add todo to return new state', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn Testing with React',
      done: false
    };

    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo
    });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Should delete ToDo', () => {
    const state = todoReducer(demoTodos, {
      type: 'delete',
      payload: 1
    });
    expect(state.length).toBe(1);
  });

  test('Should toggle ToDo', () => {
    const state = todoReducer(demoTodos, {
      type: 'toggle',
      payload: 1
    });
    expect(state[0].done).toBe(true);
  });
  
});
