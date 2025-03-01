import React from 'react'
import Home from '../../pages/home/home'
import Offers from '../../pages/offers/offers'
import WhyBookTour from '../../pages/home/WhyBookTour'
import TourLocationPage from '../../pages/home/TourLocationPage'
import Footer from '../../pages/home/Footer'


function HomePage
() {
  return (
    <>
     <Home/>
      <Offers/>
      <WhyBookTour/>
      <TourLocationPage />
      <Footer/>
    </>

    
  )
}

export default HomePage
