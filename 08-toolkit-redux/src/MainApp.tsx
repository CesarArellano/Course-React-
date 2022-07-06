import { Provider } from 'react-redux'
import { store } from './store/store'
import { PokemonApp } from './components/PokemonApp';

export const MainApp = () => {
  return (
    <Provider store={ store }>
      <PokemonApp />
    </Provider>
  )
}
