import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    name: 'César'
  },
  notes: {
    notes: []
  }
}

const store = mockStore(initState);
store.dispatch = jest.fn();

describe('Testing in <Sidebar />', () => {
  
  const wrapper = mount(
    <Provider store={ store }>
      <Sidebar />
    </Provider>
  );

  test('should show the component correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the startLogout', () => {
    wrapper.find('.btn').simulate('click');
    expect( startLogout ).toHaveBeenCalled();
  })

  test('should call the startNewNote', () => {
    wrapper.find('.journal__new-entry').simulate('click');
    expect( startNewNote ).toHaveBeenCalled();
  })
  
  
})
