import { createSlice } from '@reduxjs/toolkit';

export interface AuthReducerProps {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  } as AuthReducerProps,
  reducers: {
    login: ( state, action) => {
      
    },
    logout: ( state, action) => {
      
    },
    checkingCredentials: ( state, action) => {
      state.status = 'checking';
    },
  }
});


export const { login, logout, checkingCredentials } = authSlice.actions;