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
    }
  }
};

const login = ( user ) => ({
  type: types.authLogin,
  payload: user,
});