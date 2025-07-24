import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Contacthero from '../Components/Contacthero/Contacthero';
import ContactForm from '../Components/Contact/Contact'; 
import Footer from '../Components/Footer/Footer'; 

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Contacthero/>
      <ContactForm/> 
      <Footer/>
    </div>
  );
}

export default Contact;
