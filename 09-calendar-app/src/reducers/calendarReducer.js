import { types } from "../types/types";
import moment from "moment";

const initialState = {
  events: [
    {
      title: 'Register Social Service',
      start: moment().toDate(),
      end: moment().add(2, 'days').toDate(),
      bgcolor: '#fafafa',
      notes: 'Comprar el pastel',
      user: {
        _id: '123',
        name: 'César Arellano'
      }
    }
  ],
  actionEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload ]
      }
    
    case types.eventSetActive:
      return {
        ...state,
        actionEvent: action.payload
      }
    default:
      return state;
  }
};