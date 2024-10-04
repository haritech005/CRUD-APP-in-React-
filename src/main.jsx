import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice.jsx'


const store = configureStore({
  reducer:{
  users: UserSlice 
  }
})


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
