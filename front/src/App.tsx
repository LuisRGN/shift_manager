import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import Turns from './views/Turns/Turns'
import Contact from './views/Contact/Contact'
import Error from './views/Error/Error'
import About from './views/About/About'
import Profile from './views/Profile/Profile'
import { ProfileModify } from './views/Profile/ProfileModify'

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/ProfileModify' element={<ProfileModify/>}/>
        <Route path='/Turns' element={<Turns/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
