/*This is the landing page of the website made by Bhanu Prakash Pandey*/
import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Counter from '../Components/Counter/Counter';
import Howwork from '../Components/Howwork/Howwork';
import Aboutus from '../Components/Aboutus/Aboutus';
import Ouroffer from '../Components/Ouroffer/Ouroffer';
import Review from '../Components/Review/Review';
import Faq from '../Components/Faq/Faq';
import Gift from '../Components/Donation/Gift';  
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Counter/>
      <Howwork/>
      <Aboutus/>
      <Ouroffer/>
      <Review/>
      <Faq/>
      <Gift/>
      <Footer/>
    </div>
  )
}

export default Home


 
