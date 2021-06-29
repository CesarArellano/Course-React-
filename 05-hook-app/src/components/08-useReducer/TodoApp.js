import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Learn React',
  done: false
}];

export const TodoApp = () => {

  const [ todos ] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div>
      <h1>TodoApp ({ todos.length }) </h1>
      <hr/>
      <div className="row">
        <div className="col-7">
        <ul className="list-group list-group-flush">
          {
            todos.map( (todo, i) => {
              return ( <li
                key={ todo.id }
                className="list-group-item"
              >
                <p className="text-center complete">{i + 1}. { todo.desc }</p>
                <button
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
              );
            })
          }
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr/>
          <form>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder='Learn ...'
              autoComplete='off'
            />
            <div className="d-grid mt-2">
              <button className="btn btn-outline-primary" type="button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
