import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: 'Testing',
  }
});

describe('Testing with asynchronous actions', () => {
  test('Must create a new note with startNewNote', async () => {
    await store.dispatch( startNewNote() );
  })
  
})
