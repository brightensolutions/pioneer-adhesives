import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import react-intersection-observer
import { about_us_bg } from '../../Images/Images';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../Function/Function';

const Home_Aboutus = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className='bg-[#fff0f5] lg:py-[100px] start_img relative'>
      <div className='lg:max-w-[1440px] m-auto'>
        <div className='flex lg:col-row lg:gap-[20px]'>
          <motion.div
            className='lg:w-[50%] bg-cover bg-no-repeat bg-center relative'
            style={{ backgroundImage: `url(${about_us_bg})`, backgroundSize: "cover" }}
            ref={aboutRef}
            initial={{ scale: 1.1 }}
            animate={{ scale: aboutInView ? 1 : 1.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className='absolute right-0 bottom-0 since_div'>
              <h1 className='lg:text-[35px] font-oxanium text-white'>SINCE</h1>
              <p className='text-center font-poppins lg:text-[20px] text-white'>2003</p>
            </div>
          </motion.div>

          <motion.div
            className='lg:w-[50%]'
            ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionTitle
              title="About Us"
              textColor="text-white"
              bgColor="#2569ac"
            />

            <div className='lg:mt-[50px]'>
              <motion.p
                className='font-raleway lg:text-[19px] mb-[15px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                We would like to introduce ourselves as Authorized distributers for some of world renowned brands / Products for providing
                Maintenance Solutions and Services to the major Industries on the South Gujarat region.
              </motion.p>

              <motion.p
                className='font-raleway lg:text-[19px] mb-[15px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                The solution we provide are mainly into Adhesives, Cold welding Compound, Specialty Lubricants, Welding Electrodes, Fire
                Barrier Products, Gland Pickings, Safety related System, Products and High-end Electrical Insulation Tapes etc.
              </motion.p>

              <motion.p
                className='font-raleway lg:text-[19px] mb-[15px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                At Pioneer Adhesives we also undertake Specialized Application job for critical Areas i.e Installation of Fire barrier system,
                Strengthening Pipeline, Revamping of Pump Casings and Impellers using proven technology with minimum down time.
              </motion.p>

              <motion.p
                className='font-raleway lg:text-[19px] mb-[15px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                Our team consists of NACE Qualified Coating Inspector, qualified workforce, modernized machineries and our experience has
                placed us ahead. Apart from this our quality policy, our health safety and environment policy, commitment to deliver on
                schedule has helped us to establish ourselves as synonyms to best service provider.
              </motion.p>

              <motion.p
                className='font-raleway lg:text-[19px] mb-[15px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                We Thank our Valued Customers for placing Immense Faith in us which Grew our Company Fourfold and reached Milestone to
                be <br /> <b>48 Crore Company in year 2023-24</b>
              </motion.p>
            </div>

            <motion.div
              className='inline-block'
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to='/about'
                className='bg-customRed text-white font-oxanium py-[15px] px-[50px] rounded-[5px] flex gap-[10px] items-center'
              >
                More About <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home_Aboutus;
