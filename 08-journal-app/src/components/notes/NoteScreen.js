import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  const { active:note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title } = formValues;

  const activeId = useRef( note.id );
  
  useEffect(() => {
    if( note.id !== activeId.current ) {
      reset(note);
      activeId.current = note.id;
    }
  }, [reset, note]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={ title }
          onChange={ handleInputChange }
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={ body }
          onChange={ handleInputChange }
        ></textarea>

        {
          (note.url) 
          && (
            <div className="notes__image">
              <img 
                src="https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"
                alt="tree"
              />
            </div>
          )
        }
      </div>
    </div>
  )
}
