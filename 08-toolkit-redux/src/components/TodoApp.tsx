import { useState } from 'react';
import { useGetTodoQuery } from '../store/apis'

// export const TodoApp = () => {
//   const { data: todos = [], isLoading } = useGetTodosQuery();
  
//   return (
//     <>
//       <h1>Todos - RTK - Query</h1>
//       <hr />
//       <h4>isLoading { isLoading ? 'True' : 'False' }</h4>
//       <pre>...</pre>
//       <ul>
//         {
//           todos.map( ({ id, title, completed }) => (
//             <li key={ id }>
//               <p><strong> { completed ? 'DONE' : 'PENDING' }</strong></p>
//               { title }
//             </li>
//           ))
//         }
//       </ul>
//       <button>
//         New Todo
//       </button>
//     </>
//   )
// }


export const TodoApp = () => {
  const [todoId, setTodoId] = useState<number>(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  
  const nextTodo = () => {
    setTodoId(todoId + 1 );
  }
  
  const prevTodo = () => {
    if( todoId == 1 ) return;
    setTodoId(todoId - 1 );
  }

  return (
    <>
      <h1>Todos - RTK - Query</h1>
      <hr />
      <h4>isLoading { isLoading ? 'True' : 'False' }</h4>
      <pre>
        { JSON.stringify( todo ) }
      </pre>
      <button
        onClick={ prevTodo }
      >
        Prev Todo
      </button>
      <button
        onClick={ nextTodo }
      >
        Next Todo
      </button>
    </>
  )
}

