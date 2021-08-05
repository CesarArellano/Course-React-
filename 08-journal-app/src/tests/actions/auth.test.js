import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
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

  });

  test('Must make the startLogout', async () => {
    await store.dispatch( startLogout() );
    const actions = store.getActions();
    
    expect( actions[0] ).toEqual({
      type: types.logout
    });

    expect( actions[1] ).toEqual({
      type: types.notesLogoutCleaning
    });
  });

  test('Must make the startLogin', async () => {
    await store.dispatch( startLoginEmailPassword('raywayday@gmail.com', '12345678') );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.uiStartLoading
    });

    expect( actions[1] ).toEqual({
      type: types.login,
      payload: {
        uid: 'C3Oou4JepGUVc7BrOy0OrSZLRps1',
        displayName: null
      }
    });

    expect( actions[2] ).toEqual({
      type: types.uiFinishLoading
    });
  }); 
  
})
