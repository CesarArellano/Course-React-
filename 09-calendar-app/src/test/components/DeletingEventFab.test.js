import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme'

import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { DeletingEventFab } from '../../components/ui/DeletingEventFab';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = { };

const store = mockStore( initState );

const wrapper = mount(
  <Provider store={ store }>
    <DeletingEventFab />
  </Provider>
);

describe('Testing with DeletingEventFab Component', () => {

  test('It should show correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
});
