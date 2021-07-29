import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote =  () => {
  return async ( dispatch, getState ) => {
    const { auth:{ uid }} = getState();
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    
    const docRef = await db.collection(`${ uid }/journal/notes`).add( newNote );
    dispatch( activeNote(docRef.id, newNote) );
  }
}

export const activeNote = ( id, note ) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const startLoadingNotes = ( uid ) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNote(notes));
  };
};

export const setNote = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
});


export const startSaveNote = ( note ) => {
  return async (dispatch, getState) => {
    const { auth:{ uid } } = getState();

    if( !note.url ) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    try {
      await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
      dispatch( refreshNote(note.id, noteToFirestore) );
      Swal.fire('Saved', note.title, 'success');
    } catch(e) {
      Swal.fire('Error', e, 'error');
    }
    
  };
}

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
});

export const startUploading = ( file ) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
  }
}
