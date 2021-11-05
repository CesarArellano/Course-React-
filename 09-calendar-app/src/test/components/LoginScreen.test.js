import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import { LoginScreen } from '../../components/auth/LoginScreen';
import { startLogin } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
  startLogin: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { };

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <LoginScreen />
  </Provider>
);

describe('Testing with <LoginScreen />', () => {
  test('should show correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('should call dispatch to login', () => {
    
    wrapper.find('input[name="lEmail"]').simulate('change', {
      target: {
        name: 'lEmail',
        value: 'raywayday@gmail.com',
      }
    });

    wrapper.find('input[name="lPassword"]').simulate('change', {
      target: {
        name: 'lPassword',
        value: '123456',
      }
    });

    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });

    expect( startLogin ).toHaveBeenCalledWith('raywayday@gmail.com', '123456');
  });
});
