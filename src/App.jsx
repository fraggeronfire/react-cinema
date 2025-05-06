import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
import AppMain from './AppMain'

function App() {
  return (
    <Provider store={store}>
      <AppMain />
   </Provider>
  )
}

export default App
