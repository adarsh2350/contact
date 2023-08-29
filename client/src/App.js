import React from 'react'
import './style/css/style.css'
import './style/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Error from './components/Error'


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default App
