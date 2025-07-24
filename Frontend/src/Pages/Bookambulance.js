import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import AmbulanceHomeSection from '../Components/AmbulanceHomeSection/AmbulanceHomeSection';
import SpecialitySelection from '../Components/Vehicaloption/Vehical';
import AmbulanceList from '../Components/Ambulancelist/Ambulancelist'
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';

const Bookambulance = () => {
  return (
    <div>
     <Navbar/>
      <AmbulanceHomeSection/>
      <SpecialitySelection/>
      <AmbulanceList/>
      <Banner />
      <Footer/>
    </div>
  )
}

export default Bookambulance

