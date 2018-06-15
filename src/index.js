import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore
} from 'redux'
import {
  Provider
} from 'react-redux'
import count from './reducer.js'
import App from './App.js'

let store = createStore(count)

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('container')
)