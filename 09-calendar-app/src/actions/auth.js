import Swal from 'sweetalert2';

import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = ( email, password ) => {
  return async ( dispatch ) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
    const decodedData = await resp.json();
    
    if( decodedData.ok ) {
      localStorage.setItem( 'token', decodedData.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( login({
        uid: decodedData.uid,
        name: decodedData.name,
      }));
    } else {
      Swal.fire('Error', decodedData.msg, 'error');
    }
  }
};

export const startRegister = ( email, password, name ) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth/new', { email, password, name }, 'POST');
    const decodedData = await resp.json();
    
    if( decodedData.ok ) {
      localStorage.setItem( 'token', decodedData.token );
      localStorage.setItem( 'token-init-date', new Date().getTime() );
      dispatch( login({
        uid: decodedData.uid,
        name: decodedData.name,
      }));
    } else {
      Swal.fire('Error', decodedData.msg, 'error');
    }
  }
};

const login = ( user ) => ({
  type: types.authLogin,
  payload: user,
});