import React from 'react';
import { customer1, customer2, customer3 } from '../../Images/Images';

const Home_Customers = () => {
  return (
    <div>
        <div className='lg:ma-w-[1440px] m-auto'>
            <div className='flex flex-wrap justify-center gap-[15px]'>
                  <img src={customer1} className='sm:max-h-[150px] sm:min-h-[150px] bg-customBlue p-[1px]' />
                  <img src={customer2} className='sm:max-h-[150px] sm:min-h-[150px] bg-customBlue p-[1px]' />
                  <img src={customer3} className='sm:max-h-[150px] sm:min-h-[150px] bg-customBlue p-[1px]' />
            </div>
         </div>
    </div>
  );
}

export default Home_Customers;
