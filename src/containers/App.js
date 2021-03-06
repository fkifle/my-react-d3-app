import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import ThemedApp from './ThemedApp'
import Dashboard from './Dashboard'
import Ticker from './Ticker'
import Footer from '../components/styled/Footer'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemedApp>
      <Dashboard />
      <Ticker />
      <Footer>
        <a href='https://github.com/tibotiber/rd3' target='_blank'>
          View code on GitHub
        </a>
      </Footer>
    </ThemedApp>
  </Provider>
)

export default App
