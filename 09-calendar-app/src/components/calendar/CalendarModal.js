import React, { useState } from 'react';

import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState( now.toDate() )
  const [dateEnd, setDateEnd] = useState( nowPlus1.toDate() )
  
  const [isOpen, setIsOpen] = useState(true);
  
  const [formValues, setFormValues] = useState({
    title: 'Evento',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
  })

  const { title, notes } = formValues;

  const handleInputChange = ({ target }) =>{
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleStartDateChange = (e) => {
    setDateStart( e );
    setFormValues({
      ...formValues,
      start: e
    })
  }

  const handleEndDateChange = (e) => {
    setDateEnd( e );
    setFormValues({
      ...formValues,
      end: e
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div>
      <Modal
        isOpen={ isOpen }
        //onAfterOpen={ afterOpenModal }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS= { 200 }
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1 className="modalTitle"> Nuevo evento </h1>
        <hr />
        <form 
          className="container"
          onSubmit={ handleOnSubmit }
        >
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              onChange={ handleStartDateChange }
              className="form-control"
              maxDate={ dateEnd }
              value={ dateStart }
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              onChange={ handleEndDateChange }
              className="form-control"
              minDate={ dateStart }
              value={ dateEnd }
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Título y notas</label>
            <input 
              type="text" 
              className="form-control"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={ title }
              onChange={ handleInputChange }
              required={ true }
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group">
            <textarea 
              type="text" 
              className="form-control"
              placeholder="Notas"
              rows="4"
              name="notes"
              value={ notes }
              onChange={ handleInputChange }
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary btn-block"
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  )
}
