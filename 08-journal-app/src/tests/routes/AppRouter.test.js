import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import '@testing-library/jest-dom';

import { firebase } from '../../firebase/firebase-config';

import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';

import { login } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
  login: jest.fn(),
}));

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    msgError: null,
    loading: false
  },
  notes: {
    active: {
        id: 'ABC',
    },
    notes: []
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Testing in <AppRouter />', () => {

  test('Should call the login function if I am authenticated', async () => {
    // Handle the useEffect hook
    let user;

    await act( async () => {
      const userCredentials = await firebase.auth().signInWithEmailAndPassword('raywayday@gmail.com', '12345678');
      
      user = userCredentials.user;

      const wrapper = mount(
        <Provider store={ store }>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });
    
    expect( login ).toHaveBeenCalledWith('C3Oou4JepGUVc7BrOy0OrSZLRps1', null);
  })
  
})
