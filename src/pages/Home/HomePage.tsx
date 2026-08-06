import React from 'react'
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import FreelancerWorld from './sections/FreelancerWorld';
import OurFreelancers from './sections/OurFreelancers';


const HomePage = () => {
  return (
    <div min-h-screen bg-white font-sans>
      <Navbar />
      <Hero />
      <Categories />
      <FreelancerWorld />
      <OurFreelancers />
      <Footer />

    </div>
  )
}

export default HomePage
