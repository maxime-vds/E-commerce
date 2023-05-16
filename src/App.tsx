import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from '../client/comps/navbar'
import LandingPage from '../client/pages/landingPage'
import UserCart from '../client/pages/usercart'
import Homepage from '../client/pages/Homepage/homepage'
import GoogleLoginPage from '../client/comps/googleLogin'
import React from 'react'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/test" element={<GoogleLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
