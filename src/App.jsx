import { useState } from 'react'
import Login from './screens/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

function App() {

  return (
    <>
    <ToastContainer/>
    <Login/>
    </>
  )
}

export default App
