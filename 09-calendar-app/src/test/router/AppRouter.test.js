import '@testing-library/jest-dom';

import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { AppRouter } from '../../routers/AppRouter';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { 
  auth: {
    checking: true
  }
};

const store = mockStore( initState );

describe('Testing in <AppRouter />', () => {
  test('It should show waiting message', () => {
    const wrapper = mount(
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    );
    
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.utils__spinner').exists() ).toBe(true);
  })
});
