import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    name: 'César'
  },
  notes: {
    active: {
      id: 'ABC'
    },
    notes: []
  }
}

const store = mockStore(initState);
store.dispatch = jest.fn();

describe('Testing in <NoteScreen />', () => {
  
  const wrapper = mount(
    <Provider store={ store }>
      <NoteScreen />
    </Provider>
  );

  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call active note', () => {
    
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        name: 'title',
        value: 'New value'
      }
    });

    expect(activeNote).toHaveBeenCalled();
  })
  
  
  
})
