import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const eventStartAddNew = ( event ) => {
  return async ( dispatch, getState ) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchWithToken('events', event, 'POST');
      const decodedData = await resp.json();
      console.log(decodedData);
      if( decodedData.ok ) {
        event.id = decodedData.event.id;
        event.user = {
          _id: uid,
          name
        };
        dispatch( eventAddNew( event ) );
      }

    } catch (error) {
      console.log(error);
    }
  };
}

const eventAddNew = ( event ) => ({
  type: types.eventAddNew,
  payload: event
});

export const eventSetActive = ( event ) => ({
  type: types.eventSetActive,
  payload: event
});

export const eventClearActiveEvent = ( ) => ({ type: types.eventClearActiveEvent });

export const eventUpdate = ( event ) => ({
  type: types.eventUpdate,
  payload: event
});

export const eventDelete = ( event ) => ({
  type: types.eventDelete,
  payload: event
});


export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithToken('events');
      const decodedData = await resp.json();

      if( decodedData.ok ) {
        dispatch( eventsLoaded( decodedData.events) );
      }
    } catch (error) {
      console.log(error);
    }

  };
}

const eventsLoaded = (events) => ({
  type: types.eventsLoaded,
  payload: events,
});