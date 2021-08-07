/**
 * @jest-environment node
*/
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn( () => {
    return 'https://sitio_de_pruebas/images.png';
  })
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: 'Testing',
  },
  notes: {
    active: {
      id: 'B8P9NGPg6KdajPl3F6DE'
    }
  }
};

let store = mockStore(initState);

describe('Testing with asynchronous actions', () => {

  beforeEach(() => {
    store = mockStore(initState);
  });

  test('Must create a new note with startNewNote', async () => {
    await store.dispatch( startNewNote() );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });

    expect( actions[1] ).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    
    const { id } = actions[0].payload;
    await db.doc(`Testing/journal/notes/${id}`).delete();
    
  })

  test('startLoadingNotes must load the notes', async () => {
    await store.dispatch( startLoadingNotes('Testing') );
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    })
    
    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    }

    expect(actions[0].payload[0]).toMatchObject( expected );
  });

  test('startSaveNote must update the note', async() => {
    
    const note = {
      id: 'B8P9NGPg6KdajPl3F6DE',
      title: 'Título',
      body: 'Cuerpo'
    };

    await store.dispatch( startSaveNote( note ));
    
    const actions = store.getActions();

    expect( actions[0].type ).toBe( types.notesUpdated );

    const docRef = await db.doc(`Testing/journal/notes/${ note.id }`).get();
    expect( docRef.data().title ).toBe(note.title);
  })
  
  test('startUploading must update the url of entry', async () => {
    const file = [];
    await store.dispatch( startUploading(file) );
    const actions = store.getActions();
    console.log( actions );
    const docRef = await db.doc('Testing/journal/notes/B8P9NGPg6KdajPl3F6DE').get();
    expect(docRef.data().url).toBe('https://sitio_de_pruebas/images.png');

  })
  
  
})
