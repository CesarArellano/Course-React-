import { ResetTvOutlined } from '@mui/icons-material';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = (email: string, password: string) => {
  return async( dispatch: Dispatch<AnyAction>) => {
    dispatch( checkingCredentials('') );
  }
}

export const startGoogleSignIn = () => {
  return async( dispatch: Dispatch<AnyAction>) => {
    dispatch( checkingCredentials('') );
    const result = await signInWithGoogle();
    if( ! result.ok ) return dispatch(logout( result.errorMessage ));
    delete result.ok; 
    dispatch(login( result ))
  }
}