import { useState } from 'react'
import './App.css'

import Navbar from '../navbar/navbar'
import HomePage from './Pages/Home'
import { Routes, Route, BrowserRouter } from 'react-router'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Package from '../pages/packages/packages'
import PackageCard from './PackageCard/PackageCard'
import CountryDiscription from './CountryDiscription/CountryDiscription'
import CountryDiscription_SriLanka from './CountryDiscription/Sri_lanka'
import Cart from './cart/cart'
import SuccessPage from './SuccessPage/SuccessPage'

// import SignUp from '../pages/SingUp/SingUp'

function App() {


  return (
    <>
      <Navbar />


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/PackageCard" element={<PackageCard />} />
          <Route path="/CountryDiscription" element={<CountryDiscription />} />
          <Route path="/CountryDiscription_SriLanka" element={<CountryDiscription_SriLanka />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SuccessPage" element={<SuccessPage orderDetails={[]} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
