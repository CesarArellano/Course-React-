import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials } from './';

export const checkingAuthentication = (email: string, password: string) => {
  return async( dispatch: Dispatch<AnyAction>) => {
    dispatch( checkingCredentials('') )
  }
}

export const startGoogleSignIn = () => {
  return async( dispatch: Dispatch<AnyAction>) => {
    dispatch( checkingCredentials('') )
  }
}