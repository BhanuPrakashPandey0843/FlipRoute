import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Hospital/Hospitalhero';
import PropertyCard from '../Components/Hospitalcard/Hospitalcard';
import Footer from '../Components/Footer/Footer'; 
const Hospital = () => {
  return (
    <div>
      
      <Navbar/>
      <Header />
      <PropertyCard/>
      <Footer/>
    </div>
  )
}

export default Hospital

