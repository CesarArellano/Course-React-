import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodoInterface } from '../../interfaces/todo_interface';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Array<TodoInterface>, void>({
      query: () => '/todos'
    }),
    getTodo: builder.query<TodoInterface, number>({
      query: (todoId) => `/todos/${ todoId }`
    }),
  })
})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;