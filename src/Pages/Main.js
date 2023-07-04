import React from 'react';


import Header from '../components/Header';
import Home from '../Pages/Home';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import '../Css/main.css'



const Main = () => {
  return (
    <>
     
      <Header />

        <Home/>
        <Footer/>
        <Cart/>
       
        
      
    </>
  );
};

export default Main ;