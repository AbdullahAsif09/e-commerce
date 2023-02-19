import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Category from '../../components/Categories/Category'
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}

export default Home