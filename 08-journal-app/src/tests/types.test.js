import { types } from "../types/types";

describe('Testing types.js', () => {
  test('types object should be the same as the original', () => {
    const originalTypes = {
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
      uiStartLoading: '[UI] Start Loading',
      uiFinishLoading: '[UI] Finish Loading',
    
      notesAddNew: '[Notes] New Note',
      notesActive: '[Notes] Set Active Note',
      notesLoad: '[Notes] Load Notes',
      notesUpdated: '[Notes] Update Note Saved',
      notesFileUrl: '[Notes] Updated Image Url',
      notesDelete: '[Notes] Delete Note',
      notesLogoutCleaning: '[Notes] Logout Cleaning'
    };
    
    expect(types).toEqual(originalTypes);
  })
  
})
