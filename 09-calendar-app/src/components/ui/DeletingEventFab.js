import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventStartDelete } from '../../actions/events';

export const DeletingEventFab = () => {
  const dispatch = useDispatch();
  const { actionEvent } = useSelector(state => state.calendar)

  const handleDeleteEvent = () => {
    dispatch( eventStartDelete( actionEvent ) );
  }

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={ handleDeleteEvent }
    >
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  )
}
