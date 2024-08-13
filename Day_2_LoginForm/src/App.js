import React from 'react'
import Login from './components/login/Login'
import Register from './components/login/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
     </BrowserRouter>
  )
}
