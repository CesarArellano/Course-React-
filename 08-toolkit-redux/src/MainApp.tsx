import { Provider } from 'react-redux'
import { store } from './store/store'
import { PokemonApp } from './components/PokemonApp';
import { TodoApp } from './components/TodoApp';

export const MainApp = () => {
  return (
    <Provider store={ store }>
      <TodoApp />
    </Provider>
  )
}
