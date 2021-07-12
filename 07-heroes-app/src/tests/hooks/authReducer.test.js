import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

const state = {
  name: 'César',
  logged: false
}

describe('Testing authReducer', () => {
  test('Should return default state ', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Should authenticate and set the username', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'César'
      }
    }
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'César' });
  });
  
  test('Should delete username and logged in false', () => {
    const action = {
      type: types.logout,
    }
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: false });
  });
})
