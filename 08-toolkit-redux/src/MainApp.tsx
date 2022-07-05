import { Provider } from 'react-redux'
import { store } from './store/store'
import { CounterComponent } from './components/CounterComponent';

export const MainApp = () => {
  return (
    <Provider store={ store }>
      <CounterComponent />
    </Provider>
  )
}
