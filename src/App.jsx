import { useState } from 'react'
import './App.css'

import Navbar from '../navbar/navbar'
import HomePage from './Pages/Home'
import {Routes,Route,BrowserRouter} from 'react-router'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'

// import SignUp from '../pages/SingUp/SingUp'

function App() {


  return (
    <>
      <Navbar />
     
      
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <HomePage/>} />
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>

 
      </Routes>
  </BrowserRouter>

     </>
  )
}

export default App
