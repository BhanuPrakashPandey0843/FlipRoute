import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Bookambulance from './Pages/Bookambulance';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Hospital from './Pages/Hospital';
import Madeby from './Pages/Madeby';
import Track from './Pages/Track';

const App = () => {
  return (
    <Router>
      {/* <div className="mx-4 sm:mx-[10%]"> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/bookambulance" element={<Bookambulance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/madeby" element={<Madeby />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
