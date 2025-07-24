import React from 'react';
import Navbar from './Components/Navbar/Navbar';

import Documentation from './Components/Documentation/Documentation';
 
import Footer from './Components/Footer/Footer'; 
function App() {
  return (
    <div className="App">
      {/* Navbar component */}
   
      <Navbar/>
      <Documentation/>
      <Footer/>
      
    </div>
  );
}

export default App;
