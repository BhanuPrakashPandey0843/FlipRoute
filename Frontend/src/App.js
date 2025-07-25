import React from 'react';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Bookambulance from './Pages/Bookambulance';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Hospital from './Pages/Optimizer';
import Analytics from './Pages/Analytics';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      {/* <div className="mx-4 sm:mx-[10%]"> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/bookambulance" element={<Bookambulance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/optimizer" element={<Hospital />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
