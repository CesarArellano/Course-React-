import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [ { description }, handleInputChange, reset ] = useForm({ description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(description.trim().length <= 1) return;
    
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <div>
      <h4>Add TODO</h4>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder='Learn ...'
          autoComplete='off'
          onChange={ handleInputChange }
          value={ description }
        />
        <div className="d-grid mt-2">
          <button className="btn btn-outline-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
