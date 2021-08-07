import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { activeNote } from '../../../actions/notes';
import { JournalEntry } from '../../../components/journal/JournalEntry';

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
    notes: []
  }
}

const store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
  id: 10,
  date: 0,
  title: 'Hello',
  body: 'World',
  url: 'https://ejemplo.com'
}

const wrapper = mount(
  <Provider store={ store }>
    <JournalEntry { ...note } />
  </Provider>
);

describe('Testing in <JournalEntry />', () => {
  
  

  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should active note', () => {
    wrapper.find('.journal__entry').prop('onClick')();
    delete note.id;
    expect( store.dispatch ).toHaveBeenCalledWith(note);
  });

})
