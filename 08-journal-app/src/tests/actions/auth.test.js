import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {
  uid: '23123',
  displayName: 'César'
};

let store = mockStore(initState);

describe('Testing with Auth actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('Login and Logout must create respective action', async () => {
    // await store.dispatch( startLoginEmailPassword('raywayday@gmail.com', '12345678') );
    // const actions = store.getActions();
    // console.log(actions);

    const loginAction = login(initState.uid, initState.displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: initState
    });

    expect(logoutAction).toEqual({
      type: types.logout
    })

  })
  
})
