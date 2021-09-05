import React, { useState } from 'react';
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

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false)
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
        <form className="container">
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <input className="form-control" placeholder="Fecha inicio" />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <input className="form-control" placeholder="Fecha inicio" />
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
