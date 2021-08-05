import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Testing authReducer', () => {
  
  test('Must make login', () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        uid: '1234',
        displayName: 'César Arellano'
      }
    }
    const state = authReducer(initialState, action);

    expect(state).toEqual({
      uid: '1234',
      name: 'César Arellano'
    });

  });

  test('Must make log out', () => {
    const initialState = {};
    const action = {
      type: types.logout,
    }
    const state = authReducer(initialState, action);

    expect(state).toEqual({});
    
  });

  test('Must return the same state', () => {
    const initialState = {
      uid: '1234',
      name: 'César Arellano'
    };

    const action = {
      type: 'asdasd',
    }

    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
    
  });
  
});
