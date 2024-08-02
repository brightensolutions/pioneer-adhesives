import React from 'react';
import Specialized from '../Specialized/Specialized';
import Home_Aboutus from '../Home_Aboutus/Home_Aboutus';
import Home_Partners from '../Home_Partners/Home_Partners';

const Home = () => {
  return (
    <div>
     <Specialized/>
     <Home_Partners/>
     {/* <Home_Aboutus/> */}
    </div>
  );
}

export default Home;
