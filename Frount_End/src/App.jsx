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
import { AppProvider } from './AppContext'
import Packages2 from '../../Frount_End/pages/packages/packages2'
import AboutUs from './Pages/AboutUs'

// import SignUp from '../pages/SingUp/SingUp'

function App() {
  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1,
    //   name: "Explore Berlin to Copenhagen - Yatra Special",
    //   details: "Berlin (2N) → Copenhagen (2N)",
    //   price: 66490,
    //   quantity: 1,
    //   imgSrc: "/photos/adventure.jpg",
    // },
    // {
    //   id: 2,
    //   name: "London Special",
    //   details: "London (4N)",
    //   price: 140990,
    //   quantity: 1,
    //   imgSrc: "/photos/london.jpg",
    // },
  ]);

  const addToCart = (item) => {
    console.log(cartItems);
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id)
    if (index == -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const newitems = [...cartItems]
      newitems[index].quantity += 1;
      setCartItems(newitems);
    }

  }


  return (
    <>



      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/packages" element={<Package addToCart={addToCart} />} />
            <Route path="/PackageCard" element={<PackageCard />} />
            <Route path="/CountryDiscription" element={<CountryDiscription />} />
            <Route path="/CountryDiscription_SriLanka" element={<CountryDiscription_SriLanka />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/SuccessPage" element={<SuccessPage orderDetails={cartItems} />} />
            <Route path="/Packages2" element={<Package addToCart={addToCart} />} />
            <Route path="AboutUs" element={<AboutUs />} />

          </Routes>
        </AppProvider>ß
      </BrowserRouter>

    </>
  )
}

export default App
