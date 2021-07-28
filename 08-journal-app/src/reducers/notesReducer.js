import { types } from "../types/types";

/*
  {
    notes: [],
    active: null,
    active: {
      id: '2SsdfsdfsdfJSNsd',
      title: ''
      body: '',
      imageUrl: '',
      date: 1234234234
    }
  } 
*/

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.ad:
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