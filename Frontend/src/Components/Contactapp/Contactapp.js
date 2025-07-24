import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Contacthero from './Components/Contacthero/Contacthero';
import Contact from './Components/Contact/Contact';

 
import Footer from './Components/Footer/Footer'; 
function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar/>
      <Contacthero/>
      <Contact/>

      
      <Footer/>
      
    </div>
  );
}

export default App;
