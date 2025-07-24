/*This is the landing page of the website made by Bhanu Prakash Pandey*/


import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Hospital/Hospitalhero';
import PropertyCard from './Components/Hospitalcard/Hospitalcard';
  import Footer from './Components/Footer/Footer'; 
function App() {
  return (
    <div className="App">
      {/* Navbar component */}
     
      <Navbar/>
      <Header />
      <PropertyCard/>
      <Footer/>
      
    </div>
  );
}

export default App;
