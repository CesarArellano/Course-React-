import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const iniState = { };

let store = mockStore( iniState );

Storage.prototype.setItem = jest.fn();

describe('Testing with auth actions', () => {

  beforeEach(() => {
    store =  mockStore( iniState );
    jest.clearAllMocks();
  });

  test('startLogin correctly', async () => {
    await store.dispatch( startLogin('cesarmauricio.arellano@gmail.com', '123456') );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.authLogin,
      payload: {
        uid: expect.any(String),
        name: expect.any(String),
      }
    });

    expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
    expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));
    
    const token = localStorage.setItem.mock.calls[0][1];
    console.log( token );
  })
  
})
