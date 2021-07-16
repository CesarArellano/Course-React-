import { types } from "../types/types";

/*
  {
    uid: 'dasd23423asd',
    name: 'César'
  } 
*/

export const authReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      };
    case types.logout:
      return {};
    default:
      return state;
  }
}
