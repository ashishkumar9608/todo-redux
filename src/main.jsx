import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoWrapper } from './components/TodoWrapper.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoWrapper />
    </Provider>
  </React.StrictMode>,
)
