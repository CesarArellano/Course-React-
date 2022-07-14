import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewNote, setActiveNote, setNotes, setSaving, NoteProps } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';

export const startNewNote = () => {
  return async( dispatch: Dispatch<AnyAction>, getState: any) => {
    dispatch( setSaving() );
    const { uid } = getState().auth;
    
    const newNote = {
      title: 'Title Test',
      body: 'Boyd Test',
      date: new Date().getTime(),

    }

    console.log({ uid });
    
    const newDoc = doc( collection(FirebaseDB, `${ uid }/journal/notes`) )
    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDocResp });

    dispatch( addNewNote( newNote ) );
    dispatch( setActiveNote( newNote ) );
  }
}

export const startLoadingNotes = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    const { uid } = getState().auth;
    if( !uid ) throw new Error('El UID del usuario no existe');
    const notes = await loadNotes(uid);
    dispatch( setNotes( notes ))
  }
}

export const startSetActiveNote = (note: NoteProps) => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    dispatch( setActiveNote( note ) );
  }
}