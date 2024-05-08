import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginPopUp/LoginForm';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [400, 700],
          },
          {
            font: 'Open Sans',
            weights: [400, 700],
          },
        ]}
      />
      {showLogin? <LoginForm  setShowLogin={setShowLogin}/> : <></>}
      <div className='myapp'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes> 
          < Route path='/' element={<Home/>}/>
          < Route path='/Cart' element={<Cart/>}/>
          < Route path='/order' element={<PlaceOrder/>}/>
        </Routes> 
      </div>
      <Footer/>
    </>
  );
};

export default App;
