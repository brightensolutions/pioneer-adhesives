import React from 'react';
import Specialized from '../Specialized/Specialized';
import Home_Products from '../Home_Products/Home_Products';
import Home_Contactus from '../Home_Contactus/Home_Contactus';

const Home = () => {
  return (
    <div>
     <Specialized/>
     <Home_Products/>
     <Home_Contactus/>
    </div>
  );
}

export default Home;
