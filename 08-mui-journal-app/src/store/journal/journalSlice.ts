import { createSlice } from '@reduxjs/toolkit';

export interface NoteProps {
  id?: string;
  title?: string;
  body?: string;
  date?: number,
  imageUrls?: Array<string>
}
interface JournalStateProps {
  isSaving: boolean;
  messageSaved: string;
  notes: Array<NoteProps>;
  activeNote: NoteProps | null;
}

interface AddNewNoteActionProps {
  payload: NoteProps
}

interface SetNotesActionProps {
  payload: Array<NoteProps>
}


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // activeNote: {
    //   id: 'QWERTY',
    //   title: '',
    //   body: '',
    //   date: 1234567,
    //   imageUrls: [], 
    // }
  } as JournalStateProps,
  reducers: {
    addNewNote: ( state, { payload }: AddNewNoteActionProps ) => {
      state.notes.push( payload );
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }: AddNewNoteActionProps) => {
      state.activeNote = payload;
    },
    setNotes: (state, { payload }: SetNotesActionProps) => {
      state.notes = payload
    },
    setSaving: (state ) => {
      state.isSaving = true;
    },
    updateNote: (state, action) => {
      
    },
    deleteNoteById: (state, action) => {
      
    },
  }
});


export const {
  addNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;