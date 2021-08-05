import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { LoginScreen } from "../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState = {
  ui: {
    loading: false
  }
};

let store = mockStore(initState);



describe('Testing with LoginScreen', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('Must show the component correctly ', () => {
    const wrapper = mount(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    
  })
  
})
