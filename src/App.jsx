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
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Explore Berlin to Copenhagen - Yatra Special",
      details: "Berlin (2N) → Copenhagen (2N)",
      price: 66490,
      quantity: 1,
      imgSrc: "/photos/adventure.jpg",
    },
    {
      id: 2,
      name: "London Special",
      details: "London (4N)",
      price: 140990,
      quantity: 1,
      imgSrc: "/photos/london.jpg",
    },
  ]);


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
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/SuccessPage" element={<SuccessPage orderDetails={cartItems} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
