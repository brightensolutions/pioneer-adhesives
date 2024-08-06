import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { customer1, customer10, customer11, customer12, customer13, customer14, customer2, customer3, customer4, customer6, customer7, customer8, customer9 } from '../../Images/Images';
import { Title_page } from '../Function/Function';

const customers = [
  customer1, customer3, customer4, customer6, customer7, customer8, customer9, customer10, customer11, customer12, customer13, customer14
];

const Home_Customers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div>
      <div>
        <Title_page title="Customer" />
      </div>
      <div className='lg:max-w-[1440px] m-auto'>
        <motion.div 
          className='flex flex-wrap justify-center gap-[15px] py-[50px]' 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {customers.map((customer, index) => (
            <motion.img
              key={index}
              src={customer}
              className='bg-customBlue p-[1px] sm:w-[180px] w-[137px]'
              variants={imageVariants}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home_Customers;
