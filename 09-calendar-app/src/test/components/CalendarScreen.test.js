import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import { CalendarScreen } from '../../components/calendar/CalendarScreen';

jest.mock('../../actions/auth', () => ({
  startLogin: jest.fn(),
  startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));


const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { 
  ui: {
    modalOpen: false,
  },
  calendar: {
    events: []
  },
  auth: {
    uid: '12345',
    name: 'Jorge',
    checking: false
  }
};

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <CalendarScreen />
  </Provider>
);


describe('Testing with <CalendarScreen />', () => {
  
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
