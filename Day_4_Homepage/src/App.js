import React from 'react'
import LoginSignup from './login/Login'
import Header from './headerfooter/Header'
import Footer from './headerfooter/Footer'
import HomePage from './homepage/HomePage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Loanform from './loanform/Loanform'
import About from './about/About'
import Service from './service/Service'
import Contact from './contact/Contact'
import Landingpage from './landingpage/Landingpage'

export default function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/loanform' element={<Loanform/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  )
}
