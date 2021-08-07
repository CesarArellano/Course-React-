import '@testing-library/jest-dom';

import { mount } from "enzyme"
import { RegisterScreen } from "../../components/auth/RegisterScreen";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  ui: {
    msgError: null,
    loading: false
  }
};

const store = mockStore(initState);

const wrapper = mount(
  <Provider store={ store }>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);

describe('Testing in <RegisterScreen />', () => {
  
  test('should show the component correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  test('should show alert', () => {
    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email',
      }
    });
    
    wrapper.find('form').simulate('submit', { 
      preventDefault(){} 
    });

    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: 'Email is not valid'
    });
  })
  
  
})
